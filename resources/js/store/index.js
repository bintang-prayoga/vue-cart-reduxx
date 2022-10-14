import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        allProduct: [
            {
                id: 1,
                album: "Colon", 
                artist: "Eri Sasaki", 
                qty: 20,
                carts_qty: 0,
                price: 300000,
                carts_price: 0,
                img_url:"https://cdn.discordapp.com/attachments/1021055312087748608/1021055424373469254/Colon.jpg"
            },
            {
                id: 2,
                album: "BOYCOTT", 
                artist:"Amazarashi", 
                qty: 10,
                carts_qty: 0,
                price: 350000,
                carts_price: 0,
                img_url:"https://st.cdjapan.co.jp/pictures/l/07/30/AICL-3858.jpg?v=2"
            },
            {
                id: 3, 
                album: "HappyEND", 
                artist:"HoneyComeBear", 
                qty: 40,
                carts_qty: 0,
                price: 550000,
                carts_price: 0,
                img_url:"https://cdn.discordapp.com/attachments/1021055312087748608/1021055953749155851/unknown.png"
            },
            {
                id: 4,
                album: "unknown", 
                artist:"ReoNa", 
                qty: 5,
                carts_qty:   0,
                price: 450000,
                carts_price: 0,
                img_url:"https://cdn.discordapp.com/attachments/1021055312087748608/1021059069429174352/unknown.png"
            },
            {
                id: 5,
                album: "Sing The Moon", 
                artist:"Tsukuyomi", 
                qty: 25,
                carts_qty: 0,
                price: 250000,
                carts_price: 0,
                img_url:"https://cdn.discordapp.com/attachments/1021055312087748608/1030091692877041674/Sing_The_Moon.jpg"
            }
        ],
        carts: [],
        totalCartsQty: 0,
        totalPrice: 0
    },
    getters: {
        getAllProduct (state) {
            return state.allProduct
        },
        getCarts (state) {
            return state.carts
        },
        getTotalCartsQty (state) {
            return state.totalCartsQty
        },
        getTotalPrice (state) {
            return state.totalPrice
        }
    },
    mutations: {
            addToCart(state, id) {
                let produk = state.allProduct.find((item) => item.id == id);
                let cart = state.carts.find((item) => item.id == id);
                
                produk.carts_qty ++;
                produk.qty --;
                state.totalCartsQty ++;

                if (!cart) {
                    let cartItems = {
                        id: produk.id,
                        album: produk.album,
                        artist: produk.artist,
                        price: produk.price,
                        img_url: produk.img_url,
                        qty: 1,
                        subTotal: produk.price,
                    };
                    state.carts.push(cartItems);
                } else {
                    cart.qty++;
                    cart.subTotal = cart.qty * cart.price;
                }
            },

            removeFromCart(state, id) {
                let produk = state.allProduct.find((item) => item.id == id);

                if (state.totalCartsQty > 0) {
                    state.totalCartsQty --;
                } else {
                    state.totalCartsQty = 0;
                }
                
                state.carts.forEach((cart) => {
                    if (cart.id == id) {
                        if (cart.qty === 0) {
                            state.carts.splice(state.carts.indexOf(cart), 1);
                            console.log(cart.subTotal)
                        } else {
                            cart.qty -= 1;
                            cart.subTotal = cart.qty * cart.price;
                        }
                    }
                });

                produk.qty ++;
                produk.carts_qty --;
            },

            triggerCheckoutPlus(state, id) {
                let cart = state.carts.find((item) => item.id == id);
                
                state.carts.forEach((cart) => {
                    state.totalPrice += cart.subTotal;
                });
                
                cart.subTotal = cart.qty * cart.price;
            },

            triggerCheckoutMinus(state, id) {
                let cart = state.carts.find((item) => item.id == id)
                
                state.carts.forEach((cart) => {
                    state.totalPrice -= cart.subTotal;
                });
                
                cart.subTotal = cart.qty * cart.price;
            }
    },
    actions: {
        addToCart(id) {
            this.$store.commit("addToCart", id)
        },
        removeFromCart(id) {
            this.$store.commit("removeFromCart", id)
        },
        triggerCheckoutPlus(id) {
            this.$store.commit("triggerCheckoutPlus")
        },
        triggerCheckoutMinus(id){
            this.$store.commit("triggerCheckoutMinus")
        }
    },
    modules: {

    }
})