import { __assign, __read } from "tslib";
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
import * as React from 'react';
import { useState, useEffect } from 'react';
import MapSettingsPresentation from './presentation';
import { hot } from 'react-hot-loader';
import withListenTo from '../../react-component/backbone-container';
import Paper from '@mui/material/Paper';
import { useMenuState } from '../../component/menu-state/menu-state';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import user from '../../component/singletons/user-instance';
import SettingsIcon from '@mui/icons-material/Settings';
import { Elevations } from '../../component/theme/theme';
import { getDefaultCoordinateFormat } from '../../component/visualization/settings-helpers';
import { LayoutContext } from '../../component/golden-layout/visual-settings.provider';
var MapSettings = function (props) {
    var _a = React.useContext(LayoutContext), getValue = _a.getValue, setValue = _a.setValue, onStateChanged = _a.onStateChanged, visualTitle = _a.visualTitle;
    var _b = __read(useState('degrees'), 2), coordFormat = _b[0], setCoordFormat = _b[1];
    var _c = __read(useState(user.get('user').get('preferences').get('autoPan')), 2), autoPan = _c[0], setAutoPan = _c[1];
    var menuState = useMenuState();
    var coordFormatKey = "".concat(visualTitle, "-coordFormat");
    useEffect(function () {
        setCoordFormat(getValue(coordFormatKey, getDefaultCoordinateFormat()));
        onStateChanged(function () {
            var coordFormat = getValue(coordFormatKey, getDefaultCoordinateFormat());
            setCoordFormat(coordFormat);
        });
        props.listenTo(user.get('user').get('preferences'), 'change:autoPan', function (_prefs, value) { return setAutoPan(value); });
    }, []);
    var updateCoordFormat = function (coordinateFormat) {
        setValue(coordFormatKey, coordinateFormat);
    };
    var updateAutoPan = function (_event, autoPan) {
        var preferences = user.get('user').get('preferences').set({ autoPan: autoPan });
        preferences.savePreferences();
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Button, __assign({ size: "small", "data-id": "settings-button" }, menuState.MuiButtonProps),
            React.createElement(SettingsIcon, null)),
        React.createElement(Popover, __assign({}, menuState.MuiPopoverProps),
            React.createElement(Paper, { elevation: Elevations.overlays },
                React.createElement(MapSettingsPresentation, { coordFormat: coordFormat, updateCoordFormat: updateCoordFormat, autoPan: autoPan, updateAutoPan: updateAutoPan })))));
};
export default hot(module)(withListenTo(MapSettings));
//# sourceMappingURL=container.js.map