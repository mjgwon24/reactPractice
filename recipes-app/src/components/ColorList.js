import React from "react";
import StarRating from "./StarRating";

export function Color({title, color, rating}) {
    return (
        <section>
            <h1>{title}</h1>
            <div style={{height: 50, backgroundColor: color}} />
            <StarRating selectedStars={rating}/>
        </section>
    );
};

export default function ColorList({colors = []}) {
    if (!colors.length) {
        return <div>표시할 색이 없습니다.</div>;
    }

    return (
        <div>
            {
                colors.map(color => <Color key={color.id} {...color} />)
            }
        </div>
    )
};