import { useState, createContext } from "react";
import { restaurants } from "../api";

export const restaurantsContext = createContext()

export const RestaurantsProvider = ({ children }) => {

    const [rest, setRest] = useState()  // ALL RESTAURANTS

    const [currentRest, setCurrentRest] = useState(null) // CURRENT RESTAURANT

    const getRestaurants = async () => { 
        try {

            const restaurantsApi = await restaurants.getRestaurants()

            setRest(restaurantsApi.restaurants)
            
        } catch (error) {
            console.log("Error getRestaurants", error.message);
        }
    }

    const getRestaurantDetail = async (_id) => { 
        try {

            const restaurantDetailApi = await restaurants.getRestaurantDetail(_id)

            setCurrentRest(restaurantDetailApi.data)
            
        } catch (error) {
            console.log("Error getRestaurantDetail", error.message);

        }
    }

    return (
        <>
            <restaurantsContext.Provider value={{ getRestaurants, rest, getRestaurantDetail, currentRest, setCurrentRest}}>
                {children}
            </restaurantsContext.Provider>
        </>
    
    )
}

