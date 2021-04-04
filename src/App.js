import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import HomeScreen from './pages/HomeScreen';
import LoginScreen from './pages/LoginScreen';

import './styles/app.scss';



const App = () => {
    const user = null
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
