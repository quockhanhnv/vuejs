import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters('errors', [
            'errors'
        ]),

        isValid() {
            return Object.keys(this.errors).every(key => this.errors[key]);
        }
    }
}
