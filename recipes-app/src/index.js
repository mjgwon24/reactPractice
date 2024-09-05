import React, {createContext} from "react";
import {render} from "react-dom";
import App from "./components/App";
import {ColorProvider} from "./customProvider/ColorProvider";

render(
    <ColorProvider>
        <App />
    </ColorProvider>,
    document.getElementById("root")
);