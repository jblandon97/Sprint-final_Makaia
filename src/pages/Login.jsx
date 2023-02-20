import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { auth, users } from '../api'
import { auth as authCont } from '../context'
import logo from "../logos/logo.png"
import '../styles/Login.sass'


const Login = () => {

    const { setUser } = useContext(authCont.authContext)

    let navigate = useNavigate()


    const handleClick = async () => {
        try {
            const _user = await auth.login()
            setUser(_user)
            const { displayName, email, photoURL, uid } = _user
            await users.createUser({ displayName, email, photoURL }, uid)
            
            navigate("/")

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>
            <div className="login">
                <div className="container d-flex flex-column align-items-center ">
                    <img className="logo-app m-5" src={logo} alt="logo app" />
                    <h3 className="">Sign in</h3>
                    <p className="text-center">Login or create an account with your email to start ordering</p>
                </div>
                <div>
                    <p className='terms m-0'>By clicking the button next you accept</p>
                    <p className="terms text-decoration-underline">Terms of use</p>
                    <button className="btn btn-warning btnLogin w-100" onClick={handleClick}>Login</button>
                </div>
            </div>
        </>

    )
}

export default Login