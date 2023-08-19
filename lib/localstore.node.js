"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Localstore = void 0;
const node_localstorage_1 = require("node-localstorage");
const localStorage = new node_localstorage_1.LocalStorage("./data/localstore.json");
class Localstore {
    get(key) {
        return Promise.resolve(localStorage.getItem(key) ?? undefined);
    }
    set(key, value) {
        return Promise.resolve(localStorage.setItem(key, value));
    }
    remove(key) {
        return Promise.resolve(localStorage.removeItem(key));
    }
}
exports.Localstore = Localstore;
//# sourceMappingURL=localstore.node.js.map