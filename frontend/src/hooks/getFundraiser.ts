import axios from "axios"
import { useEffect, useState } from "react"


export const useFundraisers = () => {
    const [fundraisers, setFundraisers] = useState([])
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/fundraiser`)
            .then((res) => {
                setFundraisers(res.data)
            })
            .catch((e) => {
                console.error(e)
            })
    }, [])

    return fundraisers;
}

export function useFundraisersById({ id }: { id: number }) {
    const [Fundraiser, setFundraiser] = useState(null)
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/fundraiser/${id}`)
            .then((res) => {
                setFundraiser(res.data)
            })
            .catch((e) => {
                console.error(e)
            })
    }, [id])

    return Fundraiser;
}

// export const useValidate = ({ data }: { data: ValidationTable }) => {

// }











