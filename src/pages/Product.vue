<template>
  <div class="max-w-7xl mx-auto lg:flex lg:py-36">
    <img
      class="lg:max-w-2xl mx-auto"
      :src="require(`../../public/products/${productData.img}`)"
      :alt="productData.name"
    >
    <div>
      <div class="px-6 py-8">
        <h1 class="text-3xl lg:text-5xl font-semibold text-gray-800 dark:text-white capitalize">{{ productData.name }}</h1>
        <div class="flex mb-2">
          <svg
            v-for="n in productData.stars"
            :key="n"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="#ffa651"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg
            v-for="n in getOutlineStar(productData.stars)"
            :key="n"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#ffa651"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        </div>
        <span class="text-3xl text-gray-500"> {{productData.price}}€</span>
        <hr class="my-5">
        <div class="pt-2 pb-6">
          <p class="text-gray-700 text-base py-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
          <p class="text-gray-700 text-base py-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque ut nesciunt, adipisci, inventore quo fugiat dolor eveniet perferendis placeat, maiores quos veniam harum obcaecati ratione cumque. Ipsum deserunt unde eos!</p>
          <p class="text-gray-700 text-base py-2"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis repellat magnam ipsa magni reiciendis quos, eius cupiditate sunt. Vitae eligendi quibusdam asperiores quis officia modi dicta voluptatem et optio a. </p>
        </div>
        <input
          class="w-16 h-10 border-gray-300 border-2 text-center mr-14"
          type="number"
          min="1"
          max="100"
          v-model="itemQuantity"
        />
        <button
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full"
          @click="addToCart(productData, itemQuantity)"
        > {{$t('product.button_cart')}}</button>
      </div>
      <hr>
      <div class="px-6 pt-4 pb-10">
        <span class="bg-blue-200 rounded-md py-3 px-6 text-sm font-semibold text-gray">#{{$t(`store.filters.categories.${productData.category}`)}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import useFetchProduct from '@/composable/useFetchProduct.js';
import { watch } from 'vue'

export default {
  name: 'Product',
  setup () {
    const {
      getOutlineStar,
      productData,
      itemQuantity,
      addToCart
    } = useFetchProduct();

    watch(itemQuantity, (newValue) => {
      if (newValue !== "") {
        const inputCleaned = newValue.replace(/[^0-9]/g, '')
        itemQuantity.value = (inputCleaned) ? inputCleaned : 0
      }
    })

    return {
      getOutlineStar,
      productData,
      itemQuantity,
      addToCart,
    }
  }
}
</script>

<style>
</style>