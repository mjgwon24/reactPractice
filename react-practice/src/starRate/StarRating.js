import React from "react";
import {createArray, Star} from "../utils/StarUtil";

export default function StarRating({totalStars = 5}) {
    return createArray(totalStars).map((_, i) => <Star key={i}/>);
};