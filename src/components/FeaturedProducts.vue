<template>
  <section class="bg-gray-50">
    <div class="container mx-auto py-10">
      <h2 class="pl-5 xl:pl-10 lg:text-4xl text-2xl sm:text-3xl font-headline tracking-tight font-extrabold leading-snug text-gray-900">
        {{$t('home.featured_products.title')}}
      </h2>
      <div class="md:px-5 py-10 grid grid-cols-1 lg:grid-cols-3 gap-6 justify-items-center">
        <router-link to="/product/5">
          <img
            class="w-80 sm:w-96"
            :src="require('../../public/products/orquidea.webp')"
            alt="Orchid"
          >
          <h4 class="text-xl pt-1"> {{$t('home.featured_products.products[0]')}} </h4>
          <img
            v-for="n in 5"
            :key="n"
            class="h-5 w-5 inline-block"
            :src="require('../../public/svg/star.svg')"
            alt="Star"
          >
          <span class="block text-xl text-gray-500"> 14.95€ </span>
        </router-link>
        <router-link to="/product/10">
          <img
            class="w-80 sm:w-96"
            :src="require('../../public/products/dracena.webp')"
            alt="Dracena"
          >
          <h4 class="text-xl pt-1"> {{$t('home.featured_products.products[1]')}} </h4>
          <img
            v-for="n in 5"
            :key="n"
            class="h-5 w-5 inline-block"
            :src="require('../../public/svg/star.svg')"
            alt="Star"
          >
          <span class="block text-xl text-gray-500"> 19.95€ </span>
        </router-link>
        <router-link to="/product/6">
          <img
            class="w-80 sm:w-96"
            :src="require('../../public/products/begonia.webp')"
            alt="Begonia"
          >
          <h4 class="text-xl pt-1"> {{$t('home.featured_products.products[2]')}}</h4>
          <img
            v-for="n in 5"
            :key="n"
            class="h-5 w-5 inline-block"
            :src="require('../../public/svg/star.svg')"
            alt="Star"
          >
          <span class="block text-xl text-gray-500"> 22.95€ </span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturedProducts'
}
</script>

<style>
</style>