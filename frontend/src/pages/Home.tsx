
import Hero from "@/components/created/Hero";
import HomeDonate from "@/components/created/HomeDonate";
import { ThreeDCardDemo } from "@/components/created/HomeJoin";
import Testimonial from "@/components/created/Testimonial";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="grid gap-4">
            <div className="" >
                <Hero />
            </div>
            <div className="md:p-2">
                <DonateSection />
            </div>
            <div className="">
                <JoinSection />
            </div>
            <div className="">
                <TestimonialSection />
            </div>
        </div>
    )
}

function TestimonialSection() {
    return (
        <div className="overflow-hidden">
            <Testimonial />
        </div>
    )
}

function DonateSection() {
    return (
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