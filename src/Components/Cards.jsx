import React from 'react'
import { Link } from "react-router-dom"
import records from "../Datas/logements.json"
import "../Styles/Cards.css"

function renderLogement(record) {
    const { id, cover, title } = record;
    return (
        <div className='fiche-logement' key={id}>
            <Link to={{ pathname: "/Logement", search: "?_id="+id }}>
                <img src={cover} alt={title} />
                <h3>{title}</h3>
            </Link>
        </div>
    );
}

function Logements() {
  return <div className='logements'>{records.map(renderLogement)}</div>;
}

export default Logements