import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Navbar } from "./layout";
import { Home, Search, Profile, Orders, Login, RestaurantDetails, DishDetails } from "./pages"

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Navbar />} >
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/search/:Rid/:Did/" element={<DishDetails />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/profile" element={<Profile />} />
            </Route>id
            <Route path="/restaurantDetails/:Rid/*" element={<RestaurantDetails />} />
            <Route path="/restaurantDetails/:Rid/:Did" element={<DishDetails />} />
        </>
    )
)