export declare class Facebook {
    static login(permissions: string[]): void;
    static logout(): void;
    static getLoginStatus(): void;
    static getAccessToken(): void;
    static showDialog(options: any): void;
    static api(requestPath: string, permissions: string[]): void;
    static logEvent(name: string, params: any, valueToSum: number): void;
    static logPurchase(value: number, currency: string): void;
    static appInvite(options: any): void;
}
