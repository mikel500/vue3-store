<template>
  <nav class="header-menu bg-gray-800">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            @click="menuIsActive = !menuIsActive"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              class="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <router-link
            to="/"
            class="flex items-center text-2xl text-white tracking-widest"
          >
            Sunfl🌻wer
          </router-link>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <router-link
                to="/"
                class="menu-link"
              >
                {{ $t('layout.header.menu[0]') }}
              </router-link>
              <router-link
                to="/store"
                class="menu-link"
              >
                {{ $t('layout.header.menu[1]') }}
              </router-link>
              <router-link
                to="/contact"
                class="menu-link"
              >
                {{ $t('layout.header.menu[2]') }}
              </router-link>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <cart />
          <div class="dropdown ml-2 mr-2 relative">
            <div class="hidden md:block pt-px">
              <button
                type="button"
                class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                @click="userMenuIsActive = !userMenuIsActive"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8"
                  :src="require('../../../public/svg/user.svg')"
                  alt="User Menu"
                />
              </button>
            </div>
            <div class="dropdown-menu hidden origin-top-right absolute right-0 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700"
              >
                {{ $t('layout.header.user_menu[0]') }}
              </a>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700"
              >
                {{ $t('layout.header.user_menu[1]') }}
              </a>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700"
              >
                {{ $t('layout.header.user_menu[2]') }}
              </a>
            </div>
          </div>
          <language-switcher class="hidden sm:block" />
        </div>
      </div>
    </div>
    <div
      v-if="menuIsActive"
      class="sm:hidden"
      id="mobile-menu"
    >
      <div class="px-2 pt-2 pb-3 space-y-1 flex flex-col">
        <router-link
          @click="menuIsActive = !menuIsActive"
          to="/"
          class="menu-link"
        >
          {{ $t('layout.header.menu[0]') }}
        </router-link>
        <router-link
          @click="menuIsActive = !menuIsActive"
          to="/store"
          class="menu-link"
        >
          {{ $t('layout.header.menu[1]') }}
        </router-link>
        <router-link
          @click="menuIsActive = !menuIsActive"
          to="/contact"
          class="menu-link"
        >
          {{ $t('layout.header.menu[2]') }}
        </router-link>
        <router-link
          @click="menuIsActive = !menuIsActive"
          to="#"
          class="md:hidden menu-link"
        >
          {{ $t('layout.header.user_menu[0]') }}
        </router-link>
        <button
          @click="changeLanguageonMobile('es')"
          class="menu-link text-left"
        >
          ESPAÑOL
        </button>
        <button
          @click="changeLanguageonMobile('en')"
          class="menu-link text-left"
        >
          ENGLISH
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import Cart from '@/components/Cart.vue'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import useLanguageSwitcher from '@/composable/useLanguageSwitcher.js'

export default {
  components: { LanguageSwitcher, Cart },
  name: 'HeaderStore',
  setup () {
    const {
      menuIsActive,
      userMenuIsActive,
      changeLanguageonMobile,
    } = useLanguageSwitcher()
    return {
      menuIsActive,
      userMenuIsActive,
      changeLanguageonMobile,
    }
  }
}
</script>

<style>
.header-menu .menu-link {
  @apply text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium;
}
</style>
