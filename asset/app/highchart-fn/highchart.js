    "use strict";
function dataHighchartbar1() {
    
        var chart = {
            type: 'bar',
            backgroundColor: 'rgba(255,255,255,0.05)'
        };
        var title = {
            text: ''
        };
        var subtitle = {
            text: ''
        };
        var xAxis = {
            
            categories: ['YTD', '2015'],
            title: {
                text: null
            }
        };
        
        var yAxis = {
            
            min: 0,
            title: {
                text: '',
                align: ''
            },
            labels: {
                overflow: ''
            }
        };
        var tooltip = {
            valueSuffix: ' millions'
        };
        var plotOptions = {
            bar: {
                dataLabels: {
                    enabled: true
                }
            },
            series: {
                stacking: 'normal'
            }
        };
        var legend = {
            
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#red'),
            shadow: true
        };
        var credits = {
            enabled: false
        };

        var series = [{
            name: 'value1',
            data: [3367772,2222222,1999999,7653453],
            color: 'rgba(72,165,155,8)'
        },{
            name: 'value2',
            data: [367772,2345534,567843,934554],
            color: 'rgba(104,177,39,8)'
        },{
            name: 'value3',
            data: [367772,2345534,567843,934554],
            color: 'rgba(210,29,68,8)'
        },{
            name: 'value4',
            data: [367772,2345534,567843,934554],
            color: 'rgba(17,56,97,8)'
        }
        ];

        var json = {};
        json.chart = chart;
        json.title = title;
        json.subtitle = subtitle;
        json.tooltip = tooltip;
        json.xAxis = xAxis;
        json.yAxis = yAxis;
        json.series = series;
        json.plotOptions = plotOptions;
        json.legend = legend;
        json.credits = credits;
        $('.bar1').highcharts(json);
    
}
function dataHighchartline1() {
    
        Highcharts.chart('line1', {
            
        chart: {
            type: 'line',
            backgroundColor: 'rgba(255,255,255,0.05)',
            colorborder:'rgb(255,0,0)'
        },
        title: {
            text: 'Monthly Average investment portfolio',
            style: {
            color: 'rgba(255,255,255,0.5)',
            font: 'bold 20px "Trebuchet MS", Verdana, sans-serif'
        }
        },
        subtitle: {
            text: 'Source: mofidentekhab.com',
            style: {
            color: 'rgba(255,255,255,0.2)',
            font: '16px "Trebuchet MS", Verdana, sans-serif'
        }
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Percent (%)'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'Index portfolio',
            data: [70.0, 60.9, 90.5, 140.5, 180.4, 210.5, 250.2, 260.5, 230.3, 180.3, 130.9, 110.6,140.5, 180.4, 210.5,],
            color: 'rgb(218,226,88)'
        }, {
            name: 'Stock index',
            data: [30.9, 40.2, 50.7, 80.5, 110.9, 150.2, 170.0, 160.6, 140.2, 100.3, 60.6, 80.8,145.5, 200.4, 220.5,],
            color: 'rgb(222,31,39)'
        }]
    });
    
}
function dataHighchartpie1() {
         Highcharts.chart('pie1', {
             colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', 
             '#FF9655', '#FFF263', '#6AF9C4'],
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                backgroundColor: 'rgba(255,255,255,0.05)'
            },
            title: {
                text: 'Percent of the sector shares January, 2016 to May, 2016',
                style: {
            color: 'rgba(255,255,255,0.5)',
            font: 'bold 20px "Trebuchet MS", Verdana, sans-serif'
        }
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Brands',
                colorByPoint: true,
                data: [{
                    name: 'Microsoft Internet Explorer',
                    y: 56.33
                }, {
                    name: 'Chrome',
                    y: 24.03,
                    sliced: true,
                    selected: true
                }, {
                    name: 'Firefox',
                    y: 10.38
                }, {
                    name: 'Safari',
                    y: 4.77
                }, {
                    name: 'Opera',
                    y: 0.91
                }, {
                    name: 'Proprietary or Undetectable',
                    y: 0.2
                }]
            }]
        });
    
}