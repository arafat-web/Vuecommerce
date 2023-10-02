<template>
        <HomeCarosual />
        <HomeFeatures />
        <HomeFeaturedProducts/>
        <HomeLatestProducts/>
</template>
<script>
import HomeCarosual from '../components/HomeCarosual.vue';
import HomeFeatures from '../components/HomeFeatures.vue';
import HomeFeaturedProducts from '../components/HomeFeaturedProducts.vue';
import HomeLatestProducts from '../components/HomeLatestProducts.vue';
export default {
    name: 'HomePage',
    components: {
        HomeCarosual,
        HomeFeatures,
        HomeFeaturedProducts,
        HomeLatestProducts
    }
}
</script>
