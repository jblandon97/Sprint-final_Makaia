import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../styles/Navbar.sass'


const Navbar = () => {
    return (
        <>
            <div className="container p-2">

                <Outlet />

            </div>
            <nav className="navbar navbar-expand-sm bg-light">

                <ul className="navbar-nav d-flex flex-row justify-content-around w-100">
                    <li className="nav-item px-3">
                        <Link className="nav-link" to="/" >
                            <i className="fa-solid fa-house-chimney"></i>
                        </Link>
                    </li>
                    <li className="nav-item px-3">
                        <Link className="nav-link" to="/search" >
                        <i className="fa-solid fa-magnifying-glass"></i>
                        </Link>
                    </li>
                    <li className="nav-item px-3">
                        <Link className="nav-link" to="/orders" >
                        <i className="fa-solid fa-clock-rotate-left"></i>
                        </Link>
                    </li>
                    <li className="nav-item px-3">
                        <Link className="nav-link" to="/profile" >
                        <i className="fa-regular fa-user"></i>
                        </Link>
                    </li>

                </ul>

            </nav>


        </>
    )
}

export default Navbar