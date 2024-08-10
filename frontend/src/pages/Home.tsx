import Hero from "@/components/created/Hero";
import HomeDonate from "@/components/created/HomeDonate";
import { ThreeDCardDemo } from "@/components/created/HomeJoin";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
// import { SwipeCarousel } from "@/components/created/HomeDonate";

export default function Home() {
    return (
        <div className="grid gap-4 mb-5">
            <div className="w-full" >
                <Hero />
            </div>
            <div className="">
                <DonateSection />
            </div>
            <div className="">
                <JoinSection />
            </div>
        </div>
    )
}


function DonateSection(){
    return(
        <div className=" grid overflow-hidden max-w-full py-4 p-2 gap-2 md:gap-4">
            <div className="flex justify-around items-center">
                <Link to="" className="">
                    <Button variant="outline" className="text-xl">Donate Now</Button>
                </Link>
                <Link to="" className="">
                    <Button>{"View All >>"}</Button>
                </Link>
            </div>
            <div className="p-4">
                <HomeDonate />
            </div>
        </div>
    )
}




// import { testimonials } from "@/components/created/HomeDonate";

function JoinSection() {
    return (
        <div className=" grid overflow-hidden max-w-full py-4 p-2 gap-2 md:gap-4">
            <div className="flex justify-around items-center">
                <Link to="" className="">
                    <Button variant="outline" className="text-xl">Join Now</Button>
                </Link>
                <Link to="" className="">
                    <Button>{"View All >>"}</Button>
                </Link>
            </div>
            {/* Card */}
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 place-content-center">
                <ThreeDCardDemo who={"doctor"} />
                <ThreeDCardDemo who={"seeker"} />
                <ThreeDCardDemo who={"donor"} />
                
            </div>
        </div>
    )
}