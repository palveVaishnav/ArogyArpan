import { BACKEND_URL } from "@/config"
import axios from "axios"

export const isLogin = () => {
    if (localStorage.getItem("token")) {
        const token = localStorage.getItem("token")
        axios.get(`${BACKEND_URL}/profile`, {
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