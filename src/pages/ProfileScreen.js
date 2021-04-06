import React from 'react'
import Nav from '../components/Nav'

import avatar from '../assets/avatar.png';
import { useSelector } from 'react-redux';
import { selectUser } from "../features/userSlice";
import { auth } from '../firebase'

const ProfileScreen = () => {
    const user = useSelector(selectUser)

    return (
        <div className="profileScreen">
            <Nav />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img src={avatar} alt="avatar"/>
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <button 
                                onClick={() => auth.signOut()}
                                className="profileScreen__signOut">
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
