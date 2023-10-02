<template>
    <NavPage/>
    <router-view></router-view>
</template>

<script>

import NavPage from './components/NavPage.vue';
export default {
    name: 'App',
    components: {
    NavPage,

}
}

</script>

<style>
html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
}
</style>
