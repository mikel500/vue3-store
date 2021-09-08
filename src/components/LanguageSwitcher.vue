<template>
  <div class="language-switcher">
    <select
      class="uppercase"
      v-model="currentLang"
    >
      <option
        v-for="(lang, i) in langs"
        :key="`Lang${i}`"
        :value="lang"
      >
        {{ lang }}
      </option>
    </select>
  </div>
</template>

<script>
import useLanguageSwitcher from '@/composable/useLanguageSwitcher.js';
export default {
  name: 'LanguageSwitcher',
  setup () {
    const { langs, currentLang } = useLanguageSwitcher()
    return {
      langs,
      currentLang
    }
  }
}
</script>