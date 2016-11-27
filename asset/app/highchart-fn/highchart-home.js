"use strict";

function datastockcharthome() {
    var reportFilter = {
        FromDate: '2016-11-23 10:10',
        Isin: 'IRX6X57T0006',
        ToDate: '2016-11-27 12:39',
        Language: '2'
    }
    var fil = {
        ReportFilter: reportFilter,
        KendoFilter: null
    }
    $.ajax({
        url: 'http://172.16.18.214/api/OhlcDetails/GetOhlcDaily',
        type: 'POST',
        data: fil,
        dataType: "json",
        success: function (data_temp) {
            var arr1 = [];
            var arr = [];
            var data = [];
            for (var prop1 in data_temp.Result) {
                arr1 = data_temp.Result[prop1];
                arr = [];
                for (var prop in arr1) {
                    arr.push(arr1[prop]);
                }
                data.push(arr);

            }
            console.log(data);

            // create the chart
            Highcharts.stockChart('stockchart-home', {

                rangeSelector: {
                    selected: 1
                },

                title: {

                    text: 'AAPL Stock Price'
                },

                series: [
                    {
                        type: 'candlestick',
                        name: 'AAPL Stock Price',
                        data: data,
                        dataGrouping: {
                            units: [
                                [
                                    'minute', // unit name
                                    [1] // allowed multiples
                                ],
                                [
                                    'month',
                                    [1, 2, 3, 4, 6]
                                ]
                            ]
                        }
                    }
                ]
            });
        }
    });
}
