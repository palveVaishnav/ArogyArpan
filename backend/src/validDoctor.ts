import axios from "axios";
import { DoctorDetails } from "./originalReq";

export async function getDoctorValidations(registrationNo: string, regDate: string): Promise<DoctorDetails | null> {
    const input = {
        registrationNo: encodeURIComponent(registrationNo)
    };
    const formData = JSON.stringify(input);
    const urlVar = 'https://www.nmc.org.in/MCIRest/open/getDataFromService?service=searchDoctor';

    try {
        const response = await axios.post<any>(urlVar, formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // Assuming the response is an array of doctors and you need to match by registrationNo
        const doctors: DoctorDetails[] = response.data;
        const matchingDoctor = doctors.find((doctor) =>
            doctor.registrationNo === registrationNo && doctor.regDate === regDate
        );


        if (matchingDoctor) {
            // console.log("Found doctor details:", matchingDoctor);
            return matchingDoctor;
        } else {
            // console.log("No doctor found with the given registration number.");
            return null;
        }
    } catch (error) {
        console.error("Error fetching doctor details:", error);
        return null;
    }
}

