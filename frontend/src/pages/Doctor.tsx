import DoctorProfile from "@/components/created/DoctorProfile";
import DoctorReports from "@/components/created/DoctorReports";

function Doctor() {
    return (
        <div className="grid place-content-center">
            <div className="grid gap-2 p-2">
                <DoctorProfile />
            </div>
            <div className="p-2">
                <DoctorReports />
            </div>
        </div>
    )
}




export default Doctor;