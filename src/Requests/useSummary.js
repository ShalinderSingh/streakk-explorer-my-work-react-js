import { useEffect, useState } from "react";
import API from "./ApiClient";

const useSummary = () => {
    const [status, updateStatus] = useState("idle");
    const [totalData, setTotalData] = useState();

    useEffect(() => {
        fetchTotalData()
    }, [])
    async function fetchTotalData() {
        try {
            updateStatus("fetching");
            let ApiUrl = process.env.REACT_APP_EXPLORER_URL;

            const response = await API.get(`${ApiUrl}/summary`);
            setTotalData(response.data);
            updateStatus("idle");
        } catch (error) {
            updateStatus("error");
        }
    }
    return { totalData, status }
}

export default useSummary