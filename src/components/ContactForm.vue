<template>
  <div class="bg-green-100 px-7 py-14">
    <h2 class="text-2xl">{{$t('contact.form.title')}} </h2>
    <p class="py-6">Dignissim mattis quis neque eu ut id scelerisque at cras luctus pellentesque enim eget.</p>
    <form class="grid grid-cols-1 gap-6">
      <label class="block">
        <span class="text-gray-700">{{$t('contact.form.name')}}</span>
        <input
          type="text"
          class="p-2 mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
        >
      </label>
      <label class="block">
        <span class="text-gray-700">{{$t('contact.form.email')}}</span>
        <input
          type="email"
          class="p-2 mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
        >
      </label>
      <label class="block">
        <span class="text-gray-700">{{$t('contact.form.subject')}}</span>
        <input
          type="text"
          class="p-2 mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
        >
      </label>
      <label class="block">
        <span class="text-gray-700">{{$t('contact.form.details')}}</span>
        <textarea
          class="p-2 mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
          rows="3"
        ></textarea>
      </label>
      <div class="block">
        <div class="mt-2">
          <div>
            <label class="inline-flex items-center">
              <input
                type="checkbox"
                class="rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500"
              >
              <span class="ml-2">{{$t('contact.form.accept_offers')}}</span>
            </label>
          </div>
        </div>
      </div>
      <button
        type="button"
        class="px-8 py-3 font-medium rounded-md text-white bg-gray-800 shadow w-44"
      >
        {{$t('contact.form.button')}}
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactForm'
}
</script>

<style>
</style>