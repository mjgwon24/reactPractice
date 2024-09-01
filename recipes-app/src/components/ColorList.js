import React, {useContext} from "react";
import StarRating from "./StarRating";
import {FaTrash} from "react-icons/fa";
import {ColorContext} from "../index";

export function Color({
    id,
    title,
    color,
    rating,
    onRemove = f => f,
    onRate = f => f
}) {
    return (
        <section>
            <h1>{title}</h1>
            <button onClick={() => onRemove(id)}>
                <FaTrash />
            </button>
            <div style={{height: 50, backgroundColor: color}} />
            <StarRating
                selectedStars={rating}
                onRate={rating => onRate(id, rating)}
            />
        </section>
    );
};

export default function ColorList({
    onRemoveColor = f => f,
    onRateColor = f => f
}) {
    const { colors } = useContext(ColorContext);
    console.log(colors);
    console.log(colors.length);

    if (!colors.length) return <div>표시할 색이 없습니다.</div>;

    return (
        <div className={"color-list"}>
            {colors.map(color => (
                <Color
                    key={color.id} {...color}
                    onRemove={onRemoveColor}
                    onRate={onRateColor}
                />
            ))}
        </div>
    );
};