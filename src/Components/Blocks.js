import React from 'react'
import { renderTime, getAddress } from '../constant'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import useBlocks from '../Requests/useBlocks'
import useTotalValidators from '../Requests/useTotalValidators'
import { Table } from 'react-bootstrap'

const Blocks = () => {

    const { totalValidator } = useTotalValidators()
    const { blocks_data, isLoading, status, setParams, blocks_count } = useBlocks();
    // console.log(totalValidator, ':::::KKKK')

    return (
        <div>
            {isLoading ? <><Loading /></> :
                <div className="tableOuter dashboardTable">
                    {/* <div class="graphsHeaderOuter">
                        <h3 class="graphTitle" style={{ width: "30%", fontSize: "30px", color: 'red' }}>Latest Blocks</h3></div> */}

                    <Table>
                        <thead>
                            <tr>
                                <th>Block </th>
                                <th>Age</th>
                                <th>Block Hash</th>
                            </tr>
                        </thead>
                        <tbody>{blocks_data.map((item, index) => (
                            <tr>
                                <td><Link
                                    className="textOverflow"
                                    to={`/blockDetail/${item.blocknumber}`}>
                                    {item.blocknumber}
                                </Link></td>
                                <td>{renderTime(item.createdAt)}</td>
                                <td>
                                    <Link data-tip
                                        data-for={"block_hash" + item.blockhash + index}
                                        to={`/blockDetail/${item.blockhash}`}
                                    >{getAddress(item.blockhash)}</Link>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>


            }
        </div>
    )
}

export default Blocks