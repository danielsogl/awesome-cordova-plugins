export declare class StatusBar {
    static overlaysWebView(doOverlay: boolean): void;
    static styleDefault(): void;
    static styleLightContent(): void;
    static styleBlackTranslucent(): void;
    static styleBlackOpaque(): void;
    static backgroundColorByName(colorName: string): void;
    static backgroundColorByHexString(hexString: string): void;
    static hide(): void;
    static show(): void;
}
