// "use client";
// import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

interface StakeholderType {
    name: string;
    img: string;
    des: string;
    signup: string;
    pageLink: string;
}

const Stakeholder: Record<string, StakeholderType> = {
    doctor: {
        name: "Doctors",
        img: "/images/6.png",
        des: "Your compassion can save lives. \n Use your medical skills to be a beacon of hope and healing for those who need it most.",
        signup: "/signup",
        pageLink: "",
    },
    seeker: {
        name: "Fundraisers",
        img:  "/images/14.png",
        des: "Your path to recovery and hope starts with us. \n Join us to find a supportive community and essential help.",
        signup: "/signup",
        pageLink: "",
    },
    donor: {
        name: "Donors",
        img:  "/images/8.png",
        des: "Help transform lives with your support. \n Your generosity can provide a lifeline to those in urgent need.",
        signup: "/signup",
        pageLink: "",
    },
}
interface ThreeDCardDemoProps {
    who: "doctor" | "seeker" | "donor";
}


// export function ThreeDCardDemo({ who }: ThreeDCardDemoProps){
//     const stakeholder = Stakeholder[who];
//     return (
//         <CardContainer className="inter-var">
//             <CardBody className="bg-slate-100 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black w-auto sm:max-w-[30rem] h-auto rounded-xl p-6 border grid gap-2">
//                 <CardItem
//                     translateZ="50"
//                     className="text-xl font-bold text-neutral-600 dark:text-white"
//                 >
//                     {stakeholder.name}
//                 </CardItem>
//                 <div className="flex md:grid items-center">
//                     <CardItem translateZ="100" className="w-full mt-4">
//                         <img
//                             src={stakeholder.img}
//                             height="1000"
//                             width="1000"
//                             className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
//                             alt="thumbnail"
//                         />
//                     </CardItem>
//                     <CardItem
//                         as="p"
//                         translateZ="60"
//                         className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
//                     >
//                         {stakeholder.des}
//                     </CardItem>
//                 </div>
//                 <div className="flex justify-between items-center md:mt-20">
//                     <CardItem
//                         translateZ={20}
//                         as="button"
//                         className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
//                     >
//                         Sign up
//                     </CardItem>
//                     <CardItem
//                         translateZ={20}
//                         // as={Link}
//                         href="https://twitter.com/mannupaaji"
//                         target="__blank"
//                         className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white underline cursor-pointer"
//                     >
//                         Read More →
//                     </CardItem>
//                 </div>
//             </CardBody>
//         </CardContainer>
//     );
// }

export function ThreeDCardDemo({ who }: ThreeDCardDemoProps) {
    const navigate = useNavigate();
    const stakeholder = Stakeholder[who]
    return (
        <div className="border grid w-full rounded-xl hover:shadow-lg bg-white">
            <div className="shadow-3xl hover:shadow-none">
                <img src={stakeholder.img} className="w-full max-h-[45vh] overflow-hidden rounded-t-xl" />
            </div>
            <div className="grid md:p-5 gap-1 z-6">
                <div className="text-base font-semibold md:text-xl">
                    {stakeholder.name}
                </div>
                <div className="grid rounded-md">
                    <div className="flex w-full py-1 px-2">
                        {stakeholder.des}
                    </div>
                </div>
                <div className="flex flex-row-reverse">
                    <Button
                        onClick={()=>navigate(stakeholder.signup)}
                        
                    >Join Now</Button>
                </div>
            </div>
        </div>
    )
}