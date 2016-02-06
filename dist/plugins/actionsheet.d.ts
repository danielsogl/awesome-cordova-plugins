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
     * @returns {Promise} returns a promise that resolves with a number indicating
     *   which button was pressed (1 for first, 2 for second).
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
     * @param {options}
     */
    static hide(options: any): Promise<any>;
}
