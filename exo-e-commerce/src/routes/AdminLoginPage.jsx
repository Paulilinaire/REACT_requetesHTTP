import { useRef } from "react"

const AdminLoginPage = () => {
    const userRef = useRef()
    const passwordRef = useRef()

    const submitFormHandler = (e) => {
    e.preventDefault()

    const user = userRef.current.value

    const password = passwordRef.current.value

    const formValues = {
      user,
      password
    }

    console.log(formValues)
  }

    return (
        <>
        <div className="col-10 offset-1 rounded p-3 bg-dark text-light border border-light">
        <h1>Authentification</h1>
        <form onSubmit={submitFormHandler}>
        <div className="mb-3">
          <label htmlFor="user" className="form-label">Identifiant: </label>
          <input type="text" id="user" required ref={userRef} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Mot de passe: </label>
          <input type="password" id="password" required ref={passwordRef} className="form-control"></input>
        </div>
        <div className="text-end">
          <button className="btn btn-primary">
            <i className="bi bi-send"></i> Envoyer
          </button>
        </div>
      </form>
      </div>
        </>
    )
}

export default AdminLoginPage