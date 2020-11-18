<template>
    <div id="app" class="container">
        <Header></Header>
        <router-view></router-view>
    </div>
</template>

<script>
    import Header from './components/Header';
    export default {
        name: 'App',

        components: {
            Header,
        },

    }
</script>
