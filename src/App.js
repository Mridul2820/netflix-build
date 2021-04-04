import React from 'react'
import HomeScreen from './pages/HomeScreen';
import './styles/app.scss';

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

const App = () => {
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <HomeScreen />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
