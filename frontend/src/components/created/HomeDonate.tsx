import { Files, PenIcon, VerifiedIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import { useFundraisers } from "@/hooks/getFundraiser";
import { FundraiserType } from "@palve_vaishnav/arogyarpan"
import { useNavigate } from "react-router-dom";
import { isDoctor } from "@/hooks/getUser";
// import axios from "axios";
// import { BACKEND_URL } from "@/config";
// import { useFundraisers } from "@/hooks/getFunndraiser";
function HomeDonate() {
    return (
        <div className="w-full">
            <FundraiserCard />
        </div>
    )
}

export function FundraiserCard() {
    const navigate = useNavigate();
    const Fundraisers: FundraiserType[] = useFundraisers();
    const doctor = isDoctor();
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 place-content-center rounded-lg m-4 md:mx-[10em] gap-2">
            {Fundraisers.map((f) => (
                <div key={f.id} className="grid place-content-center w-full gap-4">
                    <div className="grid w-[20em] lg:w-[22em] rounded-xl z-6 m-4 group overflow-hidden shadow-lg hover:shadow-none hover:border backdrop-blur-xl">

                        <div className="w-full overflow-hidden relative bg-inherit ">
                            {/* A Carausal style slider */}
                            <div className="relative overflow-hidden">
                                <img src={`https://picsum.photos/2${f.id}`} className="w-full h-full rounded-md overflow-hidden" />
                            </div>
                            <div
                                className="absolute bottom-0 left-0 p-4 overflow-hidden h-[7em] group-hover:h-[10em] m-2 w-full backdrop-blur-xl bg-[#ffffff8b]"
                                style={{ borderRadius: '2em 2em 2em 0' }}
                            >
                                <div className="text-[1.2em] font-semibold md:text-xl w-full overflow-hidden">
                                    {f.title}
                                </div>
                                {/* <div className=""> */}
                                <div className="h-10 overflow-hidden hidden group-hover:block">
                                    ...{f.story}
                                </div>
                                {/* </div> */}
                            </div>
                        </div>
                        <div className="grid w-full p-4 gap-2 rounded-t-3xl overflow-hidden">
                            <div className="text-left grid md:flex rounded-md h-fit w-full p-1 justify-around overflow-hidden gap-1 md:gap-2 items-center">
                                <div className="flex gap-1 items-center w-full">
                                    <PenIcon size={15} />
                                    {f.authorName}
                                </div>
                                <div className={`flex gap-2 border p-2 rounded-lg justify-center items-center overflow-hidden w-full h-full `}>
                                    {f.verified ?
                                        <div className="flex gap-2">
                                            <VerifiedIcon className="" />
                                            <div>{f.doctorName}</div>
                                        </div>
                                        :
                                        <div className="">
                                            {doctor ?
                                                <div
                                                    className="border-[#333] flex gap-2"
                                                    onClick={() => {
                                                        navigate(`/fundraiser/${f.id}`)
                                                    }}
                                                >
                                                    <Files className="" />
                                                    Help us Verify
                                                </div>
                                                :
                                                <div>{'View Docs'}</div>
                                            }
                                        </div>
                                    }
                                </div>
                            </div>

                            <div className="p-2 w-full grid gap-1">
                                <div>
                                    <div>Amount Raised : {f.raised} / {f.amount}</div>
                                </div>
                                <div className="grid">
                                    <Progress max={f.amount} value={f.raised || 2000} />
                                </div>
                            </div>
                            <div className="w-full flex gap-2">
                                <Button
                                    variant={'outline'}
                                    className="w-full border-[#333] hover:bg-primary hover:text-secondary"
                                    onClick={() => {
                                        navigate(`/fundraiser/${f.id}`)
                                    }}
                                > Contribute </Button>
                                {doctor ?
                                    <Button
                                        variant={'default'}
                                        className="border-[#333] hover:bg-primary hover:text-secondary"
                                        onClick={() => {
                                            navigate(`/fundraiser/${f.id}`)
                                        }}
                                    >Report</Button>
                                    :
                                    <Button
                                        variant={'default'}
                                        className="border-[#333] hover:bg-primary hover:text-secondary"
                                        onClick={() => {
                                            navigate(`/fundraiser/${f.id}`)
                                        }}
                                    >Read More</Button>
                                }
                            </div>
                        </div>
                    </div>
                </div>

            ))

            }
        </div >
    )
}


export default HomeDonate;