import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { useFundraisersById } from "@/hooks/getFundraiser";
// import { FundraiserType } from "@palve_vaishnav/arogyarpan";
import { FileIcon, Files, IndianRupee, Pen, QrCode, VerifiedIcon } from "lucide-react";
import { useParams } from "react-router-dom";

function Fundraiser() {

    const { id } = useParams();
    const fundraiser = useFundraisersById({ id: Number(id) }) ?? {
        id: 0,
        authorId: 0,
        authorName: "",
        createdAt: "",
        title: "",
        patientName: "",
        age: 0,
        location: "",
        hospital: "",
        disgnose: "",
        story: "",
        amount: 0,
        raised: 0,
        due: "",
        verified: false,
        doctorId: 0,
        doctorName: "",
    };

    if (!fundraiser) {
        return <div>Loading...</div>; // You can customize this as needed
    }
    return (
        <div className="grid w-full gap-4 bg-white">

            <div className="text-xl w-full grid place-content-center md:place-content-start md:ml-5 font-bold md:text-3xl p-2 underline">
                {fundraiser.title}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full p-4 gap-2 md:ml-5 md:text-left" >
                {/* Image and Video part */}
                <div className="w-full border border-black max-h-[30em] rounded-2xl overflow-hidden">
                    {/* this has to turned into an auto slider to view and play contents */}
                    <img src={`https://picsum.photos/2${fundraiser.id}`} alt="Patient Image" className="w-full h-full" />
                </div>

                {/* Patient Details Section */}
                <div className="grid">
                    {/* Autohor */}


                    <div className="p-2 h-fit md:font-medium md:text-xl">
                        <div>
                            Patient Name : {fundraiser.patientName}
                        </div>
                        <div>
                            Age : {fundraiser.age}
                        </div>
                        <div>
                            Location : {fundraiser.location}
                        </div>
                        <div>
                            Hospital : {fundraiser.hospital}
                        </div>
                        <div>
                            Diagnosed : {fundraiser.disgnose}
                        </div>
                        {/* <div>
                            Level : {fundraiser.}
                        </div> */}
                        <div>
                            {/* Need Money By : {fundraiser.due.getDate()} */}
                        </div>


                        {/* Verified Tag */}
                        <div className="grid md:flex md:gap-2">

                            <div className="flex items-center border p-2 my-2 gap-2 bg-blue-100 rounded-md w-fit shadow-md">
                                <div>
                                    <FileIcon />
                                </div>
                                <div className="flex text-md gap-2">
                                    <p>Documents</p>
                                </div>
                            </div>
                            <div className="border p-2 my-2 gap-2 bg-blue-100 rounded-md w-fit shadow-md">
                                {fundraiser.verified ?
                                    <div className="flex text-lg gap-2">
                                        Verrified By : {fundraiser.doctorName}
                                        <VerifiedIcon className="text-blue-500" />
                                    </div>
                                    :
                                    <div className="border flex">
                                        <Files />
                                        {'Validate ?'}
                                        <Input
                                            type={'checkbox'}
                                        />
                                    </div>
                                }
                            </div>
                        </div>
                    </div>

                    <div className="grid">
                        <div className="border rounded-lg shadow-md grid place-content-center w-fit">
                            <div className="p-4 md:px-8 grid gap-2">
                                <div className="md:font-medium flex gap-2 items-center">
                                    &nbsp;&#8377;
                                    {" "}{fundraiser.raised} / {fundraiser.amount}
                                </div>
                                <div>
                                    <Progress max={fundraiser.amount} value={fundraiser.raised} className="border border-black" />
                                </div>
                            </div>
                        </div>
                        <div className="text-lg font-semibold p-2 md:p-4 underline">
                            98+ supports
                        </div>
                        <div className="flex gap-2 items-center p-2 underline">
                            <Pen size={15} />
                            <p>Fundraiser by : {fundraiser.authorName}</p>
                        </div>
                    </div>
                </div>
                {/* A button for smaller screens*/}
                <div className="fixed bottom-20 right-5 lg:hidden">
                    <div className="z-9 lg:grid">
                        {/* Shinny Button */}
                        <button className="relative inline-flex h-12 p-[1px] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-orange-500 overflow-hidden rounded-full">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-3 py-1 text-sm font-medium backdrop-blur-2xl">
                                Contribute Now
                            </span>
                        </button>

                        {/* <Button className="bg-orange-500" >Contribute Now</Button> */}
                    </div>
                </div>
                {/*  side QR for larger machines */}
                <div className="hidden lg:block fixed right-10 shadow-xl border rounded-xl overflow-hidden primaryBackground">
                    <div className="z-9 lg:grid w-full  p-2 gap-1 place-content-cente ">
                        {/* progress bar */}
                        <div className="w-full">
                            <div className="p-4">
                                <div className="font-medium">Amount : {fundraiser.raised} / {fundraiser.amount} </div>
                                <Progress max={fundraiser.amount} value={fundraiser.raised} className="border border-black p-4" />
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
                                {fundraiser.amount - fundraiser.raised}
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

            {/* Complete Story */}
            <div className="primaryBackground p-4 md:p-8 lg:pl-12 mr-5 curvedStoryS md:curvedStoryM lg:curvedStoryL">
                <div className="text-lg md:text-xl ">Story  :</div>
                <div className="text-sm md:text-lg grid md:grid-cols-2">
                    <div className="">
                        {fundraiser.story}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fundraiser;