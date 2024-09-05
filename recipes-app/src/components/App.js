import React, {useState} from "react";
import colorData from "../data/color-data.json";
import ColorList from "./ColorList";
import AddColorForm from "./AddColorForm";

export default function App() {
    return (
        <>
            <AddColorForm />
            <ColorList />
        </>
    )
}