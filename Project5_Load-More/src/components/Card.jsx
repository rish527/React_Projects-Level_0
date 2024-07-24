import React from "react"
import './card.css'
export default function Card({image,name}){
    return(
        <div className="card">
            <img src={image} alt={name} className="card-img" />
            <h2 className="card-title">{name}</h2>
        </div>
    )
}