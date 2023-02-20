import React from 'react'
import { Link, useParams } from 'react-router-dom'

const DishesList = ({ dishesCon }) => {

    const { Rid } = useParams()

    const LINK_ADDRESS = `/restaurantDetails/${Rid}/`

    return (
        <>
            <div className='restaurant-dishes container row'>
                {dishesCon &&
                    dishesCon.map(({ name, price, image, id }) => (
                        <div className='dish col-5 mb-2 mx-auto align-items-center' key={id}>
                            <Link to={`${LINK_ADDRESS}${id}`}>
                                <img className='rounded-3' src={image} alt='dish reference' />
                                <div className='dish-info'>
                                    <h6 className='info-title mb-0'>{name}</h6>
                                    <p className='info-price mb-0 text-body-tertiary'>Price: ${price}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
            </div>
        </>
    )
}

export default DishesList
