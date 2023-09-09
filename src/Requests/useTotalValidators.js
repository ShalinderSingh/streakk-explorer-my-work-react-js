import { useEffect, useState } from 'react'
import API from "./ApiClient";
const useTotalValidators = () => {
    const [status, updateStatus] = useState("idle"); // idle , fetching , error
    const [totalValidator, setTotalValidator] = useState();

    useEffect(() => {
        fetchTotalValidator()
    }, [])
    async function fetchTotalValidator() {
        try {
            updateStatus("fetching");
            let ApiUrl = process.env.REACT_APP_EXPLORER_URL;

            const response = await API.get(`${ApiUrl}/validators`);
            setTotalValidator(response.data);
            updateStatus("idle");
        } catch (error) {
            updateStatus("error");
        }
    }

    return { totalValidator, status }
}

export default useTotalValidators