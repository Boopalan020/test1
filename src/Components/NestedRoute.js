
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

// 14. Nested Routing Concept
// Landing Page that contains multiple application.
function NestedRoute() {
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
                    <Route path="/contact">
                        <ContactPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default NestedRoute


// Consider as a page
export const HomePage = (props) => {

    
    return (
        <div>
            <h1>Home page</h1>
            <ul>
                <li>
                    <Link to="/about">Navigate to About us page</Link>
                </li>
                <li>
                    <Link to="/contact">Navigate to contact us page</Link>
                </li>
            </ul>
            
        </div>
    )
}

// Consider as a page
export const AboutPage = (props) => {
    const { url, path } = useRouteMatch();
    return (
        <div>
            <h3>About us Page</h3>

            <h2>Nested Home page Routing</h2>
            <ul>
                <li>
                    {/* <Link to={`/about/page1`}>Nested Page 1</Link> */}
                    <Link to={`${url}/page1`}>Nested Page 1</Link>
                </li>
                <li>
                    {/* <Link to={`/about/page2`}>Nested PAge 2</Link> */}
                    <Link to={`${url}/page2`}>Nested PAge 2</Link>
                </li>
            </ul>

            <Switch>
                <Route path={`${path}/page1`}>
                    <Page1></Page1>
                </Route>
                <Route path={`${path}/page2`}>
                    <Page2></Page2>
                </Route>
            </Switch>
        </div>
    )
}

// Consider as a page
export const ContactPage = (props) => {
    return (
        <div>
            <h3>Contact us Page</h3>
        </div>
    )
}



// Pages for Nested Routing inside Home component
function DefaultPage (props) {
    return(
        <div>
            <h3>
                Default Nested Page
            </h3>
        </div>
    )
}

function Page1 (props) {
    return(
        <div>
            <h3>Nested Page 1 Component</h3>
        </div>
    )
}

function Page2 (props) {
    return(
        <div>
            <h3>Nested Page 2 Component</h3>
        </div>
    )
}