<template>
    <div class="cart-cont">
        <div v-if="totalCartsQty !== 0">
            <h1>Cart</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Cover</th>
                        <th scope="col">Album</th>
                        <th scope="col">Artist</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody class="table-info" v-for="(item) in carts" :key="item.idProduk">
                    <tr>
                        <td class="col-1">
                            <img :src="item.img_url" class="img-fluid"/>
                        </td>
                        <td>{{ item.album }}</td>
                        <td>{{ item.artist }}</td>
                        <td>{{ item.qty }}</td>
                        <td>Rp. {{ item.subTotal }}</td>
                    </tr>
                </tbody>
            </table>
            <div class="d-flex justify-content-start">
                <h3>Total: Rp. {{ totalPrice }}</h3>
            </div>
        </div>
        <div class="else text-center" v-else>
            <h1>Cart Masih Kosong</h1>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'

export default {

    
    mounted() {
        console.log("Mounted Goblok")
    },
    computed: {
        ...mapGetters({
            allProduct: 'getAllProduct', // this is the function from store.js
            carts: 'getCarts',
            totalCartsQty: 'getTotalCartsQty',
            totalPrice: 'getTotalPrice'
        })
    },
    methods: {
        ...mapMutations({
            addToCart: 'addToCart', // this is the function from store.js
            removeFromCart: 'removeFromCart'
        }),
    }
}
</script>