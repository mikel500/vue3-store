export default () => {
  const getCheckedCategoriesName = (categories) => categories.filter((category) => category.status).map((category) => category.name)

  const filterByCategory = (items, categories) => {
    const checkedCategories = getCheckedCategoriesName(categories)
    if (checkedCategories.length > 0) {
      return items.filter((item) => checkedCategories.includes(item.category))
    } else {
      return [...items]
    }
  }

  const filterByPrice = (items, price) => items.filter((plant) => plant.price <= price)

  const filterByReviews = (items, stars) => {
    if (stars !== null) {
      return items.filter((plant) => plant.stars >= stars)
    } else {
      return items
    }
  }

  return {
    filterByCategory,
    filterByPrice,
    filterByReviews
  }
}