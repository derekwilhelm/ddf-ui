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
export declare const ddPoint: {
    latitude: string;
    longitude: string;
};
export declare const ddModel: {
    shape: string;
    point: {
        latitude: string;
        longitude: string;
    };
    circle: {
        point: {
            latitude: string;
            longitude: string;
        };
        radius: string;
        units: string;
    };
    line: {
        list: never[];
    };
    polygon: {
        list: never[];
    };
    boundingbox: {
        north: string;
        south: string;
        east: string;
        west: string;
    };
};