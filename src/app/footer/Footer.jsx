"use client";


export default function Footer() {
    const year = new Date().getFullYear()

    return(
        <div>
            <h1 className="text-xs  md:text-sm text-md h-8 lg:text-base">
                © {year}  Amusa Farm | All rights reserved.
            </h1>
        </div>
        
    )
}



