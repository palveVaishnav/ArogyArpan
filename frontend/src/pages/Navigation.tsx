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
// import { ModeToggle } from "./ModeToggle";
import { Toggle } from "@/components/ui/toggle"
import { Link, useNavigate } from "react-router-dom";

import { PageList } from "@/utils/PageList";

export default function NavBar() {
    const navigate = useNavigate();
    return (
        <div className='sticky w-full top-0 left-0 right-0 z-10 backdrop-blur-lg rounded-lg border'>
            <div className='py-3 px-2 md:px-[4em] flex justify-between md:justify-evenly items-center shadow-md w-full relative top-0'>
                <div className="block md:hidden">
                    <ToggleMenu />
                </div>
                <div className='flex items-center'>
                    <WebLogo />
                </div>
                <div className='md:flex gap-2 hidden'>
                    {PageList.map((p, i) => (
                        <Button key={i} variant={"outline"}
                            onClick={() => navigate(p)}
                        >
                            {p}
                        </Button>
                    ))}
                </div>
                <div className="">
                    <Button>Create a Fundraiser</Button>
                </div>
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
                    <div className="grid gap-4">
                        {PageList.map((page, index) => (
                            <SheetClose key={index} asChild>
                                <Link to={page}>
                                    <Toggle variant="outline" aria-label="Toggle" className="w-full">
                                        {page}
                                    </Toggle>
                                </Link>
                            </SheetClose>
                        ))}
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}


function WebLogo() {
    return (
        <Link to="/Home">
            <p className='font-mono text-xl'>                
                Arogy<span className="text-orange-400">Arpan</span>
            </p>
        </Link>
    )
}

