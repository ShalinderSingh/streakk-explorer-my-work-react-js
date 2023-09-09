import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import moment from "moment";
import T from "prop-types";




const Chart = ({ data, chartType }) => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        let labelIndex = data.map((item, index) =>
            moment(item.date).format("DD MMM YYYY")
        );
        let maxLength = data.length;

        let seriesData = data.map((e) => {
            return Number(e.count);
        });

        const options = {
            chart: {
                type: "line",
                spacingBottom: 15,
                backgroundColor: {
                    color: "#152A59",
                },
            },
            title: {
                text: " ",
            },
            credits: {
                enabled: false,
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true,
                    },
                },
            },
            legend: {
                itemStyle: {
                    color: "white",
                },
                itemHoverStyle: {
                    color: "white",
                },
            },
            xAxis: {
                type: "linear",
                title: {

                },
                min: 0,
                max: maxLength - 1,
                scrollbar: {
                    enabled: true,
                },
                tickLength: 0,
                categories: [...labelIndex],
            },
            yAxis: {
                title: {
                    text: "",
                },
                gridLineColor: "#55585f",
            },
            series: [
                {
                    name: "Transactions",
                    data: [...seriesData],
                },
            ],
            accessibility: {
                enabled: false,
            },
        };
        setChartData(options);

    }, [data, chartType]);

    return (
        <div>
            <div className="chart-wrapper" style={{ height: "100%" }}>
                {chartData !== null ? (

                    <HighchartsReact highcharts={Highcharts} options={chartData} />
                ) : null}
            </div>

        </div>
    );
};

export default React.memo(Chart);
