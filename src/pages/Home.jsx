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
              <img src="https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png" className='w-25' alt="" />
            </div>

            <div className="filter-btns d-flex mb-4 w-100">
              <button onClick={() => filterButtons("all")} className="filter-btn btn m-1">Todos</button>
              <button onClick={() => filterButtons("burger")} className="filter-btn btn m-1">Hamburguesa</button>
              <button onClick={() => filterButtons("pizza")} className="filter-btn btn m-1">Pizza</button>
              <button onClick={() => filterButtons("soap")} className="filter-btn btn m-1">Sopas</button>
              <button onClick={() => filterButtons("pasta")} className="filter-btn btn m-1">Pasta</button>
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