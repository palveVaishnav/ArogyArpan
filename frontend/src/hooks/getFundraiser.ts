// import { BACKEND_URL } from "@/config"
// import { ValidationTable } from "@palve_vaishnav/arogyarpan"

import axios from "axios"
import { useEffect, useState } from "react"


export const useFundraisers = () => {
    const [Fundaisers, setFundraisers] = useState([])
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/fundaiser`)
            .then((res) => {
                setFundraisers(res.data)
            })
            .catch((e) => {
                console.error(e)
            })
    }, [])

    return Fundaisers;
}

export function useFundraisersById({ id }: { id: number }) {
    const [Fundraiser, setFundraiser] = useState(null)
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/fundaiser/${id}`)
            .then((res) => {
                setFundraiser(res.data)
            })
            .catch((e) => {
                console.error(e)
            })
    }, [])

    return Fundraiser;
}

// export const useValidate = ({ data }: { data: ValidationTable }) => {

// }










