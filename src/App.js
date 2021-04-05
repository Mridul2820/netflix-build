import React, { useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { auth } from './firebase';

import HomeScreen from './pages/HomeScreen';
import LoginScreen from './pages/LoginScreen';

import './styles/app.scss';


const App = () => {
    const user = null

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            if(userAuth) {
                // logged in
                console.log(userAuth)
            }
            else {
                // logged out
            }
        })
        return unsubscribe
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
