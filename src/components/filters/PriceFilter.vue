<template>
  <div class="mt-6">
    <button
      class="flex justify-between items-center text-lg font-semibold text-gray-800 dark:text-white w-full"
      @click="showPriceFilter = !showPriceFilter"
    >
      <span> {{$t('store.filters.price_title')}}</span>
      <svg
        v-if="!showPriceFilter"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
    <div v-if="showPriceFilter">
      <input
        class="rounded-lg overflow-hidden appearance-none bg-blue-200 h-4 w-52"
        type="range"
        min="1"
        max="100"
        step="1"
        :value="price"
        @input="$emit('update:price', $event.target.value)"
      />
      <div>
        <input
          class="w-12 border-gray-400 border-2"
          type="number"
          min="0"
          max="100"
          :value="price"
          @input="$emit('update:price', $event.target.value)"
        />
      </div>
    </div>
    <div class="flex justify-end">
      <button @click="$emit('cleanPriceFilter', 'price')">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PriceFilter",
  props: {
    price: { type: Number, required: true }
  },
  data () {
    return {
      showPriceFilter: true
    }
  }
};
</script>

<style>
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  input[type="range"]::-webkit-slider-thumb {
    width: 20px;
    -webkit-appearance: none;
    appearance: none;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
    background: rgb(211, 206, 206);
    box-shadow: -405px 0 0 400px hsl(204, 86%, 53%);
  }
}
</style>