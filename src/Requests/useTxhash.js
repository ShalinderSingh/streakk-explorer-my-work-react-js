import { useEffect, useState } from "react";
import API from "./ApiClient";

import { useNavigate } from "react-router-dom";

function useTxhash() {
    const navigate = useNavigate();
    const [status, updateStatus] = useState("init"); // idle , fetching , error
    const [block_data, setTransactionData] = useState('');
    const [txhashID, setTxHashID] = useState("");
    const [isLoading, setLoading] = useState(false);
    console.log(txhashID.blockhash, 'IDID')
    useEffect(() => {
        if (txhashID) {
            fetchTransaction();
        }

    }, [txhashID]);

    async function fetchTransaction() {
        try {
            setLoading(true)
            updateStatus("fetching");
            let filterReq = "";
            filterReq = txhashID?.blocknumber
                ? `get-transaction-by-block?blockNumber=${txhashID?.blocknumber}`
                : `get-transaction-by-hash/${txhashID?.blockhash}`;
            let ApiUrl = process.env.REACT_APP_EXPLORER_URL

            const response = await API.get(`${ApiUrl}/${filterReq}`);


            setTransactionData(response?.data?.data?.transaction);

            setLoading(false)

        } catch (error) {

            updateStatus("error");
            setLoading(false)
        }
    }

    return { block_data, status, setTxHashID, isLoading };
}

export default useTxhash;
