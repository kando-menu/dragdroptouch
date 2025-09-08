type DDT = {
    setDragImage: (img: HTMLElement, offsetX: number, offsetY: number) => void;
};
/**
 * Object used to hold the data that is being dragged during drag and drop operations.
 *
 * It may hold one or more data items of different types. For more information about
 * drag and drop operations and data transfer objects, see
 * <a href="https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer">HTML Drag and Drop API</a>.
 *
 * This object is created automatically by the @see:DragDropTouch and is
 * accessible through the @see:dataTransfer property of all drag events.
 */
export declare class DragDTO {
    protected _dropEffect: any;
    private _effectAllowed;
    private _data;
    private _dragDropTouch;
    constructor(dragDropTouch: DDT);
    get dropEffect(): any;
    set dropEffect(value: any);
    get effectAllowed(): any;
    set effectAllowed(value: any);
    get types(): string[];
    /**
     * ...docs go here...
     * @param type
     */
    clearData(type: string): void;
    /**
     * ...docs go here...
     * @param type
     * @returns
     */
    getData(type: string): any;
    /**
     * ...docs go here...
     * @param type
     * @param value
     */
    setData(type: string, value: any): void;
    /**
     * ...docs go here...
     * @param img
     * @param offsetX
     * @param offsetY
     */
    setDragImage(img: Element, offsetX: number, offsetY: number): void;
}
export {};
