<template>
  <div class="container mx-auto flex">
    <section class="hidden md:flex flex-col w-64 h-screen px-4 py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-600">
      <div class="flex justify-between">
        <h2 class="text-3xl font-semibold text-gray-800 dark:text-white">{{$t('store.filters.filters_title')}}</h2>
        <button @click="cleanFilters('all')">
          <img
            class="h-6 w-6"
            :src="require('../../public/svg/refresh.svg')"
            alt="Refresh"
          >
        </button>
      </div>
      <categories-filter
        class="mt-6"
        :categories="categories"
        @categoriesUpdated="getFilteredItems"
        @cleanCategoriesFilter="cleanFilters"
      />
      <price-filter
        class="mt-6"
        v-model:price="price"
        @cleanPriceFilter="cleanFilters"
      />
      <reviews-filter
        class="mt-6"
        @reviewsFilterUpdated="getFilteredItems"
        @cleanReviewsFilter="cleanFilters"
      />
    </section>
    <section class="w-full">
      <div class="flex justify-between md:justify-end px-5 lg:pl-0 pt-5">
        <sort-store v-model:sort="sort" />
        <div
          v-if="filterModalIsActive"
          class="fixed left-0 top-0 z-50 outline-none focus:outline-none bg-white w-full xs:max-w-xs h-full overflow-auto "
        >
          <div class="bg-gray-800 flex justify-end p-1">
            <button @click="filterModalIsActive=!filterModalIsActive">
              <img
                class="h-6 w-6"
                :src="require('../../public/svg/close.svg')"
                alt="Close"
              >
            </button>
          </div>
          <div class="p-8">
            <div class="flex justify-between">
              <h2 class="text-3xl font-semibold text-gray-800 dark:text-white">{{$t('store.filters.filters_title')}}</h2>
              <button @click="cleanFilters('all')">
                <img
                  class="h-6 w-6"
                  :src="require('../../public/svg/refresh.svg')"
                  alt="Refresh"
                >
              </button>
            </div>
            <categories-filter
              class="mt-6"
              :categories="categories"
              @categoriesUpdated="getFilteredItems"
              @cleanCategoriesFilter="cleanFilters"
            />
            <price-filter
              class="mt-6"
              v-model:price="price"
              @cleanPriceFilter="cleanFilters"
            />
            <reviews-filter
              class="mt-6"
              @reviewsFilterUpdated="getFilteredItems"
              @cleanReviewsFilter="cleanFilters"
            />
            <button
              class="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded mt-3"
              @click="filterModalIsActive=!filterModalIsActive"
            >
              {{$t('store.button_show_selection')}}
            </button>
          </div>
        </div>
        <button
          v-else
          @click="filterModalIsActive=!filterModalIsActive"
          class="md:hidden"
        >
          <img
            class="h-10 w-10"
            :src="require('../../public/svg/filter.svg')"
            alt="Open Filters"
          >
        </button>
      </div>
      <div class="md:px-5 py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-2 justify-items-center">
        <transition-group
          name="fade"
          mode="out-in"
          appear
        >
          <item-card
            v-for="plant of visiblePlants"
            :key="plant.name"
            :item="plant"
          />
        </transition-group>
      </div>
      <div class="text-center pb-10">
        <button
          v-if="filteredPlants.length > 0"
          @click="showMoreItems()"
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded"
        >
          {{$t('store.button_show')}}
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue';
import useProductFilters from '@/composable/useProductFilters.js';
import CategoriesFilter from "@/components/filters/CategoriesFilter.vue";
import PriceFilter from '@/components/filters/PriceFilter.vue';
import ReviewsFilter from '@/components/filters/ReviewsFilter.vue';
import SortStore from '@/components/SortStore.vue';
import ItemCard from '@/components/ItemCard.vue';


export default {
  name: "Store",
  components: {
    CategoriesFilter,
    PriceFilter,
    ReviewsFilter,
    SortStore,
    ItemCard
  },
  setup () {
    const {
      visiblePlants,
      price,
      stars,
      categories,
      sort,
      filteredPlants,
      getFilteredItems,
      showMoreItems,
      cleanFilters
    } = useProductFilters();

    const filterModalIsActive = ref(false);

    return {
      categories,
      price,
      stars,
      visiblePlants,
      sort,
      filteredPlants,
      getFilteredItems,
      showMoreItems,
      cleanFilters,
      filterModalIsActive
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.55s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>