import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const DetailsProductPage = () =>{
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/products/${id}`)
        .then (response => {
            setProduct(response.data)})
        }, [id])  

    if(product == null){ // besoin d'un conditionnel car le useEffect est lu après le useState. Sans conditionnel, le useState renvoit title = null et donc pas d'affichage
        return <><p>Chargement</p></>
    }

    const addCart = () => {
        // axios.post("http://localhost:5000/products/", {title: "bracelet2", price: "90€"})
        // .then(response => {
        //     console.log(response.data)
        //     navigate("/shoppingCartPage")
        //   })
        //   .catch(error => {
        //     console.error("Erreur : ",error)
        //   })
        }   

    return (
        <>
        <h1>Détails produits</h1>
        <ul>       
            <li>{product.title}</li>
            <li>{product.price }</li>
        </ul>
            <button onClick={addCart}>Add</button>
        </>
    )
}

export default DetailsProductPage

