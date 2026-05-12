"use client"
import { useState } from "react";
import LivestockTopbar from "../topbar/LivestockTopbar"
import Cards from "./Cards"
import Animal from "./Animal"
import Filter from "./filter"

export default function Livestock() {

    const [filter, setFilter] = useState("All");
    return(
        <div>
            <LivestockTopbar />
            <div className="p-4">
                <Cards />
                <Filter filter={filter} setFilter={setFilter}  />
                <Animal filter={filter}  />
            </div>
        </div>
    )
}