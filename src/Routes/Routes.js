import { createBrowserRouter } from "react-router-dom";
import Reviews from "../Components/Reviews";
import Main from "../Layouts/Main";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Home from "../Pages/Home/Home";
import MyReviews from "../Pages/Review/MyReviews";
import Recipe from "../Pages/Recipe/Recipe";
import Recipies from "../Pages/Recipe/Recipies";
import Review from "../Pages/Review/Review";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddRecipe from "../Pages/Recipe/AddRecipe";
import MyRecipes from "../Pages/Recipe/MyRecipes";
import PrivateRoute from "../Pages/Auth/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
        element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/recipes",
        element: <Recipies></Recipies>,
      },
      {
          path: "/recipe/:id",
          loader: ({params})=>fetch(`http://localhost:5001/recipe/${params.id}`),
          element: <Recipe></Recipe>
        },
        {
            path: "/review/:id",
            loader: ({params})=>fetch(`http://localhost:5001/recipe/${params.id}`),
            element:<PrivateRoute><Review></Review></PrivateRoute>
        },
        {
            path: '/login',
            element:<Login></Login>
        },
        {
            path: '/register',
            element:<Register></Register>
        },
        {
            path: '/myreviews',
            element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute>
        },
        {
            path: '/addrecipe',
            element: <PrivateRoute><AddRecipe></AddRecipe></PrivateRoute>
        },
        {
            path: '/myrecipes',
            element: <PrivateRoute><MyRecipes></MyRecipes></PrivateRoute>
        }
    ],
  },
]);
