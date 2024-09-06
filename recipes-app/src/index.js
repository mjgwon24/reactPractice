import React, {createContext} from "react";
import {render} from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import {PageComponents} from "./components/PageComponents";
import App from "./components/App";

render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);