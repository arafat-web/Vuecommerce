<template>
    <div class="container mt-5">
        <div v-if="product" class="row">
            <div class="col-md-6">
                <img :src="product.image" class="img-fluid" alt="Product Image">
            </div>
            <div class="col-md-6">
                <h2>{{ product.title }}</h2>
                <p><strong>Price:</strong> ${{ product.price }}</p>
                <p><strong>Category:</strong> {{ product.category }}</p>
                <p><strong>Description:</strong> {{ product.description }}</p>
                <div class="star-rating">
                    {{ generateStarRating(product.rating) }}
                </div>
            </div>
        </div>

        <!-- Related Products Section -->
        <h3 class="mt-4">Related Products</h3>
        <div class="row">
            <div v-for="(relatedProduct, index) in relatedProducts" :key="index" class="col-md-3">
                <div class="card p-3 h-100">
                    <div class="card-img">
                        <img :src="relatedProduct.image" alt="Related Product Image">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title"><router-link :to="'/product/' + relatedProduct.id">{{ relatedProduct.title
                        }}</router-link></h5>
                        <p class="card-text"><strong>Price: ${{ relatedProduct.price }}</strong></p>
                        <div class="star-rating">
                            {{ generateStarRating(relatedProduct.rating) }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            product: null,
            relatedProducts: []
        };
    },
    mounted() {
        // Fetch the specific product based on the route parameter (product ID) when the component is mounted
        const productId = this.$route.params.id;
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(response => response.json())
            .then(data => {
                // Update product data in the component
                this.product = data;
            })
            .catch(error => {
                console.error("Error fetching product details:", error);
            });

        // Fetch related products (you may define your own logic to determine related products)
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => {
                // Exclude the current product from related products
                this.relatedProducts = data.filter(product => product.id !== parseInt(productId)).slice(0, 4);
            })
            .catch(error => {
                console.error("Error fetching related products:", error);
            });
    },
    methods: {
        generateStarRating(rating) {
            const roundedRating = Math.round(rating * 2) / 2;
            const stars = '⭐'.repeat(Math.floor(roundedRating));
            const halfStar = (roundedRating % 1 !== 0) ? '⭐' : '';
            return `${stars}${halfStar}`;
        }
    }
}
</script>

<style scoped>
.star-rating {
    font-size: 24px;
    color: #FFD700;
    /* Golden color for stars */
}
</style>
