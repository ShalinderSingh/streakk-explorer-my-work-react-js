import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { isTimeAgoByCreatedDate, getAddress } from '../constant'
import { Link, useNavigate, useParams } from 'react-router-dom'
import useBlocks from '../Requests/useBlocks'
import Loading from './Loading'
import Pagination from '../Pagination/Pagination';
const ListBlocks = () => {
    const navigate = useNavigate()

    const [currentPage, setCurrentPage] = useState(1);
    const params = useParams()

    const { blocks_data, isLoading, status, setParams, blocks_count } = useBlocks()
    const pageSize = 10
    useEffect(() => {

    }, [])
    useEffect(() => {
        setParams({
            offset: currentPage === 1 ? 0 : (currentPage - 1) * pageSize,
            limit: pageSize,
            page: currentPage
        })
    }, [currentPage])

    const onClickHendle = (id) => {
        navigate('/blockDetail', { state: id })
    }

    return (
        <>{isLoading ? <Loading /> : <>
            <div className="blockspage-table">
                <div className="graphsHeaderOuter">
                    <h3 className="graphTitle" style={{ width: "30%", fontSize: "30px" }}>Latest Blocks</h3>
                </div>
                <div className="table-responsive">
                    <table className="table" >
                        <thead>
                            <tr style={{ width: "20%", fontSize: "20px" }}>
                                <th>Block</th>
                                <th>Age</th>
                                <th>Block Hash</th>
                                <th>Deposits</th>
                                <th>Transfers</th>
                                <th>Transaction Count</th>
                                <th>Event Count</th>
                            </tr>
                        </thead>
                        <tbody>{blocks_data.map((item) => (
                            <tr style={{ width: "18%", fontSize: "18px" }}>
                                <td><div className="block_data"><Link to={`/blockDetail/${item.blocknumber}`}>{item.blocknumber}</Link></div></td>
                                <td>{isTimeAgoByCreatedDate(item.createdAt)}</td>
                                <td><Link to={`/blockDetail/${item.blockhash}`}>{getAddress(item.blockhash)}</Link></td>
                                <td>{item.deposit}</td>
                                <td>{item.transfer}</td>
                                <td>{item.transactionCount}</td>
                                <td>--</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div >
                <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={blocks_count}
                    pageSize={pageSize}
                    onPageChange={page => setCurrentPage(page)}
                />
            </div>
        </>
        }

        </>
    )
}

export default ListBlocks