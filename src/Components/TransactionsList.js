import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from "react-bootstrap";
import { getAddress, isTimeAgoByCreatedDate } from '../constant';
import { formatNumbers } from './formatNumbers';
import Pagination from '../Pagination/Pagination';
import Loading from './Loading';
import { Link, useNavigate } from 'react-router-dom';
import useTransactions from '../Requests/useTransactions';
const TransactionsList = () => {
    const { transaction_data, status, setParams, transaction_count, params, totalTransaction, isLoading } = useTransactions()
    // console.log(transaction_data, transaction_data, transaction_count, 444444444)
    const navigate = useNavigate()
    const [currentPage, setCurrentPage] = useState(1);

    let pageSize = 10;


    useEffect(() => {
        setParams({
            offset: currentPage === 1 ? 0 : (currentPage - 1) * pageSize,
            limit: pageSize,
            page: currentPage
        })
    }, [currentPage]);
    const helndleClick = (id) => {
        navigate('/txnHashOverview', { state: id })
    }


    return (
        <div>
            {isLoading ? <Loading /> :
                <div>
                    <div className="tableOuter dashboardTable" style={{ width: "100%", fontSize: "17px" }} >
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>Tx Hash</th>
                                    <th>Block</th>
                                    <th>From</th>
                                    <th>To</th>
                                    <th>Age</th>
                                    <th>Value</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transaction_data.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td><Link to={`/txnHashOverview/${item.txhash}`}>{getAddress(item.txhash)}</Link></td>
                                            <td><Link to={`/blockDetail/${item.blocknumber}/${item.txhash}}`}>{item.blocknumber}</Link></td>
                                            <td><Link to={`/address/${item.from_address}`}>{getAddress(item.from_address)}</Link></td>
                                            <td>
                                                {
                                                    item.to_address && item.to_address !== "N/A"
                                                        ? getAddress(item.to_address)
                                                        : "-"
                                                }</td>
                                            <td>{isTimeAgoByCreatedDate(item.updatedAt)}</td>
                                            <td>{formatNumbers(item.value / 10 ** 18)}</td>
                                            <td>{item.status}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </div>
                    <Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        totalCount={transaction_count}
                        pageSize={pageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />
                </div>
            }
        </div>
    )
}

export default TransactionsList