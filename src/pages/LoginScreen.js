import React, { useState } from 'react'
import SignUpScreen from './SignUpScreen';

import logo from '../assets/netflix-full.png'
import mainBanner from '../assets/banner.jpg'

import StoryCards from '../components/LoginScreen/StoryCards';
import LoginFooter from '../components/LoginScreen/LoginFooter';
import StoryMain from '../components/LoginScreen/StoryMain';
import FAQ from '../components/LoginScreen/FAQ';

const LoginScreen = () => {
    const [signIn, setSignIn] = useState(false)

    return (
        <div className="loginScreen">
            <div className="loginScreen__background"
                style={{
                    backgroundImage: `url(${mainBanner})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <img 
                    src={logo} 
                    alt="logo" 
                    className="loginScreen__logo"
                />
                <button
                    onClick={() => setSignIn(true)} 
                    className="loginScreen__button"
                >
                    Sign In
                </button>

                <div className="loginScreen__gradient" />
            </div>
            {signIn ? (
                <SignUpScreen />
            ) : (
                <div >
                    <StoryMain setSignIn={setSignIn}/>
                    <StoryCards />
                    <FAQ />
                    <LoginFooter />
                </div>
            )}
        </div>
    )
}

export default LoginScreen
