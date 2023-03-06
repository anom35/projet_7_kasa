import React, { useState } from 'react'
import chevronUp from "../Assets/ChevronUp.png"
import chevronDown from "../Assets/ChevronDown.png"
import "../Styles/Collapse.css"



function Collapse(props) {
    const [contentVisible, setContentVisible] = useState(false)
    const affContent = () => { setContentVisible(!contentVisible) }

    const collapseContent = (contentVisible ? "visible" : "hidden") + " collapse"
    const collapseChevron = (contentVisible ? chevronUp : chevronDown)

    return (
        <div className='collapse'>
            <div className='collapse__header' onClick={affContent}>
                <span>{props.title}</span>
                <div className="chevronValue">
                    <img src={collapseChevron} alt=""/>
                </div>
            </div>
            <div className={collapseContent}>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default Collapse