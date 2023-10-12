
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to={"/account"}>Go to Account</Link>
      <br></br>
      <Link to={"/account2"}>Go to Account2</Link>
    </div>
  );
}

export default App;
