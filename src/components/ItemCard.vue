<template>
  <div class="max-w-xl rounded overflow-hidden sm:shadow-md py-5">
    <router-link :to="{ name: 'Product', params: { productId: item.id} }">
      <img
        class="w-full"
        :src="require(`../../public/products/${item.img}`)"
        :alt="item.name"
      >
    </router-link>
    <div class="px-6 py-4">
      <router-link
        :to="{ name: 'Product', params: { productId: item.id} }"
        class="flex justify-between"
      >
        <span class="font-bold text-xl capitalize">{{ item.name }} </span>
        <span class="text-xl text-gray-500"> {{item.price}}€ </span>
      </router-link>
      <div class="flex mb-2">
        <img
          v-for="n in item.stars"
          :key="n"
          class="h-5 w-5 inline-block"
          :src="require('../../public/svg/star.svg')"
          alt="Star"
        >
        <img
          v-for="n in getOutlinedStar(item.stars)"
          :key="n"
          class="h-5 w-5"
          :src="require('../../public/svg/outlined-star.svg')"
          alt="Outlined star"
        >
      </div>
      <p class="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
      </p>
    </div>
    <div class="px-6 pt-4 pb-2 flex justify-between">
      <span class="bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray">#{{$t(`store.filters.categories.${item.category}`)}}</span>
      <button @click="addToCart(item)">
        <img
          class="h-8 w-8"
          :src="require('../../public/svg/cart.svg')"
          alt="Cart"
        />
      </button>
    </div>
  </div>
</template>

<script>
import useCart from '@/composable/useCart.js'
export default {
  name: 'ItemCard',
  props: {
    item: { type: Object, required: true }
  },
  setup () {
    const getOutlinedStar = (n) => 5 - n
    const { addToCart } = useCart();

    return {
      addToCart,
      getOutlinedStar
    }
  }
}
</script>

<style>
</style>