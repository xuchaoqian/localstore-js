import { ILocalstore } from "./ilocalstore";
export declare class Localstore implements ILocalstore {
    get(key: string): Promise<string | undefined>;
    set(key: string, value: string): Promise<void>;
    remove(key: string): Promise<void>;
}
