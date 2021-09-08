<template>
  <div class="container mx-auto max-w-6xl">
    <div class="py-8 mx-auto lg:px-8">
      <h2 class="text-3xl lg:text-5xl font-semibold text-gray-800 dark:text-white text-center py-12">{{$t('contact.title')}}</h2>
      <div class="lg:flex lg:justify-between text-center">
        <div class="pb-6 space-y-6">
          <img
            class="w-10 h-10 mx-auto"
            :src="require('../../public/svg/phone.svg')"
            alt="Phone"
          >
          <address class="not-italic text-xl">
            +34 686 686 686<br>
            +34 868 868 868
          </address>
        </div>
        <div class="pb-6 space-y-6">
          <img
            class="w-10 h-10 mx-auto"
            :src="require('../../public/svg/email.svg')"
            alt="Email"
          >
          <address class="not-italic text-xl">
            info@sunflower.com <br>
            support@sunflower.com
          </address>
        </div>
        <div class="space-y-6">
          <img
            class="w-10 h-10 mx-auto"
            :src="require('../../public/svg/map-marker.svg')"
            alt="Map marker"
          >
          <address
            class="not-italic text-xl"
            v-html="$t('contact.address')"
          />
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 place-content-center py-8">
      <contact-form class="lg:ml-auto" />
      <iframe
        class="h-64 lg:min-h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11972.750851358536!2d2.1863953218131864!3d41.39172964540061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2fd439609e1%3A0x42386118e65a3d70!2sCiutadella%20Park!5e0!3m2!1sen!2ses!4v1628602537402!5m2!1sen!2ses"
        allowfullscreen="true"
        width="100%"
        height="100%"
        loading="lazy"
      ></iframe>
    </div>
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue'
export default {
  name: 'Contact',
  components: { ContactForm }
}
</script>

<style>
</style>