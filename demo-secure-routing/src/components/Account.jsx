import { useNavigate } from "react-router-dom";

const Account = () => {
    const navigate = useNavigate()

    const clearStorage = () => {
        console.log("j'appuie sur le bouton");
        localStorage.clear()
        // localStorage.removeItem("role")
        navigate("/")
      }
    
    return (
        <>
        <h1>Page Secure</h1>
        <hr />
        <br></br>
        <button onClick={clearStorage}>Leave</button>
        </>
    )
}

export default Account