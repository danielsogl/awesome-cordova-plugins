export declare class BLE {
    static scan(services: any[], seconds: number): void;
    static startScan(services: any[]): void;
    static stopScan(): void;
    static connect(deviceId: string): void;
    static disconnect(deviceId: string): void;
    static read(deviceId: string, serviceUUID: string, characteristicUUID: string): void;
    static write(deviceId: string, serviceUUID: string, characteristicUUID: string, value: ArrayBuffer): void;
    static writeWithoutResponse(deviceId: string, serviceUUID: string, characteristicUUID: string, value: ArrayBuffer): void;
}
