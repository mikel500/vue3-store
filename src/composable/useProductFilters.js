import { ref, watch } from 'vue';
import { readonly } from '@vue/reactivity';
import getLanguage from '@/services/languageService.js';
import getFilters from '@/services/filterService.js';
import getSortService from '@/services/sortService.js';


export default () => {
  const categories = ref([
    { name: "indoor", status: false },
    { name: "outdoor", status: false },
    { name: "orchard", status: false },
    { name: "seeds", status: false }
  ])
  const price = ref(100)
  const stars = ref(null)
  const sort = ref('lowest-price')
  const { language } = getLanguage()
  const { filterByCategory, filterByPrice, filterByReviews } = getFilters()
  const { sortStore } = getSortService()
  const plants = ref(require(`../plants/${language.value}.json`))
  const filteredPlants = ref([...plants.value])
  filteredPlants.value.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
  const visiblePlants = ref(filteredPlants.value.splice(0, 8))

  watch(language, (newValue) => {
    plants.value = require(`../plants/${newValue}.json`)
    filteredPlants.value = [...plants.value]
    visiblePlants.value = filteredPlants.value.splice(0, 8)
  })
  watch(price, () => {
    getFilteredItems()
  })
  watch(sort, () => {
    getFilteredItems()
  })

  const getFilteredItems = (changes = null) => {
    if (changes) {
      if (changes.filter === 'stars') {
        stars.value = parseInt(changes.value)
      } else if (changes.filter === 'categories') {
        categories.value = changes.value
      }
    }
    let filteredItems = [...plants.value]
    visiblePlants.value = []
    filteredItems = filterByCategory(filteredItems, categories.value)
    filteredItems = filterByPrice(filteredItems, price.value)
    filteredItems = filterByReviews(filteredItems, stars.value)
    filteredItems = sortStore(filteredItems, sort.value)
    filteredPlants.value = filteredItems
    visiblePlants.value = filteredPlants.value.splice(0, 8)
  }

  const showMoreItems = () => {
    const splice = filteredPlants.value.splice(0, 8)
    visiblePlants.value.push(...splice)
  }

  const cleanFilters = (filters) => {
    switch (filters) {
      case "all":
        price.value = 100
        stars.value = null
        categories.value.forEach((category) => { return category.status = false })
        getFilteredItems()
        break;
      case "categories":
        categories.value.forEach((category) => { return category.status = false })
        getFilteredItems()
        break;
      case "price":
        visiblePlants.value = []
        price.value = 100
        break;
      case "reviews":
        stars.value = null;
        getFilteredItems()
        break;
    }
  }

  return {
    visiblePlants: readonly(visiblePlants),
    filteredPlants: readonly(filteredPlants),
    categories,
    price,
    stars,
    sort,
    getFilteredItems,
    showMoreItems,
    cleanFilters
  }
}