import './App.css';
import {useEffect} from 'react';
import axios from 'axios'

function App() {

  // 1ère étape: installation d'Axios: npm install axios dans le dossier react

  useEffect(() => {
    axios.get("http://localhost:5000/personnes")
    .then (response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error("Erreur: ",error);
    })
  },[])

  const addPerson = () => {
    axios.post("http://localhost:5000/personnes", {lastname: "Duserre", firstname: "Julie"})
    .then (response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error("Erreur: ",error);
    })
  }

  const deletePerson = () => {
    const id = 3
    axios.delete(`http://localhost:5000/personnes/${id}`)
    .then(() =>{
      console.log("personne avec id " + id + " supprimer");
    })
    .catch(error => {
      console.error("Erreur: ",error);
    })
  }

  const editPerson = () => {
    const id = 1
    axios.put(`http://localhost:5000/personnes/${id}`, {lastname: "LAOUT", firstname: "Pauline"})
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error("Erreur: ",error);
    })
  }

  return (
    <div className="App">
      <button onClick={addPerson}>Add</button>
      <br></br>
      <button onClick={deletePerson}>Delete</button>
      <br></br>
      <button onClick={editPerson}>Edit</button>
    </div>
  );
}

export default App;
