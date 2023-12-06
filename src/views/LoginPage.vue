<template>
    <section id="about" class="py-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 m-auto">
                    <div class="card">
                        <div class="card-header text-center">
                            <div class="card-title">
                                <h3>Login</h3>
                                <p>Login to your account</p>
                            </div>
                        </div>
                        <div class="card-body">
                            <form @submit.prevent="onSubmit">
                                <div class="form-group mb-4">
                                    <label for="username">Username:</label>
                                    <input type="text" class="form-control mt-2" id="username" required v-model="loginData.username"
                                        placeholder="Enter username">
                                </div>
                                <div class="form-group mb-3">
                                    <label for="password">Password:</label>
                                    <input type="password" class="form-control mt-2" id="password" required
                                        v-model="loginData.password" placeholder="Enter password">
                                </div>
                                <a class="text-decoration-none d-block" href="#">Forgot Password?</a>
                                <button type="submit" class="btn btn-primary mt-4">Login</button>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
    
<script>

export default {
    name: 'AboutPage',
    data() {
        return {
            loginData: {
                email: '',
                password: ''
            }
        }
    },
    created() {
        document.title = 'About | VueCommerce';
    }
}

</script>