import { Filters } from './Filters.jsx'

// componente que muestra la etiqueta Header y un componente Filters
export function Header () {
  return (
    <header>
      <h1>Technology Shop 🛒</h1>
      <Filters />
    </header>
  )
}