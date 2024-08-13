import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { IndianRupee, Pen, QrCode, VerifiedIcon } from "lucide-react";

const fundraiser = {
    title: 'Help Rakesh Fight Against Covid-19',
    img: 'https://picsum.photos/500',
    author: 'Rohit Khurana',
    doctor: 'Dr. A. Gupta',
    verified: true,
    patientName: 'Rakesh Sharma',
    patientAge: 31,
    diagnose: 'Covid-19',
    flag: 'Urgent',
    story: "Meena has always been the pillar of her family, a devoted mother, loving wife, and a caring daughter. At 38, she never imagined that her world would come crashing down with the devastating news of her cancer diagnosis. What started as a minor discomfort soon turned into something far more serious when she was diagnosed with Stage 3 breast cancer. This news shook the entire family to its core, leaving them grappling with the harsh reality of the battle ahead.\n\n" +
        "Meena's journey since the diagnosis has been nothing short of a nightmare. From frequent hospital visits to grueling chemotherapy sessions, every day has been a struggle. The once-vibrant woman, who was always full of life and energy, now finds herself fighting for every breath. The physical pain is excruciating, but the emotional toll on her and her family is even greater. Despite the tremendous pain and suffering, Meena’s spirit remains unbroken. She is determined to fight this battle with everything she has, not just for herself, but for her young children who still need their mother.\n\n" +
        "However, the cost of her treatment is staggering. The chemotherapy sessions, medications, surgeries, and ongoing medical care have drained the family's savings. Her husband, Arjun, works tirelessly, but his income is barely enough to cover the basic expenses, let alone the mounting medical bills. The family has already sold off many of their belongings and borrowed heavily from friends and relatives, but it is still not enough. They are now at a point where they need help from the community to continue Meena’s treatment.\n\n" +
        "This is where your support comes in. By contributing to Meena’s fundraiser, you can help ensure that she gets the treatment she desperately needs. Every donation, no matter how small, brings her one step closer to recovery. Your generosity can make a real difference in Meena’s life, giving her the chance to see her children grow up, to live the life she dreams of, and to continue being the loving, caring person she has always been.\n\n" +
        "Meena's battle is far from over, but with your help, she can win this fight. Please consider donating to her cause and spreading the word. Together, we can help Meena overcome cancer and return to the life she loves.",
    totalAmount: 400000,
    raised: 39000,
    Hospital: 'Ruby Hall Clinic, Pune',
    Location: 'Shivajinagar, Pune, MH, India',
    StoryDate: Date.now(),
    lastDate: '31 Jan,2024',
    // Save details of users who donated to this fundraiser
    Donors: [
        {
            name: 'Rohit',
            amount: '500',
            timeStamp: '8:30 21-08-2024'
        },
        {
            name: 'Rohit',
            amount: '500',
            timeStamp: '8:30 21-08-2024'
        },
        {
            name: 'Rohit',
            amount: '500',
            timeStamp: '8:30 21-08-2024'
        },
        {
            name: 'Rohit',
            amount: '500',
            timeStamp: '8:30 21-08-2024'
        },
    ],


}

function Fundraiser() {
    return (
        <div className="grid w-full p-4 gap-4">

            <div className="text-xl w-full grid place-content-center md:place-content-start md:ml-5 font-bold md:text-3xl p-2 underline">
                {fundraiser.title}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full p-2 gap-2 md:ml-5 md:text-left">
                {/* Image and Video part */}
                <div className="w-full border border-black max-h-[30em] rounded-2xl overflow-hidden">
                    {/* this has to turned into an auto slider to view and play contents */}
                    <img src={fundraiser.img} alt="Patient Image" className="w-full h-full" />
                </div>

                {/* Patient Details Section */}
                <div className="grid">
                    <div className="flex gap-2 h-fit">
                        <Pen size={20} />
                        <p>Fundraiser by : {fundraiser.author}</p>
                    </div>

                    <div className="p-2 h-fit md:font-medium md:text-xl">
                        <div>
                            Patient Name : {fundraiser.patientName}
                        </div>
                        <div>
                            Age : {fundraiser.patientAge}
                        </div>
                        <div>
                            Location : {fundraiser.Location}
                        </div>
                        <div>
                            Hospital : {fundraiser.Hospital}
                        </div>
                        <div>
                            Diagnosed : {fundraiser.diagnose}
                        </div>
                        <div>
                            Level : {fundraiser.flag}
                        </div>
                        <div>
                            Need Money By : {fundraiser.lastDate}
                        </div>
                        <div className="border p-2 my-2 gap-2 bg-green-100 rounded-md w-fit">
                            {fundraiser.verified ?
                                <div className="flex text-lg gap-2">
                                    Verrified By : {fundraiser.doctor}
                                    <VerifiedIcon className="text-blue-300" />
                                </div>
                                :
                                <div>
                                    Not Verified, Checck Docks
                                </div>
                            }
                        </div>

                    </div>

                    <div className="grid w-full place-content-center gap-4 border border-black rounded-lg ">
                        <div className="flex w-full justify-evenly max-h-[2em] p-2 items-center gap-4 md:gap-8 md:border md:p-4 rounded-xl bg-slate-50">
                            <div className="text-lg font-semibold p-2 md:p-6">
                                Money Raised
                            </div>
                            <Separator orientation="vertical" className="bg-[black]" />
                            <div className="text-lg font-semibold p-2 md:p-6">
                                {fundraiser.Donors.length}+ supports
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="p-4">
                                <div className="font-medium">Amount : {fundraiser.raised} / {fundraiser.totalAmount} </div>
                                <Progress max={fundraiser.totalAmount} value={fundraiser.raised} className="border border-black p-4" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* A button for smaller screens*/}
                <div className="fixed bottom-20 right-5 lg:hidden">
                    <div className="z-9 lg:grid">
                        <button className="relative inline-flex h-12 p-[1px] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-orange-500 overflow-hidden rounded-full">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-3 py-1 text-sm font-medium backdrop-blur-2xl">
                                Contribute Now
                            </span>
                        </button>
                        {/* Shinny Button */}
                        {/* <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            Contribute Now
                        </button> */}
                        {/* Normal button */}
                        {/* <Button className="bg-orange-500" >Contribute Now</Button> */}
                    </div>
                </div>
                {/*  side QR for larger machines */}
                <div className="hidden lg:block fixed right-10">
                    <div className="z-9 lg:grid w-full border border-red-400 rounded-xl p-2 gap-1 place-content-center bg-slate-400 overflow-hidden">
                        {/* progress bar */}
                        <div className="w-full">
                            <div className="p-4">
                                <div className="font-medium">Amount : {fundraiser.raised} / {fundraiser.totalAmount} </div>
                                <Progress max={fundraiser.totalAmount} value={fundraiser.raised} className="border border-black p-4" />
                            </div>
                        </div>
                        {/* Amount Specific Qr default : Remaining */}
                        <div className="grid place-content-center">
                            <div className="w-[20em] rounded-xl overflow-hidden grid place-content-center">
                                <QrCode size={250} />
                                {/* <img src={fundraiser.img} alt="QR Scaner" /> */}
                            </div>
                        </div>
                        <div className="mt-2 w-full items-center">                            
                            <Button className="w-full space-x-2">
                                Donate 
                                <IndianRupee size={20} />
                                {fundraiser.totalAmount - fundraiser.raised}
                            </Button>
                        </div>
                        <div className="grid place-content-center">
                            <p>OR</p>
                        </div>
                        <div className="w-full">
                            <div className="flex w-full max-w-sm items-center space-x-2">
                                <Input type="amount" placeholder="Enter Amount" className="border-dashed border-black" />
                                <Button type="submit">Generate QR</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {/* Complete Story */}
                <div className="p-2 ">
                    <div className="text-lg md:text-xl ">Story  :</div>
                    <div className="text-sm md:text-lg grid md:grid-cols-2">
                        <div className="">
                            {fundraiser.story}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fundraiser;