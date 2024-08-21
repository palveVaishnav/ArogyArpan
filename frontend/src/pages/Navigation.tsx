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
import { Link, useNavigate } from "react-router-dom";

function NavButtons() {
    const navigate = useNavigate();
    return (
        <>
            <Button variant={"outline"}
                onClick={() => navigate("/Home")}
            >
                Home
            </Button>
            <Button variant={"outline"}
                onClick={() => navigate("/Fundraisers")}
            >
                Fundraisers
            </Button>
            <Button variant={"outline"}
                onClick={() => navigate("/About")}
            >
                About
            </Button>
            <Button
                onClick={() => navigate("/createFundraiser")}
            >
                Create Fundraiser
            </Button>
            <Button
                onClick={LogOut}
            >
                Logout
            </Button>

        </>
    )
}

const LogOut = () =>{
    localStorage.removeItem("token");
    localStorage.removeItem("type");
}

export default function NavBar() {
    const navigate = useNavigate()
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
                    <NavButtons />

                </div>
                <div className="rounded-full flex gap-2">
                    {localStorage.getItem("token") ?
                        <>
                            <Button
                                className="md:hidden"
                                onClick={() => navigate("/createfundraiser")}
                            >
                                Create Fundraiser
                            </Button>
                            <div
                                className="rounded-full border overflow-hidden w-12 cursor-pointer"
                                onClick={() => navigate("/Profile")}
                            >
                                <img    
                                    className="w-full h-full"
                                    src="https://avatar.iran.liara.run/public"
                                 />
                            </div>

                        </>
                        :
                        <>
                            <Button
                                className="md:hidden"
                                onClick={() => navigate("/createfundraiser")}
                            >
                                Create Fundraiser
                            </Button>
                            <Button
                                // className="hidden md:block"
                                onClick={() => navigate("/Signin")}
                            >
                                Login
                            </Button>
                        </>
                    }
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
                        <SheetClose asChild>
                            <NavButtons />
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}


export function WebLogo() {
    return (
        <Link to="/Home">
            <p className='font-mono text-xl'>
                Arogy<span className="text-orange-400">Arpan</span>
            </p>
        </Link>
    )
}

