import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <section class="navigation">
            <div class="nav-container">
                <div class="brand">
                    <Link to="/">CONVIN.AI</Link>
                </div>
                <nav>
                    <div class="nav-mobile"><a id="navbar-toggle" href="#!"><span></span></a></div>
                    <ul class="nav-list">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}

export default Navbar