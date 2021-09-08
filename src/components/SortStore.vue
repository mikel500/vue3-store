<template>
  <div class="text-gray-700 pt-3">
    <label
      for="sort"
      class="hidden md:inline-block text-xl pr-2"
    >
      {{$t('store.sort.title')}}
    </label>
    <select
      id="sort"
      class="py-2 px-2 rounded-md text-lg"
      :value="sort"
      @input="$emit('update:sort', $event.target.value)"
    >
      <option value="lowest-price"> {{$t('store.sort.lowest_price')}}</option>
      <option value="highest-price">{{$t('store.sort.highest_price')}}</option>
      <option value="reviews">{{$t('store.sort.reviews')}}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SortStore',
  props: {
    sort: String
  }
}
</script>

<style>
</style>