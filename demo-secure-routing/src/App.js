
import './App.css';
import { Link } from 'react-router-dom';

function App() {

  const setStorage = () => {
    console.log("j'appuie sur le bouton");
    localStorage.setItem("role", "Admin")
  }




  return (
    <div className="App">
      <Link to={"/account"}>Go to Account</Link>
      <br></br>
      <Link to={"/account2"}>Go to Account2</Link>
      <br></br>
      <button onClick={setStorage}>Log in</button>
    </div>
  );
}

export default App;
