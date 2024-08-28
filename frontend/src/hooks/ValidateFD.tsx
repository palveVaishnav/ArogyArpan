import axios from "axios";
// import { useNavigate, redirect } from 'react-router-dom';
export interface validate {
    fundraiserId: number;
    status: boolean;
    message: string;
}

export function ValidateFD({ data }: { data: validate }) {
    // const navigate = useNavigate();
    const headers = {
        'Authorization': localStorage.getItem('token'),
        'type': localStorage.getItem('type')
    }
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/fundraiser/verify`, data, { headers })
        .then((res) => {

            console.log(res.data)
            window.location.reload();

        })
        .catch((e) => {
            console.error("Request failed:", e);
        })
}
