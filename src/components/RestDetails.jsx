import React from 'react'

const RestDetails = ({ currentRest }) => {
    return (
        <>
            <div className="restaurant-detail">
                <div className="restaurant d-flex mb-2 align-items-center">
                    <img className='ms-4 rounded-3' src={currentRest.banner} alt="restaurant reference" />
                    <div className="restaurant-info mx-3">
                        <h5 className='info-title mb-0'>{currentRest.name}</h5>
                        <p className='info-description mb-0 fw-lighter'>{currentRest.description}</p>
                        <p className='info-stars mb-0'>{currentRest.stars}</p>
                        <p className='info-schedule mb-0 bg-body-secondary rounded-2 px-2'>Work time: {currentRest.schedule}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RestDetails