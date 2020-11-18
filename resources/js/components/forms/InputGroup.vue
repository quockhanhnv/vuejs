<template>
    <div>
        <slot name="label"></slot>

        <div :class="inputWrapperClasses">
            <input
                :id="id"
                :type="type"
                :class="inputClasses"
                :value="value"
                :name="name"
                :placeholder="placeholder"
                :disabled="disabled"
                @change="onChange($event.target.value)"
                @input="onInput($event.target.value)"
                @focus="onFocus($event)"
                @blur="onBlur($event)"
                @keydown="onKeydown($event)"
            >

            <div class="invalid-feedback">
                {{ error ? error.toString() : '' }}
            </div>
        </div>

        <slot name="button"></slot>
    </div>
</template>

<script>
    export default {
        name: 'InputGroup',

        props: {
            value: {
                type: [String, Number],
                default: ''
            },
            id: {
                type: String,
                required: true
            },
            name: {
                type: String
            },
            type: {
                type: String,
                default: 'text'
            },
            placeholder: {
                type: String,
                default: ''
            },
            autofocus: {
                type: Boolean,
                default: false
            },
            error: {

            },
            inputClass: {
                type: String,
                default: ''
            },
            inputWrapperClasses: {
                type: String,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            },
            loading: {
                type: Boolean,
                default: false
            }
        },

        computed: {
            inputClasses() {
                return [
                    { 'is-invalid': this.error },
                    { 'is-loading': this.loading },
                    this.inputClass
                ]
            }
        },

        methods: {
            onChange(value) {
                this.$emit('change', value);
            },

            onInput(value) {
                this.$emit('input', value);
            },

            onFocus(event) {
                this.$emit('focus', event);
            },

            onBlur(event) {
                this.$emit('blur', event);
            },

            onKeydown(event) {
                this.$emit('keydown', event);
            },

            focus() {
                this.$refs.input.focus();
            }
        },

        mounted() {
            if (this.autofocus) {
                this.focus();
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
