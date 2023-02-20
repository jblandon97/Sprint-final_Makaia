import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router';
import { auth, restaurantsContext, dishesContext } from './context';
import { router } from './Router';
import './styles/App.sass'


const App = () => {

  useEffect(() => {
    document.title = "Food Delivery App Sprint Jared"
  }, []);

  return (
    <>
      <restaurantsContext.RestaurantsProvider>
        <dishesContext.DishesProvider>

          <auth.AuthProvider>
            <RouterProvider router={router} />
          </auth.AuthProvider>

        </dishesContext.DishesProvider>
      </restaurantsContext.RestaurantsProvider>
    </>
  );
}

export default App;
