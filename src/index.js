import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom"
import { createBrowserHistory } from "history"

import "./styles/index.scss"
import Root from './root'

const history = createBrowserHistory()

const Index = () => {
    return (
        <Router history={history}>
            <Root />
        </Router>
    )
};

ReactDOM.render(<Index />, document.getElementById("root"));