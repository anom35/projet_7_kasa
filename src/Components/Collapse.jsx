import React, { useState } from 'react'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import "../Styles/Collapse.css"

function Collapse(props) {
    const [contentVisible, setContentVisible] = useState(false)
    const affContent = () => {
        setContentVisible(!contentVisible)
    }
    const classContent = (contentVisible ? "visible" : "hidden") + " collapse"
    const classChevron = (contentVisible ? faChevronUp : faChevronDown)

    return (
        <div className='collapse'>
            <p className='collapse__header' onClick={affContent}>
                <span>{props.title}</span>
                <i className={classChevron} />
            </p>
            <div className={classContent}>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

export default Collapse