"use client";

// import Image from "next/image";
// import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
// import Link from "next/link";

export function ThreeDCardDemo() {
    return (
        <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black w-auto sm:max-w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                    Doctors
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                    <img
                        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                    Describe why Doctors Should join this site, tell them how they can make a difference .! 
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                        Sign up
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        // as={Link}
                        href="https://twitter.com/mannupaaji"
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white underline cursor-pointer"
                    >
                        Read More →
                    </CardItem>                    
                </div>
            </CardBody>
        </CardContainer>
    );
}
