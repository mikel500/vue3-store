<template>
  <div>
    <button
      class="flex justify-between items-center text-lg font-semibold text-gray-800 dark:text-white w-full"
      @click="showReviewFilter = !showReviewFilter"
    >
      <span> {{$t('store.filters.reviews_title')}} </span>
      <svg
        v-if="!showReviewFilter"
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
    <ol v-if="showReviewFilter">
      <li
        v-for="star in reverseKeys(6)"
        :key="'star_'+star"
      >
        <button
          class="w-full flex rounded-md text-base font-medium mt-2 mb-2"
          @click="getFilterValue(star)"
        >
          <svg
            v-for="n in star"
            :key="n"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            viewBox="0 0 20 20"
            fill="#ffa651"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <svg
            v-for="n in getOutlineStar(star)"
            :key="n"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
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
             &nbsp;&nbsp;{{$t('store.filters.reviews_more')}}
        </button>
      </li>
    </ol>
    <div class="flex justify-end">
      <button @click="$emit('cleanReviewsFilter', 'reviews')">
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
  name: "ReviewsFilter",
  data () {
    return {
      showReviewFilter: true,
    };
  },
  methods: {
    reverseKeys (n) {
      return Array.from(Array(n).keys()).reverse()
    },
    getOutlineStar (n) {
      return 5 - n
    },
    getFilterValue (newVal) {
      this.$emit("reviewsFilterUpdated", { value: newVal, filter: 'stars' });
    }
  }
};
</script>

<style>
</style>