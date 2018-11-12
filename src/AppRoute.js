import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from './App';
import About from './components/about/About'
import NavBar from './components/navigationBar/NavBar';

const AppRoute = () => {
    return (
        <Router>
            <div>
                <NavBar/>
                <div>
                    <Route exact path="/" component={App} />
                    <Route path="/about" component={About} />
                </div>
            </div>
        </Router>
    );
}
 
export default AppRoute;