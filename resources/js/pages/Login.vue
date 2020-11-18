<template>
    <div id="login-page">
        <div class="logo">
            <img
                src="../../../public/images/logo/logo-sunsystem.svg"
                alt="logo"
            />
        </div>
        <form @submit.prevent="authenticate">
            <input-group
                :id="'email'"
                v-model.trim="credentials.email"
                class="form-group"
                :placeholder="'Email'"
                :input-class="'form-control'"
                :error="errors['email']"
            >
            </input-group>
            <input-group
                :id="'password'"
                :type="'password'"
                v-model="credentials.password"
                class="form-group"
                :placeholder="'Password'"
                :input-class="'form-control'"
                :error="errors['password']"
            >
            </input-group>
            <div class="form-group">
                <button type="submit" class="btn btn-primary btn-block">Login</button>
            </div>
            <div class="form-group">
                <button
                    class="btn btn-primary btn-block"
                    @click.prevent="$router.push({ name: 'ResetPassword' })"
                >
                    Forget Password
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import InputGroup from "../components/forms/InputGroup";

import { mapActions } from "vuex";
import notify from '../plugins/notify';
import errors from "../mixins/errors";

export default {
    name: "Login",

    components: {
        InputGroup
    },

    mixins: [errors],

    data() {
        return {
            credentials: {
                email: "",
                password: ""
            }
        };
    },

    methods: {
        ...mapActions('auth', [
            'login',
        ]),

        async authenticate() {
            this.$store.commit("errors/resetErrors");

            try {
                await this.login(this.credentials);

                this.$router.push({ name: "HomePage" });
            } catch (error) {
                if (!error.response) {
                    return;
                }

                const { status, data } = error.response;

                if (status === 422) {
                    this.$store.commit("errors/setErrors", data.errors);
                } else if(data.message) {
                    return notify.error(data.message); // login failed
                }
            }
        }
    }
};
</script>

<style lang="scss" scoped>
#login-page {
    max-width: 320px;
    margin: 5em auto;

    .logo {
        max-width: 100%;
        overflow: hidden;
    }

    form {
        margin-top: 40px;

        button:active {
            position: relative;
            top: 1px;
            left: 1px;
        }
    }
}
</style>
