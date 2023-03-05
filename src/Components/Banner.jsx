import fondPrincipal from "../assets/BackgroundHome.jpg"
import fondAutre from "../assets/Background.jpg"

import '../styles/Banner.css'

function Banner(props) {
    const imageUrl = props.imageUrl ? fondPrincipal : fondAutre
    return (
        <div className='banner'>
            <img src={imageUrl} alt="fond écran a propos" />
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner