import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {
    return (
        <div className='space__home' id="home">
            <div className='space__home_container'>
                <header className='space__home_container_description'>
                    <h3>SO, YOU WANT TO TRAVEL TO</h3>
                    <h1>SPACE</h1>
                    <p>
                    Let's face it; if you want to go to space, 
                    you might as well genuinely go to outer space 
                    and not hover kind of on the edge of it. Well 
                    sit back, and relax because we'll give you a truly 
                    out of this world experience!
                    </p>
                </header>

                <div className='space__home__container_btn'>
                    <Link to="/destination"><span>EXPLORE</span></Link>
                </div>
            </div>
            
        </div>
    )
}

export default Home
