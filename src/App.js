import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { auth } from './firebase';
import { login, logout, selectUser } from "./features/userSlice";

import HomeScreen from './pages/HomeScreen';
import LoginScreen from './pages/LoginScreen';

import './styles/app.scss';


const App = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            if(userAuth) {
                // logged in
                dispatch(login({
                    uid: userAuth.uid,
                    email: userAuth.email,
                }))
            }
            else {
                // logged out
                dispatch(logout)
            }
        })
        return unsubscribe
        // eslint-disable-next-line
    }, [])

    return (
        <div className="app">
            <Router>
            {!user ? (
                <LoginScreen />
            ) : (
                <Switch>
                    <Route exact path="/">
                        <HomeScreen />
                    </Route>
                </Switch>
            )}
            </Router>
        </div>
    )
}

export default App
