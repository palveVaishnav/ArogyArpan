import { PenIcon, VerifiedIcon } from "lucide-react";
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center rounded-lg m-4 md:mx-[10em] gap-6">
            {fundraiserInfo.map((f) => (
                <div key={f.id} className="grid place-content-center w-full">
                    <div className="grid w-[20em] lg:w-[22em] Bborder shadow-sm rounded-xl bg-slate-300 gap-4 group">
                        <div className="w-full border overflow-hidden relative text-white">
                            {/* A Carausal style slider */}
                            <div className="relative">
                                <img src={f.img} className="w-full h-full" />
                            </div>
                            <div className="absolute bottom-0 p-5 backdrop-blur-lg rounded-t-3xl overflow-hidden border h-[7em] group-hover:h-[10em] w-full">
                                <div className="text-[1.2em] font-semibold md:text-xl w-full overflow-hidden">
                                    {f.title}
                                </div>
                                <div className="">
                                    <div className="h-10 overflow-hidden hidden group-hover:block">
                                        ...{f.story}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid w-full p-4 gap-2 rounded-t-3xl overflow-hidden">
                            <div className="text-left grid md:flex border rounded-md h-fit w-full p-1 justify-around overflow-hidden gap-1 md:gap-2 items-center">
                                <div className="flex gap-1 items-center w-full">
                                    <PenIcon size={15} />
                                    {f.author}
                                </div>
                                <Separator orientation={'horizontal'} className="bg-black md:hidden" />
                                {/* <Separator orientation={'vertical'} className="bg-black hidden md:visible"/> */}
                                <Separator orientation={'vertical'} className="bg-black md:py-3" />
                                <div className="flex gap-2 w-full">
                                    {f.verified ?
                                        <div className="flex">
                                            <VerifiedIcon className="text-blue-400" />
                                            <div>{f.doctor}</div>
                                        </div>
                                        :
                                        <div>Not Verified</div>
                                    }
                                </div>
                            </div>

                            <div className="p-2 w-full grid gap-1">
                                <div>
                                    <div>Amount Raised : {f.raised} / {f.totalAmount}</div>
                                </div>
                                <div className="grid">
                                    <Progress max={f.totalAmount} value={f.raised} />
                                </div>
                            </div>
                            <div className="w-full flex gap-2">
                                <Button variant={'outline'} className="w-full border-[#333] hover:bg-primary hover:text-secondary">Contribute </Button>
                                <Button variant={'outline'} className="border-[#333] hover:bg-primary hover:text-secondary">Read More</Button>
                            </div>
                        </div>
                    </div>
                </div>

            ))

            }
        </div>
    )
}


export default HomeDonate;