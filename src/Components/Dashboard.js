import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Blocks from './Blocks';
import useTransactions from '../Requests/useTransactions';
import RecentTransactions from './RecentTransactions';
import NewCard from './NewCard';
import useTotalValidators from '../Requests/useTotalValidators';
import useSummary from '../Requests/useSummary';
import useTransactionHistory from '../Requests/useTransactionHistory';
import Chart from './Chart';
import { ReactComponent as ChartLoader } from '../Image/loader.svg'
import useCheckTransaction from '../Requests/useCheckTransaction';
import { LatestDataProvider } from '../Contexts/latest_data';

const Dashboard = () => {
    const { totalValidator } = useTotalValidators()
    const [txns, setTotalTxns] = useState(0);
    const [showDay, setShowDay] = useState();
    const [recent_txns, setRecentTxns] = useState([]);
    const { transaction_data, status, setParams, transaction_count, params, totalTransaction } = useTransactions()
    const { totalData } = useSummary();
    const [totalToken, setTotalToken] = useState(0);
    const { transactionHsitory, chartType, setChartType } = useTransactionHistory();
    const [chartData, setChartData] = useState({});
    const { hash, setHash } = useCheckTransaction();
    const blocks = LatestDataProvider()

    console.log(blocks.blocknumber, "KKK:::::::LL");




    // let cosmoSocket;
    // const initCosmoSocket = async (ws) => {
    //     if (!cosmoSocket?.status || !cosmoSocket) {
    //         cosmoSocket = io.connect(ws, {
    //             transports: ["websocket"],
    //             reconnect: true,
    //         });
    //     }
    // };

    // const subscribeLatestBlocksCosmo = async (cb) => {
    //     await initCosmoSocket("wss://ws.streakkscan.com");

    //     cosmoSocket.on("LATEST_BLOCK", (data) => {
    //         // console.log(data);
    //         cb(data);
    //     });
    // };
    // subscribeLatestBlocksCosmo((data) => console.log("  ", data));







    useEffect(() => {
        setRecentTxns(transaction_data)
    }, [transaction_data])

    useEffect(() => {
        setTotalTxns(Number(totalTransaction))
    }, [totalTransaction])

    useEffect(() => {
        if (totalData?.data?.totalToken) {
            setTotalToken(
                Number(totalData?.data?.totalToken ? totalData.data?.totalToken : 0) / 10 ** 18
            );
        }
    }, [totalData])


    useEffect(() => {
        setChartData(transactionHsitory);
    }, [transactionHsitory]);

    useEffect(() => {
        if (chartType === "14days") {
            setShowDay("14days");
        } else if (chartType === "1month") {
            setShowDay("1 month")
        } else {
            setShowDay("3 Month")
        }
    }, [chartType])
    return (

        <div className="dashboardMain">
            <div className="contentMain">
                <Row className="networkRow">
                    <Col className="graphsCol" xl={12} lg={12}>
                        <Row className="dash_row align-items-center">
                            <Col className="dash_col" sm={6} lg={2}>
                                <NewCard title="STKC PRICE" amount="$10" />
                                <NewCard title="MARKET CAP" amount="-" />
                            </Col>
                            <Col className="dash_col" sm={6} lg={3}>
                                <NewCard
                                    title="VALIDATORS"
                                    amount={
                                        totalValidator?.data?.total
                                            ? totalValidator?.data?.total
                                            : 0
                                    }
                                />
                                <NewCard
                                    title="BLOCKS"
                                    amount={
                                        // totalValidator?.data?.block_height
                                        //     ? totalValidator?.data?.block_height
                                        //     : 0
                                        blocks?.blocknumber
                                            ? blocks?.blocknumber + 1
                                            : 0
                                    }
                                />
                            </Col>
                            <Col className="dash_col" sm={6} lg={3}>
                                <NewCard
                                    title="TOTAL TRANSACTIONS"
                                    amount={txns ? txns : 0}
                                />
                                <NewCard
                                    title="TOTAL ACCOUNTS"
                                    amount={

                                        totalData?.data?.totalAccounts
                                            ? totalData?.data?.totalAccounts
                                            : 0
                                    }
                                />
                            </Col>
                            <Col className="dash_col" sm={6} lg={4}>
                                <NewCard
                                    className="border-none"
                                    title="TOTAL TRANSFER VALUE (in tSTKC)"
                                    amount={totalToken ? totalToken.toFixed(1) : 0}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className="bottomTableSec">
                    <Col className="graphsColleft" lg={6} xs={12}>
                        <div className="graphOuter">
                            <div className="graphsHeaderOuter">
                                <h3 className="graphTitle">Latest Blocks</h3>
                            </div>

                            <div className="tableOuterDash recentBlocks">
                                <Blocks />
                            </div>
                            <div className="view_sec" onClick={"viewBlock"}>
                                <Link to="/listBlocks" className="viewAll">
                                    View all Blocks
                                </Link>
                            </div>
                        </div>
                    </Col>
                    <Col className="graphsColright" lg={6} xs={12}>
                        <div className="graphsHeaderOuter">
                            <h3 className="graphTitle"> Latest Transactions</h3>
                            {/* <Link to="/transactions" className="viewAll">
                  View All
                </Link> */}
                        </div>
                        <div className="tableOuterDash">
                            <RecentTransactions data={recent_txns?.slice(0, 10)} />
                            <div className="view_sec" onClick={"viewTransactions"}>
                                <Link to="/transactions" className="viewAll">
                                    View all Transactions
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="graphsCol mt-sm-5 mt-3" xl={12} lg={12}>
                        <div className="graphsHeaderOuter">
                            <h3 className="graphTitle">Daily Transactions :{showDay}</h3>
                            <div className="d-flex justify-content-end mb-2 flex-xs-wrap">
                                <Link
                                    to="#"
                                    className={chartType === "14days" ? "active" : ""}
                                    onClick={() => setChartType("14days")}
                                >
                                    2 Weeks
                                </Link>
                                <Link
                                    to="#"
                                    className={chartType === "1month" ? "active" : ""}
                                    onClick={() => setChartType("1month")}
                                >
                                    1 Month
                                </Link>
                                <Link
                                    to="#"
                                    className={chartType === "3month" ? "active" : ""}
                                    onClick={() => setChartType("3month")}
                                >
                                    3 Months
                                </Link>

                            </div>
                        </div>
                        <div className="graphOuter">
                            <div className="graphSection dimensions">
                                {chartData?.length > 0 ? (
                                    <Chart data={chartData} chartType={chartType} />
                                ) : (
                                    <div className="chartLoader">
                                        <ChartLoader />

                                    </div>
                                )}
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>

        //   ) : (
        //     <Loader />
    );
}

export default Dashboard