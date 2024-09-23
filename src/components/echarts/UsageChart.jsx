import React, { useEffect } from "react";
import * as echarts from "echarts";

const UsageChart = () => {
    useEffect(() => {
        const chartDom = document.getElementById("usageChart");
        const myChart = echarts.init(chartDom);

        const option = {
            xAxis: {
                type: "category",
                data: ["12AM", "5AM", "11AM", "5PM", "10PM"],
                axisLabel: {
                    textStyle: {
                        color: '#ffffff'  // Color for the x-axis labels
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#ffffff'  // Color for the x-axis line (bottom line)
                    }
                }
            },
            yAxis: {
                type: "value",
                min: 0,
                max: 50,
                interval: 10,
                axisLabel: {
                    formatter: '{value} ¢/kWh',
                    textStyle: {
                        color: '#ffffff'  // Color for the y-axis labels
                    }
                },
            },
            grid: {
                left: '5%',  // Adjust margins as necessary
                right: '0%',
                top: '5%',
                bottom: '0%', // Adjust spacing for x-axis labels
                containLabel: true,
            },
            series: [
                {
                    name: 'Green',
                    data: [5, 10, 10, 15, 5],
                    type: 'bar',
                    stack: 'total',
                    itemStyle: {
                        color: '#33cc33',
                    },
                },
                {
                    name: 'Yellow',
                    data: [5, 10, 20, 15, 10],
                    type: 'bar',
                    stack: 'total',
                    itemStyle: {
                        color: '#ffff00',
                    },
                },
                {
                    name: 'Red',
                    data: [5, 10, 10, 15, 10],
                    type: 'bar',
                    stack: 'total',
                    itemStyle: {
                        color: '#ff0000',
                    },
                },
            ],
        };

        myChart.setOption(option);

        const resizeChart = () => {
            myChart.resize();
        };

        window.addEventListener("resize", resizeChart);

        return () => {
            window.removeEventListener("resize", resizeChart);
            myChart.dispose();
        };
    }, []);

    return (
        <div id="usageChart" style={{ width: "300px", height: "350px" }}></div>
    );
};

export default UsageChart;