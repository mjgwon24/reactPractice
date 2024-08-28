import React from "react";
import StarRating from "./StarRating";
import {FaTrash} from "react-icons/fa";

export function Color({id, title, color, rating, onRemove = f => f}) {
    return (
        <section>
            <h1>{title}</h1>
            <button onClick={() => onRemove(id)}>
                <FaTrash />
            </button>
            <div style={{height: 50, backgroundColor: color}} />
            <StarRating selectedStars={rating}/>
        </section>
    );
};

export default function ColorList({colors = [], onRemoveColor = f => f}) {
    if (!colors.length) {
        return <div>표시할 색이 없습니다.</div>;
    }

    return (
        <div>
            { colors.map(color => (
                <Color key={color.id} {...color} onRemove={onRemoveColor}/>
            ))}
        </div>
    )
};