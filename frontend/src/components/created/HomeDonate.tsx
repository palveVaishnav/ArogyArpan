import { BriefcaseMedical, PenIcon, VerifiedIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { Separator } from "../ui/separator";

function HomeDonate() {
    return (
        <div className="w-full">
            <FundraiserCard />
        </div>
    )
}

interface fundraiserInfoType {
    id: number,
    title: string,
    img: string,
    author: string,
    doctor?: string,
    verified: boolean,
    story: string,
    totalAmount: number,
    raised: number
}

export function FundraiserCard() {
    // will import data from backend here 
    const fundraiserInfo: fundraiserInfoType[] = [
        {
            id: 1,
            title: 'Help Rakesh Fight Against Covid-19',
            img: 'https://picsum.photos/200',
            author: 'Rohit Sharma',
            doctor: 'Dr. A. Gupta',
            verified: true,
            story: 'Rakesh has been battling Covid-19 for the past few weeks and requires immediate financial assistance for his treatment. Your support can make a huge difference.',
            totalAmount: 400000,
            raised: 39000,
        },
        {
            id: 2,
            title: 'Support Anjali\'s Surgery Recovery',
            img: 'https://picsum.photos/300',
            author: 'Suman Verma',
            doctor: 'Dr. P. Singh',
            verified: true,
            story: 'Anjali recently underwent a major surgery and is in need of financial help to cover the medical expenses. Please contribute and help her recover soon.',
            totalAmount: 250000,
            raised: 120000,
        },
        {
            id: 3,
            title: 'Emergency Fund for Sunil\'s Accident Treatment',
            img: 'https://picsum.photos/400',
            author: 'Neha Kumar',
            // doctor: 'Dr. R. Deshmukh',
            verified: false,
            story: 'Sunil met with a severe accident and is currently in ICU. He needs urgent financial support for his ongoing treatment and surgeries. Your help is crucial.',
            totalAmount: 500000,
            raised: 250000,
        },
        {
            id: 4,
            title: 'Help Meena Overcome Cancer',
            img: 'https://picsum.photos/500',
            author: 'Arjun Patel',
            doctor: 'Dr. S. Reddy',
            verified: true,
            story: 'Meena is fighting a tough battle with cancer. The treatment is expensive, and her family needs financial assistance to continue her care. Any contribution will help.',
            totalAmount: 600000,
            raised: 200000,
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 place-content-center md:p-4 gap-10 rounded-lg">
            {fundraiserInfo.map((f) => (
                <div key={f.id} className="flex border shadow-sm rounded-xl p-4  gap-1 w-full hover:shadow-lg">
                    <div className="w-full border overflow-hidden rounded-lg shadow-md">
                        {/* A Carausal style slider */}
                        <img src={f.img} className="w-full h-full" />
                    </div>
                    <div className="grid gap-2 w-full p-2">
                        <div className="text-lg font-bold md:text-2xl w-full overflow-hidden">
                            {f.title}
                        </div>
                        <div className="grid md:flex border rounded-md h-fit w-full p-1 justify-around overflow-hidden gap-1 items-center">
                            <div className="flex gap-1 items-center w-full">
                                <PenIcon size={15} />
                                {f.author}
                            </div>
                            {/* <Separator orientation={'horizontal'} className="bg-black md:hidden" /> */}
                            {/* <Separator orientation={'vertical'} className="bg-black hidden md:visible"/> */}
                            {/* <Separator orientation={'vertical'} className="bg-black" /> */}
                            <div className="flex gap-2 items-cente w-full">
                                {f.verified ?
                                    <>
                                        <BriefcaseMedical size={25} />
                                        <div>{f.doctor}</div>
                                        <div>
                                            <VerifiedIcon className="text-blue-400" />
                                        </div>
                                    </>
                                    :
                                    <>Not Verified</>
                                }
                            </div>
                        </div>
                        <div className="">
                            <div className="h-5 overflow-hidden hidden md:block">
                                ...{f.story}
                            </div>
                            <Button variant={'outline'} className="border-[#333] hover:bg-primary hover:text-secondary">Read Complete Story</Button>
                        </div>
                        <div className="p-2 w-full grid gap-1">
                            <div>
                                <div>Amount Raised : {f.raised} / {f.totalAmount}</div>
                            </div>
                            <div className="grid">
                                <Progress max={f.totalAmount} value={f.raised} className="border border-black"/>
                            </div>
                        </div>
                        <div className="w-full">
                            <Button variant={'outline'} className="w-full bg-green-400 hover:bg-green-500 border hover:border-black ">Contribute</Button>
                        </div>
                    </div>
                </div>

            ))

            }
        </div>
    )
}


export default HomeDonate;