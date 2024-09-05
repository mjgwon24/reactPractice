import React, {createContext, useContext, useState} from "react";
import colorData from "../data/color-data.json"

export const ColorContext = createContext();
export const useColors = () => useContext(ColorContext);

export function ColorProvider({children}) {
    const [colors, setColors] = useState(colorData.colors);

    /**
     * color-data.json에 새로운 색상 추가
     * @param title
     * @param color
     */
    const addColor = (title, color) => {
        // 현재 color-data의 가장 마지막 id 가져오기
        const lastId = colors[colors.length - 1].id;
        const newId = String(parseInt(lastId) + 1);

        setColors([
            ...colors,
            {
                "id": newId,
                title, // "title": title
                color, // "color": color
                "rating": 0
            }
        ]);
    };

    /**
     * 평점 변경 함수
     * @param id
     * @param rating
     */
    const rateColor = (id, rating) => {
        setColors(
            colors.map(color => color.id === id ? {...color, rating} : color)
        );
    };

    /**
     * 색상 제거 함수
     * @param id
     * @param rating
     */
    const removeColor = id => setColors( colors.filter(color => color.id !== id));

    return (
        <ColorContext.Provider value={{colors, addColor, rateColor, removeColor}}>
            {children}
        </ColorContext.Provider>
    );
}