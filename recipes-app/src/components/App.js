import React, {useState} from "react";
import colorData from "../data/color-data.json";
import ColorList from "./ColorList";
import AddColorForm from "./AddColorForm";

export default function App() {
    const [colors, setColors] = useState(colorData.colors);

    return (
        <>
            <AddColorForm
                onNewColor={(title, color) => {
                    // colorData.colors 배열에서 마지막 요소의 id
                    const lastColorId = colors[colors.length - 1].id;
                    const newId = String(parseInt(lastColorId) + 1);

                    const newColors = [
                        ...colors,
                        {
                            "id": newId,
                            "title": title,
                            "color": color,
                            "rating": 0
                        }
                    ];
                    setColors(newColors);
                }}
            />
            <ColorList
                colors = {colors}
                onRemoveColor={id => {
                    const newColors = colors.filter(color => color.id !== id);
                    setColors(newColors);
                }}
                onRateColor={(id, rating) => {
                    const newColors = colors.map(color =>
                        color.id === id ? {...color, rating} : color
                    );
                    setColors(newColors);
                }}
            />
        </>
    )
}