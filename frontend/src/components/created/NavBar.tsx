"use client"

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet"
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
// Mode not working 
import { ModeToggle } from "./ModeToggle";
import { Toggle } from "@/components/ui/toggle"
import { Link } from "react-router-dom";

//pages
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "@/pages/Home";
import Layout from "@/pages/Layout";
import { PageList } from "@/utils/PageList";





export default function NavBar() {
    return (
        <div className='sticky w-full top-0 left-0 right-0 z-10 backdrop-blur-lg rounded-lg mb-4 border'>
            <div className='pl-4 p-2 md:p-3 flex flex-row justify-between items-centercontent-center shadow-md min-w-full relative top-0'>
                <div className="block md:hidden">
                    <ToggleMenu />
                </div>
                <div className='flex items-center justify-start'>
                    <WebLogo />
                </div>
                <div className='md:flex gap-2 hidden'>
                    <Button variant={"outline"}>
                        Home
                    </Button>
                    <Button variant={"outline"}>
                        About
                    </Button>
                    <Button variant={"outline"}>
                        Cases
                    </Button>
                    <Button variant={"outline"}>
                        Contact
                    </Button>
                </div>
                <ModeToggle />
            </div>
        </div>

    )
}

export function ToggleMenu() {
    const side = "left";

    return (
        <div className="grid grid-cols-2 gap-2">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" className="min-w-12">
                        <HamburgerMenuIcon />
                    </Button>
                </SheetTrigger>
                <SheetContent side={side}>
                    <SheetHeader>
                        <SheetTitle>Menu</SheetTitle>
                        <SheetDescription>
                            Navigation Menu
                        </SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                        <ToggleMenuPages />
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}


function ToggleMenuPages() {
    return (
        <>
            {PageList.map((page, index) => (
                <SheetClose key={index} asChild>
                    <Link to={page}>
                        <Toggle variant="outline" aria-label="Toggle" className="w-full">
                            {page}
                        </Toggle>
                    </Link>
                </SheetClose>
            ))}
        </>
    )
}


function WebLogo() {
    return (
        <Link to="/">
            <p className='font-mono text-xl'>
                Arogy<span className="text-orange-400">Arpan</span>
            </p>
        </Link>
    )
}

export function Routing() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home />}></Route>
                        <Route path='home' element={<Home />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}