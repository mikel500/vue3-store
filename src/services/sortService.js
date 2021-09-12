import { ref } from 'vue'

const sort = ref('lowest-price')

export default () => {
  const sortStore = (items, sort) => {
    switch (sort) {
      case 'lowest-price':
        return items.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
      case 'highest-price':
        return items.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
      case 'reviews':
        return items.sort((a, b) => parseFloat(b.stars) - parseFloat(a.stars))
    }
  }
  return {
    sort,
    sortStore,
  }
}
