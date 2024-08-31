import React from "react";
import {render} from "react-dom";
import Menu from "./components/Menu";
import data from "./data/recipes.json";
import StarRating from "./components/StarRating";
import App from "./components/App";
import AddColorForm from "./components/AddColorForm";

render(
    <div>
        <AddColorForm
            onNewColor={(title, color) => {
                console.log(`ADD버튼 클릭!!! title: ${title}, color: ${color}`);
            }}
        />
        <App />
        <StarRating
            totalStars={7}
            style={{backgroundColor: "yellow"}}
            onDoubleClick={e => alert("double click")}
        />
        <Menu recipes={data}/>
    </div>,
    document.getElementById("root")
);