/**
 * Copyright (c) Codice Foundation
 *
 * This is free software: you can redistribute it and/or modify it under the terms of the GNU Lesser
 * General Public License as published by the Free Software Foundation, either version 3 of the
 * License, or any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without
 * even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details. A copy of the GNU Lesser General Public License
 * is distributed along with this program and can be found at
 * <http://www.gnu.org/licenses/lgpl.html>.
 *
 **/
import Backbone from 'backbone';
import 'backbone-associations';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'urij... Remove this comment to see the full error message
import URITemplate from 'urijs/src/URITemplate';
var DECODED_QUERY_ID_TEMPLATE = '{&queryId}';
var ENCODED_QUERY_ID_TEMPLATE = encodeURIComponent(DECODED_QUERY_ID_TEMPLATE);
export default Backbone.AssociatedModel.extend({
    defaults: function () {
        return {
            url: undefined,
            title: undefined,
            description: undefined,
            id: undefined,
            queryId: undefined,
            displayName: undefined,
        };
    },
    getExportType: function () {
        return this.get('displayName');
    },
    initialize: function () {
        this.handleQueryId();
        this.listenTo(this, 'change:queryId', this.handleQueryId);
    },
    handleQueryId: function () {
        if (this.get('queryId') !== undefined) {
            // This is the story:
            // An action provider can include {&queryId} as a template in the url if it needs the queryId
            // The backend is encoding {&queryId} because it has to.
            // The entire url was being decoded and that caused issues because it decoded things that were supposed to be remain encoded
            // The entire url couldn't be encoded because it was returning a useless url
            // An attempt was made at decoding and encoding the individual parts of both the path and query params
            // This caused an issue because it was encoding the transform ids, some of which include a ':'
            // So that's why the string replace "decoding" is currently being done
            var url = this.get('url');
            var replacedUrl = url.replace(ENCODED_QUERY_ID_TEMPLATE, DECODED_QUERY_ID_TEMPLATE);
            var replacedUrlTemplate = new URITemplate(replacedUrl);
            var expandedUrl = replacedUrlTemplate.expand({
                queryId: this.get('queryId'),
            });
            this.set('url', expandedUrl);
        }
    },
});
//# sourceMappingURL=MetacardAction.js.map