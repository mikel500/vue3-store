<template>
  <button
    class="flex bg-gray-800 p-1 rounded-full"
    :class="{'focus:ring-2':cartIsActive, 'focus:ring-white': cartIsActive}"
    @click="cartIsActive = !cartIsActive"
  >
    <span class="sr-only">View Cart </span>
    <img
      class="h-8 w-8"
      :src="require('../../public/svg/cart-white.svg')"
      alt="Cart"
    />
    <span class="self-end bg-green-700 text-white rounded-full h-4 w-4 text-xs -ml-3">{{ getQuantity() }}</span>
  </button>
  <div
    v-if="cartIsActive"
    class="bg-white absolute z-50 top-16 right-0 w-72 px-5 py-5 shadow-md rounded"
  >
    <h3 class="text-xl"> {{$t('layout.header.cart.title')}} </h3>
    <hr>
    <template v-if="items.length > 0">
      <div
        class="flex align-middle py-1 w-full"
        v-for="item of items"
        :key="item.id"
      >
        <img
          :src="require(`../../public/products/${item.img}`)"
          :alt="item.name"
          class="h-16 w-16"
        >
        <div class="flex flex-col pl-1">
          <span class="capitalize font-extralight">{{item.name}}</span>
          <span>{{$t('layout.header.cart.units')}} {{item.quantity}}</span>
          <span class="font-semibold">{{ getQuantityPerPrice(item.quantity,item.price) }}€ </span>
        </div>
      </div>
      <hr>
      <p class="text-right font-semibold">TOTAL: {{ getTotal() }}€</p>
      <div class="text-center pt-3">
        <router-link
          @click="cartIsActive = !cartIsActive"
          to="/cart"
          class="bg-green-500 hover:bg-green-700 text-white font-bold rounded px-4 py-2"
        >
          {{$t('layout.header.cart.button')}}
        </router-link>
      </div>
    </template>
    <p
      class="text-center text-xl"
      v-else
    >
      {{$t('layout.header.cart.empty')}} </p>
  </div>
</template>

<script>
import { ref } from 'vue';
import useCart from '@/composable/useCart.js'
export default {
  name: 'Cart',
  setup () {
    const cartIsActive = ref(false)
    const {
      items,
      getQuantityPerPrice,
      getTotal,
      getQuantity
    } = useCart();
    return {
      items,
      getQuantityPerPrice,
      getTotal,
      getQuantity,
      cartIsActive
    }
  }
}
</script>

<style>
</style>