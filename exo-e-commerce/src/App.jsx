import { NavLink, Link } from 'react-router-dom';
import { useEffect, useState } from "react"
import axios from 'axios'
import { Outlet } from 'react-router-dom';

function App() {

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


  return (
    <div className="App">
      <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
          <div className="container-fluid">
            <Link className="navbar-brand" href="#">Belize</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to={`/`}>Accueil</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={`/shoppingCartPage`}>Cart</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={`/adminLoginPage`}>Admin</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main className="container mt-5" >
        <div className="row my-3" >
          <Outlet />  
        </div>
      </main>
    </div>
  );
}

export default App;
