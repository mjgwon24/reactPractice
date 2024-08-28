import React, {useState} from "react";
import colorData from "../data/color-data.json";
import ColorList from "./ColorList";

export default function App() {
    // useState: React의 상태 관리 훅, 컴포넌트 내에서 상태 변수를 선언하고 그 값을 업데이트할 수 있게 해준다.
    // 반환 배열 2개: 현재 상태 값, 상태 업데이트 함수
    // useState 훅 데이터 변경 -> 훅이 걸린 컴포넌트에 새 값 전달 -> 컴포넌트 재렌더링
    const [colors, setColors] = useState(colorData.colors);

    // return []: 여러개의 JSX 요소를 배열로 반환, 주로 동적으로 여러 요소를 생성할 때 사용
    // return (): JSX 요소 반환, 하나의 루트 요소 포함, 일반적인 컴포넌트 구조에서 사용
    return (
        <ColorList
            colors = {colors}
            onRemoveColor={id => {
                const newColors = colors.filter(color => color.id !== id);
                setColors(newColors);
            }}
        />
    )
}