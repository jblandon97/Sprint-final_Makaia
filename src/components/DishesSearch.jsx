import React from 'react'
import { Link } from 'react-router-dom'
import SearchNotFound from './SearchNotFound'

const DishesSearch = ({ searchValue }) => {

  const LINK_ADDRESS = '/search/'


  if (searchValue && searchValue.length === 0) {
    return (
      <SearchNotFound />
    )
  }

  return (
    <>
      {
        searchValue && searchValue.map((search) => {
          let { name, price, image, id, restaurant } = search

          return (
            <div key={id} className='restaurants-section mb-3'>
              <Link to={`${LINK_ADDRESS}${restaurant}/${id}`}>
              <div className="restaurant d-flex mb-2 align-items-center">
                <img className='mx-1 rounded-3' src={image} width={"18%"} alt="dish reference" />
                <div className="restaurant-info mx-2">
                  <h6 className='restaurant-info-title mb-0'>{name}</h6>
                  <p className='restaurant-info-schedule mb-0 text-body-tertiary'>Price: $ {price}</p>
                </div>
              </div>
              </Link>
            </div>
          )
        })
      }

    </>
  )
}

export default DishesSearch