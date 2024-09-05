import React, {useContext} from "react";
import StarRating from "./StarRating";
import {FaTrash} from "react-icons/fa";
import {useColors} from "../customProvider/ColorProvider";

export function Color({ id, title, color, rating}) {
    const { rateColor, removeColor } = useColors();
    return (
        <section>
            <h1>{title}</h1>
            <button onClick={() => removeColor(id)}>
                <FaTrash />
            </button>
            <div style={{height: 50, backgroundColor: color}} />
            <StarRating
                selectedStars={rating}
                onRate={rating => rateColor(id, rating)}
            />
        </section>
    );
};

export default function ColorList() {
    const { colors } = useColors();
    console.log(colors);
    console.log(colors.length);

    if (!colors.length) return <div>표시할 색이 없습니다.</div>;

    return (
        <div className={"color-list"}>
            {colors.map(color => (
                <Color
                    key={color.id} {...color}
                />
            ))}
        </div>
    );
};