<template>
  <div>
    <button
      class="flex justify-between items-center text-lg font-semibold text-gray-800 dark:text-white w-full"
      @click="showCategories = !showCategories"
    >
      <span> {{$t('store.filters.categories_title')}} </span>
      <svg
        v-if="!showCategories"
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
    <ul v-if="showCategories">
      <li
        v-for="category in categories"
        :key="category.name"
      >
        <input
          type="checkbox"
          class="mr-1"
          :checked="category.status"
          v-model="category.status"
        />
        <span> {{$t(`store.filters.categories.${category.name}`)}} </span>
      </li>
      <li class="flex justify-end">
        <button @click="$emit('cleanCategoriesFilter', 'categories')">
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
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
export default {
  name: "CategoriesFilter",
  props: {
    categories: { type: Array, required: true }
  },
  setup (props, context) {
    const showCategories = ref(true)
    watch(props.categories, (newVal) => {
      context.emit("categoriesUpdated", { value: newVal, filter: 'categories' });
    })
    return {
      showCategories
    }
  }
}
</script>

<style>
</style>