import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { app } from "./firebase";


// AUTHENTICATION WITH FIREBASE
export const auth = getAuth(app)

const authProvider = new GoogleAuthProvider()

export const login = async () => {

  authProvider.setCustomParameters({ prompt: "select_account" })
  const res = await signInWithPopup(auth, authProvider)
  
  return res.user
}

export const logout = async () =>  await signOut(auth)