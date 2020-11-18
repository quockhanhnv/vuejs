import Vue from 'vue';

export default class Auth {
    constructor(configs = {}) {
        this.prefixToken = 'access_token';
        this._user = null;
    };

    get getToken() {
        return this.getLocalStorage(this.prefixToken);
    };

    get getUser() {
        return this._user;
    };

    setToken(value) {
        this.setLocalStorage(this.prefixToken, value);

        return value;
    };

    setUser(user) {
        Vue.use({
            install: () => {
                Vue.prototype.$auth = {
                    user,
                    logout: () => this.removeToken()
                };
            }
        });
        this._user = user;
    };

    removeToken(key) {
        this.removeLocalStorage(this.prefixToken);
    };

    encodeValue (val) {
        if (typeof val === 'string') {
            return val;
        }
        return JSON.stringify(val);
    };

    setLocalStorage(_key, value) {
        try {
            localStorage.setItem(_key, this.encodeValue(value));
        } catch (e) {
            throw e;
        }
        return value;
    };

    getLocalStorage(_key) {
        if (typeof localStorage === 'undefined' || !_key) {
            return;
        }

        const value = localStorage.getItem(_key);

        return value;
    };

    removeLocalStorage(_key) {
        if (typeof localStorage === 'undefined' || !_key) {
            return;
        }

        localStorage.removeItem(_key);
    };
}















