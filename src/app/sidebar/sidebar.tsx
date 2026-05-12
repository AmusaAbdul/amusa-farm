"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Typewriter from "typewriter-effect";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [translateX, setTranslateX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);

    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;

        const currentX = e.touches[0].clientX;
        const diff = currentX - startX;

        if (diff < 0) {
            setTranslateX(diff);
        }
    };

    const handleTouchEnd = () => {
        setIsDragging(false);

        if (translateX < -100) {
            setIsOpen(false);
        }   
        setTranslateX(0);
    };
    const links = [
        { name: "Overview", path: "/" },
        { name: "Livestock Section", path: "/livestockmanagment" },
        { name: "Crop Section", path: "/cropmanagment" },
        { name: "Equipments Section", path: "/equipments" },

    ];

    return (
        <>
            <div className="flex justify-between bg-white shadow items-center md:hidden ">
                <div className="">
                    <div onClick={() => setIsOpen(!isOpen)} className=" md:hidden cursor-pointer  p-6 flex flex-col gap-1 z-1002  w-fit">
                        <div className={`h-1 w-6 bg-green-500 transition-all duration-300 ease-in-out `}></div>
                        <div className={`h-1 w-6 bg-green-500 transition-all duration-300 ease-in-out `}></div>
                        <div className={`h-1 w-6 bg-green-500 transition-all duration-300 ease-in-out `}></div>
                    </div>
                    {isOpen && (<div className="fixed inset-0 bg-black/50 z-998" onClick={() => setIsOpen(false)} />)}
                    <aside className="" >
                        <nav onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                            style={{
                                transform: isOpen
                                    ? `translateX(${translateX}px)`
                                    : `translateX(-100%)`,
                                transition: isDragging ? "none" : "transform 0.3s ease",
                            }} onClick={() => setIsOpen(false)} className={`${isOpen ? "block" : "hidden"} z-999 p-7 pt-10 text-base fixed top-0 left-0 h-full w-[80%] flex flex-col gap-7 transform transition-transform duration-300 ease-in-out bg-green-500 bg-[url(https://media.istockphoto.com/id/1154958041/photo/taking-care-of-the-crop-aerial-view-of-a-tractor-fertilizing-a-cultivated-agricultural-field.jpg?s=2048x2048&w=is&k=20&c=H0a7ngBV9Bu8Oq9SMWBnLxluAOVD7_-hBra_zrNRzcg=)] `}>
                            <h1 className="text-center text-white text-xl hover:text-green-700 font-bold italic flex gap-0 justify-center">
                                🌿
                                <Typewriter
                                    options={{
                                        strings: [
                                            " Amusa Farm"
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        delay: 60,
                                        deleteSpeed: 40,
                                    }}
                                />
                            </h1>
                            {links.map((link) => (
                                <Link key={link.name} href={link.path} onClick={() => setIsOpen(false)} className={` ${usePathname() === link.path ? "text-white shadow" : "text-gray-300"} `}>
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </aside>
                </div>
                <div className="text-base italic  text-green-500">
                    <Typewriter
                        options={{
                            strings: [
                                "Welcome to the Amusa Farm 🌿"
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 60,
                            deleteSpeed: 40,
                        }}
                    />
                </div>
            </div>
            <aside>
                <nav className={`hidden md:flex overflow-y-scroll h-full md:p-7 w-2xs text-base flex-col gap-7 transform transition-transform duration-300 ease-in-out bg-green-500 2xl:overflow-y-hidden bg-[url(https://media.istockphoto.com/id/1154958041/photo/taking-care-of-the-crop-aerial-view-of-a-tractor-fertilizing-a-cultivated-agricultural-field.jpg?s=2048x2048&w=is&k=20&c=H0a7ngBV9Bu8Oq9SMWBnLxluAOVD7_-hBra_zrNRzcg=)] `}>
                    <h1 className=" text-center text-white text-xl hover:text-green-700 font-bold italic flex gap-0">
                        🌿
                        <Typewriter
                            options={{
                                strings: [
                                    " Amusa Farm"
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 60,
                                deleteSpeed: 40,
                            }}
                        />
                    </h1>
                    {links.map((link) => (
                        <Link key={link.name} href={link.path} className={` ${usePathname() === link.path ? "text-white " : "text-gray-300"} ${usePathname() === link.path ? "font-bold" : ""} `}>
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </aside>
        </>


    )
}