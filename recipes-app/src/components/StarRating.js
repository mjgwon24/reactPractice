import React from 'react';
import {FaStar} from "react-icons/fa";

export default function StarRating() {
    // return []: 여러개의 JSX 요소를 배열로 반환, 주로 동적으로 여러 요소를 생성할 때 사용
    return [
      <FaStar color="red" />,
      <FaStar color="red" />,
      <FaStar color="red" />,
      <FaStar color="red" />,
      <FaStar color="red" />
    ];
}