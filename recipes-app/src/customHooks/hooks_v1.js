import React, {createContext, useContext, useState} from 'react';

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