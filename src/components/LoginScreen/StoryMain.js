import React from 'react'
import { BsChevronRight } from "react-icons/bs";

const StoryMain = ({ setSignIn }) => {
    return (
        <div className="storyMain__container">

        <div className="storyMain">
            <h1>Unlimited movies, TV <br/> shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className="storyMain__input">
                <form>
                    <input 
                        type="email" 
                        placeholder="Email address" 
                        maxLength="50"
                        minLength="5"
                    />
                    
                    <button
                        onClick={() => setSignIn(true)} 
                        className="storyMain__getStarted"
                    >
                        <span className="getStarted-text">Get Started</span>
                        <span className="getStarted-right-arrow"><BsChevronRight/></span>
                    </button>
                </form>
            </div>
        </div>
        </div>
    )
}

export default StoryMain
