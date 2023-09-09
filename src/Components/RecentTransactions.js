import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getAddress, isTimeAgoByCreatedDate } from '../constant'
import { formatNumbers } from './formatNumbers'

const RecentTransactions = ({ data }) => {
    return (
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
                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td><Link to={`/txnHashOverview/${item.txhash}`}>{getAddress(item.txhash)}</Link></td>
                                {/* <td><Link to={`/blockDetail/${item.blocknumber}/${item.txhash}}`}>{item.blocknumber}</Link></td> */}
                                <td>{isTimeAgoByCreatedDate(item.updatedAt)}</td>
                                <td><Link to={`/address/${item.from_address}`}>{getAddress(item.from_address)}</Link></td>
                                <td>
                                    {
                                        item.to_address && item.to_address !== "N/A"
                                            ? getAddress(item.to_address)
                                            : "-"
                                    }</td>

                                <td>{formatNumbers(item.value / 10 ** 18)}</td>
                                {/* <td>{item.status}</td> */}
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default RecentTransactions