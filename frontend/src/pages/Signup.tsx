// import { useState } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInputDoctor } from "@palve_vaishnav/arogyarpan";
import axios from "axios"
// import { BACKEND_URL } from "@/config";
import { Button } from "@/components/ui/button";
import { WebLogo } from "./Navigation";

export default function Signup() {
    // const setImage
    const navigate = useNavigate()
    return (
        <div className="w-full grid md:grid-cols-2 place-content-center relative bg-[#85c1c96e]">
            {/* Go back buttton */}
            <div className="absolute top-[3em] left-[3em] z-10">
                <Button
                    variant={'ghost'}
                    className=""
                    onClick={() => navigate('/home')}
                >Go back to Home</Button>
            </div>
            <div className="flex justify-center items-center flex-col pt-20 min-h-[100vh] rounded-r-[6em] overflow-hidden primaryBackground shadow-2xl">
                <SignupComp />
            </div>
            <div className="h-[100vh] overflow-hidden ">
                {/* <Testimonial /> */}
                <div
                    className="h-full w-full p-10"
                >
                    <img
                        src={'images/131.png'}
                        className="h-full w-full"
                    />
                </div>
            </div>
        </div>
    );
}



function SignupComp() {
    const [SignupInputs, setSignupInputs] = useState<SignupInputDoctor>({
        userType: "user",
        name: "",
        email: "",
        password: "",
        regno: 0,
        regDate: "",
        stateCouncil: "",
    });
    const navigate = useNavigate();
    const [inputError, setInputError] = useState(false)
    async function sendRequest() {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/signup`, SignupInputs);
            const jwt = response.data;
            localStorage.setItem("token", jwt)
            localStorage.setItem("type", SignupInputs.userType)
            navigate("/home");
        } catch (e) {
            console.error(e);
            setInputError(true);
            // alert("Invalid Inputs! Sign up Failed");
        }
    }

    return (
        <div className="border gap-2 p-4 rounded-xl bg-white shadow-xl">
            <div>
                <WebLogo />
            </div>
            <div className="gap-2 p-4">
                <div className="text-2xl font-bold">Create a new Account</div>
            </div>
            <div className="grid gap-2 p-4">
                <div className="grid p-2">
                    <label className="text-lg font-semibold">Name</label>
                    <input
                        className="border px-2 py-1 rounded-md"
                        placeholder={'name'}
                        autoFocus
                        onChange={(e) => {
                            setSignupInputs({
                                ...SignupInputs,
                                name: e.target.value
                            })
                        }}
                    />
                </div>
                <div className="p-2">
                    <label className="text-lg font-semibold">Are you a Doctor ?</label>
                    <div className="flex gap-4">
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="user"
                                // defaultChecked={true}
                                checked={SignupInputs.userType === "user"}
                                onChange={() => {
                                    setSignupInputs({
                                        ...SignupInputs,
                                        userType: SignupInputs.userType === "user" ? "" : "user",
                                    });
                                }}
                                className="mr-2"
                            />
                            <label htmlFor="user" className="text-md">no</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="doctor"
                                checked={SignupInputs.userType === "doctor"}
                                onChange={() => {
                                    setSignupInputs({
                                        ...SignupInputs,
                                        userType: SignupInputs.userType === "doctor" ? "" : "doctor",
                                    });
                                }}
                                className="mr-2"
                            />
                            <label htmlFor="doctor" className="text-md">yes</label>
                        </div>
                    </div>
                </div>

                {/* Doctor Specific  */}
                {SignupInputs.userType === "doctor" &&
                    <div>
                        <div className="grid p-2">
                            <label className="text-lg font-semibold">Reg No: </label>
                            <input
                                className="border px-2 py-1 rounded-md"
                                placeholder={'Reg no'}
                                type={'number'}
                                onChange={(e) => {
                                    setSignupInputs({
                                        ...SignupInputs,
                                        regno: parseInt(e.target.value)
                                    });
                                }}
                            />
                        </div>
                        <div className="grid p-2">
                            <label className="text-lg font-semibold">Reg Date :</label>
                            <input
                                className="border px-2 py-1 rounded-md"
                                placeholder={'reg Date'}
                                type={'date'}
                                onChange={(e) => {
                                    setSignupInputs({
                                        ...SignupInputs,
                                        regDate: e.target.value + "T00:00:00.961Z"
                                        // "regDate": "2024-08-19T11:13:03.961Z",
                                    })
                                }}
                            />
                        </div>
                        <div className="grid p-2">
                            <label className="text-lg font-semibold">State Council :</label>
                            <input
                                className="border px-2 py-1 rounded-md"
                                placeholder={'council'}
                                onChange={(e) => {
                                    setSignupInputs({
                                        ...SignupInputs,
                                        stateCouncil: e.target.value
                                    })
                                }}
                            />
                        </div>
                    </div>
                }
                <div className="grid p-2">
                    <label className="text-lg font-semibold">Email</label>
                    <input
                        className="border px-2 py-1 rounded-md"
                        placeholder={'email'}
                        onChange={(e) => {
                            setSignupInputs({
                                ...SignupInputs,
                                email: e.target.value
                            })
                        }}
                    />
                </div>
                <div className="grid p-2">
                    <label className="text-lg font-semibold">New Password</label>
                    <input
                        className="border px-2 py-1 rounded-md"
                        type={'password'}
                        placeholder={'password'}
                        onChange={(e) => {
                            setSignupInputs({
                                ...SignupInputs,
                                password: e.target.value
                            })
                        }}
                    />
                </div>
                {inputError &&
                    <p className="text-red-500">Invalid Credentials!! Try Again !</p>
                }
                <Button
                    onClick={sendRequest}
                >Sign Up
                </Button>
                <div className="flex justify-center gap-3">
                    <p>
                        Already Have an Account?
                    </p>
                    <Link to="/signin" className="underline">Signin</Link>
                </div>
            </div>
        </div>

    );
}