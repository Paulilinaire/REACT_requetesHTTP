import { Navigate } from "react-router-dom"

const ProtectedRoute = (props) => {
    const user = localStorage.getItem('user')
    const password = localStorage.getItem('password')
    console.log(user);
    console.log(password);

    if(user==="user" & password==="hello"){
        return (<>
            {props.children}
        </>)
    }else {
        return <Navigate to={"/"}></Navigate>
    }
}

export default ProtectedRoute