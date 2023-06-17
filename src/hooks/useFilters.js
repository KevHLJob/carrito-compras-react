import { useContext } from 'react'
import { FiltersContext } from '../context/filters.jsx'

export function useFilters () {
  //utilización del useContext desde context.filters
  const { filters, setFilters } = useContext(FiltersContext) 
  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  return { filters, filterProducts, setFilters }
}