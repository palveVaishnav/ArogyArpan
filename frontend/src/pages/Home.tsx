import Hero from "@/components/created/Hero";
import { ThreeDCardDemo } from "@/components/created/HomeDonate";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
// import { SwipeCarousel } from "@/components/created/HomeDonate";

export default function Home() {
    return (
        <div className="grid gap-6">
            <div className="w-full" >
                <Hero />
            </div>
            <div className="max-w-screen">
                <DonateSection />
            </div>
        </div>
    )
}

// import { testimonials } from "@/components/created/HomeDonate";

function DonateSection() {
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
                <ThreeDCardDemo />
                <ThreeDCardDemo />
                <ThreeDCardDemo />
            </div>
        </div>
    )
}