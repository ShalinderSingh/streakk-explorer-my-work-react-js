import { useEffect, useState } from "react";
import API from "./ApiClient";

import { useNavigate } from "react-router-dom";

function useDataFilter() {
    const navigate = useNavigate();
    const [status, updateStatus] = useState("init"); // idle , fetching , error
    const [block_data, setTransactionData] = useState({});
    const [filterBlockTrans, setFilterBlockTrans] = useState("");
    const [isLoading, setLoading] = useState(false);
    console.log(filterBlockTrans, '::HHHHHH::')
    useEffect(() => {
        if (filterBlockTrans) {
            fetchTransaction();
        }
    }, [filterBlockTrans]);

    async function fetchTransaction() {
        try {
            setLoading(true)
            updateStatus("fetching");
            let filterReq = "";
            filterReq = filterBlockTrans?.blocknumber
                ? `get-block-inside-details/${filterBlockTrans?.blocknumber}`
                : `get-block-by-hash/${filterBlockTrans?.blockhash}`;

            let ApiUrl = process.env.REACT_APP_EXPLORER_URL

            const response = await API.get(`${ApiUrl}/${filterReq}`);
            // console.log(response.data?.status)
            if (response?.data?.message !== "Not Found!") {
                setTransactionData(response?.data?.data?.blockDetail);
                updateStatus("idle");
            } else {
                navigate("/notfound");
                updateStatus("error");
            }
            setLoading(false)

        } catch (error) {
            navigate("/notfound");
            updateStatus("error");
            setLoading(false)
        }
    }

    return { block_data, status, setFilterBlockTrans, isLoading };
}

export default useDataFilter;
