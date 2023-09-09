import React, { useEffect, useState } from 'react'
import API from "./ApiClient";
import { useNavigate } from 'react-router-dom';

const useCheckTransaction = () => {
    const [hash, setHash] = useState("");
    const navigate = useNavigate()
    useEffect(() => {
        if (hash) {
            fetchTransactionDetail()
        }
    }, [hash])
    async function fetchTransactionDetail() {
        try {

            let ApiUrl = process.env.REACT_APP_EXPLORER_URL

            const response = await API.get(`${ApiUrl}/istransaction?hash=${hash}`);
            if (response.data.data.isTransaction) {
                if (hash
                    // sessionStorage.getItem("network") === null ||
                    // sessionStorage.getItem("network")?.toLowerCase() === "test network"
                ) {
                    navigate(`/txnHashOverview/${hash}`);
                } else {
                    navigate(`/evm/tx/${hash}`);
                }
            } else {
                navigate(`/listBlocks/${hash}`);
            }

        } catch (error) {

        }
    }
    return { hash, setHash }
}

export default useCheckTransaction