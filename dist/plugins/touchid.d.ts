export declare class TouchID {
    isAvailable(): void;
    static verifyFingerprint(message: string): void;
    static verifyFingerprintWithCustomPasswordFallback(message: string): void;
    static verifyFingerprintWithCustomPasswordFallbackAndEnterPasswordLabel(message: string, enterPasswordLabel: string): void;
}
