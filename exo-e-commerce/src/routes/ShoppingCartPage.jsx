import { useParams } from "react-router-dom";
import ProductContext from "../contexts/ProductContext";
import { Link } from "react-router-dom";
import { useContext } from "react";

const ShoppingCartPage = () => {
    const {id} = useParams();
    const { productList, setProductList, cart, setCart } = useContext(ProductContext)
    console.table(cart);

    const valeurs = cart.map(product=>product.price)
    const somme = valeurs.reduce((total, valeur)=> total + valeur)
    console.log(somme); 

    const deleteProduct = (e) => {

}

    return(
        <>
        <div className="col-10 offset-1 rounded p-3 bg-light text-dark borderborder-dark">
            <h1>Panier</h1>
            <ul>
                {cart.map((product,index)=> <div><li className="mb-3" key={index}> <b>Article :</b> {product.title} - <b>Prix : </b>{product.price}€
                <button className="btn btn-outline-danger mx-3" onClick={deleteProduct}>Supprimer</button></li></div>)} 
            </ul>
            <div class="">
                <Link to={"/"} className="btn btn-outline-success mt-3 mb-2"type="button"><i class="bi bi-patch-plus"></i> Ajouter des articles au panier</Link>
            </div>
            <hr />
            <p className="display-6 text-end fw-bold" >Total : {somme}€</p>
        </div>
        </>
    )
}

export default ShoppingCartPage