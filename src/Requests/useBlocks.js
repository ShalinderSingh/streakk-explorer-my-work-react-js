import { useEffect, useState } from "react";
import API from "./ApiClient";
import { useDispatch, useSelector } from "react-redux";
import { REDUCERCONSTANT } from "../redux/constant";

function useBlocks() {

    const dispatch = useDispatch();
    const [status, updateStatus] = useState("init"); // idle , fetching , error
    const [blocks_data, setBlocksData] = useState([]); // array of objects
    const [blocks_count, updateBlocksCount] = useState(0);
    const [isLoading, setLoading] = useState(false);

    const [params, setParams] = useState({
        offset: 0,
        limit: 10,
        page: 1,
    });

    useEffect(() => {
        if (params.offset || params.limit || params.page) {
            fetchBlocks();
        }
    }, [
        params.offset,
        params.limit,
        params.page,
        // sessionStorage.getItem("network"),
    ]);

    async function fetchBlocks() {
        try {
            setLoading(true)
            updateStatus("fetching");
            let ApiUrl = 3


            const response = await API.get(`${ApiUrl}/get-all-blocks?pageNo=${params.page}&limit=${params.limit}`);


            setBlocksData(response.data.data.blocks);
            updateBlocksCount(response.data.data.total);
            updateStatus("idle");
            setLoading(false)
        } catch (error) {
            updateStatus("error");
            setLoading(false)
        }
    }
    return { blocks_data, isLoading, status, setParams, blocks_count };

}

export default useBlocks;
