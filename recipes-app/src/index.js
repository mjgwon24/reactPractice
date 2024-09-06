import React, {createContext} from "react";
import {render} from "react-dom";
import App from "./components/App";
import {ColorProvider} from "./customProvider/ColorProvider";
import Checkbox from "./components/Checkbox";

render(
    // <ColorProvider>
    //     <App />
    // </ColorProvider>,
    <App />,
    document.getElementById("root")
);