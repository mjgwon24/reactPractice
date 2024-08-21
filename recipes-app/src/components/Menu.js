import React from "react";
import Recipe from "./Recipe";

export default function Menu({recipes}) {
    // return (): JSX 요소 반환, 하나의 루트 요소 포함, 일반적인 컴포넌트 구조에서 사용
    return (
        <article>
            <header>
                <h1>맛있는 조오리이버업</h1>
            </header>
            <div className={"recipes"}>
                {recipes.map((recipe, i) => (
                    <Recipe key={i} {...recipe} />
                ))}
            </div>
        </article>
    );
}
