import {

    collection,
    setDoc,
    doc

} from "firebase/firestore";

import { db } from "./firebase"

// CRUD USERS

const dbCollection = collection(db, "users")


export const createUser = async (user, id) => await setDoc(doc(dbCollection, id), user)

//setDoc(doc(basededatos, colleccion, id), data)