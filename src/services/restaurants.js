import {

  collection,
  addDoc,
  getDocs,
  getDoc,
  doc

} from "firebase/firestore";

import { db } from "./firebase"

// CRUD RESTAURANTS

const dbCollection = collection(db, "foodList")

export const getRestaurants = async () => {
  const firebaseRestaurants = await getDocs(dbCollection)

  const restaurants = []

  firebaseRestaurants.docs.forEach(d => {
    const rest = d.data()
    rest.id = d.id
    restaurants.push(rest)

    /*     data.push(doc.data({...user, id})) */
  })

  console.log(restaurants);
  return { restaurants }
}

export const getRestaurantDetail = async (_id) => {

  const restaurantDetail = await getDoc(doc(dbCollection, _id))
  const restaurant = restaurantDetail.data()
  restaurant.id = restaurantDetail.id
  return { data: restaurant }

}

export const createRestaurant = async (restaurant) => await addDoc(dbCollection, restaurant)

