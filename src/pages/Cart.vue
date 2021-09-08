<template>
  <template v-if="items.length > 0">
    <section class="max-w-xl mx-auto h-screen-70 py-16">
      <div class="w-full mb-8">
        <div class="w-full">
          <table class="w-full">
            <thead class="border">
              <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th class="py-3 text-center">{{$t('cart.article')}}</th>
                <th class="py-3 text-center">{{$t('cart.units')}}</th>
                <th class="py-3 text-center">Total</th>
                <th class="py-3 text-center"></th>
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr
                v-for="item of items"
                :key="item.id"
                class="text-gray-700"
              >
                <td class="py-3 text-center border">
                  <img
                    :src="require(`../../public/products/${item.img}`)"
                    :alt="item.name"
                    class="h-16 w-16 mx-auto"
                  >
                  <div class="flex flex-col pl-1">
                    <span class="capitalize font-extralight text-xl">{{item.name}}</span>
                    <span>{{$t('cart.price')}}&nbsp;{{item.price}}€</span>
                  </div>
                </td>
                <td class="py-3 text-center border">
                  <input
                    type="number"
                    min="0"
                    class="text-green-700 bg-green-100 rounded-sm w-16 h-8 text-lg text-center spinner-button"
                    :value="item.quantity"
                    @input="trimNumber(item,$event.target.value)"
                  >
                </td>
                <td class="py-3 text-center text-xl border-b border-t border-l">{{ getQuantityPerPrice(item.quantity,item.price) }}€</td>
                <td class="border-b border-t border-r">
                  <button @click="deleteItem(item.id)">
                    <img
                      class="h-6 w-6"
                      :src="require('../../public/svg/delete.svg')"
                      alt="Delete"
                    >
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <p class="text-gray-700 font-semibold text-right pr-24 lg:pr-12">{{$t('cart.total')}}&nbsp;{{getTotal()}}€</p>
          <div class="py-4">
            <button class="block mx-auto bg-green-500 hover:bg-green-700 text-white font-bold py-2 rounded w-64">
              {{$t('cart.button_buy')}}
            </button>
          </div>
        </div>
      </div>
    </section>
  </template>
  <template v-else>
    <section class="h-screen flex justify-center items-center flex-col pb-24">
      <p class="text-center text-xl pb-3"> {{$t('cart.empty')}}</p>
      <router-link
        to="/store"
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full"
      >
        {{$t('cart.shop_link')}}
      </router-link>
    </section>
  </template>
</template>

<script>
import useCart from '@/composable/useCart.js'
export default {
  name: 'CartPage',
  setup () {
    const {
      items,
      getQuantityPerPrice,
      getTotal,
      deleteItem
    } = useCart();

    const trimNumber = (item, inputValue) => {
      return item.quantity = inputValue.replace(/[^0-9]/g, '')
    }

    return {
      items,
      deleteItem,
      getQuantityPerPrice,
      getTotal,
      trimNumber
    }
  }
}
</script>

<style>
</style>