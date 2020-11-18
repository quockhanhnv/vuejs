const axios = require('axios');
import Auth from '../plugins/auth';
import router from '../config/router';
import store from '../store';
const auth = new Auth();

let refreshed = false;

axios.interceptors.request.use((config) => {
    const csrf_token = document.head.querySelector('meta[name="csrf-token"]');
    config.headers.common['Cache-Control'] = 'no-cache';
    config.headers.common['Pragma'] = 'no-cache';

    if (csrf_token) {
        config.headers.common['X-CSRF-TOKEN'] = csrf_token.content;
        config.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    } else {
        console.warning('CSRF token not found');
    }

    // check if token exist in local storage
    // @todo check token exist in store
    if(auth.getToken) {
        config.headers.Authorization = `Bearer ${auth.getToken}`;
    }

    return config;
},  (error) => {
    return Promise.reject(error);
});

axios.interceptors.response.use(
    (response) => response,
    async (error) => {
        if(!error.response) {
            return Promise.reject(error);
        }

        const { status } = error.response;

        if(status === 412) {
            // case refresh token is expired
            if(refreshed) {
                auth.removeToken();
                //@todo remove token out store
                return router.push({ name: 'Login' });
            }

            refreshed = true;

            // case refresh token is not expired
            try {
                const token = await store.dispatch('auth/refreshToken');

                // await store.dispatch('auth/getUser'); // @todo code later

                const { href, origin } = location;
                const path = href.replace(origin, '');

                console.log(path)

                window.location.reload()
                // return router.push({ path: path, hash: '#' });
            } catch(e) {
                console.log(e)
                auth.removeToken();
                store.dispatch('auth/resetState');
                return router.push({ name: 'Login' });
            }
        }
        return Promise.reject(error); // important
    }
);
export default axios;
