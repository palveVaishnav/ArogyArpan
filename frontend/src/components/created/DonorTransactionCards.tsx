import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, CircleX } from "lucide-react";
import { userType } from "@palve_vaishnav/arogyarpan";
const DonorHistory = [
    {
        id: 1,
        title: 'Help My Father Overcome Blood Cancer',
        timeStamp: '8:30 PM July 21, 2024',
        tAmount: 2000,
        transaction: true,
        status: false,
    },
    {
        id: 2,
        title: 'Support for Rakesh’s Kidney Transplant',
        timeStamp: '2:45 PM August 3, 2024',
        tAmount: 5000,
        transaction: true,
        status: true,
    },
    {
        id: 3,
        title: 'Aid for Sarah’s Heart Surgery',
        timeStamp: '9:00 AM August 10, 2024',
        tAmount: 3000,
        transaction: false,
        status: false,
    },
    {
        id: 4,
        title: 'Funds for Children’s Education',
        timeStamp: '1:15 PM August 12, 2024',
        tAmount: 2500,
        transaction: true,
        status: true,
    },
    {
        id: 5,
        title: 'Help Build a New Community Center',
        timeStamp: '6:00 PM August 15, 2024',
        tAmount: 4000,
        transaction: true,
        status: true,
    }
];

// interface transaction {
//     id: number,
//     title: string,
//     timeStamp: Date,
//     tAmount: number,
//     transaction: boolean,
//     status: boolean,
// }

function DonorTransaction({ user }: { user: userType }) {
    if (user.transactions) {
        return <h1>Data Avaliable</h1>
    }
    
    {/* Using Dummy Data for Now */ }
    return (
        <div className="grid gap-4 lg:gap-8 lg:grid-cols-2 md:place-content-center w-full p-2 md:p-4 lg:px-36">
            <h2>Dummy Data</h2>
            {DonorHistory.map((t) => (
                <div key={t.id} className="w-full border p-2 border-[#333] rounded-lg shadow-sm hover:shadow-lg cursor-pointer">
                    <div className="flex w-full justify-between gap-2">
                        <div className="grid gap-2 p-2 w-full">
                            <div className="text-md">
                                {t.title}
                            </div>
                            <div className="text-sm font-light px-2">
                                {t.timeStamp}
                            </div>
                            <div>
                                {t.transaction ?
                                    <Badge className="bg-slate-200 text-black">Transaction Successful</Badge>
                                    :
                                    <Badge className="bg-slate-200 text-[black]">Transaction Failed</Badge>
                                }
                            </div>
                            <div className="mt-2">
                                {t.status ?
                                    <Button>
                                        Funds Collected
                                    </Button>

                                    :
                                    <button className="relative inline-flex p-1 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 overflow-hidden rounded-md">
                                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#F57905_0%,#F5BA05_50%,#F57905_100%)]" />
                                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md px-3 py-1 text-sm font-medium backdrop-blur-2xl">
                                            Contribute More
                                        </span>
                                    </button>

                                }
                            </div>
                        </div>
                        <div className="">
                            {t.transaction ?
                                <div className="flex p-2 border items-center bg-green-200 rounded-md">
                                    <div>
                                        <CheckCircle size={15} strokeWidth={2} className=" text-green-600 bg-green-300 rounded-full" />
                                    </div>
                                    <div className="text-black text-md font-bold">
                                        &nbsp;&#8377;
                                        {t.tAmount}
                                    </div>
                                </div>
                                :
                                <div className="flex p-2 border items-center bg-red-200 rounded-md">
                                    <div>
                                        <CircleX size={15} strokeWidth={2} className=" text-red-600 bg-red-300 rounded-full" />
                                    </div>
                                    <div className="text-black text-md font-bold">
                                        &nbsp;&#8377;
                                        {t.tAmount}
                                    </div>
                                </div>
                            }

                        </div>
                    </div>
                </div>
            ))}
        </div >
    )
}


export default DonorTransaction;