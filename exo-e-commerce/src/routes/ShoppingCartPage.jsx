import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

const ShoppingCartPage = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/products/${id}`)
        .then (response => {
            setProduct(response.data)})
        }, [id])  

    if(product == null){ // besoin d'un conditionnel car le useEffect est lu après le useState. Sans conditionnel, le useState renvoit title = null et donc pas d'affichage
        return <><p>Chargement</p></>
    }


    return (
        <>
        <h1>Panier</h1>
        <ul>
            <li>{product.title}-{product.price}</li>
        </ul>
        <br />
        <hr />
        <p>Total:</p>

        </>
    )
}

export default ShoppingCartPage