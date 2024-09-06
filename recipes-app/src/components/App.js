import React, {useCallback, useEffect, useMemo, useState} from "react";
import colorData from "../data/color-data.json";
import ColorList from "./ColorList";
import AddColorForm from "./AddColorForm";
import {useAnyKeyToRender} from "../customHooks/hooks_v1";

function WordCount({children = ""}) {
    useAnyKeyToRender();

    /**
     * useMemo - 특정 값의 계산 결과를 기억하여, 의존성 배열의 값이 변경된 경우에만 다시 계산
     */
    const words = useMemo(() => children.split(" "), [children]);

    useEffect(() => {
        console.log("fresh render1");
    }, [words]);


    /**
     * useCallback - 특정 함수를 기억하여, 의존성 배열의 값이 변경된 경우에만 다시 계산
     */
    const fn = useCallback(() => {
        console.log("hello");
    }, []);

    useEffect(() => {
        console.log("fresh render2");
        fn();
    }, [fn]);

    return (
        <>
            <p>{children}</p>
            <p>
                <strong>{words.length} - words</strong>
            </p>
        </>
    );
}

export default function App() {
    return <WordCount>App - d WordCount</WordCount>
}