import React, {createContext, useContext, useEffect, useState} from 'react';

/**
 * input 텍스트 관리 커스텀 훅
 * @param initialValue
 * @returns {[{onChange: (function(*): void), value: unknown},function(): void]}
 */
export const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    return [
        {value, onChange: e => setValue(e.target.value)},
        () => setValue(initialValue)
    ];
}

/**
 * 컴포넌트 재렌더링 훅
 */
export const useAnyKeyToRender = () => {
    const [, forceRender] = useState();

    useEffect(() => {
        window.addEventListener("keydown", forceRender);
        return () => window.removeEventListener("keydown", forceRender);
    }, []);
}