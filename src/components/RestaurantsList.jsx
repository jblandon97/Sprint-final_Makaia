import React from 'react'
import { Link } from 'react-router-dom'


const RestaurantsList = ({ list }) => {

    const LINK_ADDRESS = `/restaurantDetails/`


    return (
        <>

            {
                list && list.map(({ banner, name, stars, schedule, id }) => (

                    <div className='restaurants-section mb-3'key={id}>
                        <Link to={`${LINK_ADDRESS}${id}`} >
                            <div className="restaurant d-flex mb-2 align-items-center">
                                <img className='mx-1 rounded-3' src={banner} alt="restaurant reference" />
                                <div className="restaurant-info">
                                    <h5 className='restaurant-info-title mb-0'>{name}</h5>
                                    <p className='restaurant-info-stars mb-0'>{stars}</p>
                                    <p className='restaurant-info-schedule mb-0 '>Work time: {schedule}</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                ))
            }
        </>
    )
}

export default RestaurantsList