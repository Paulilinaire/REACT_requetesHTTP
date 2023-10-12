import { Link } from 'react-router-dom';
import { useEffect, useState } from "react"
import axios from 'axios'

function HomePage() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/products')
    .then(response => {
        setProducts(prev => [...response.data]) 
    })
},[])


  return (
    <div className="HomePage">
      <Link to={"/"}>Home</Link>
      <br></br>
      <Link to={"/addProductAdmin"}>Admin</Link>
      <br></br>
      <Link to={"/shoppingCartPage"}>Cart</Link>
      <br></br> 
      <hr />
      <h1>Products List</h1>
      <ul>
          {products.map((product) => (
                <li key={product.id}>{product.title}
                <Link to={`detailsProductPage/${product.id}`}> voir le détail </Link>
                </li>
            ))}
      </ul>
    </div>
  );
}

export default HomePage;
