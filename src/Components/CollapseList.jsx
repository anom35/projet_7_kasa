import React, { useState } from 'react'
import chevronUp from "../Assets/ChevronUp.png"
import chevronDown from "../Assets/ChevronDown.png"
import "../Styles/Collapse.css"


function CollapseList({title, content}) {
    const [contentVisible, setContentVisible] = useState(false)
    const affContent = () => { setContentVisible(!contentVisible) }

    const collapseContent = (contentVisible ? "visible" : "hidden") + " collapse"
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
              <div className='description-content-list' key={"equip"}>
                {
                  content.map((element, index) => {
                    return (<p className='equipement-content' key={"equip-"+index.toString()}>{element}</p>)
                  })
                }
              </div>
            </div>
        </div>
    )
}

export default CollapseList