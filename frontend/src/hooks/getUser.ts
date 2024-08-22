// import { BACKEND_URL } from "@/config"
import axios from "axios"

export const isLogin = () => {
    if (localStorage.getItem("token")) {
        const token = localStorage.getItem("token")
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/${localStorage.getItem('type') === 'doctor' ? 'doctor' : 'profile'}`, {
            headers: {
                Authorization: token
            }
        })
            .then((res) => {
                return res.data.id
            })
            .catch(() => {
                return null
            })
    }
}

export const isDoctor = () => {
    if (localStorage.getItem('type') === 'doctor') {
        return true;
    } else {
        return false;
    }
}