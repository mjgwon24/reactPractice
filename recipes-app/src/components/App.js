import React, {useState} from "react";
import colorData from "../data/color-data.json";
import ColorList from "./ColorList";
import AddColorForm from "./AddColorForm";

export default function App() {
    const [colors, setColors] = useState(colorData.colors);

    return (
        <>
            <AddColorForm />
            <ColorList
                onRemoveColor={id => {
                    const newColors = colors.filter(color => color.id !== id);
                    console.log(`colors: ${JSON.stringify(colors, null, 2)}`);
                    console.log(`newColors: ${JSON.stringify(newColors, null, 2)}`);

                    setColors(newColors);
                }}
                onRateColor={(id, rating) => {
                    const newColors = colors.map(color => (color.id === id ? {...color, rating} : color));
                    console.log(`colors: ${JSON.stringify(colors, null, 2)}`);
                    console.log(`newColors: ${JSON.stringify(newColors, null, 2)}`);

                    setColors(newColors);
                }}
            />
        </>
    )
}