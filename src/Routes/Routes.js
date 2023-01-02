import { createBrowserRouter } from "react-router-dom";
import Reviews from "../Components/Reviews";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Recipe from "../Pages/Recipe/Recipe";
import Recipies from "../Pages/Recipe/Recipies";
import Review from "../Pages/Review/Review";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
            element:<Review></Review>
      }
    ],
  },
]);
