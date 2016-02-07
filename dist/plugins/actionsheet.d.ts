/**
 * The ActionSheet plugin shows a native list of options the user can choose from.
 */
export declare class ActionSheet {
    /**
     * Show the ActionSheet.
     * @param {options}
     * Available options:
     *   buttonLabels: string[]
     *   title: string
     *   androidTheme (Android only): number 1-5
     *   androidEnableCancelButton (Android only): boolean, default false
     *   winphoneEnableCancelButton (WP only): boolean, default false
     *   addCancelButtonWithLabel: string
     *   addDestructiveButtonWithLabel: string
     *   position: [x, y] (iPad pass in [x, y] coords of popover)
     * @returns {Promise} returns a promise that resolves with the index of the
     *   button pressed (1 based, so 1, 2, 3, etc.)
     */
    static show(options?: {
        buttonLabels: string[];
        title?: string;
        androidTheme?: number;
        androidEnableCancelButton?: boolean;
        winphoneEnableCancelButton?: boolean;
        addCancelButtonWithLabel?: string;
        addDestructiveButtonWithLabel?: string;
        position?: number[];
    }): Promise<any>;
    /**
     * Hide the ActionSheet.
     */
    static hide(): Promise<any>;
}
