
import Hero from "@/components/created/HomeHero";
import HomeDonate from "@/components/created/HomeDonate";
import { ThreeDCardDemo } from "@/components/created/HomeJoin";
import Testimonial from "@/components/created/HomeTestimonial";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <div className="grid bg-white">
            <div className="bg-slate-200 p-6 curvedB-R-S md:curvedB-R-M lg:curvedB-R-L">
                <Hero />
            </div>
            <div className="bg-slate-200">
                <div
                    className="bg-white 
                        contribute-S md:contribute-M lg:contribute-L 
                        ml-[5em] lg:ml-[20em]
                    ">
                    <DonateSection />
                </div>

            </div>
            <div className="p-4 bg-slate-200 curvedT-R-S md:curvedT-R-M lg:curvedT-R-L">
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
        <div className=" grid overflow-hidden max-w-full py-4 gap-2 md:gap-4">
            <div className="grid place-content-center gap-1">
                <p className="SectionTitle">
                    <Link to="">Testimonails</Link>
                </p>
                <p className="w-fit place-self-center">Stories of Hope and Trust</p>
            </div>
            <div className="overflow-hidden">
                <Testimonial />
            </div>
        </div>

    )
}

function JoinSection() {
    return (
        <div className=" grid overflow-hidden max-w-full py-4 p-2 gap-2 md:gap-4">
            <div className="grid place-content-center gap-1">
                <p className="SectionTitle">
                    <Link to="">Join ArogyArpan</Link>
                </p>
                <p className="w-fit place-self-center"> Let's Help Humanity </p>
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

function DonateSection() {
    return (
        <div className="
            -ml-[5em] lg:-ml-[20em]
        ">
            <div className="grid max-w-full py-4 p-2 gap-2 md:gap-4 relative ">
                <div className="grid place-content-center gap-1">
                    <p className="SectionTitle">
                        <Link to="">Contribute Now</Link>
                    </p>
                    <p className="w-fit place-self-center">Help people Directly !!</p>
                </div>
                <div className="max-h-screen overflow-hidden">
                    <HomeDonate />
                </div>
                <div className="absolute bottom-0 w-full grid place-content-center p-2 backdrop-blur-md border-b-black">
                    <Link to={"/fundraisers"}>
                        <Button className="max-w-svw Rborder p-2 px-10">View All Fundraisers</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}


// import { testimonials } from "@/components/created/HomeDonate";