

const ShoppingCartPage = () => {

    const setStorage = () => {
        console.log("clic");
        localStorage.setItem("product")
      }

    return (
        <>
        <h1>Panier</h1>
        <br />
        <hr />
        <button onClick={setStorage}>Ajout</button>
        </>
    )
}

export default ShoppingCartPage