import { LocalStorage } from "node-localstorage";
import { ILocalstore } from "./ilocalstore";

const localStorage = new LocalStorage("./data/localstore.json");

export class Localstore implements ILocalstore {
  get(key: string): Promise<string | undefined> {
    return Promise.resolve(localStorage.getItem(key) ?? undefined);
  }
  set(key: string, value: string): Promise<void> {
    return Promise.resolve(localStorage.setItem(key, value));
  }
  remove(key: string): Promise<void> {
    return Promise.resolve(localStorage.removeItem(key));
  }
}
