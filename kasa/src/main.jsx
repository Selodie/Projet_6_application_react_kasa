import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.sass";
import App from "./pages/home";
import ErrorPage from "./pages/error404";
import About from "./pages/about";
import Housing from "./pages/housingPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // gestion des erreurs lors du rendu du composant
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element:<App/>,
  },
  {
    path: "/housingPage/:id",
    element: <Housing />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);