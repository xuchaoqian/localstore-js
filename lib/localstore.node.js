"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Localstore = void 0;
const node_localstorage_1 = require("node-localstorage");
const globalWithLocalStorage = globalThis;
if (typeof globalWithLocalStorage.localStorage === "undefined") {
    globalWithLocalStorage.localStorage = new node_localstorage_1.LocalStorage("./data/localstore");
}
class Localstore {
    get(key) {
        return Promise.resolve(globalWithLocalStorage.localStorage.getItem(key) ?? undefined);
    }
    set(key, value) {
        return Promise.resolve(globalWithLocalStorage.localStorage.setItem(key, value));
    }
    remove(key) {
        return Promise.resolve(globalWithLocalStorage.localStorage.removeItem(key));
    }
}
exports.Localstore = Localstore;
//# sourceMappingURL=localstore.node.js.map