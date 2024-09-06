import React from "react";
import {Route, Routes} from "react-router";
import {About, Contact, Events, Home, Products} from "./PageComponents";

export default function App() {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/about"} element={<About />} />
                <Route path={"/events"} element={<Events />} />
                <Route path={"/products"} element={<Products />} />
                <Route path={"/contact"} element={<Contact />} />
            </Routes>
        </div>
    );
}