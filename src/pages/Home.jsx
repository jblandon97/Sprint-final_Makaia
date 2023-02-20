import React, { useContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router'
import RestaurantsList from '../components/RestaurantsList'
import { auth, restaurantsContext } from '../context'
import '../styles/Home.sass'

const Home = () => {

  const { user } = useContext(auth.authContext)

  const { getRestaurants, rest } = useContext(restaurantsContext.restaurantsContext)

  const [restCopy, setRestCopy] = useState()

  useEffect(() => {
    if (!rest) {
      getRestaurants()
    }
    setRestCopy(rest)
  }, [rest])


  // FILTER BUTTONS //

  const filterButtons = (_category) => {

    if (_category === 'all') {
      setRestCopy(rest)
    } else {
      let restFiltered = rest.filter(({ categories }) => {

        return categories.includes(_category)

      })

      setRestCopy(restFiltered)
    }

  }


  return (<>
    {
      user ? (
        <>
          <div className="home-container h-100">
            <div className="ubication d-flex flex-row">
              <i className="fa-solid fa-location-dot m-0 p-2"></i>
              <div>
                <span className='mx-2 deliver'>DELIVER TO</span>
                <p>882 Well St, New-York <i className="fa-solid fa-chevron-down"></i></p>
              </div>
            </div>
            <div className="promotion">
              <img src="https://res.cloudinary.com/dif29zscp/image/upload/v1676235799/food-app-delivery-s4/Promotions/Promo_1_hwfa6z.png" alt="" />
            </div>

            <p className=''>
              Restaurants and cafes
            </p>
            <div className="filter-btns d-flex mb-4 w-100">
              <button onClick={() => filterButtons("all")} className="filter-btn btn m-1">All</button>
              <button onClick={() => filterButtons("burger")} className="filter-btn btn m-1">🍔 Burgir</button>
              <button onClick={() => filterButtons("pizza")} className="filter-btn btn m-1">🍕 Pizza</button>
              <button onClick={() => filterButtons("salad")} className="filter-btn btn m-1">🥗 Salad</button>
              <button onClick={() => filterButtons("pasta")} className="filter-btn btn m-1">🍝 Pasta</button>
            </div>


            <div className="mb-5">
              <RestaurantsList list={restCopy} />
            </div>

          </div>
        </>
      ) :
        (
          <Navigate to='/login' />
        )
    }
  </>
  )
}

export default Home