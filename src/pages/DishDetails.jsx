import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { dishesContext } from '../context'
import logoLoading from "../logos/Splash screen.png"
import DishDetail from "../components/DishDetail"




const DishDetails = () => {
    const { Rid, Did } = useParams()
    const LINK_ADDRESS = `/restaurantDetails/${Rid}`

    const { getDishDetail, currentDish, setCurrentDish } = useContext(dishesContext.dishesContext)


    useEffect(() => {

        if (Did) {
            setCurrentDish(null)
            getDishDetail(Rid, Did)
        }
    }, [Did])

    console.log("CURRENT DISH", currentDish);

    return (
        <>
            {
                currentDish ? (
                    <>
                        <div className="d-flex flex-column mb-5">
                            <Link to={LINK_ADDRESS}>
                                <i className="fa-solid fa-chevron-left m-3"></i>
                            </Link>
                            <DishDetail currentDish={currentDish} />
                        </div>
                    </>
                ) : (
                    <>
                        <Link className='position-absolute' to={LINK_ADDRESS}>
                            <i className="fa-solid fa-chevron-left m-3 position-relative"></i>
                        </Link>
                        <div className='d-flex loader bg-warning place-content-center m-0'>
                            <img className='m-auto w-25' src={logoLoading} alt="loading" />
                        </div>
                    </>
                )
            }
        </>
    )
}

export default DishDetails