"use client"
import Equipment from "./Equipment"
import EquipmentTopbar from "../topbar/EquipmentTopbar"

export default function EquipmentPage() {
    return (
        <div>
            <EquipmentTopbar />
            <div className="p-4">
                <Equipment />
            </div>
        </div>
    )
}