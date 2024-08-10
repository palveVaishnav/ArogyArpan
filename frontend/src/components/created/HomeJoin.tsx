"use client";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

interface StakeholderType {
    name: string;
    img: string;
    des: string;
    signup: string;
    pageLink: string;
}

const Stakeholder: Record<string, StakeholderType> = {
    doctor:{
        name: "Doctors",
        img: "https://imgs.search.brave.com/Y8rB-oxoH8lxbSa4d2cW8nVEKZDkV8AksoX8Ivt0G-8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODg3/NDM3MDUyL3Bob3Rv/L2lsbC1iZS10aGUt/c3VwcG9ydC15b3Ut/bmVlZC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9Z1pzMUdD/VDRDUUpPM3gtcldh/dU9TZy1VWVpIUmhv/WDUwbnJ4YVpvY1V6/OD0",
        des: "Your compassion can save lives. \n Use your medical skills to be a beacon of hope and healing for those who need it most.",
        signup: "",
        pageLink: "",
    },
    seeker: {
        name: "Help Seekers",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTELDHW99F3RAgXX6iqDjZy_5YcjxIdH0l2Ag&s",
        des: "Your path to recovery and hope starts with us. \n Join us to find a supportive community and essential help.",
        signup: "",
        pageLink: "",
    },
    donor: {
        name: "Donors",
        img: "https://imgs.search.brave.com/24nydlZYexILBv5CuA6oe3cWKf7h4ZYLhgRSqcfwej0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE0/MTI1MDMzMC9waG90/by9mcmllbmRzLWFy/ZS10aGVyZS13aGVu/LXlvdS1uZWVkLXRo/ZW0tbW9zdC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9dEo1/SjdjQzdaSXFFZVd1/SG55cXlXVE5BblpV/ck9pM3dsdS1WLUt1/RGNhVT0",
        des: "Help transform lives with your support. \n Your generosity can provide a lifeline to those in urgent need.",
        signup: "",
        pageLink: "",
    },
}
interface ThreeDCardDemoProps {
    who: "doctor" | "seeker" | "donor";
}


export function ThreeDCardDemo({ who }: ThreeDCardDemoProps){
    const stakeholder = Stakeholder[who];
    return (
        <CardContainer className="inter-var">
            <CardBody className="bg-slate-100 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black w-auto sm:max-w-[30rem] h-auto rounded-xl p-6 border grid gap-2">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                    {stakeholder.name}
                </CardItem>
                <div className="flex md:grid items-center">
                    <CardItem translateZ="100" className="w-full mt-4">
                        <img
                            src={stakeholder.img}
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
                        {stakeholder.des}
                    </CardItem>
                </div>
                <div className="flex justify-between items-center md:mt-20">
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
