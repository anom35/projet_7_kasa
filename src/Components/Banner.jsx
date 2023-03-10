import '../Styles/Banner.css'

// pour savoir si la bannière sera celle de la page d'accueil ou celle de la page A propos
// pour celle d'accueil, aucun paramètre n'est passé, et pour A propos, n'importe quel mot est valable
function Banner({element}) {
    
    // fabrique la classe, selon si un paramètre est passé, + une classe commune au deux
    const classBanner = ((element === undefined) ? "banner" : "banner2") + " banner-commun"

    // pour la page d'accueil, il faut un titre et rien pour l'autre
    const baliseH1 = ((element === undefined) ? <h1>Chez vous, partout et ailleurs</h1> : null)

    return (<div className={classBanner}>{baliseH1}</div>)
}

export default Banner