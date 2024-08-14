import DonorProfile from "@/components/created/DonorProfile";
import DonorTransaction from "@/components/created/DonorTransactionCards";
function Doctor() {
    return (
        <div className="grid place-content-center">
            <div className="grid place-content-center Rborder m-5">
                <h1>This is Donor Templete! will create doctor somewhat like this with additional sections </h1>
            </div>
            <div className="grid gap-2 p-2">
                <DonorProfile />
            </div>
            <div className="p-2">
                <DonorTransaction />
            </div>
        </div>
    )
}




export default Doctor;