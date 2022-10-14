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
                <tbody class="table-info" v-for="(item) in carts" :key="item.id">
                    <tr>
                        <td class="col-1">
                            <img :src="item.img_url" class="img-fluid"/>
                        </td>
                        <td>{{ item.album }}</td>
                        <td>{{ item.artist }}</td>
                        <td>
                            <button type="button" class="btn btn-sm" @click="addToCart(item.id); triggerCheckoutPlus(item.id)" >+</button>
                            {{ item.qty }}
                            <button type="button" class="btn btn-sm" @click="removeFromCart(item.id); triggerCheckoutMinus(item.id)">-</button>
                        </td>
                        <td>Rp. {{ item.subTotal }}</td>
                    </tr>
                </tbody>
            </table>

            <div class="d-flex justify-content-start">
                <router-link to="/">
                    <button type="button" class="btn btn-info mx-2">Kembali Ke Home</button>
                </router-link>
                <div class="d-flex justify-content-evenly mx-1">
                    <button type="button" class="btn btn-warning mx-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Checkout
                    </button>
                    <h4>Total: Rp. {{ totalPrice }} &nbsp;</h4>
                    <h4>Qty: {{ totalCartsQty }}</h4>
                </div>
            </div>
        </div>
        <div class="else text-center" v-else>
            <h1>Cart Masih Kosong</h1>
                <router-link to="/">
                    <button type="button" class="btn btn-info">Kembali Ke Home</button>
                </router-link>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Pembayaran Berhasil!</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h3>Total anda adalah: Rp. {{ totalPrice }} &nbsp;</h3>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Selesai</button>
                    </div>
                </div>
            </div>
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
            removeFromCart: 'removeFromCart',
            triggerCheckoutPlus: 'triggerCheckoutPlus',
            triggerCheckoutMinus: 'triggerCheckoutMinus'
        }),
    }
}
</script>