"use client"
import { useState } from "react";
import CropTopbar from "../topbar/CropTopbar"
import Cards from "./Card"
import Filter from "./Filter"
import Crops from "./Crops"

export default function Cropmanagment() {

    const [filter, setFilter] = useState("All");
    return (
        <>
            <CropTopbar />
            <div className="p-4">
                <Cards />
                <Filter filter={filter} setFilter={setFilter} />
                <Crops filter={filter} />
            </div>
        </>
    )
}