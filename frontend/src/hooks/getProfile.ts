import { BACKEND_URL } from "@/config"
import axios from "axios"
import { useEffect, useState } from "react"

export function useProfile() {
    const [user, setUser] = useState({})
    useEffect(() => {
        const token = localStorage.getItem("token");
        axios.get(`${BACKEND_URL}/profile`, {
            headers: {
                Authorization: token
            }
        })
            .then((res) => {
                setUser(res.data)
            })
            .catch((e) => {
                return e
            })
    },[])
    return user;
}

