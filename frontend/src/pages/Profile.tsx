import DonorProfile from "@/components/created/DonorProfile";
import DonorTransaction from "@/components/created/DonorTransactionCards";
import { useProfile } from "@/hooks/getProfile";
import { isLogin } from "@/hooks/getUser";
import { userType } from "@palve_vaishnav/arogyarpan";
import { useNavigate } from "react-router-dom";

export function Profile() {
    const user: userType = useProfile() ?? {
        name: "",
        email: "",
        password: "",
        bio: "",
        patron: false,
        id: 0,
        createdAt: new Date(),
        stayAnonymous: false,
        profileImg: "",
        fundraiser: [],
        transactions: []
    };
    const navigate = useNavigate();
    if (!isLogin) {
        navigate('/signin')
    }
    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="grid place-content-center border">
            <div className="grid gap-2 p-2">
                <DonorProfile user={user} />
            </div>
            <div className="p-2">
                {/* Dummy Transactions , original can be listed only after getting the payment gateway */}
                <DonorTransaction user={user} />
            </div>
        </div>
    );
}
