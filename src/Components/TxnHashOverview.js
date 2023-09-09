import React, { useEffect } from 'react'
import './BlockDetail.css'
import { useParams } from 'react-router-dom'
import { isTimeAgoByCreatedDate, getAddress } from '../constant'
import { formatNumbers } from './formatNumbers'
import Loading from './Loading'
import useTxhash from '../Requests/useTxhash'
const TxnHashOverview = () => {
    const { block_data, status, setTxHashID, isLoading } = useTxhash()

    const params = useParams();
    // console.log(block_data)
    useEffect(() => {
        setTxHashID(params)
    }, [params.blockhash]);


    return (
        <div>{isLoading ? <Loading /> :
            <div className="blockNoOuter tokenTxnSec">
                <h4 className="blockTxt">
                    Transaction Details
                </h4>
                <div className="rowOuter" >
                    <div className="colOuter">
                        <div className="blockCardsSec">
                            <h3 className="cardHead">Overview</h3>
                            <div className="blockInnerSec  bottomSecCard transactionsMain">
                                <ul className=" transactionsUl top-1">
                                    <li>
                                        <p className="keyText">Transaction Hash</p>
                                        <div className="keyText valueTxt ">
                                            <span>{getAddress(block_data.txhash)}</span>

                                        </div>
                                    </li>
                                    <li>
                                        <p className="keyText">From</p>
                                        <div className="keyText valueTxt ">
                                            <span>{getAddress(block_data.from_address)}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <p className="keyText">To</p>
                                        <div className="keyText valueTxt ">
                                            <span>{getAddress(block_data.to_address)}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <p className="keyText">Status</p>
                                        <div className="keyText valueTxt ">
                                            <span>{block_data.status}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <p className="keyText">Block Number</p>
                                        <div className="keyText valueTxt ">
                                            <span>{block_data.blocknumber}</span>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="transactionsUl">
                                    <li>
                                        <p className="keyText">Amount</p>
                                        <div className="keyText valueTxt ">
                                            <span>{formatNumbers(block_data.value / 10 ** 18)}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <p className="keyText">Created At</p>
                                        <div className="keyText valueTxt ">
                                            <span className="">{isTimeAgoByCreatedDate(block_data.createdAt)}</span>
                                        </div>
                                    </li>
                                    <li>
                                        <p className="keyText">Gas Used</p>
                                        <p className="keyText valueTxt ">
                                            <span className="">{block_data.gas}</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="keyText">Gas Price</p>
                                        <p className="keyText valueTxt ">
                                            <span className="">{formatNumbers(block_data.gasPrice / 10 ** 18)}</span>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
        </div>
    )
}

export default TxnHashOverview