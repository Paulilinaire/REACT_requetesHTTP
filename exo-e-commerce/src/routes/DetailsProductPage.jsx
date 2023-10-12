import { useEffect, useState, useContext } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ProductContext from "../contexts/ProductContext";



const DetailsProductPage = () =>{
    const { cart, setCart } = useContext(ProductContext)
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
        const newProduct = {...product}
        console.log(`article acheté ${newProduct.title}${newProduct.price}`);
        console.log(newProduct);
        setCart(prev => [...prev, newProduct])
        console.log(cart);


        navigate("/shoppingCartPage") 
            
        }   

    return (
        <>
        <h1>Détails produits</h1>
        <ul>       
            <li>{product.title}</li>
            <li>{product.details}</li>
            <li>{product.price }</li>
        </ul>
            <button onClick={addCart}>Ajouter au panier</button>
        </>
    )
}

export default DetailsProductPage

