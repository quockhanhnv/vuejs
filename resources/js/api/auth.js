import axios from '../config/axios';
import Auth from '../plugins/auth';
import store from '../store';
const auth = new Auth();

export default {
    async login(credentials) {
        try {

            const { data } = await axios({
                url: '/api/auth/login',
                method: 'POST',
                data: credentials
            });

            return data;
        } catch(error) {
            throw error;
        }
    },

    async me() {
        try {
            const { data } = await axios({
                url: '/api/auth/me',
                method: 'POST',
            });

            return data;
        } catch(error) {
            throw error;
        }
    },

    async refreshToken() {
        try {
            const { data } = await axios({
                url: '/api/auth/refresh',
                method: 'POST'
            });

            await auth.setToken(data.data.access_token); // set token into local storage
            await store.dispatch('auth/setToken', data.data.access_token); // set token into store

            return data;
        } catch(error) {
            throw error;
        }
    },

    async logout() {
        try {
            const { data } = await axios({
                url: '/api/auth/logout',
                method: 'POST',
            });

            await auth.removeToken(); // remove token local storage
            await store.dispatch('auth/setToken', null);
            await store.dispatch('auth/setUser', null);

            return data;
        } catch(error) {
            throw error;
        }
    },
}
