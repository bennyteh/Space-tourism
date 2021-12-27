import React, { useState} from 'react'
import data from "../../components/data.json"
import image from "./image"
import "./crew.css"

const Crew = () => {

    const [chooseCrew, setChooseCrew] = useState("Douglas Hurley")
    const dataCrew = data.crew.filter(crew => crew.name === chooseCrew)
    const crew = dataCrew[0]

    const handleClick = (e) => {
        setChooseCrew(e.target.value)
    }

    return (
        <section>
            <article className="space__crew">
            <header className='space__crew__header'>
                    <h4 className='header__opacity'>02</h4>
                    <h4>MEET YOUR CREW</h4>
            </header>
                <figure className='space__crew__image'>
                    <img src={image[crew.id]} alt={crew.name}/>
                </figure>
                <div className='space__crew__line'></div>
                <div className="space__crew__button">
                    <button className={(chooseCrew === "Douglas Hurley"? "space__crew__button-btn space__crew__button-focus" : "space__crew__button-btn")} value="Douglas Hurley" onClick={(e) => handleClick(e)}></button>
                    <button className={(chooseCrew === "Mark Shuttleworth"? "space__crew__button-btn space__crew__button-focus" : "space__crew__button-btn")} value="Mark Shuttleworth" onClick={(e) => handleClick(e)}></button>
                    <button className={(chooseCrew === "Victor Glover"? "space__crew__button-btn space__crew__button-focus" : "space__crew__button-btn")} value="Victor Glover" onClick={(e) => handleClick(e)}></button>
                    <button className={(chooseCrew === "Anousheh Ansari"? "space__crew__button-btn space__crew__button-focus" : "space__crew__button-btn")} value="Anousheh Ansari" onClick={(e) => handleClick(e)}></button>
                </div>
                <div className='space__crew__bio'>
                    <h6>{crew.role.toLocaleUpperCase()}</h6>
                    <h2>{crew.name.toLocaleUpperCase()}</h2>
                    <p>{crew.bio}</p>
                </div>
            </article>
        </section>
    )
}

export default Crew
