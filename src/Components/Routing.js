import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

// 13. Routing Concept
// Landing Page that contains multiple appication.
// Explain Params

function Routing() {
    return (
        <div>
            <Router>
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link active">Home Page</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link active">About us Page</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link active">Contact us Page</Link>
                    </li>
                </ul>

                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/about">
                        <AboutPage />
                    </Route>
                    {/* <Route path="/contact">
                        <ContactPage />
                    </Route> */}
                    <Route path="/contact/:name">
                        <ContactPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Routing


// Consider as a page
export const HomePage = (props) => {
    return (
        <div>
            <h1>Home page</h1>
            <ul>
                <li>
                    <Link to="/about">Navigate to About us page</Link>
                </li>
                {/* <li>
                    <Link to="/contact">Navigate to contact us page</Link>
                </li> */}
                <li>
                    <Link to="/contact/Kaar Tech">Navigate to contact us page with params</Link>
                </li>
            </ul>
        </div>
    )
}

// Consider as a page
export const AboutPage = (props) => {
    return (
        <div>
            <h3>About us Page</h3>
        </div>
    )
}

// Consider as a page
export const ContactPage = (props) => {
    let { name } = useParams();
    return (
        
        <div>
            <h3>Contact us Page</h3>
            Parameter Value : {name}
            {/* {
                name ? <span>Parameter Value : {name}</span> : <span>No params Passed</span>
            } */}
        </div>
    )
}