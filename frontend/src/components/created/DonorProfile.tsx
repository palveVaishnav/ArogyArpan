import { Button } from "@/components/ui/button";
import { AwardIcon, BadgeIndianRupee, HelpingHand } from "lucide-react";


function DonorProfile() {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 mx-10 md:p-10 place-content-center">
                <div className="p-4 w-full grid place-content-center">
                    <img src="https://picsum.photos/204" className="rounded-[4em] Bborder shadow-xl md:shadow-3xl" />
                </div>

                <div className="border rounded-md md:rounded-lg shadow-sm p-2">
                    {/* Personal Details Container */}
                    <div className="gap-2 p-4">
                        {/* name */}
                        <div className="flex items-center gap-2">
                            <div className="font-semibold md:text-xl">
                                {"John Deo"}
                            </div>
                            <Button variant={'outline'} >Edit Profile</Button>
                        </div>
                        {/* username */}
                        <div>
                            <div className="font-light">
                                {"@johndeo"}
                            </div>
                        </div>
                        {/* about/ bio */}
                        <div className="p-3 w-full">
                            <div className="font-normal md:w-2/5">
                                {"Tell us more about you Tell us more about youTell us more about youTell us more about you"}
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="relative inline-flex h-12 p-1 focus:outline-none focus:ring-2 overflow-hidden rounded-xl">
                            <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff7400_0%,#e8a217_50%,#efb110_100%)]' />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center px-3 py-1 text-sm font-medium backdrop-blur-2xl">
                                <AwardIcon size={15} strokeWidth={2} className="icons" />
                                <p>Patron</p>
                            </span>
                        </div>

                    </div>
                </div>

            </div>

            {/* Stats + let user decide to showcase this or not and let them decide to every small detail  */}
            {/* 
                                1. Amount 
                                2. No of people
                                3. Our Community badge, if donated money to arogyArpan
                            */}

            <div className="grid place-content-center">
                <div className="grid grid-cols-2 gap-4 md:gap-8 m-10">

                    <div className="profileBadge">
                        <div className="grid place-content-center">
                            <BadgeIndianRupee size={15} strokeWidth={2} className="icons" />
                        </div>
                        <div className="grid place-content-center">
                            {'2,00,000'}
                        </div>
                        <div className="grid place-content-center text-sm md:text-lg">
                            Donated
                        </div>
                    </div>

                    <div className="profileBadge">
                        <div className="grid place-content-center">
                            <HelpingHand size={15} strokeWidth={2} className="icons" />
                        </div>
                        <div className="grid place-content-center">
                            {'25+'}
                        </div>
                        <div className="grid place-content-center text-sm md:text-lg">
                            Grants
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}



export default DonorProfile;