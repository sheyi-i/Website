import React from "react"
import { Link, useLocation } from "react-router-dom";
import './style.css'

function Topnav(){
    const location = useLocation();
    return(
    <div className='topnavbar'>
   
    <ul className = 'navbar justify-content-end ml-auto'>
    <Link to = '/' className = {location.pathname === '/'  ? 'navbar-brand mr-auto nav-link active' : 'navbar-brand mr-auto nav-link'}>LA</Link>
        <li>
            <Link to = '/' className = {location.pathname === '/'  ? 'nav-link active' : 'nav-link'}>Home</Link>
        </li>
        <li>
            <Link to = '/about' className = {location.pathname === '/about'  ? 'nav-link active' : 'nav-link'}>About Me</Link>
        </li>
        <li >
            <Link to = '/projects' className = {location.pathname === '/portfolio'  ? 'nav-link active' : 'nav-link'}>Projects</Link>
        </li>
        <li >
            <Link to = '/contact' className = {location.pathname === '/contact'  ? 'nav-link active' : 'nav-link'}>Contact</Link>
        </li>
    </ul>
    </div>
    )
}

export default Topnav;