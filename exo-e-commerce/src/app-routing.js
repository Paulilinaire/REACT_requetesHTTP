import { redirect, createBrowserRouter } from "react-router-dom"
import HomePage from './HomePage'
import AddProduct from "./components/AddProduct"
import DetailsProductPage from "./components/DetailsProductPage"

const authCheck = (role) => { 
    if (role === "Admin"){
        return true
    } else {
        return redirect("/")
    }
} 

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/detailsProductPage",
        element: <DetailsProductPage />
    },
    {
        path: "/addProduct",
        element: <AddProduct/>,
        loader: () => authCheck("Admin") // avec le loader et grâce à la fonction authCheck, nous allons verifier avant chargement de la page si Admin est = à admin
    }
])

export default router;