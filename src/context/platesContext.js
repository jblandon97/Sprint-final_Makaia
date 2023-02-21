import { createContext, useState } from "react";
import { dishes, restaurants } from "../services";

export const dishesContext = createContext()

export const DishesProvider = ({ children }) => {

    const [dishesCon, setDishesCon] = useState(null) // DISHES FROM ONE RESTAURANT

    const [currentDish, setCurrentDish] = useState(null) // JUST ONE DISH

    const [totalDishes, setTotalDishes] = useState([]) // ALL DISHES FROM ALL RESTAURANTS

    const getDishes = async (restaurantId) => {
        try {

            const dishesApi = await dishes.getDishes(restaurantId)

            setDishesCon(dishesApi.dishes)

        } catch (error) {
            console.log("Error getDishes", error.message);
        }

    }

    const getDishDetail = async (_restaurantId, _dishId) => {
        try {

            const dishDetailApi = await dishes.getDishDetail(_restaurantId, _dishId)

            setCurrentDish(dishDetailApi.data)

        } catch (error) {
            console.log("Error getDishes", error.message);
        }
    }


    const getTotalDishes = async () => {
        const restApi = await restaurants.getRestaurants()
        restApi.restaurants.forEach(async (r) => {
            let restaurantId = r.id
            console.log(restaurantId);
            let restDishes = await dishes.getDishes(restaurantId)
            setTotalDishes(totalDishes => [...totalDishes, restDishes.dishes])

        })
    }
/*     console.log(totalDishes, "TOTAL DISHES FROM CONTEXT"); */

    const valuesContext = {
        getDishes, dishesCon, getDishDetail, currentDish, setCurrentDish,
        getTotalDishes, totalDishes

    }


    return (
        <>

            <dishesContext.Provider value={valuesContext}>
                {children}
            </dishesContext.Provider>

        </>
    )



}