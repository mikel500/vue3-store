<template>
  <section class="bg-gray-50 flex flex-col justify-center align-center cta-background h-96 lg:h-72">
    <div class="container mx-auto text-center">
      <h2 class="lg:text-4xl text-2xl font-headline tracking-tight font-extrabold leading-snug text-gray-900">
        {{$t('home.cta.title')}}
      </h2>
      <h3 class="text-lg text-green-900 font-semibold py-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto nemo quo, sapiente tempora eum eaque necessitatibus.
      </h3>
      <router-link
        to="/store"
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full"
      >
        {{$t('home.cta.button')}}
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CallToAction'
}
</script>

<style>
.cta-background {
  background: url("../../public/green-heart.webp") no-repeat center;
  background-size: cover;
}
</style>