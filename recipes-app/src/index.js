import React from "react";
import {render} from "react-dom";
import Menu from "./components/Menu";
import data from "./data/recipes.json";
import StarRating from "./components/StarRating";

render(
    <div>
        <StarRating
            totalStars={7}
            style={{backgroundColor: "yellow"}}
            onDoubleClick={e => alert("double click")}
        />
        <Menu recipes={data}/>
    </div>,
    document.getElementById("root")
);