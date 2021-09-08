import putLanguage from '@/services/languageService.js';
import i18n from '@/i18n.js'
import { ref, watch } from 'vue';

export default () => {
  const langs = ['en', 'es']
  const currentLang = ref(i18n.global.locale)
  const { changeLang } = putLanguage();
  const menuIsActive = ref(false)
  const userMenuIsActive = ref(false)
 
  watch(currentLang, (newValue) => {
    changeLang(newValue)
  })

  const changeLanguageonMobile = (lang) => {
    changeLang(lang)
    menuIsActive.value = !menuIsActive.value
  }
  return {
    langs,
    currentLang,
    menuIsActive,
    userMenuIsActive,
    changeLanguageonMobile
  }
}