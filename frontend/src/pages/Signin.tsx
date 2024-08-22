// import { useState } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SigninInput } from "@palve_vaishnav/arogyarpan";
import axios from "axios"
// import { BACKEND_URL } from "@/config";
import { Button } from "@/components/ui/button";
import { WebLogo } from "./Navigation";

export default function Signin() {
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
            <div className="flex justify-center items-center flex-col pt-20 h-[100vh] rounded-r-[6em] overflow-hidden primaryBackground shadow-2xl">
                <SigninCard />
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

function SigninCard() {
    const [signinInputReq, setSigninInputReq] = useState<SigninInput>({
        userType: "user",
        email: "",
        password: ""
    });
    const navigate = useNavigate();
    const [Erroetext, setErrorText] = useState("");
    async function sendRequest() {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/signin`, signinInputReq);
            const jwt = response.data;
            localStorage.setItem("token", jwt)
            setErrorText("");
            navigate("/home");

        } catch (e) {
            console.error(e);
            setErrorText("Invalid Credentials!! Try Again !");
            // alert("Invalid Inputs! Sign up Failed");
        }
    }
    return (
        <div className="border gap-2 p-4 rounded-xl bg-white shadow-xl">
            <div>
                <WebLogo />
            </div>
            <div className="gap-2 p-4 ">
                <div className="text-2xl font-bold">Welcome Back</div>

            </div>
            <div className="grid gap-2 p-4">
                <div className="grid p-2">
                    <label className="text-lg font-semibold">Email</label>
                    <input
                        className="border px-2 py-1 rounded-md"
                        autoFocus
                        placeholder={'email'}
                        onChange={(e) => {
                            setSigninInputReq({
                                ...signinInputReq,
                                email: e.target.value
                            })
                        }}
                    />
                </div>
                <div className="grid p-2">
                    <label className="text-lg font-semibold">Password</label>
                    <input
                        className="border px-2 py-1 rounded-md"
                        type={'password'}
                        placeholder={'password'}
                        onChange={(e) => {
                            setSigninInputReq({
                                ...signinInputReq,
                                password: e.target.value
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
                                checked={signinInputReq.userType === "user"}
                                onChange={() => {
                                    setSigninInputReq({
                                        ...signinInputReq,
                                        userType: signinInputReq.userType === "user" ? "" : "user",
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
                                checked={signinInputReq.userType === "doctor"}
                                onChange={() => {
                                    setSigninInputReq({
                                        ...signinInputReq,
                                        userType: signinInputReq.userType === "doctor" ? "" : "doctor",
                                    });
                                }}
                                className="mr-2"
                            />
                            <label htmlFor="doctor" className="text-md">yes</label>
                        </div>
                    </div>
                </div>
                <p className="text-sm text-red-500 p-2">{Erroetext}</p>
                <Button
                    onClick={sendRequest}
                >Login
                </Button>
                <div className="flex justify-center gap-3">
                    <p>
                        New to ArogyArpan ?
                    </p>
                    <Link to="/signup" className="underline">Signup</Link>
                </div>
            </div>
        </div>
    )
}