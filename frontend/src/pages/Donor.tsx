import DonorProfile from "@/components/created/DonorProfile";
import DonorTransaction from "@/components/created/DonorTransactionCards";
function Donor() {
    return (
        <div>
            <div className="grid gap-2 p-2">
                <DonorProfile />
            </div>
            <div className="p-2">
                <DonorTransaction />
            </div>
        </div>
    )
}




export default Donor;