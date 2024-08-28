import {FaStar} from "react-icons/fa";

export const createArray = length => [...Array(length)];

export const Star = ({selected = false}) => {
    <FaStar color={selected ? "red" : "grey"}/>
};