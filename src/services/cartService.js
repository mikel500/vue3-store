import { ref } from 'vue';

const items = ref([])

export default () => {
  const addToCart = (item, quantity = 1) => {
    const checkIteminCart = items.value.find(i => i.id === item.id)
    if (checkIteminCart !== undefined) {
      (quantity === 1) ? checkIteminCart.quantity++ : checkIteminCart.quantity += parseInt(quantity)
    } else {
      const cartItem = { ...item, quantity: 1 }
      items.value.push(cartItem)
    }
  }
  const deleteItem = (id) => {
    const checkIteminCart = items.value.find(i => i.id === id)
    if (checkIteminCart !== undefined) {
      checkIteminCart.quantity = 0
      for (const [index, value] of items.value.entries()) {
        if (value.quantity == 0) {
          items.value.splice(index, 1);
        }
      }
    }
  }
  const getQuantity = () => {
    let quantity = 0
    items.value.forEach(item => {
      quantity += parseInt(item.quantity)
    })

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
    getTotal
  }
}