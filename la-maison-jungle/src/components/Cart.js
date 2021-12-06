import '../styles/Cart.css'

function Cart (){
    const monstera = "Monstera"
    const lierre = "Lierre"
    const bouquet = "Bouquet de fleurs"
    const prixMonst = 8
    const prixLierre = 10
    const prixBqt = 15

    return (<div className ="lmj-cart">
        <ul>Liste des articles :
            <li>{monstera}: {prixMonst}€</li>
            <li>{lierre}: {prixLierre}€</li>
            <li>{bouquet}: {prixBqt}€</li>
        </ul>
        <p>Totale des articles : {prixBqt + prixLierre + prixMonst}</p>
        </div>)
}

export default Cart
