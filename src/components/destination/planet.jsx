import React, { useState } from 'react'
import dataPlanet from "../data.json"
import image from "./Image"
import "./planet.css"

const Planet = () => {
    
    const [choosePlanet, setChoosePlanet] = useState("Moon")
    const data = dataPlanet.destinations.filter(planet => planet.name === choosePlanet)
    const planet = data[0]

    const handleClick = (e) => {
        setChoosePlanet(e.target.value)
    }

    return (
        <article className='space__planet'>
            <header className='space__planet__header'>
                    <h4 className='header__opacity'>01</h4>
                    <h4>PICK YOUR DESTINATION</h4>
            </header>
            <figure className='space__planet__image'>
                <img src={image[planet.id]} alt={planet.name}></img>
            </figure>
            <div className='space__planet__button'>
                <button className={(choosePlanet === "Moon"? "space__planet__button-btn space__planet__button-focus" : "space__planet__button-btn")} value="Moon" onClick={(e) => handleClick(e)}>MOON</button>
                <button className={(choosePlanet === "Mars"? "space__planet__button-btn space__planet__button-focus" : "space__planet__button-btn")} value="Mars" onClick={(e) => handleClick(e)}>MARS</button>
                <button className={(choosePlanet === "Europa"? "space__planet__button-btn space__planet__button-focus" : "space__planet__button-btn")} value="Europa" onClick={(e) => handleClick(e)}>EUROPA</button>
                <button className={(choosePlanet === "Titan"? "space__planet__button-btn space__planet__button-focus" : "space__planet__button-btn")} value="Titan" onClick={(e) => handleClick(e)}>TITAN</button>
            </div>
            <div className='space__planet__description'>
                <h2>{(planet.name).toLocaleUpperCase()}</h2>
                <p>{planet.description}</p>
            </div>
            <span className='space__planet__line'></span>
            <div className='space__planet__details'>
                <div className='space__planet__details-flex'>
                    <p className='space__planet__distance_p--top'>AVG. DISTANCE</p>
                    <p className='space__planet__distance_p--bottom'>{(planet.distance).toLocaleUpperCase()}</p>
                </div>
                <div className='space__planet__details-flex'>
                    <p className='space__planet__distance_p--top'>EST. TRAVEL TIME</p>
                    <p className='space__planet__distance_p--bottom'>{(planet.travel).toLocaleUpperCase()}</p>
                </div>
            </div>
        </article>
    )
}

export default Planet
