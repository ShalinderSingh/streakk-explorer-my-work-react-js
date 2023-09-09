import { useEffect, useState } from "react";
import API from "./ApiClient";

function useTransactions() {
    const [status, updateStatus] = useState("idle"); // idle , fetching , error
    const [transaction_data, setTransactionData] = useState([]); // array of objects
    const [transaction_count, updateTransactionCount] = useState(0);
    const [totalTransaction, setTotalTransaction] = useState(0);
    const [count, setCount] = useState(0);
    const [isLoading, setLoading] = useState(false);

    const [params, setParams] = useState({
        offset: 0,
        limit: 10,
        page: 1,
    });

    useEffect(() => {
        fetchTransactions();
        setCount(count + 1);
    }, [params.offset, params.limit, params.page]);
    useEffect(() => {
        setParams(
            JSON.parse(
                JSON.stringify({
                    offset: 0,
                    limit: 10,
                    page: 1,
                })
            )
        );
        if (count !== 0 && params.page == 1) {
            fetchTransactions();
        }
    }, [sessionStorage.getItem("network")]);

    async function fetchTransactions() {
        try {
            setLoading(true)
            updateStatus("fetching");
            let ApiUrl = process.env.REACT_APP_EXPLORER_URL
            const response = await API.get(
                `${ApiUrl}/get-all-transactions?pageNo=${params.page}&limit=${params.limit}`
            );
            setTransactionData(
                response?.data?.data?.transaction
                    ? response?.data?.data?.transaction
                    : {}
            );
            updateTransactionCount(
                response?.data?.data?.total ? response?.data?.data?.total : 0
            );
            setTotalTransaction(
                response?.data?.data?.totalTransactions
                    ? response?.data?.data?.totalTransactions
                    : 0
            );
            updateStatus("idle");
            setLoading(false)
        } catch (error) {
            updateStatus("error");
            setLoading(false)
        }
    }

    return {
        transaction_data,
        status,
        setParams,
        transaction_count,
        params,
        totalTransaction,
        isLoading,
    };
}

export default useTransactions;
