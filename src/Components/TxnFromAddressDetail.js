import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import useTransactionByFromAddress from '../Requests/useTransactionByFromAddress';
import { Table } from 'react-bootstrap';
import { getAddress, isTimeAgoByCreatedDate } from '../constant';
import { formatNumbers } from './formatNumbers';
import Pagination from '../Pagination/Pagination';
import TransactionOverview from './TransactionOverview';

const TxnFromAddressDetail = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const params = useParams();
    console.log(params?.address, 'ooooooooooo')
    const { transaction_data, status, setParams, transaction_count } = useTransactionByFromAddress();
    console.log(transaction_data, 'kkkkkkkkkkkkkkkdd')
    const DefaultLimit = 10
    useEffect(() => {
        if (params?.address) {
            setParams({
                offset: currentPage === 1 ? 0 : (currentPage - 1) * DefaultLimit,
                limit: DefaultLimit,
                address: params?.address,
                page: currentPage,
            });
        }
    }, [currentPage, params?.address]);
    return (
        <>
            <section className="transactionSec">
                <TransactionOverview params={params} fromWhere="from_address" />
                <section className="blockTabSec trans">
                    <Table>
                        <thead>
                            <tr>
                                <th>Tx Hash</th>
                                <th>From</th>
                                <th>To</th>
                                <th></th>
                                <th>Value</th>
                                <th>Created At</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transaction_data.map((txns, index) => (
                                <tr key={index}>
                                    <td>{txns.txhash ? getAddress(txns.txhash) : ""}</td>
                                    <td>{txns.from_address !== "N/A"
                                        ? getAddress(txns.from_address)
                                        : "-"}</td>
                                    <td>{txns.to_address !== "N/A"
                                        ? getAddress(txns.to_address)
                                        : "-"}</td>
                                    <td><p>{params?.address === txns.from_address ? "Out" : "In"}</p></td>
                                    <td>
                                        {txns.value !== "NaN" && txns.value !== "N/A"
                                            ? formatNumbers(
                                                Number(
                                                    Number(txns.value) / Math.pow(10, 18)
                                                ).noExponents()
                                            )
                                            : "-"}
                                    </td>
                                    <td>{
                                        txns.createdAt
                                            ? isTimeAgoByCreatedDate(txns.createdAt)
                                            : "--"
                                    }</td>
                                    <td>
                                        <span className=" titleCase">{txns["status"]}</span>
                                    </td>
                                </tr>

                            ))}
                        </tbody>
                    </Table>


                    <div className="pagination">
                        <Pagination
                            onPageChange={(page) => setCurrentPage(page)}
                            totalCount={transaction_count}
                            currentPage={currentPage}
                            pageSize={DefaultLimit}
                            className="pagination-bar"
                        />
                    </div>

                </section>
            </section>
        </>
    )
}

export default TxnFromAddressDetail