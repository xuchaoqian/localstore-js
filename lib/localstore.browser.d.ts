import { ILocalstore } from "./ilocalstore";
export declare class LocalStoreageImpl implements ILocalstore {
    get(key: string): Promise<string | undefined>;
    set(key: string, value: string): Promise<void>;
    remove(key: string): Promise<void>;
}
export declare class IDBKeyValueImpl implements ILocalstore {
    get(key: string): Promise<string | undefined>;
    set(key: string, value: string): Promise<void>;
    remove(key: string): Promise<void>;
}
export declare function getImplInBrowser(): unknown;
export declare const LocalStore: ReturnType<typeof getImplInBrowser>;
