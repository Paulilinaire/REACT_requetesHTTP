import { Form, createBrowserRouter } from "react-router-dom"
import App from './App'
import ProtectedRoute from "./components/ProtectedRoute"
import Account from "./components/Account"
import { redirect } from "react-router-dom"

const authCheck = (role) => {
    if (role === "Admin"){
        return true
    } else {
        return redirect("/auth")
    }
} 

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/auth",
        element: <Form />
    },
    {
        path: "/account",
        element: <ProtectedRoute><Account/></ProtectedRoute>
    },
    {
        path: "/account2",
        element: <Account/>,
        loader: () => authCheck("Admin") // avec le loader et grâce à la fonction authCheck, nous allons verifier avant chargement de la page si Admin est = à admin
    }
])

export default router;