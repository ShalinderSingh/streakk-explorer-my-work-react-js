import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getAddress, isTimeAgoByCreatedDate } from '../constant';
import Loading from './Loading';
import useDataFilter from '../Requests/useDataFilter';
import CopyText from '../Copytext/CopyText';
import { Table } from 'react-bootstrap';
import useTxhash from '../Requests/useTxhash';
import { formatNumbers } from './formatNumbers';
import SearchBar from './SearchBar';
const BlockDetail = () => {
    const { block_data, status, setFilterBlockTrans, isLoading } = useDataFilter()
    const { block_data: data1, setTxHashID } = useTxhash()
    const params = useParams();
    const data = data1[0]
    // console.log(params, ':::::::::')
    useEffect(() => {
        setFilterBlockTrans(params)
        if (params?.blocknumber) {
            setFilterBlockTrans(
                params?.blocknumber?.toLowerCase()?.startsWith("0x")
                    ? {
                        blockhash: params.blocknumber,
                    }
                    : {
                        blocknumber: params.blocknumber,
                    }
            );
        }
        setTxHashID(params)
    }, [params.blocknumber, params.blockhash]);


    return (
        <>{isLoading ? <Loading /> :
            <div>
                <div className="blockNoOuter">
                    <h4 className="blockTxt">Block Details</h4>
                    <div className="container-fluid">
                        <div className="rowOuter">
                            <div className="table table-bordered">
                                <div style={{ width: "100%", fontSize: "15px" }} className="blockCardsSec">
                                    <h3 className="cardHead">Overview</h3>
                                    <ul className="thead-dark">
                                        <li className="row"><p className="text-lg-start">Block Hash <p className="text-end">{getAddress(block_data.blockHash)}<CopyText text={block_data?.blockHash} /></p> </p></li>
                                        <li className="row"><p className="text-start">Block Number</p><div className="text-end">{block_data.blockNumber}<CopyText text={block_data?.blockNumber} /></div></li>
                                        <li className="row"><p className="text-start">Validator</p><div className="text-end">{getAddress(block_data.validator)}<CopyText text={block_data?.validator} /></div></li>
                                        <li className="row"><p className="text-start"> Timestamp</p><div className="text-end"><span className="overflowTxt">{isTimeAgoByCreatedDate(block_data.timeStamp)}</span></div></li>
                                        <li className="row"><p className="text-start">Weight</p><div className="text-end"><span className="overflowTxt">{block_data.blockWeight}</span></div></li>
                                        <li className="row"><p className="text-start">Transactions</p><div className="text-end">{block_data.transactionCount}</div></li>
                                        <li className="row"><p className="text-start">Gas used</p><div className="text-end">{block_data.gasLimit}</div></li>
                                        <li className="row"><p className="text-start">Transfer</p><div className="text-end">{block_data.transfer}</div></li>
                                        <li className="row"><p className="text-start">Deposit</p><div className="text-end">{Number(block_data.deposit).noExponents()}</div></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tableOuter dashboardTable">
                    <Table responsive>
                        <thead>
                            <tr>

                                <th>Tx Hash</th>

                                <th>Age</th>
                                <th>From</th>
                                <th>To</th>

                                <th>Value</th>

                            </tr>
                        </thead>
                        <tbody><tr>
                            <td>{getAddress(data?.txhash)}</td>
                            <td>{isTimeAgoByCreatedDate(data?.createdAt)}</td>
                            <td>{getAddress(data?.from_address)}</td>
                            <td>{getAddress(data?.to_address)}</td>
                            <td>{formatNumbers(data?.value / 10 ** 18)}</td>
                        </tr></tbody>
                    </Table>
                </div>
                {/* <div
                    classNameName="searchBar"
                    onClick={(event) => {
                        event.preventDefault();
                        searchingValue(value);
                    }}
                >
                    <SearchBar searchingValue={searchingValue} setValue={setValue} />
                </div> */}
            </div>



        }
        </>
    )
}

export default BlockDetail