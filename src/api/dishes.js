import {

  collection,
  addDoc,
  getDocs,
  getDoc,
  doc

} from "firebase/firestore";

import { db } from "./firebase"

// CRUD DISHES

export const getDishes = async (restaurantId) => {

  const dbCollection = collection(db, `foodList/${restaurantId}/plates`)
  console.log(dbCollection);

  const firebaseDishes = await getDocs(dbCollection)

  const dishes = []

  firebaseDishes.docs.forEach(d => {
    const dish = d.data()
    dish.id = d.id
    dishes.push(dish)
    /*     data.push(doc.data({...user, id})) */
  })
  
  console.log(dishes);
  

/*   console.log(dishes, "API"); */
  return { dishes }
}

export const getDishDetail = async (_restaurantId, _dishId) => {

  const dbCollection = collection(db, `restaurants/${_restaurantId}/dishes/`)

  const dishDetail = await getDoc(doc(dbCollection, _dishId))
  const dish = dishDetail.data()
  dish.id = dishDetail.id

  return { data: dish }
}

export const createDish = async (dish, restaurantId) => {

  const dbCollection = collection(db, `restaurants/${restaurantId}/dishes`)

  await addDoc(dbCollection, dish)

}