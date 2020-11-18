import Vue from 'vue';
import Vuex from 'vuex';

import auth from "./auth";
import errors from "./errors";

Vue.use(Vuex);

const store = {
    modules: {
        auth,
        errors,
    }
};

export default new Vuex.Store(store);
