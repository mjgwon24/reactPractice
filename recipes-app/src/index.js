import React, {createContext} from "react";
import {render} from "react-dom";
import Menu from "./components/Menu";
import data from "./data/recipes.json";
import StarRating from "./components/StarRating";
import App from "./components/App";
import colorData from "./data/color-data.json"

// 콘텍스트 생성
export const ColorContext = createContext();

render(
    <ColorContext.Provider value={colorData}>
        <App />
        <StarRating
            totalStars={7}
            style={{backgroundColor: "yellow"}}
            onDoubleClick={e => alert("double click")}
        />
        <Menu recipes={data}/>
    </ColorContext.Provider>,
    document.getElementById("root")
);