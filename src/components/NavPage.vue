<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">VueCommerce</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link class="nav-link" to="/">Home</router-link>
                    <div class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Categories
                        </a>
                        <ul class="dropdown-menu" id="categoryDropdown">
                            <li v-for="(category, index) in categories" :key="index">
                                <router-link class="dropdown-item text-capitalize" :to="'/category/' + category">{{ category
                                }}</router-link>
                            </li>
                        </ul>
                    </div>
                    <router-link class="nav-link" to="/about">About Us</router-link>
                    <router-link class="nav-link" to="/contact">Contact Us</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            categories: []
        };
    },
    mounted() {
        this.fetchCategories();
    },
    methods: {
        fetchCategories() {
            fetch("https://fakestoreapi.com/products/categories")
                .then(response => response.json())
                .then(data => {
                    this.categories = data;
                })
                .catch(error => {
                    console.error("Error fetching categories:", error);
                });
        }
    }
}
</script>
