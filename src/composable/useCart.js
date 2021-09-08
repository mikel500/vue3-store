import { watch } from 'vue';
import cartService from '@/services/cartService.js';
import getLanguage from '@/services/languageService.js';

export default () => {
  const { items, addToCart, deleteItem, getQuantityPerPrice, getTotal, getQuantity } = cartService();
  const { language } = getLanguage();

  watch(language, (newValue) => {
    const products = require(`../plants/${newValue}.json`)
    const translatedItems = products.filter((product) => items.value.some((item) => {
      if (item.id === product.id) {
        product.quantity = item.quantity
        return product;
      }
    }));
    items.value = translatedItems;
  })

  return {
    items,
    addToCart,
    deleteItem,
    getQuantityPerPrice,
    getTotal,
    getQuantity
  }
}
