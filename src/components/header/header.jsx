import React from 'react'
import "./header.css"

const Header = (props) => {
    return (
        <header className='space__header'>
                    <h4 className='header__opacity'>{props.number}</h4>
                    <h4>{props.title}</h4>
        </header>
    )
}

export default Header
