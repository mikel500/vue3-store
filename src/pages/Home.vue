<template>
  <div id="home">
    <section class="h-screen flex justify-center rounded-bottom md:h-screen-50 lg:h-screen-70 home-background">
      <div class="container flex text-center xl:text-left xl:pl-40 px:5 md:px-0 md:py-36 lg:py-0">
        <div class="md:pb-20 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2">
          <div class="place-self-center">
            <h1
              class="text-5xl font-headline tracking-tight font-extrabold text-gray-800"
              v-html="$t('home.header_title')"
            />
            <p class="mt-5 mx-2 font-medium lg:font-normal text-gray-100 text-lg">
              {{$t('home.header_content')}}
            </p>
            <div class="inline-block mt-8">
              <router-link
                to="/store"
                class="flex items-center justify-center px-8 py-3 font-medium rounded-md text-white bg-gray-800 shadow uppercase"
              >
                {{$t('home.header_button')}}
              </router-link>
            </div>
          </div>
          <div class="hidden lg:block">
            <img
              class="md:h-screen-70"
              :src="require('../../public/space-with-plants.webp')"
            >
          </div>
        </div>
      </div>
    </section>
    <section class="container mx-auto py-10 sm:py-20 px-5">
      <div class="grid grid-cols-1 lg:grid-cols-3 justify-items-center">
        <div class="lg:flex lg:items-center text-center lg:text-left">
          <img
            class="h-24 w-24 mx-auto lg:mr-2"
            :src="require('../../public/svg/truck.svg')"
            alt="Truck"
          >
          <div>
            <h4 class="text-2xl font-headline tracking-tight font-extrabold text-green-800">{{$t('home.benefits_information.benefits_titles[0]')}}</h4>
            <span> {{$t('home.benefits_information.benefits_explanation[0]')}} </span>
          </div>
        </div>
        <div class="lg:flex lg:items-center text-center lg:text-left">
          <img
            class="h-24 w-24 mx-auto"
            :src="require('../../public/svg/dialog.svg')"
            alt="Dialog"
          >
          <div>
            <h4 class="text-2xl font-headline tracking-tight font-extrabold text-green-800">{{$t('home.benefits_information.benefits_titles[1]')}}</h4>
            <span>{{$t('home.benefits_information.benefits_explanation[1]')}} </span>
          </div>
        </div>
        <div class="lg:flex lg:items-center text-center lg:text-left">
          <img
            class="h-24 w-24 mx-auto"
            :src="require('../../public/svg/gift.svg')"
            alt="Gift"
          >
          <div>
            <h4 class="text-2xl font-headline tracking-tight font-extrabold text-green-800">{{$t('home.benefits_information.benefits_titles[2]')}}</h4>
            <span>{{$t('home.benefits_information.benefits_explanation[2]')}} </span>
          </div>
        </div>
      </div>
    </section>
    <call-to-action />
    <featured-products />
  </div>
</template>

<script>
import CallToAction from '@/components/CallToAction.vue'
import FeaturedProducts from '@/components/FeaturedProducts.vue'
export default {
  name: "Home",
  components: {
    CallToAction,
    FeaturedProducts
  }
}
</script>

<style>
@media (max-width: 1023px) {
  .home-background {
    background: rgb(52, 175, 110)
      url("../../public/space-with-plants-touch.webp") no-repeat center;
    background-size: cover;
    background-blend-mode: soft-light;
  }
}

@media (min-width: 1024px) {
  .home-background {
    @apply bg-gradient-to-r from-cadmium-green via-jungle-green to-emerald;
  }
}
</style>