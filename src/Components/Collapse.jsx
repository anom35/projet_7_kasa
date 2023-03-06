import React, { useState } from 'react'
import chevronUp from "../Assets/ChevronUp.png"
import chevronDown from "../Assets/ChevronDown.png"
import "../Styles/Collapse.css"



function Collapse({title, content}) {
    const [contentVisible, setContentVisible] = useState(false)
    const affContent = () => { setContentVisible(!contentVisible) }

    const collapseContent = (contentVisible ? (content !== "" ? "visible" : "hidden") : "hidden") + " collapse"
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