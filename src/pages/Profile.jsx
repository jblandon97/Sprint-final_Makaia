import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { auth as authAPI } from '../services'
import { auth } from '../context'


const Profile = () => {


  const { user } = useContext(auth.authContext)

  let navigate = useNavigate()

  const handleLogout = () => {
    authAPI.logout()
    navigate("/login")
  }

  return (
    <>
      <div className='container d-flex flex-column mb-5'>
        <img className='rounded-circle align-self-center' src={user.photoURL} width={"50%"} alt={user.displayName} />
        <h3 className='align-self-center my-3'>{user.displayName}</h3>
        <p className='align-self-center'>{user.email}</p>
        <button className='btn btn-warning mb-3' onClick={handleLogout}>Logout</button>
      </div>
    </>
  )
}

export default Profile