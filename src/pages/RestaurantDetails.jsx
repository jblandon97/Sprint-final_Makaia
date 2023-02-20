import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { restaurantsContext, dishesContext } from '../context'
import RestDetails from '../components/RestDetails'
import DishesList from '../components/DishesList'
import "../styles/RestaurantDetails.sass"
import logoLoading from "../logos/Splash screen.png"



const RestaurantDetails = () => {

    const { Rid } = useParams()

    const { getRestaurantDetail, currentRest, setCurrentRest } = useContext(restaurantsContext.restaurantsContext)
    const { getDishes, dishesCon } = useContext(dishesContext.dishesContext)

    useEffect(() => {

        if (Rid) {
            setCurrentRest(null)
            getRestaurantDetail(Rid)
            getDishes(Rid)
        }
    }, [Rid])

    return (

        <>
            {
                currentRest ? (
                    <>
                        <Link to={"/"}>
                            <i className="fa-solid fa-chevron-left m-3"></i>
                        </Link>

                        <RestDetails currentRest={currentRest} />

                        <h5 className='m-4'>Our Dishes:</h5>

                        <DishesList dishesCon={dishesCon} />
                    </>
                ) : (
                    <div className='d-flex loader bg-warning place-content-center'>
                        <img className='m-auto w-25' src={logoLoading} alt="loading" />
                    </div>
                )
            }

        </>
    )
}

export default RestaurantDetails