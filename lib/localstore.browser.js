"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Localstore = exports.getImplInBrowser = exports.IDBKeyValueImpl = exports.LocalStoreageImpl = void 0;
const idb_keyval_1 = require("idb-keyval");
class LocalStoreageImpl {
    get(key) {
        const value = localStorage.getItem(key);
        return Promise.resolve(value !== null ? value : undefined);
    }
    set(key, value) {
        return Promise.resolve(localStorage.setItem(key, value));
    }
    remove(key) {
        return Promise.resolve(localStorage.removeItem(key));
    }
}
exports.LocalStoreageImpl = LocalStoreageImpl;
class IDBKeyValueImpl {
    get(key) {
        return (0, idb_keyval_1.get)(key);
    }
    set(key, value) {
        return (0, idb_keyval_1.set)(key, value);
    }
    remove(key) {
        return (0, idb_keyval_1.del)(key);
    }
}
exports.IDBKeyValueImpl = IDBKeyValueImpl;
function getImplInBrowser() {
    return typeof localStorage !== "undefined"
        ? LocalStoreageImpl
        : IDBKeyValueImpl;
}
exports.getImplInBrowser = getImplInBrowser;
exports.Localstore = getImplInBrowser();
//# sourceMappingURL=localstore.browser.js.map