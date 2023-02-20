import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { auth as authAPI } from '../api'
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
        <div className="profile-item d-flex flex-row align-items-center justify-content-between px-3 py-2 my-1 rounded-3 bg-body-secondary">
          <i className="fa-regular fa-user"></i>
          <p className='my-0'>Edit Account</p>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
        <div className="profile-item d-flex flex-row align-items-center justify-content-between px-3 py-2 my-2 rounded-3 bg-body-secondary">
          <i className="fa-solid fa-wallet"></i>
          <p className='my-0'>Payment</p>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
        <div className="profile-item d-flex flex-row align-items-center justify-content-between px-3 py-2 my-2 rounded-3 bg-body-secondary">
          <i className="fa-solid fa-globe"></i>
          <p className='my-0'>Language</p>
          <p className='my-0'>ENG</p>
        </div>
        <div className="profile-item d-flex flex-row align-items-center justify-content-between px-3 py-2 my-2 rounded-3 bg-body-secondary">
          <i className="fa-solid fa-location-dot"></i>
          <p className='my-0'>Location</p>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
        <div className="profile-item d-flex flex-row align-items-center justify-content-between px-3 py-2 my-2 rounded-3 bg-body-secondary">
          <i className="fa-regular fa-circle-question"></i>
          <p className='my-0'>FAQ</p>
          <i className="fa-solid fa-chevron-right"></i>
        </div>
        <div className="profile-item d-flex flex-row align-items-center justify-content-between px-3 py-2 my-2 rounded-3 bg-body-secondary">
          <i className="fa-solid fa-phone"></i>
          <p className='my-0'>Support</p>
          <i className="fa-solid fa-chevron-right"></i>
        </div>

        <button className='btn btn-warning mb-3' onClick={handleLogout}>Logout</button>
      </div>
    </>
  )
}

export default Profile