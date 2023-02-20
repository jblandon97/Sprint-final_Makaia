import React, { useContext, useEffect, useState } from 'react'
import DishesSearch from '../components/DishesSearch'
import { dishesContext, restaurantsContext } from '../context'
import '../styles/Search.sass'

const Search = () => {
  const { getTotalDishes, totalDishes } = useContext(dishesContext.dishesContext)
  const { getRestaurants } = useContext(restaurantsContext.restaurantsContext)

  const [totalDishesLocal, setTotalDishesLocal] = useState()
  const [tempDishes, setTempDishes] = useState([])
  const [searchValue, setSearchValue] = useState()


  const handleSubmit = (event) => {

    const filtered = event.target.value

    for (let index = 0; index < totalDishesLocal.length; index++) {
      let restaurantDishes = totalDishesLocal[index]

      for (let i = 0; i < restaurantDishes.length; i++) {
        let dishes = restaurantDishes[i];
        if (tempDishes.length === 0) {
          setTempDishes(tempDishes => [...tempDishes, dishes])
        }

      }
    }
    console.log(tempDishes, "tempDishes");

    handleSearch(filtered, tempDishes)

  }

  const handleSearch = (_filtered, _array) => {

    let searchedDishes = _array.filter((dish) => {

      return dish.name.includes(_filtered) // With Category doesn't work

    })

    setSearchValue(searchedDishes)

  }


  useEffect(() => {

    if (totalDishes.length === 0) {
      getRestaurants()
      getTotalDishes()
    }

    setTotalDishesLocal(totalDishes)


  }, [totalDishes])

  console.log(totalDishesLocal, "totalDishesLocal");


  return (
    <>
      <div className='searchContainer'>
        <div className='glass'>
          <i className='fa-solid fa-magnifying-glass'></i>
        </div>
        <input
          className='form-control rounded-3'
          type='text'
          placeholder='Search for Burger, Pizza, Pasta or Salad...'
          onChange={event => handleSubmit(event)}
        />
      </div>
      <div className='mb-5'>
      <DishesSearch searchValue={searchValue} />
      </div>
    </>
  )
}

export default Search
