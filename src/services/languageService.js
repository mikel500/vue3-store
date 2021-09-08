import { ref } from 'vue';
import { readonly } from '@vue/reactivity';
import i18n from '@/i18n.js'

const language = ref('')
language.value = i18n.global.locale
export default () => {
  const changeLang = (lang) => {
    language.value = lang;
    i18n.global.locale = lang
  }
  return {
    language: readonly(language),
    changeLang
  }
}