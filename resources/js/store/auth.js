import authApi from '../api/auth';
import store from "./index";

import Auth from '../plugins/auth';

const auth = new Auth();

export default {
    namespaced: true,

    state: {
        user: null,
        token: null
    },

    getters: {
        user(state) {
            return state.user;
        },

        token(state) {
            return state.token;
        },

    },

    mutations: {
        setUser(state, user) {
            state.user = user;
        },

        setToken(state, token) {
            state.token = token;
        }
    },

    actions: {
        async login({ commit }, credentials) {
            try {
                var { data } = await authApi.login(credentials);

                auth.setToken(data.access_token); // save token local storage

                store.dispatch('auth/setToken', data.access_token); // set token store

                var { data } = await authApi.me();

                store.dispatch('auth/setUser', data.user); // set token store
            } catch (error) {
                throw error;
            }
        },

        async logout() {
            try {
                await authApi.logout();
            } catch (error) {
                throw error;
            }
        },

        async refreshToken({ commit }) {
            try {
                const token = await authApi.refreshToken();

                return token;
            } catch (error) {
                throw error;
            }
        },


        setToken({ commit }, token) {
            commit('setToken', token);
        },

        setUser({ commit }, user) {
            commit('setUser', user);
        },

        resetState({ state }) {
            state.user = null;
            state.token = null;
        }
    }
}
