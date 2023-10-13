 import { useState, useEffect } from "react"
 import axios from "axios"
 import { Link } from "react-router-dom"
 
 const HomePage =() => {
    const [products, setProducts] = useState([])

    useEffect(() => {
      axios.get('http://localhost:5000/products')
      .then(response => {
          setProducts(response.data) 
      })
      .catch(error => {
        console.error("Erreur : ",error)
      })
  },[])

    return(
        <>
        <h1>Products List</h1>
          <ul>
          {products.map((product) => (
            <li key={product.id}>{product.title}
                <Link to={`detailsProductPage/${product.id}`}> voir le détail </Link>
                </li>
            ))}
          </ul>
        </>
    )
 }

 export default HomePage
