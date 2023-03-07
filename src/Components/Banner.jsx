import '../Styles/Banner.css'

function Banner({element}) {
    const classBanner = ((element === undefined) ? "banner" : "banner2") + " banner-commun"
    const baliseH1 = ((element === undefined) ? <h1>Chez vous, partout et ailleurs</h1> : null)
    return (<div className={classBanner}>{baliseH1}</div>)
}

export default Banner