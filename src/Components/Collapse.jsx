import React, { useState } from 'react'
import chevronUp from "../Assets/ChevronUp.png"
import chevronDown from "../Assets/ChevronDown.png"
import "../Styles/Collapse.css"



function Collapse({title, content}) {

    // variable logique qui défini si le contenu s'affiche ou pas
    const [contentVisible, setContentVisible] = useState(false)
    // fonction qui inverse le contenu de la valeur au clic dans le header
    const affContent = () => { setContentVisible(!contentVisible) }

    // selon contentVisible, il sera utilise la classe "visible" ou "hidden" + "collapse"
    const collapseContent = (contentVisible ? "visible" : "hidden") + " collapse"

    // modifie le chevron selon la valeur de contentVisible
    const collapseChevron = (contentVisible ? chevronUp : chevronDown)

    return (
        <div className='collapse'>
            
            <div className='collapse__header' onClick={affContent}>
                <span>{title}</span>
                <div className="chevronValue">
                    <img src={collapseChevron} alt=""/>
                </div>
            </div>
            <div className={collapseContent}>
                <p className='description-content'>{content}</p>
            </div>
        </div>
    )
}

export default Collapse