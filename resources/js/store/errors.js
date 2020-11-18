export default {
    namespaced: true,

    state: {
        errors: {},
    },

    getters: {
        errors(state) {
            return state.errors;
        }
    },

    mutations: {
        setError(state, { key, value }) {
            state.errors[key] = value;
        },

        setErrors(state, errors) {
            for(let error in errors) {
                if (Array.isArray(errors[error])) {
                    errors[error] = errors[error].join('');
                }
            }

            state.errors = errors;
        },

        resetErrors(state) {
            state.errors = {};
        }
    }
}
