import React from "react";
import {Link} from "react-router-dom";

export function Home() {
    return (
        <div>
            <h1>[홈페이지]</h1>
            <nav>
                <Link to={"about"}>회사 소개</Link>
                <Link to={"events"}>이벤트</Link>
                <Link to={"products"}>제품</Link>
            </nav>
        </div>
    );
}

export function About() {
    return (
        <div>
            <h1>[회사소개]</h1>
        </div>
    );
}

export function Events() {
    return (
        <div>
            <h1>[이벤트]</h1>
        </div>
    );
}

export function Products() {
    return (
        <div>
            <h1>[제품]</h1>
        </div>
    );
}

export function Contact() {
    return (
        <div>
            <h1>[고객지원]</h1>
        </div>
    );
}