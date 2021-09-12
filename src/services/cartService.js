import { ref } from 'vue'
import i18n from '../i18n'
import notificationService from './notificationService'

const items = ref([])

export default () => {
  const { storedArticleMessage } = notificationService()

  const addToCart = (item, quantity = 1) => {
    if (quantity && quantity !== '0') {
      const parsedQuantity = parseInt(quantity)
      let checkItemInCart = items.value.find((i) => i.id === item.id)
      if (checkItemInCart !== undefined) {
        if (parsedQuantity === 1) {
          checkItemInCart.quantity++
          storedArticleMessage(i18n.global.t('store.product_added'))
        } else {
          checkItemInCart.quantity = checkItemInCart.quantity + parsedQuantity
          storedArticleMessage(quantity + i18n.global.t('store.products_added'))
        }
      } else {
        const cartItem = { ...item, quantity: parsedQuantity }
        items.value.push(cartItem)
        quantity === 1
          ? storedArticleMessage(i18n.global.t('store.product_added'))
          : storedArticleMessage(
              parsedQuantity + i18n.global.t('store.products_added'),
            )
      }
    }
  }
  const deleteItem = (id) => {
    const checkIteminCart = items.value.find((i) => i.id === id)
    if (checkIteminCart !== undefined) {
      checkIteminCart.quantity = 0
      for (const [index, value] of items.value.entries()) {
        if (value.quantity == 0) {
          items.value.splice(index, 1)
        }
      }
    }
  }
  const getQuantity = () => {
    let quantity = 0
    items.value.forEach((item) => {
      quantity += parseInt(item.quantity)
    })
    if (isNaN(quantity)) {
      return 0
    }
    return quantity
  }
  const getQuantityPerPrice = (quantity, price) => {
    const result = quantity * price
    return result.toFixed(2)
  }
  const getTotal = () => {
    let total = 0
    for (const item of items.value) {
      const quantityPerPrice = item.quantity * item.price
      total += quantityPerPrice
    }
    return total.toFixed(2)
  }
  return {
    items,
    addToCart,
    deleteItem,
    getQuantity,
    getQuantityPerPrice,
    getTotal,
  }
}
