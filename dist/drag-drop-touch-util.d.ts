type Mutable<T extends {
    [x: string]: any;
}, K extends string> = {
    -readonly [P in keyof T | K]: T[P];
};
/**
 * ...docs go here...
 * @param e
 * @param page
 * @returns
 */
export declare function pointFrom(e: TouchEvent, page?: boolean): {
    x: number;
    y: number;
};
/**
 * ...docs go here...
 * @param dst
 * @param src
 * @param props
 */
export declare function copyProps(dst: Record<string, any>, src: Record<string, any>, props: Array<string>): void;
/**
 * ...docs go here...
 * @param type
 * @param srcEvent
 * @param target
 * @returns
 */
export declare function newForwardableEvent(type: keyof GlobalEventHandlersEventMap, srcEvent: TouchEvent, target: HTMLElement): Mutable<MouseEvent, "button" | "which" | "buttons"> & {
    readonly defaultPrevented: boolean;
};
/**
 * ...docs go here...
 * @param src
 * @param dst
 */
export declare function copyStyle(src: HTMLElement, dst: HTMLElement): void;
export {};
