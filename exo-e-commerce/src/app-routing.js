import { redirect, createBrowserRouter } from "react-router-dom"
import HomePage from './HomePage'
import DetailsProductPage from "./routes/DetailsProductPage"
import AddProductAdmin from "./routes/AddProductAdmin"
import ShoppingCartPage from "./routes/ShoppingCartPage"
import AdminLoginPage from "./routes/AdminLoginPage"


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
        path: "/detailsProductPage/:id",
        element: <DetailsProductPage />
    },
    {
        path: "/shoppingCartPage",
        element: <ShoppingCartPage />
    },
    {
        path: "/adminLoginPage",
        element: <AdminLoginPage />
    },
    {
        path: "/addProductAdmin",
        element: <AddProductAdmin/>,
        loader: () => authCheck("Admin") // avec le loader et grâce à la fonction authCheck, nous allons verifier avant chargement de la page si Admin est = à admin
    }
])

export default router;