import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import cartService from '@/services/cartService.js';
import getLanguage from '@/services/languageService.js';

export default () => {
  const route = useRoute()
  const itemQuantity = ref(1)
  const { language } = getLanguage()
  const { items, addToCart } = cartService()
  const productId = parseInt(route.params.productId)
  const productData = ref(items.value.find(product => product.id === productId))

  if (productData.value) {
    itemQuantity.value = productData.value.quantity
  } else {
    const products = require(`../plants/${language.value}.json`)
    productData.value = products.find(product => product.id === productId)
  }

  watch(language, (newValue) => {
    const products = require(`../plants/${newValue}.json`)
    productData.value = products.find(product => product.id === productId)
  })
  
  const getOutlineStar = (n) => 5 - n
  
  return {
    getOutlineStar,
    productData,
    itemQuantity,
    addToCart
  }
}