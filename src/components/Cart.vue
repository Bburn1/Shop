<template>
    <div class="products">
        <table cellspacing="100px">

            <tr v-for="item in productsFromCart" v-bind:key="item.id">
                <td>{{item.id}}</td>
                <td>{{item.item}}</td>
                <td class="product-image"><img v-bind:src="item.src" width="200px"></td>
                <td>{{item.price}}</td>
                <td>{{item.count}}</td>
                <td>
                    <button class="btn" v-on:click="AddToCart(item)">Add</button> 
                    <button class="btn" v-on:click="deleteFromCart(item.id)">Delete</button>
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
    import products from '../data/products.js'
    export default {
        data: function () {
            return {
                items: [],
                search: '',
                searchResult: [],
                cartElements:[],
                productsFromCart:[],
            };
        },
        
            mounted: function() {
            this.productsFromCart = this.$store.getters.getCart;
                        console.log(this.productsFromCart);
            
        },
        methods:{
            consolelog: function () {
                 console.log(this.cartElements);
            },
            
            AddToCart: function(item) {
                this.$store.commit('addCart',item);
            },
            deleteFromCart: function (item) {
                this.$store.commit('deleteCart',item);
            },
        },
        computed: {
            CartItems () {
                return this.$store.getters.getCart
            },
        }
    }
</script>