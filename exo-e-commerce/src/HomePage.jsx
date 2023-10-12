
import { Link } from 'react-router-dom';

function HomePage() {

  const setStorage = () => {
    console.log("j'apuie sur le bouton");
    localStorage.setItem("role", "Admin")
  }




  return (
    <div className="HomePage">
      <Link to={"/account"}>Go to Account</Link>
      <br></br>
      <Link to={"/account2"}>Go to Account2</Link>
      <br></br>
      <button onClick={setStorage}>Log in</button>
    </div>
  );
}

export default HomePage;
