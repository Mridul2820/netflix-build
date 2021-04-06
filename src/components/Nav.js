import React, { useEffect, useState } from 'react'
import netflixFull from '../assets/netflix-full.png';
import avatar from '../assets/avatar.png';
import { useHistory } from 'react-router';

const Nav = () => {

    const [navShow, setNavShow] = useState(false)
    const history = useHistory()

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            setNavShow(true)
        }
        else {
            setNavShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar)

        return () => window.addEventListener('scroll', transitionNavBar)
    }, [])

    return (
        <div className={`nav ${navShow && 'nav__black'}`}>
            <div className="nav__contents">
                <img 
                    onClick={() => history.push("/")}
                    src={netflixFull} 
                    alt="netflix-full"
                    className="nav__logo"
                />
                <img 
                    onClick={() => history.push("/profile")}
                    src={avatar} 
                    alt="avatar"
                    className="nav__avatar"
                />
            </div>
        </div>
    )
}

export default Nav
