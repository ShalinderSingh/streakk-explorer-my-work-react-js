import { useEffect, useState } from "react";
import API from "./ApiClient";

const useTransactionHistory = () => {
    const [chartType, setChartType] = useState("14days")
    const [status, updateStatus] = useState("idle")
    const [transactionHsitory, setTransactionHistory] = useState({});

    useEffect(() => {
        fetchTransaction()
    }, [chartType])
    async function fetchTransaction() {
        const data = chartType;

        try {
            updateStatus("fetching");
            setTransactionHistory({});

            let ApiUrl = process.env.REACT_APP_EXPLORER_URL
            const response = await API.get(`${ApiUrl}/get-transaction-stats/${data}`);

            setTransactionHistory(response.data.data.transaction_data);
            updateStatus("idle");
        } catch (error) {
            updateStatus("error");
        }
    }

    return { transactionHsitory, status, chartType, setChartType }
}
export default useTransactionHistory