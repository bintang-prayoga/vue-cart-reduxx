<template>
    <div class="empty-cont">
        <div class="d-flex justify-content-center">
            <div class="row mx-auto">
                <div v-for="(item) in allProduct" :key="item.id" class="card my-3 mx-3" style="width: 13rem;">
                    <img :src="item.img_url" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title fw-bolder">{{ item.album }}</h5>
                        <p class="card-text">by <span class="fw-bold">{{ item.artist }}</span></p>
                            <div class="d-flex">
                                <p class="card-text">Rp. {{ item.price }} &nbsp;</p>
                                <p class="card-text">Qty: {{ item.qty }}</p>
                            </div>
                            <div class="div">
                                <button class="btn btn-info" v-if="item.qty > 0" @click="addToCart(item.id)">Add</button>
                                <button class="btn btn-danger" v-else>Stok Habis</button>
                                <button class="btn btn-warning" v-if="item.carts_qty > 0" @click="removeFromCart(item.id)">Remove</button>
                                <button class="btn btn-secondary" v-else>Remove</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="router-cont mx-5 mt-2">
            <router-link to="/cart">
                <button @click="triggerCheckout()" type="button" class="btn btn-info">Pergi Ke Cart</button>
            </router-link>
            <h5>Barang di Cart {{ totalCartsQty }}</h5>
        </div>  
    </div>
</template>

<script>

import { mapGetters, mapMutations } from 'vuex'

    export default {
        mounted() {
            console.log('Mounted goblok')
        },
        computed: {
            ...mapGetters({
                allProduct: 'getAllProduct', // this is the function from store.js
                carts: "getCarts",
                totalCartsQty: 'getTotalCartsQty'
            })
        },
        methods: {
            ...mapMutations({
                addToCart: 'addToCart', // this is the function from store.js
                removeFromCart: 'removeFromCart',
                triggerCheckout: 'triggerCheckout'
            }),

        }
    }
</script>
