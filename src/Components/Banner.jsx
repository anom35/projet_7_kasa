import fondPrincipal from "../Assets/BackgroundHome.jpg"
import fondAutre from "../Assets/Background.jpg"

import '../Styles/Banner.css'

function Banner(props) {
    const imageUrl = props.imageUrl ? fondPrincipal : fondAutre
    return (
        <div className='banner'>
            <img src={imageUrl} alt="" />
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

export default Banner