import HomeDonate from "@/components/created/HomeDonate";
import { Button } from "@/components/ui/button";

function Fundraisers() {
    return (
        <div className="relative grid gap-4">
            <div className=" grid py-4 p-2 gap-4 md:gap-4 relative">
                <div className="grid place-content-center gap-1">
                    <p className="SectionTitle">
                        <p>Contribute Now</p>
                    </p>
                    <p className="w-fit place-self-center">Help people Directly !!</p>
                </div>
            </div>
            <div className="grid place-content-center sticky mx-auto top-16 z-10 ">
                <div className="flex gap-2 p-2 lg:p-3 Bborder backdrop-blur-md rounded-md ">
                    <Button variant={'outline'} className="lg:w-[9em]">Filter 1</Button>
                    <Button variant={'outline'} className="lg:w-[9em]">Filter 1</Button>
                    <Button variant={'outline'} className="lg:w-[9em]">Filter 1</Button>
                    <Button variant={'outline'} className="lg:w-[9em]">Filter 1</Button>
                </div>
            </div>

            <div className="p-4 mt-30 relative z-9">
                <HomeDonate />
            </div>
        </div>
    )
}

export default Fundraisers;