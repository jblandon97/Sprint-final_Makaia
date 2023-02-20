import React from 'react'

const DishDetail = ({ currentDish }) => {
    return (
        <>
            <img className='rounded-3 m-auto mb-4' width={"90%"} src={currentDish.image} alt="dish reference" />
            <div>
                <div className='d-flex justify-content-between mx-2'>
                    <h3>{currentDish.name}</h3>
                    <p><i className="fa-regular fa-clock"></i> {currentDish.cookingTime}</p>
                </div>
                <p className='mx-2'>{currentDish.description}</p>

                <div className='d-flex btns-dish-info'>
                    <div className="row mx-2">
                        <div className='input-group bg-body-tertiary rounded-2 col'>
                            <button className="btn">+</button>
                            <input type="text" className="form-control bg-body-tertiary border-0" />
                            <button className="btn">-</button>
                        </div>
                        <div className="col-2"></div>
                        <button className='col-5 btn btn-warning d-flex justify-content-around btn-add'><span className='add-text-dish'>Add</span> ${currentDish.price}</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default DishDetail