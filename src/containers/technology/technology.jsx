import React, {useState} from 'react'
import useWindowDimensions from '../../components/windowDimensionHook/windowDimensionHook'
import data from "../../components/data.json"
import { imageLandscape, imagePortrait } from './images'
import "./technology.css"


const Technology = () => {

    const { width } = useWindowDimensions();
    const [chooseTech, setChooseTech] = useState("Launch vehicle")
    const dataTech = data.technology.filter(technology => technology.name === chooseTech)
    const tech = dataTech[0]

    const handleClick = (e) => {
        setChooseTech(e.target.value)
    }

    return (
        <section>
            <article className='space__technology'>
            <header className='space__technology__header'>
                    <h4 className='header__opacity'>03</h4>
                    <h4>SPACE LAUNCH 101</h4>
            </header>
            <figure className='space__technology__image'>
                <img src={width > 1050? imagePortrait[tech.id]: imageLandscape[tech.id]} alt={tech.name}/>
            </figure>
            <div className='space__technology__container'>
                <div className='space__technology__button'>
                    <button className={(chooseTech === "Launch vehicle"? "space__technology__button-btn space__technology__button-focus" : "space__technology__button-btn")} value="Launch vehicle" onClick={(e) => handleClick(e)}>1</button>
                    <button className={(chooseTech === "Spaceport"? "space__technology__button-btn space__technology__button-focus" : "space__technology__button-btn")} value="Spaceport" onClick={(e) => handleClick(e)}>2</button>
                    <button className={(chooseTech === "Space capsule"? "space__technology__button-btn space__technology__button-focus" : "space__technology__button-btn")} value="Space capsule" onClick={(e) => handleClick(e)}>3</button>
                </div>
                <div className='space__technology__description'>
                    <h6>THE TERMINOLOGY...</h6>
                    <h4>{tech.name.toLocaleUpperCase()}</h4>
                    <p>{tech.description}</p>
                </div>
            </div>
           
            </article>
        </section>
    )
}

export default Technology
