import React from 'react'
import './home.css'
import {Navbar} from '../../components/components'

const Home = () => {
    return (
        <div className='space__home'>
            <Navbar />
            <div className='space__home_container'>
                <header className='space__home_container_description'>
                    <h3>So, you want to travel to</h3>
                    <h1>SPACE</h1>
                    <p>
                    Let's face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we'll give you a truly out of this world experience!
                    </p>
                </header>

                <div className='space__home__container_btn'>
                    <a href="#destination"><span>EXPLORE</span></a>
                </div>
            </div>
            
        </div>
    )
}

export default Home