import { createBrowserRouter } from "react-router-dom"
import DetailsProductPage from "./routes/DetailsProductPage"
import AddProductAdmin from "./routes/AddProductAdmin"
import ShoppingCartPage from "./routes/ShoppingCartPage"
import ErrorPage from "./routes/ErrorPage"
import ProtectedRoute from "./routes/ProtectedRoute"
import App from "./App"
import HomePage from "./routes/HomePage"


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage />,
        children: [
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
                element: <AddProductAdmin />
            },
            {
                path: "/addProductAdmin",
                element: <ProtectedRoute><AddProductAdmin/></ProtectedRoute>,
            }
          ],}
])

export default router;
