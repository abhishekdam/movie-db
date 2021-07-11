import React from 'react'

import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav className='navbar navbar-dark bg-dark'>
                <Link className='navbar-brand' to='localhost'>Movie DB</Link>
            </nav>
        </div>
    )
}

export default NavBar
