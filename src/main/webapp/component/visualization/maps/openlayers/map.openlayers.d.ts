import Openlayers from 'openlayers';
import { ClusterType } from '../react/geometries';
import { LazyQueryResult } from '../../../../js/model/LazyQueryResult/LazyQueryResult';
export default function (insertionElement: any, _selectionInterface: any, _notificationEl: any, _componentElement: any, mapModel: any, mapLayers: any): {
    onMouseTrackingForGeoDrag({ moveFrom, down, move, up, }: {
        moveFrom?: any;
        down: any;
        move: any;
        up: any;
    }): void;
    clearMouseTrackingForGeoDrag(): void;
    onLeftClickMapAPI(callback: any): void;
    clearLeftClickMapAPI(): void;
    onLeftClick(callback: any): void;
    onRightClick(callback: any): void;
    clearRightClick(): void;
    onDoubleClick(): void;
    clearDoubleClick(): void;
    onMouseTrackingForPopup(downCallback: any, moveCallback: any, upCallback: any): void;
    onMouseMove(callback: any): void;
    clearMouseMove(): void;
    timeoutIds: number[];
    onCameraMoveStart(callback: any): void;
    offCameraMoveStart(callback: any): void;
    onCameraMoveEnd(callback: any): void;
    offCameraMoveEnd(callback: any): void;
    doPanZoom(coords: [number, number][]): void;
    panZoomOut(_opts: any, next: any): void;
    panToResults(results: any): void;
    panToExtent(coords: [number, number][]): void;
    getExtentOfIds(ids: string[]): Openlayers.Extent;
    zoomToIds({ ids, duration }: {
        ids: string[];
        duration?: number | undefined;
    }): void;
    panToShapesExtent({ duration }?: {
        duration?: number | undefined;
    }): void;
    getShapes(): any;
    zoomToExtent(coords: [number, number][], opts?: {}): void;
    zoomToBoundingBox({ north, east, south, west }: any): void;
    limit(value: any, min: any, max: any): number;
    getBoundingBox(): {
        north: number;
        east: number;
        south: number;
        west: number;
    };
    overlayImage(model: LazyQueryResult): void;
    removeOverlay(metacardId: any): void;
    removeAllOverlays(): void;
    getCartographicCenterOfClusterInDegrees(cluster: ClusterType): Openlayers.Coordinate;
    getWindowLocationsOfResults(results: any): any;
    calculateDistanceBetweenPositions(coords: any): number;
    addRulerPoint(coordinates: any, markerLabel: any): Openlayers.layer.Vector;
    removeRulerPoint(pointLayer: any): void;
    rulerLine: Openlayers.layer.Vector | null;
    addRulerLine(point: any): Openlayers.layer.Vector;
    setRulerLine(point: any): void;
    removeRulerLine(): void;
    addPointWithText(point: any, options: any): Openlayers.layer.Vector;
    addPoint(point: any, options: any): Openlayers.layer.Vector;
    addLabel(point: any, options: any): Openlayers.layer.Vector;
    addLine(line: any, options: any): Openlayers.layer.Vector;
    addPolygon(): void;
    updateCluster(geometry: any, options: any): void;
    updateGeometry(geometry: any, options: any): void;
    setGeometryStyle(geometry: any, options: any, feature: any): void;
    createTextStyle(feature: any, resolution: any): Openlayers.style.Text;
    getText(feature: any, resolution: any): any;
    trunc(str: any, n: any): any;
    hideGeometry(geometry: any): void;
    showGeometry(geometry: any): void;
    removeGeometry(geometry: any): void;
    showMultiLineShape(locationModel: any): Openlayers.layer.Vector | undefined;
    createVectorLayer(locationModel: any, feature: any): Openlayers.layer.Vector;
    destroyShape(cid: any): void;
    destroyShapes(): void;
    getMap(): any;
    zoomIn(): void;
    zoomOut(): void;
    destroy(): void;
};