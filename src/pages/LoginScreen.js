import React, { useState } from 'react'
import SignInScreen from './SignInScreen';

import logo from '../assets/netflix-full.png'
import mainBanner from '../assets/banner.jpg'

const LoginScreen = () => {
    const [signIn, setSignIn] = useState(false)

    return (
        <div 
            style={{
                backgroundImage: `url(${mainBanner})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: 'no-repeat'
            }}
            className="loginScreen"
        >
            <div className="loginScreen__background">
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

            <div className="loginScreen__body">
            {signIn ? (
                <SignInScreen />
            ) : (
                <>
                    <h1>Unlimited movies, TV <br/> shows and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className="loginScreen__input">
                        <form>
                            <input 
                                type="email" 
                                placeholder="Email address" 
                                maxLength="50"
                                minLength="5"
                            />
                            <button
                                onClick={() => setSignIn(true)} 
                                className="loginScreen__getStarted"
                            >
                                Get Started
                            </button>
                        </form>
                    </div>
                </>
            )}
            </div>
        </div>
    )
}

export default LoginScreen
