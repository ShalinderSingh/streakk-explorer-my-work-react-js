import { useEffect, useState } from 'react'
import API from "./ApiClient";
import { useNavigate } from 'react-router-dom';

const useTransactionByFromAddress = () => {
    const [status, updateStatus] = useState("init"); // idle , fetching , error
    const [transaction_data, setTransactionData] = useState([]); // array of objects
    const [transaction_count, updateTransactionCount] = useState(0);
    const navigate = useNavigate();
    const [params, setParams] = useState({
        offset: 0,
        limit: 10,
        page: 1,
        address: "",
    });
    useEffect(() => {
        if (params.address) {
            fetchTransactions();
        }
    }, [
        params?.address,
        params?.offset,
        params?.limit,
        params?.page
    ]);

    async function fetchTransactions() {
        try {
            updateStatus("fetching");

            let ApiUrl = process.env.REACT_APP_EXPLORER_URL
            const response = await API.get(
                `${ApiUrl}/get-transaction-by-address?address=${params.address}&pageNo=${params.page}&limit=${params.limit}`
            );
            setTransactionData(response?.data?.data?.transactions);
            updateTransactionCount(response?.data?.data?.total);

            updateStatus("idle");
        } catch (error) {
            navigate("/notfound");
            updateStatus("error");
        }
    }

    return { transaction_data, status, setParams, transaction_count };
}

export default useTransactionByFromAddress