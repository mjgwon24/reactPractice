import {FaStar} from "react-icons/fa";
import React from "react";

// length 길이의 빈 배열 생성
export const createArray = length => [...Array(length)];

export const Star = ({ selected = false, onSelect = f => console.log("click") }) => (
    <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);
