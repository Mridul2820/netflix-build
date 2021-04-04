import React from 'react'
import tv from '../../assets/tv.png'
import videoTV from '../../assets/video-tv-in.m4v'

import mobile from '../../assets/mobile.jpg'
import boxshot from '../../assets/boxshot.png';

import devicePile from '../../assets/device-pile.png'
import videoDevices from '../../assets/video-devices.m4v'

const StoryCards = () => {
    return (
        <div className="storyCards">
            <div className="storyCard storyCard__tv">
                <div className="storyCard__container">
                    <div className="storyCard__content">
                        <h1>Enjoy on your TV</h1>
                        <h2>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>
                    </div>  
                    <div className="storyCard__assets">
                        <img className="storyCard__img" src={tv} alt="tv"/>
                        <div className="storyCard__video">
                            <video autoPlay muted playsInline loop>
                                <source src={videoTV} type="video/mp4"/>
                            </video>
                        </div>
                    </div>                  
                </div>
            </div>

            <div className="storyCard storyCard__mobile">
                <div className="storyCard__container">
                    <div className="storyCard__assets">
                        <img className="storyCard__img" src={mobile} alt="tv"/>
                        <div className="storyCard__animation">
                            <div className="storyCard__animation-image">
                                <img src={boxshot} alt="boxshot"/>
                            </div>
                            <div className="storyCard__animation-text">
                                <div className="text-1">
                                    Stranger Things
                                </div>
                                <div className="text-2">
                                    Downloading...
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="storyCard__content">
                        <h1>Download your shows to watch offline.</h1>
                        <h2>Save your favourites easily and always have something to watch.</h2>
                    </div> 
                </div>
            </div>

            <div className="storyCard storyCard__anywhere">
                <div className="storyCard__container">
                    <div className="storyCard__content">
                        <h1>Watch everywhere.</h1>
                        <h2>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
                    </div>  
                    <div className="storyCard__assets">
                        <img className="storyCard__img" src={devicePile} alt="tv"/>
                        <div className="storyCard__video">
                            <video autoPlay muted playsInline loop>
                                <source src={videoDevices} type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoryCards
