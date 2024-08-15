import { Button } from "@/components/ui/button";
import { CheckCircle, CircleX } from "lucide-react";
const DoctorHistory = [
    {
        id: 1,
        title: 'Help My Father Overcome Blood Cancer',
        timeStamp: '8:30 PM July 21, 2024',
        valid: true,
        edited: 0,
    },
    {
        id: 2,
        title: 'Support a Child with Severe Heart Condition',
        timeStamp: '10:15 AM August 5, 2024',
        valid: true,
        edited: 1,
    },
    {
        id: 3,
        title: 'Fund Surgery for a Young Accident Victim',
        timeStamp: '2:45 PM June 12, 2024',
        valid: false,
        edited: 0,
    },
    {
        id: 4,
        title: 'Assist in Treatment of Chronic Kidney Disease',
        timeStamp: '11:00 AM September 2, 2024',
        valid: true,
        edited: 1,
    },
    {
        id: 5,
        title: 'Help a Mother Recover from Stroke',
        timeStamp: '4:20 PM May 14, 2024',
        valid: true,
        edited: 0,
    },
];





function DoctorReports() {
    return (
        <div className="grid gap-4 lg:gap-8 lg:grid-cols-2 md:place-content-center w-full p-2 md:p-4 lg:px-36">
            {DoctorHistory.map((t) => (
                <div key={t.id} className="w-full border p-2 border-[#333] rounded-lg shadow-sm hover:shadow-lg cursor-pointer">
                    <div className="flex w-full justify-between gap-2">
                        <div className="grid gap-2 p-2 w-full">
                            <div className="text-md">
                                {t.title}
                            </div>
                            <div className="text-sm font-light px-2">
                                {t.timeStamp}
                            </div>
                            <div className="mt-2 flex items-center gap-2">
                                <Button variant={'outline'}>Edit</Button>
                                {t.edited ?
                                    <div className="font-light text-sm">{"Edited : "}{t.edited}</div>
                                    :
                                    <div></div>
                                }
                            </div>
                        </div>
                        <div className="">
                            {t.valid ?
                                <div className="flex p-2 border items-center bg-green-200 rounded-md gap-2">
                                    <div>
                                        <CheckCircle size={15} strokeWidth={2} className=" text-green-600 bg-green-300 rounded-full" />
                                    </div>
                                    <div className="text-black text-md font-bold">
                                        {"Valid"}
                                    </div>
                                </div>
                                :
                                <div className="flex p-2 border items-center bg-red-200 rounded-md gap-2">
                                    <div>
                                        <CircleX size={15} strokeWidth={2} className=" text-red-600 bg-red-300 rounded-full" />
                                    </div>
                                    <div className="text-black text-md font-bold">
                                        {/* &nbsp;&#8377; */}
                                        {"Fraud"}
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


export default DoctorReports;