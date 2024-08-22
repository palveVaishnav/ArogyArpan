import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { BACKEND_URL } from "@/config";
import { useProfile } from "@/hooks/getProfile";
import { isLogin } from "@/hooks/getUser";
import { CreateFdInput } from "@palve_vaishnav/arogyarpan";
import axios from "axios";
import { FileIcon, TimerIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function CreateFundraiser() {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("token") || !isLogin) {
            navigate("/signin");
        }
    }, []);

    const user = useProfile();

    const [newFundraiser, setnewFundraiser] = useState<CreateFdInput>({
        authorId: 0,
        authorName: "",
        title: "",
        patientName: "",
        age: 0,
        location: "",
        hospital: "",
        disgnose: "", // corrected the typo here
        story: "",
        amount: 0,
        due: "",
    });

    useEffect(() => {
        setnewFundraiser(prevState => ({
            ...prevState,
            authorId: user.id,
            authorName: user.name,
        }));
    }, [user]);

    const sendRequest = () => {
        setnewFundraiser(prevState => ({
            ...prevState,
            due: new Date(newFundraiser.due).toISOString(), // Convert the due date to ISO 8601 format
        }));
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/fundaiser`, newFundraiser)
            .then((res) => {
                const id = res.data;
                navigate(`/Fundraiser/${id}`);
            })
            .catch((e) => {
                console.error(e);
                // Add error handling or user feedback here if needed
            });
    };

    return (
        <div className="grid w-full gap-4 bg-white">
            <div className="text-xl w-full grid place-content-center md:place-content-start md:ml-5 font-bold md:text-3xl mt-5 p-4">
                <Input
                    placeholder="Enter Title Here"
                    className="w-full text-3xl p-4"
                    onChange={(e) => {
                        setnewFundraiser(prevState => ({
                            ...prevState,
                            title: e.target.value
                        }));
                    }}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full p-4 gap-2 md:ml-5 md:text-left">
                {/* Image and Video part */}
                <div className="w-full border border-black max-h-[30em] min-h-[20vh] rounded-2xl overflow-hidden grid place-content-center">
                    <label>Add Image Here</label>
                    <Input type="file" placeholder="Upload Images" />
                </div>

                {/* Patient Details Section */}
                <div className="grid">
                    <div className="p-2 h-fit grid gap-2">
                        <div>
                            <Input
                                placeholder="Patient Name"
                                onChange={(e) => {
                                    setnewFundraiser(prevState => ({
                                        ...prevState,
                                        patientName: e.target.value
                                    }));
                                }}
                            />
                        </div>
                        <div>
                            <Input
                                placeholder="Patient Age"
                                type="number"
                                onChange={(e) => {
                                    setnewFundraiser(prevState => ({
                                        ...prevState,
                                        age: parseInt(e.target.value)
                                    }));
                                }}
                            />
                        </div>
                        <div>
                            <Input
                                placeholder="Address"
                                onChange={(e) => {
                                    setnewFundraiser(prevState => ({
                                        ...prevState,
                                        location: e.target.value
                                    }));
                                }}
                            />
                        </div>
                        <div>
                            <Input
                                placeholder="Hospital"
                                onChange={(e) => {
                                    setnewFundraiser(prevState => ({
                                        ...prevState,
                                        hospital: e.target.value
                                    }));
                                }}
                            />
                        </div>
                        <div>
                            <Input
                                placeholder="Diagnose / Disease"
                                onChange={(e) => {
                                    setnewFundraiser(prevState => ({
                                        ...prevState,
                                        disgnose: e.target.value // corrected the typo here
                                    }));
                                }}
                            />
                        </div>
                        <div>
                            <Input
                                placeholder="Required amount"
                                type="number"
                                onChange={(e) => {
                                    setnewFundraiser(prevState => ({
                                        ...prevState,
                                        amount: parseInt(e.target.value)
                                    }));
                                }}
                            />
                        </div>
                        <div className="grid md:flex md:gap-2">
                            <div className="flex items-center justify-between border p-2 my-2 gap-2 bg-blue-100 rounded-md w-full shadow-md">
                                <TimerIcon />
                                <label className="min-w-fit">Due Date:</label>
                                <Input
                                    type="date"
                                    onChange={(e) => {
                                        setnewFundraiser(prevState => ({
                                            ...prevState,
                                            due: e.target.value + "T06:27:45.826Z"
                                        }));
                                    }}
                                />
                            </div>
                        </div>

                        <div className="grid md:flex md:gap-2">
                            <div className="flex items-center border p-2 my-2 gap-2 bg-blue-100 rounded-md w-full shadow-md">
                                <FileIcon />
                                <label className="min-w-fit">Upload Document:</label>
                                <Input type="file" placeholder="Select Docs" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Complete Story */}
            <div className="primaryBackground p-4 md:p-8 lg:pl-12 mr-5 curvedStoryS md:curvedStoryM lg:curvedStoryL">
                <div className="text-lg md:text-xl">Story:</div>
                <div className="text-sm md:text-lg grid md:grid-cols-2 p-3">
                    <textarea
                        placeholder="Enter Complete Story"
                        className="h-[40vh] w-full rounded-lg p-4"
                        onChange={(e) => {
                            setnewFundraiser(prevState => ({
                                ...prevState,
                                story: e.target.value
                            }));
                        }}
                    />
                </div>
                <div className="p-3">
                    <Button className="px-10 text-lg" onClick={sendRequest}>
                        Upload Fundraiser
                    </Button>
                </div>
            </div>
        </div>
    );
}
// this is gpt code 