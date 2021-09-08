<template>
  <footer class="bg-gray-800 text-gray-300 px-6 lg:px-8 py-12">
    <div class="max-w-screen-xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-x-8">
      <div>
        <a class="text-2xl text-white tracking-widest">
          Sunfl🌻wer
        </a>
        <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt ullamcorper justo.</p>
      </div>
      <div>
        <h5 class="text-xl font-semibold text-white">Legal</h5>
        <nav class="mt-4">
          <ul class="space-y-2">
            <li>
              <a
                href="#"
                class="font-normal text-base hover:text-gray-100"
              >
                {{$t('layout.footer.terms')}}
              </a>
            </li>
            <li>
              <a
                href="#"
                class="font-normal text-base hover:text-gray-100"
              >
                {{$t('layout.footer.data_agreement')}}
              </a>
            </li>
            <li>
              <a
                href="#"
                class="font-normal text-base hover:text-gray-100"
              >
                {{$t('layout.footer.privacy_policy')}}
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="contact">
        <h5 class="text-xl font-semibold text-white">
          {{$t('layout.footer.contact')}}
        </h5>
        <div class="space-y-4 md:space-y-6 mt-4">
          <div class="flex items-start space-x-4">
            <div>
              <img
                class="w-6 h-6 mt-1"
                :src="require('../../../public/svg/map-marker-white.svg')"
                alt="Map marker"
              >
            </div>
            <div class="flex-1">
              <address
                class="not-italic"
                v-html="$t('layout.footer.address')"
              />
            </div>
          </div>
          <div class="flex items-start space-x-4">
            <div>
              <img
                class="w-6 h-6"
                :src="require('../../../public/svg/email-white.svg')"
                alt="Email"
              >
            </div>
            <span>info@sunflower.com</span>
          </div>
        </div>
      </div>
      <div>
        <h5 class="text-xl font-semibold text-white">
          {{$t('layout.footer.title_app')}}
        </h5>
        <div class="mt-4">
          <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg
              class="fill-current w-5 h-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span class="text-lg">{{$t('layout.footer.download_app')}}</span>
          </button>
        </div>
      </div>
    </div>
    <social-networks />
  </footer>
</template>

<script>
import SocialNetworks from '../SocialNetworks.vue';
export default {
  name: "FooterStore",
  components: {
    SocialNetworks
  }
};
</script>

<style>
</style>