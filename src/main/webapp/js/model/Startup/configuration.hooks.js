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
import { SnapshotManager } from './snapshot';
import { StartupDataStore } from './startup';
import { useSyncExternalStore } from 'react';
var subscribe = function (callback) {
    var cancelSubscription = StartupDataStore.Configuration.subscribeTo({
        subscribableThing: 'configuration-update',
        callback: callback,
    });
    return function () {
        cancelSubscription();
    };
};
var snapshotManager = new SnapshotManager(function () {
    return StartupDataStore.Configuration;
}, subscribe);
export var useConfiguration = function () {
    var configuration = useSyncExternalStore(snapshotManager.subscribe, snapshotManager.getSnapshot);
    return configuration;
};
//# sourceMappingURL=configuration.hooks.js.map