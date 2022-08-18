import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexCharts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            series: [76, 67, 61,],
            options: {
                chart: {
                    height: 70,
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        offsetY: -30,
                        offsetX: -20,
                        startAngle: 0,
                        endAngle: 240,
                        hollow: {
                            margin: 5,
                            size: '30%',
                            background: 'transparent',
                            image: undefined,
                        },
                        dataLabels: {
                            name: {
                                show: false,
                            },
                            value: {
                                show: false,
                            }
                        }
                    }
                },
                colors: ['#65B0F6', '#FFB572', '#FF7CA3'],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        legend: {
                            show: false
                        }
                    }
                }]
            },


        };
    }



    render() {
        return (


            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={390} />
            </div>


        );
    }
}

export default ApexCharts