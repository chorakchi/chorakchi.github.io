    "use strict";

Highcharts.theme = {
   colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066', '#eeaaee',
      '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
   chart: {
      backgroundColor: {
         linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
         stops: [
            [0, 'rgba(255,255,255,0.1)'],
            [1, 'rgba(0,0,0,0.1)']
         ]
      },
      style: {
         fontFamily: '\'Unica One\', sans-serif'
      },
      plotBorderColor: '#606063'
   },
   title: {
      style: {
         color: '#E0E0E3',
         textTransform: 'uppercase',
         fontSize: '20px'
      }
   },
   subtitle: {
      style: {
         color: '#E0E0E3',
         textTransform: 'uppercase'
      }
   },
   xAxis: {
      gridLineColor: '#707073',
      labels: {
         style: {
            color: '#E0E0E3'
         }
      },
      lineColor: '#707073',
      minorGridLineColor: '#505053',
      tickColor: '#707073',
      title: {
         style: {
            color: '#A0A0A3'

         }
      }
   },
   yAxis: {
      gridLineColor: '#707073',
      labels: {
         style: {
            color: '#E0E0E3'
         }
      },
      lineColor: '#707073',
      minorGridLineColor: '#505053',
      tickColor: '#707073',
      tickWidth: 1,
      title: {
         style: {
            color: '#A0A0A3'
         }
      }
   },
   tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      style: {
         color: '#F0F0F0'
      }
   },
   plotOptions: {
      series: {
         dataLabels: {
            color: '#B0B0B3'
         },
         marker: {
            lineColor: '#333'
         }
      },
      boxplot: {
         fillColor: '#505053'
      },
      candlestick: {
         lineColor: 'white'
      },
      errorbar: {
         color: 'white'
      }
   },
   legend: {
      itemStyle: {
         color: '#E0E0E3'
      },
      itemHoverStyle: {
         color: '#FFF'
      },
      itemHiddenStyle: {
         color: '#606063'
      }
   },
   credits: {
      style: {
         color: '#666'
      }
   },
   labels: {
      style: {
         color: '#707073'
      }
   },

   drilldown: {
      activeAxisLabelStyle: {
         color: '#F0F0F3'
      },
      activeDataLabelStyle: {
         color: '#F0F0F3'
      }
   },

   navigation: {
      buttonOptions: {
         symbolStroke: '#DDDDDD',
         theme: {
            fill: '#505053'
         }
      }
   },

   // scroll charts
   rangeSelector: {
      buttonTheme: {
         fill: '#505053',
         stroke: '#000000',
         style: {
            color: '#CCC'
         },
         states: {
            hover: {
               fill: '#707073',
               stroke: '#000000',
               style: {
                  color: 'white'
               }
            },
            select: {
               fill: '#000003',
               stroke: '#000000',
               style: {
                  color: 'white'
               }
            }
         }
      },
      inputBoxBorderColor: '#505053',
      inputStyle: {
         backgroundColor: '#333',
         color: 'silver'
      },
      labelStyle: {
         color: 'silver'
      }
   },

   navigator: {
      handles: {
         backgroundColor: '#666',
         borderColor: '#AAA'
      },
      outlineColor: '#CCC',
      maskFill: 'rgba(255,255,255,0.1)',
      series: {
         color: '#7798BF',
         lineColor: '#A6C7ED'
      },
      xAxis: {
         gridLineColor: '#505053'
      }
   },

   scrollbar: {
      barBackgroundColor: '#808083',
      barBorderColor: '#808083',
      buttonArrowColor: '#CCC',
      buttonBackgroundColor: '#606063',
      buttonBorderColor: '#606063',
      rifleColor: '#FFF',
      trackBackgroundColor: '#404043',
      trackBorderColor: '#404043'
   },

   // special colors for some of the
   legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
   background2: '#505053',
   dataLabelsColor: '#B0B0B3',
   textColor: '#C0C0C0',
   contrastTextColor: '#F0F0F3',
   maskColor: 'rgba(255,255,255,0.3)'
};
// Apply the theme
Highcharts.setOptions(Highcharts.theme);

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
function dataHighchartbar2() { 
      Highcharts.chart('bar2', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Stacked bar chart'
        },
        xAxis: {
            categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total fruit consumption'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'John',
            data: [5, 3, 4, 7, 2]
        }, {
            name: 'Jane',
            data: [2, 2, 3, 2, 1]
        }, {
            name: 'Joe',
            data: [3, 4, 4, 2, 5]
        }]
    });
}
function dataHighchartbar3() { 
      var categories = ['0-4', '5-9', '10-14', '15-19',
            '20-24', '25-29', '30-34', '35-39', '40-44',
            '45-49', '50-54', '55-59', '60-64', '65-69',
            '70-74', '75-79', '80-84', '85-89', '90-94',
            '95-99', '100 + '];
    $(document).ready(function () {
        Highcharts.chart('bar3', {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Population pyramid for Germany, 2015'
            },
            subtitle: {
                text: 'Source: <a href="http://populationpyramid.net/germany/2015/">Population Pyramids of the World from 1950 to 2100</a>'
            },
            xAxis: [{
                categories: categories,
                reversed: false,
                labels: {
                    step: 1
                }
            }, { // mirror axis on right side
                opposite: true,
                reversed: false,
                categories: categories,
                linkedTo: 0,
                labels: {
                    step: 1
                }
            }],
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    formatter: function () {
                        return Math.abs(this.value) + '%';
                    }
                }
            },

            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },

            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
                        'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
                }
            },

            series: [{
                name: 'Male',
                data: [-2.2, -2.2, -2.3, -2.5, -2.7, -3.1, -3.2,
                    -3.0, -3.2, -4.3, -4.4, -3.6, -3.1, -2.4,
                    -2.5, -2.3, -1.2, -0.6, -0.2, -0.0, -0.0]
            }, {
                name: 'Female',
                data: [2.1, 2.0, 2.2, 2.4, 2.6, 3.0, 3.1, 2.9,
                    3.1, 4.1, 4.3, 3.6, 3.4, 2.6, 2.9, 2.9,
                    1.8, 1.2, 0.6, 0.1, 0.0]
            }]
        });
    });
}
function dataHighchartbar4() { 
    Highcharts.chart('bar4', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Monthly Average Rainfall'
        },
        subtitle: {
            text: 'Source: WorldClimate.com'
        },
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Rainfall (mm)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Tokyo',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

        }, {
            name: 'New York',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

        }, {
            name: 'London',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

        }, {
            name: 'Berlin',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

        }]
    });
}
function dataHighchartbar5() { 
     Highcharts.chart('bar5', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Column chart with negative values'
        },
        xAxis: {
            categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'John',
            data: [5, 3, 4, 7, 2]
        }, {
            name: 'Jane',
            data: [2, -2, -3, 2, 1]
        }, {
            name: 'Joe',
            data: [3, 4, 4, -2, 5]
        }]
    });
}
function dataHighchartbar6() { 
     Highcharts.chart('bar6', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Stacked column chart'
        },
        xAxis: {
            categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total fruit consumption'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        legend: {
            align: 'right',
            x: -30,
            verticalAlign: 'top',
            y: 25,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                }
            }
        },
        series: [{
            name: 'John',
            data: [5, 3, 4, 7, 2]
        }, {
            name: 'Jane',
            data: [2, 2, 3, 2, 1]
        }, {
            name: 'Joe',
            data: [3, 4, 4, 2, 5]
        }]
    });
}
function dataHighchartbar7() { 
     Highcharts.chart('bar7', {

        chart: {
            type: 'column'
        },

        title: {
            text: 'Total fruit consumtion, grouped by gender'
        },

        xAxis: {
            categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
        },

        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: 'Number of fruits'
            }
        },

        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal;
            }
        },

        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },

        series: [{
            name: 'John',
            data: [5, 3, 4, 7, 2],
            stack: 'male'
        }, {
            name: 'Joe',
            data: [3, 4, 4, 2, 5],
            stack: 'male'
        }, {
            name: 'Jane',
            data: [2, 5, 6, 2, 1],
            stack: 'female'
        }, {
            name: 'Janet',
            data: [3, 0, 4, 4, 3],
            stack: 'female'
        }]
    });
}
function dataHighchartbar8() { 
      Highcharts.chart('bar8', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Stacked column chart'
        },
        xAxis: {
            categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total fruit consumption'
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'percent'
            }
        },
        series: [{
            name: 'John',
            data: [5, 3, 4, 7, 2]
        }, {
            name: 'Jane',
            data: [2, 2, 3, 2, 1]
        }, {
            name: 'Joe',
            data: [3, 4, 4, 2, 5]
        }]
    });
}
function dataHighchartbar9() { 
      Highcharts.chart('bar9', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'World\'s largest cities per 2014'
        },
        subtitle: {
            text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Population (millions)'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Population in 2008: <b>{point.y:.1f} millions</b>'
        },
        series: [{
            name: 'Population',
            data: [
                ['Shanghai', 23.7],
                ['Lagos', 16.1],
                ['Istanbul', 14.2],
                ['Karachi', 14.0],
                ['Mumbai', 12.5],
                ['Moscow', 12.1],
                ['São Paulo', 11.8],
                ['Beijing', 11.7],
                ['Guangzhou', 11.1],
                ['Delhi', 11.1],
                ['Shenzhen', 10.5],
                ['Seoul', 10.4],
                ['Jakarta', 10.0],
                ['Kinshasa', 9.3],
                ['Tianjin', 9.3],
                ['Tokyo', 9.0],
                ['Cairo', 8.9],
                ['Dhaka', 8.9],
                ['Mexico City', 8.9],
                ['Lima', 8.9]
            ],
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 10, // 10 pixels down from the top
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    });
}
function dataHighchartbar10() { 
     Highcharts.chart('bar10', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Browser market shares. January, 2015 to May, 2015'
        },
        subtitle: {
            text: 'Click the columns to view versions. Source: <a href="http://netmarketshare.com">netmarketshare.com</a>.'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Total percent market share'
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f}%'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },

        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Microsoft Internet Explorer',
                y: 56.33,
                drilldown: 'Microsoft Internet Explorer'
            }, {
                name: 'Chrome',
                y: 24.03,
                drilldown: 'Chrome'
            }, {
                name: 'Firefox',
                y: 10.38,
                drilldown: 'Firefox'
            }, {
                name: 'Safari',
                y: 4.77,
                drilldown: 'Safari'
            }, {
                name: 'Opera',
                y: 0.91,
                drilldown: 'Opera'
            }, {
                name: 'Proprietary or Undetectable',
                y: 0.2,
                drilldown: null
            }]
        }],
        drilldown: {
            series: [{
                name: 'Microsoft Internet Explorer',
                id: 'Microsoft Internet Explorer',
                data: [
                    [
                        'v11.0',
                        24.13
                    ],
                    [
                        'v8.0',
                        17.2
                    ],
                    [
                        'v9.0',
                        8.11
                    ],
                    [
                        'v10.0',
                        5.33
                    ],
                    [
                        'v6.0',
                        1.06
                    ],
                    [
                        'v7.0',
                        0.5
                    ]
                ]
            }, {
                name: 'Chrome',
                id: 'Chrome',
                data: [
                    [
                        'v40.0',
                        5
                    ],
                    [
                        'v41.0',
                        4.32
                    ],
                    [
                        'v42.0',
                        3.68
                    ],
                    [
                        'v39.0',
                        2.96
                    ],
                    [
                        'v36.0',
                        2.53
                    ],
                    [
                        'v43.0',
                        1.45
                    ],
                    [
                        'v31.0',
                        1.24
                    ],
                    [
                        'v35.0',
                        0.85
                    ],
                    [
                        'v38.0',
                        0.6
                    ],
                    [
                        'v32.0',
                        0.55
                    ],
                    [
                        'v37.0',
                        0.38
                    ],
                    [
                        'v33.0',
                        0.19
                    ],
                    [
                        'v34.0',
                        0.14
                    ],
                    [
                        'v30.0',
                        0.14
                    ]
                ]
            }, {
                name: 'Firefox',
                id: 'Firefox',
                data: [
                    [
                        'v35',
                        2.76
                    ],
                    [
                        'v36',
                        2.32
                    ],
                    [
                        'v37',
                        2.31
                    ],
                    [
                        'v34',
                        1.27
                    ],
                    [
                        'v38',
                        1.02
                    ],
                    [
                        'v31',
                        0.33
                    ],
                    [
                        'v33',
                        0.22
                    ],
                    [
                        'v32',
                        0.15
                    ]
                ]
            }, {
                name: 'Safari',
                id: 'Safari',
                data: [
                    [
                        'v8.0',
                        2.56
                    ],
                    [
                        'v7.1',
                        0.77
                    ],
                    [
                        'v5.1',
                        0.42
                    ],
                    [
                        'v5.0',
                        0.3
                    ],
                    [
                        'v6.1',
                        0.29
                    ],
                    [
                        'v7.0',
                        0.26
                    ],
                    [
                        'v6.2',
                        0.17
                    ]
                ]
            }, {
                name: 'Opera',
                id: 'Opera',
                data: [
                    [
                        'v12.x',
                        0.34
                    ],
                    [
                        'v28',
                        0.24
                    ],
                    [
                        'v27',
                        0.17
                    ],
                    [
                        'v29',
                        0.16
                    ]
                ]
            }]
        }
    });
}
function dataHighchartbar11() { 
     Highcharts.chart('bar11', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Efficiency Optimization by Branch'
        },
        xAxis: {
            categories: [
                'Seattle HQ',
                'San Francisco',
                'Tokyo'
            ]
        },
        yAxis: [{
            min: 0,
            title: {
                text: 'Employees'
            }
        }, {
            title: {
                text: 'Profit (millions)'
            },
            opposite: true
        }],
        legend: {
            shadow: false
        },
        tooltip: {
            shared: true
        },
        plotOptions: {
            column: {
                grouping: false,
                shadow: false,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Employees',
            color: 'rgba(165,170,217,1)',
            data: [150, 73, 20],
            pointPadding: 0.3,
            pointPlacement: -0.2
        }, {
            name: 'Employees Optimized',
            color: 'rgba(126,86,134,.9)',
            data: [140, 90, 40],
            pointPadding: 0.4,
            pointPlacement: -0.2
        }, {
            name: 'Profit',
            color: 'rgba(248,161,63,1)',
            data: [183.6, 178.8, 198.5],
            tooltip: {
                valuePrefix: '$',
                valueSuffix: ' M'
            },
            pointPadding: 0.3,
            pointPlacement: 0.2,
            yAxis: 1
        }, {
            name: 'Profit Optimized',
            color: 'rgba(186,60,61,.9)',
            data: [203.6, 198.8, 208.5],
            tooltip: {
                valuePrefix: '$',
                valueSuffix: ' M'
            },
            pointPadding: 0.4,
            pointPlacement: 0.2,
            yAxis: 1
        }]
    });
}
function dataHighchartbar12() { 
     Highcharts.chart('bar12', {
        data: {
            table: 'datatable'
        },
        chart: {
            type: 'column'
        },
        title: {
            text: 'Data extracted from a HTML table in the page'
        },
        yAxis: {
            allowDecimals: false,
            title: {
                text: 'Units'
            }
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    this.point.y + ' ' + this.point.name.toLowerCase();
            }
        }
    });
}
function dataHighchartbar13() { 
    Highcharts.chart('bar13', {

        chart: {
            type: 'columnrange',
            inverted: true
        },

        title: {
            text: 'Temperature variation by month'
        },

        subtitle: {
            text: 'Observed in Vik i Sogn, Norway'
        },

        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },

        yAxis: {
            title: {
                text: 'Temperature ( °C )'
            }
        },

        tooltip: {
            valueSuffix: '°C'
        },

        plotOptions: {
            columnrange: {
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                        return this.y + '°C';
                    }
                }
            }
        },

        legend: {
            enabled: false
        },

        series: [{
            name: 'Temperatures',
            data: [
                [-9.7, 9.4],
                [-8.7, 6.5],
                [-3.5, 9.4],
                [-1.4, 19.9],
                [0.0, 22.6],
                [2.9, 29.5],
                [9.2, 30.7],
                [7.3, 26.5],
                [4.4, 18.0],
                [-3.1, 11.4],
                [-5.2, 10.4],
                [-13.5, 9.8]
            ]
        }]

    });
}
function dataHighchartline1() {
    
        Highcharts.chart('line1', {
            
        chart: {
            type: 'line',
        },
        title: {
            text: 'Monthly Average investment portfolio',
            style: {
            font: 'bold 20px "Trebuchet MS", Verdana, sans-serif'
        }
        },
        subtitle: {
            text: 'Source: mofidentekhab.com',
            style: {
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
function dataHighchartline2() {
    // Get the CSV and create the chart
    $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=analytics.csv&callback=?', function (csv) {

        Highcharts.chart('line2', {

            data: {
                csv: csv
            },

            title: {
                text: 'Daily visits at www.highcharts.com'
            },

            subtitle: {
                text: 'Source: Google Analytics'
            },

            xAxis: {
                tickInterval: 7 * 24 * 3600 * 1000, // one week
                tickWidth: 0,
                gridLineWidth: 1,
                labels: {
                    align: 'left',
                    x: 3,
                    y: -3
                }
            },

            yAxis: [{ // left y axis
                title: {
                    text: null
                },
                labels: {
                    align: 'left',
                    x: 3,
                    y: 16,
                    format: '{value:.,0f}'
                },
                showFirstLabel: false
            }, { // right y axis
                linkedTo: 0,
                gridLineWidth: 0,
                opposite: true,
                title: {
                    text: null
                },
                labels: {
                    align: 'right',
                    x: -3,
                    y: 16,
                    format: '{value:.,0f}'
                },
                showFirstLabel: false
            }],

            legend: {
                align: 'left',
                verticalAlign: 'top',
                y: 20,
                floating: true,
                borderWidth: 0
            },

            tooltip: {
                shared: true,
                crosshairs: true
            },

            plotOptions: {
                series: {
                    cursor: 'pointer',
                    point: {
                        events: {
                            click: function (e) {
                                hs.htmlExpand(null, {
                                    pageOrigin: {
                                        x: e.pageX || e.clientX,
                                        y: e.pageY || e.clientY
                                    },
                                    headingText: this.series.name,
                                    maincontentText: Highcharts.dateFormat('%A, %b %e, %Y', this.x) + ':<br/> ' +
                                        this.y + ' visits',
                                    width: 200
                                });
                            }
                        }
                    },
                    marker: {
                        lineWidth: 1
                    }
                }
            },

            series: [{
                name: 'All visits',
                lineWidth: 4,
                marker: {
                    radius: 4
                }
            }, {
                name: 'New visitors'
            }]
        });
    });
}
function dataHighchartline3() {  
     Highcharts.chart('line3', {
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Wind speed during two days'
        },
        subtitle: {
            text: 'May 31 and and June 1, 2015 at two locations in Vik i Sogn, Norway'
        },
        xAxis: {
            type: 'datetime',
            labels: {
                overflow: 'justify'
            }
        },
        yAxis: {
            title: {
                text: 'Wind speed (m/s)'
            },
            minorGridLineWidth: 0,
            gridLineWidth: 0,
            alternateGridColor: null,
            plotBands: [{ // Light air
                from: 0.3,
                to: 1.5,
                color: 'rgba(68, 170, 213, 0.1)',
                label: {
                    text: 'Light air',
                    style: {
                        color: '#606060'
                    }
                }
            }, { // Light breeze
                from: 1.5,
                to: 3.3,
                color: 'rgba(0, 0, 0, 0)',
                label: {
                    text: 'Light breeze',
                    style: {
                        color: '#606060'
                    }
                }
            }, { // Gentle breeze
                from: 3.3,
                to: 5.5,
                color: 'rgba(68, 170, 213, 0.1)',
                label: {
                    text: 'Gentle breeze',
                    style: {
                        color: '#606060'
                    }
                }
            }, { // Moderate breeze
                from: 5.5,
                to: 8,
                color: 'rgba(0, 0, 0, 0)',
                label: {
                    text: 'Moderate breeze',
                    style: {
                        color: '#606060'
                    }
                }
            }, { // Fresh breeze
                from: 8,
                to: 11,
                color: 'rgba(68, 170, 213, 0.1)',
                label: {
                    text: 'Fresh breeze',
                    style: {
                        color: '#606060'
                    }
                }
            }, { // Strong breeze
                from: 11,
                to: 14,
                color: 'rgba(0, 0, 0, 0)',
                label: {
                    text: 'Strong breeze',
                    style: {
                        color: '#606060'
                    }
                }
            }, { // High wind
                from: 14,
                to: 15,
                color: 'rgba(68, 170, 213, 0.1)',
                label: {
                    text: 'High wind',
                    style: {
                        color: '#606060'
                    }
                }
            }]
        },
        tooltip: {
            valueSuffix: ' m/s'
        },
        plotOptions: {
            spline: {
                lineWidth: 4,
                states: {
                    hover: {
                        lineWidth: 5
                    }
                },
                marker: {
                    enabled: false
                },
                pointInterval: 3600000, // one hour
                pointStart: Date.UTC(2015, 4, 31, 0, 0, 0)
            }
        },
        series: [{
            name: 'Hestavollane',
            data: [0.2, 0.8, 0.8, 0.8, 1, 1.3, 1.5, 2.9, 1.9, 2.6, 1.6, 3, 4, 3.6, 4.5, 4.2, 4.5, 4.5, 4, 3.1, 2.7, 4, 2.7, 2.3, 2.3, 4.1, 7.7, 7.1, 5.6, 6.1, 5.8, 8.6, 7.2, 9, 10.9, 11.5, 11.6, 11.1, 12, 12.3, 10.7, 9.4, 9.8, 9.6, 9.8, 9.5, 8.5, 7.4, 7.6]

        }, {
            name: 'Vik',
            data: [0, 0, 0.6, 0.9, 0.8, 0.2, 0, 0, 0, 0.1, 0.6, 0.7, 0.8, 0.6, 0.2, 0, 0.1, 0.3, 0.3, 0, 0.1, 0, 0, 0, 0.2, 0.1, 0, 0.3, 0, 0.1, 0.2, 0.1, 0.3, 0.3, 0, 3.1, 3.1, 2.5, 1.5, 1.9, 2.1, 1, 2.3, 1.9, 1.2, 0.7, 1.3, 0.4, 0.3]
        }],
        navigation: {
            menuItemStyle: {
                fontSize: '10px'
            }
        }
    });
}
function dataHighchartline4() {  
    Highcharts.chart('line4', {
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Snow depth at Vikjafjellet, Norway'
        },
        subtitle: {
            text: 'Irregular time data in Highcharts JS'
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
                month: '%e. %b',
                year: '%b'
            },
            title: {
                text: 'Date'
            }
        },
        yAxis: {
            title: {
                text: 'Snow depth (m)'
            },
            min: 0
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
        },

        plotOptions: {
            spline: {
                marker: {
                    enabled: true
                }
            }
        },

        series: [{
            name: 'Winter 2012-2013',
            // Define the data points. All series have a dummy year
            // of 1970/71 in order to be compared on the same x axis. Note
            // that in JavaScript, months start at 0 for January, 1 for February etc.
            data: [
                [Date.UTC(1970, 9, 21), 0],
                [Date.UTC(1970, 10, 4), 0.28],
                [Date.UTC(1970, 10, 9), 0.25],
                [Date.UTC(1970, 10, 27), 0.2],
                [Date.UTC(1970, 11, 2), 0.28],
                [Date.UTC(1970, 11, 26), 0.28],
                [Date.UTC(1970, 11, 29), 0.47],
                [Date.UTC(1971, 0, 11), 0.79],
                [Date.UTC(1971, 0, 26), 0.72],
                [Date.UTC(1971, 1, 3), 1.02],
                [Date.UTC(1971, 1, 11), 1.12],
                [Date.UTC(1971, 1, 25), 1.2],
                [Date.UTC(1971, 2, 11), 1.18],
                [Date.UTC(1971, 3, 11), 1.19],
                [Date.UTC(1971, 4, 1), 1.85],
                [Date.UTC(1971, 4, 5), 2.22],
                [Date.UTC(1971, 4, 19), 1.15],
                [Date.UTC(1971, 5, 3), 0]
            ]
        }, {
            name: 'Winter 2013-2014',
            data: [
                [Date.UTC(1970, 9, 29), 0],
                [Date.UTC(1970, 10, 9), 0.4],
                [Date.UTC(1970, 11, 1), 0.25],
                [Date.UTC(1971, 0, 1), 1.66],
                [Date.UTC(1971, 0, 10), 1.8],
                [Date.UTC(1971, 1, 19), 1.76],
                [Date.UTC(1971, 2, 25), 2.62],
                [Date.UTC(1971, 3, 19), 2.41],
                [Date.UTC(1971, 3, 30), 2.05],
                [Date.UTC(1971, 4, 14), 1.7],
                [Date.UTC(1971, 4, 24), 1.1],
                [Date.UTC(1971, 5, 10), 0]
            ]
        }, {
            name: 'Winter 2014-2015',
            data: [
                [Date.UTC(1970, 10, 25), 0],
                [Date.UTC(1970, 11, 6), 0.25],
                [Date.UTC(1970, 11, 20), 1.41],
                [Date.UTC(1970, 11, 25), 1.64],
                [Date.UTC(1971, 0, 4), 1.6],
                [Date.UTC(1971, 0, 17), 2.55],
                [Date.UTC(1971, 0, 24), 2.62],
                [Date.UTC(1971, 1, 4), 2.5],
                [Date.UTC(1971, 1, 14), 2.42],
                [Date.UTC(1971, 2, 6), 2.74],
                [Date.UTC(1971, 2, 14), 2.62],
                [Date.UTC(1971, 2, 24), 2.6],
                [Date.UTC(1971, 3, 2), 2.81],
                [Date.UTC(1971, 3, 12), 2.63],
                [Date.UTC(1971, 3, 28), 2.77],
                [Date.UTC(1971, 4, 5), 2.68],
                [Date.UTC(1971, 4, 10), 2.56],
                [Date.UTC(1971, 4, 15), 2.39],
                [Date.UTC(1971, 4, 20), 2.3],
                [Date.UTC(1971, 5, 5), 2],
                [Date.UTC(1971, 5, 10), 1.85],
                [Date.UTC(1971, 5, 15), 1.49],
                [Date.UTC(1971, 5, 23), 1.08]
            ]
        }]
    });
}
function dataHighchartline5() {  
    Highcharts.chart('line5', {

        title: {
            text: 'Logarithmic axis demo'
        },

        xAxis: {
            tickInterval: 1
        },

        yAxis: {
            type: 'logarithmic',
            minorTickInterval: 0.1
        },

        tooltip: {
            headerFormat: '<b>{series.name}</b><br />',
            pointFormat: 'x = {point.x}, y = {point.y}'
        },

        series: [{
            data: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512],
            pointStart: 1
        }]
    });
}
function dataHighchartline6() {  
    Highcharts.chart('line6', {
        chart: {
            type: 'area'
        },
        title: {
            text: 'US and USSR nuclear stockpiles'
        },
        subtitle: {
            text: 'Source: <a href="http://thebulletin.metapress.com/content/c4120650912x74k7/fulltext.pdf">' +
                'thebulletin.metapress.com</a>'
        },
        xAxis: {
            allowDecimals: false,
            labels: {
                formatter: function () {
                    return this.value; // clean, unformatted number for year
                }
            }
        },
        yAxis: {
            title: {
                text: 'Nuclear weapon states'
            },
            labels: {
                formatter: function () {
                    return this.value / 1000 + 'k';
                }
            }
        },
        tooltip: {
            pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
        },
        plotOptions: {
            area: {
                pointStart: 1940,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            name: 'USA',
            data: [null, null, null, null, null, 6, 11, 32, 110, 235, 369, 640,
                1005, 1436, 2063, 3057, 4618, 6444, 9822, 15468, 20434, 24126,
                27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
                26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
                24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
                22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
                10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104]
        }, {
            name: 'USSR/Russia',
            data: [null, null, null, null, null, null, null, null, null, null,
                5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
                4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
                15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
                33952, 35804, 37431, 39197, 45000, 43000, 41000, 39000, 37000,
                35000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
                21000, 20000, 19000, 18000, 18000, 17000, 16000]
        }]
    });
}
function dataHighchartline7() {  
    Highcharts.chart('line7', {
        chart: {
            type: 'area'
        },
        title: {
            text: 'Area chart with negative values'
        },
        xAxis: {
            categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'John',
            data: [5, 3, 4, 7, 2]
        }, {
            name: 'Jane',
            data: [2, -2, -3, 2, 1]
        }, {
            name: 'Joe',
            data: [3, 4, 4, -2, 5]
        }]
    });
}
function dataHighchartline8() {  
     Highcharts.chart('line8', {
        chart: {
            type: 'area'
        },
        title: {
            text: 'Historic and Estimated Worldwide Population Growth by Region'
        },
        subtitle: {
            text: 'Source: Wikipedia.org'
        },
        xAxis: {
            categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Billions'
            },
            labels: {
                formatter: function () {
                    return this.value / 1000;
                }
            }
        },
        tooltip: {
            split: true,
            valueSuffix: ' millions'
        },
        plotOptions: {
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Asia',
            data: [502, 635, 809, 947, 1402, 3634, 5268]
        }, {
            name: 'Africa',
            data: [106, 107, 111, 133, 221, 767, 1766]
        }, {
            name: 'Europe',
            data: [163, 203, 276, 408, 547, 729, 628]
        }, {
            name: 'America',
            data: [18, 31, 54, 156, 339, 818, 1201]
        }, {
            name: 'Oceania',
            data: [2, 2, 2, 6, 13, 30, 46]
        }]
    });
}
function dataHighchartline9() {  
      Highcharts.chart('line9', {
        chart: {
            type: 'area'
        },
        title: {
            text: 'Historic and Estimated Worldwide Population Distribution by Region'
        },
        subtitle: {
            text: 'Source: Wikipedia.org'
        },
        xAxis: {
            categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
            tickmarkPlacement: 'on',
            title: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Percent'
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
            split: true
        },
        plotOptions: {
            area: {
                stacking: 'percent',
                lineColor: '#ffffff',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#ffffff'
                }
            }
        },
        series: [{
            name: 'Asia',
            data: [502, 635, 809, 947, 1402, 3634, 5268]
        }, {
            name: 'Africa',
            data: [106, 107, 111, 133, 221, 767, 1766]
        }, {
            name: 'Europe',
            data: [163, 203, 276, 408, 547, 729, 628]
        }, {
            name: 'America',
            data: [18, 31, 54, 156, 339, 818, 1201]
        }, {
            name: 'Oceania',
            data: [2, 2, 2, 6, 13, 30, 46]
        }]
    });
}
function dataHighchartline10() {  
     Highcharts.chart('line10', {
        chart: {
            type: 'area',
            spacingBottom: 30
        },
        title: {
            text: 'Fruit consumption *'
        },
        subtitle: {
            text: '* Jane\'s banana consumption is unknown',
            floating: true,
            align: 'right',
            verticalAlign: 'bottom',
            y: 15
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 150,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        xAxis: {
            categories: ['Apples', 'Pears', 'Oranges', 'Bananas', 'Grapes', 'Plums', 'Strawberries', 'Raspberries']
        },
        yAxis: {
            title: {
                text: 'Y-Axis'
            },
            labels: {
                formatter: function () {
                    return this.value;
                }
            }
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    this.x + ': ' + this.y;
            }
        },
        plotOptions: {
            area: {
                fillOpacity: 0.5
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'John',
            data: [0, 1, 4, 4, 5, 2, 3, 7]
        }, {
            name: 'Jane',
            data: [1, 0, 3, null, 3, 1, 2, 1]
        }]
    });
}
function dataHighchartline11() {  
     Highcharts.chart('line11', {
        chart: {
            type: 'area',
            inverted: true
        },
        title: {
            text: 'Average fruit consumption during one week'
        },
        subtitle: {
            style: {
                position: 'absolute',
                right: '0px',
                bottom: '10px'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -150,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        xAxis: {
            categories: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ]
        },
        yAxis: {
            title: {
                text: 'Number of units'
            },
            labels: {
                formatter: function () {
                    return this.value;
                }
            },
            min: 0
        },
        plotOptions: {
            area: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: 'John',
            data: [3, 4, 3, 5, 4, 10, 12]
        }, {
            name: 'Jane',
            data: [1, 3, 4, 3, 3, 5, 4]
        }]
    });
}
function dataHighchartline12() {  
    Highcharts.chart('line12', {
        chart: {
            type: 'areaspline'
        },
        title: {
            text: 'Average fruit consumption during one week'
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 150,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        xAxis: {
            categories: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ],
            plotBands: [{ // visualize the weekend
                from: 4.5,
                to: 6.5,
                color: 'rgba(68, 170, 213, .2)'
            }]
        },
        yAxis: {
            title: {
                text: 'Fruit units'
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' units'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: 'John',
            data: [3, 4, 3, 5, 4, 10, 12]
        }, {
            name: 'Jane',
            data: [1, 3, 4, 3, 3, 5, 4]
        }]
    });
}
function dataHighchartline13() {  
     $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=range.json&callback=?', function (data) {

        Highcharts.chart('line13', {

            chart: {
                type: 'arearange',
                zoomType: 'x'
            },

            title: {
                text: 'Temperature variation by day'
            },

            xAxis: {
                type: 'datetime'
            },

            yAxis: {
                title: {
                    text: null
                }
            },

            tooltip: {
                crosshairs: true,
                shared: true,
                valueSuffix: '°C'
            },

            legend: {
                enabled: false
            },

            series: [{
                name: 'Temperatures',
                data: data
            }]

        });
    });
}
function dataHighchartline14() {  
    
    var ranges = [
            [1246406400000, 14.3, 27.7],
            [1246492800000, 14.5, 27.8],
            [1246579200000, 15.5, 29.6],
            [1246665600000, 16.7, 30.7],
            [1246752000000, 16.5, 25.0],
            [1246838400000, 17.8, 25.7],
            [1246924800000, 13.5, 24.8],
            [1247011200000, 10.5, 21.4],
            [1247097600000, 9.2, 23.8],
            [1247184000000, 11.6, 21.8],
            [1247270400000, 10.7, 23.7],
            [1247356800000, 11.0, 23.3],
            [1247443200000, 11.6, 23.7],
            [1247529600000, 11.8, 20.7],
            [1247616000000, 12.6, 22.4],
            [1247702400000, 13.6, 19.6],
            [1247788800000, 11.4, 22.6],
            [1247875200000, 13.2, 25.0],
            [1247961600000, 14.2, 21.6],
            [1248048000000, 13.1, 17.1],
            [1248134400000, 12.2, 15.5],
            [1248220800000, 12.0, 20.8],
            [1248307200000, 12.0, 17.1],
            [1248393600000, 12.7, 18.3],
            [1248480000000, 12.4, 19.4],
            [1248566400000, 12.6, 19.9],
            [1248652800000, 11.9, 20.2],
            [1248739200000, 11.0, 19.3],
            [1248825600000, 10.8, 17.8],
            [1248912000000, 11.8, 18.5],
            [1248998400000, 10.8, 16.1]
        ],
        averages = [
            [1246406400000, 21.5],
            [1246492800000, 22.1],
            [1246579200000, 23],
            [1246665600000, 23.8],
            [1246752000000, 21.4],
            [1246838400000, 21.3],
            [1246924800000, 18.3],
            [1247011200000, 15.4],
            [1247097600000, 16.4],
            [1247184000000, 17.7],
            [1247270400000, 17.5],
            [1247356800000, 17.6],
            [1247443200000, 17.7],
            [1247529600000, 16.8],
            [1247616000000, 17.7],
            [1247702400000, 16.3],
            [1247788800000, 17.8],
            [1247875200000, 18.1],
            [1247961600000, 17.2],
            [1248048000000, 14.4],
            [1248134400000, 13.7],
            [1248220800000, 15.7],
            [1248307200000, 14.6],
            [1248393600000, 15.3],
            [1248480000000, 15.3],
            [1248566400000, 15.8],
            [1248652800000, 15.2],
            [1248739200000, 14.8],
            [1248825600000, 14.4],
            [1248912000000, 15],
            [1248998400000, 13.6]
        ];


    Highcharts.chart('line14', {

        title: {
            text: 'July temperatures'
        },

        xAxis: {
            type: 'datetime'
        },

        yAxis: {
            title: {
                text: null
            }
        },

        tooltip: {
            crosshairs: true,
            shared: true,
            valueSuffix: '°C'
        },

        legend: {
        },

        series: [{
            name: 'Temperature',
            data: averages,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[0]
            }
        }, {
            name: 'Range',
            data: ranges,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[0],
            fillOpacity: 0.3,
            zIndex: 0
        }]
    });
}
function dataHighchartline15() {  
     $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=usdeur.json&callback=?', function (data) {

        Highcharts.chart('line15', {
            chart: {
                zoomType: 'x'
            },
            title: {
                text: 'USD to EUR exchange rate over time'
            },
            subtitle: {
                text: document.ontouchstart === undefined ?
                        'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: 'Exchange rate'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },

            series: [{
                type: 'area',
                name: 'USD to EUR',
                data: data
            }]
        });
    });
}
function dataHighchartline16() {  
    Highcharts.chart('line16', {
        chart: {
            type: 'spline',
            inverted: true
        },
        title: {
            text: 'Atmosphere Temperature by Altitude'
        },
        subtitle: {
            text: 'According to the Standard Atmosphere Model'
        },
        xAxis: {
            reversed: false,
            title: {
                enabled: true,
                text: 'Altitude'
            },
            labels: {
                formatter: function () {
                    return this.value + 'km';
                }
            },
            maxPadding: 0.05,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Temperature'
            },
            labels: {
                formatter: function () {
                    return this.value + '°';
                }
            },
            lineWidth: 2
        },
        legend: {
            enabled: false
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br/>',
            pointFormat: '{point.x} km: {point.y}°C'
        },
        plotOptions: {
            spline: {
                marker: {
                    enable: false
                }
            }
        },
        series: [{
            name: 'Temperature',
            data: [[0, 15], [10, -50], [20, -56.5], [30, -46.5], [40, -22.1],
                [50, -2.5], [60, -27.7], [70, -55.7], [80, -76.5]]
        }]
    });
}
function dataHighchartline17() {
    Highcharts.SparkLine = function (a, b, c) {
        var hasRenderToArg = typeof a === 'string' || a.nodeName,
            options = arguments[hasRenderToArg ? 1 : 0],
            defaultOptions = {
                chart: {
                    renderTo: (options.chart && options.chart.renderTo) || this,
                    backgroundColor: null,
                    borderWidth: 0,
                    type: 'area',
                    margin: [2, 0, 2, 0],
                    width: 120,
                    height: 20,
                    style: {
                        overflow: 'visible'
                    },

                    // small optimalization, saves 1-2 ms each sparkline
                    skipClone: true
                },
                title: {
                    text: ''
                },
                credits: {
                    enabled: false
                },
                xAxis: {
                    labels: {
                        enabled: false
                    },
                    title: {
                        text: null
                    },
                    startOnTick: false,
                    endOnTick: false,
                    tickPositions: []
                },
                yAxis: {
                    endOnTick: false,
                    startOnTick: false,
                    labels: {
                        enabled: false
                    },
                    title: {
                        text: null
                    },
                    tickPositions: [0]
                },
                legend: {
                    enabled: false
                },
                tooltip: {
                    backgroundColor: null,
                    borderWidth: 0,
                    shadow: false,
                    useHTML: true,
                    hideDelay: 0,
                    shared: true,
                    padding: 0,
                    positioner: function (w, h, point) {
                        return { x: point.plotX - w / 2, y: point.plotY - h };
                    }
                },
                plotOptions: {
                    series: {
                        animation: false,
                        lineWidth: 1,
                        shadow: false,
                        states: {
                            hover: {
                                lineWidth: 1
                            }
                        },
                        marker: {
                            radius: 1,
                            states: {
                                hover: {
                                    radius: 2
                                }
                            }
                        },
                        fillOpacity: 0.25
                    },
                    column: {
                        negativeColor: '#910000',
                        borderColor: 'silver'
                    }
                }
            };

        options = Highcharts.merge(defaultOptions, options);

        return hasRenderToArg ?
            new Highcharts.Chart(a, options, c) :
            new Highcharts.Chart(options, b);
    };

    var start = +new Date(),
        $tds = $('td[data-sparkline]'),
        fullLen = $tds.length,
        n = 0;

    // Creating 153 sparkline charts is quite fast in modern browsers, but IE8 and mobile
    // can take some seconds, so we split the input into chunks and apply them in timeouts
    // in order avoid locking up the browser process and allow interaction.
    function doChunk() {
        var time = +new Date(),
            i,
            len = $tds.length,
            $td,
            stringdata,
            arr,
            data,
            chart;

        for (i = 0; i < len; i += 1) {
            $td = $($tds[i]);
            stringdata = $td.data('sparkline');
            arr = stringdata.split('; ');
            data = $.map(arr[0].split(', '), parseFloat);
            chart = {};

            if (arr[1]) {
                chart.type = arr[1];
            }
            $td.highcharts('SparkLine', {
                series: [{
                    data: data,
                    pointStart: 1
                }],
                tooltip: {
                    headerFormat: '<span style="font-size: 10px">' + $td.parent().find('th').html() + ', Q{point.x}:</span><br/>',
                    pointFormat: '<b>{point.y}.000</b> USD'
                },
                chart: chart
            });

            n += 1;

            // If the process takes too much time, run a timeout to allow interaction with the browser
            if (new Date() - time > 500) {
                $tds.splice(0, i + 1);
                setTimeout(doChunk, 0);
                break;
            }

            // Print a feedback on the performance
            if (n === fullLen) {
                $('#result').html('Generated ' + fullLen + ' sparklines in ' + (new Date() - start) + ' ms');
            }
        }
    }
    doChunk();  
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
function dataHighchartpie2() {
    Highcharts.chart('pie2', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Browser market shares January, 2015 to May, 2015'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
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
function dataHighchartpie3() {
    
    var colors = Highcharts.getOptions().colors,
        categories = ['MSIE', 'Firefox', 'Chrome', 'Safari', 'Opera'],
        data = [{
            y: 56.33,
            color: colors[0],
            drilldown: {
                name: 'MSIE versions',
                categories: ['MSIE 6.0', 'MSIE 7.0', 'MSIE 8.0', 'MSIE 9.0', 'MSIE 10.0', 'MSIE 11.0'],
                data: [1.06, 0.5, 17.2, 8.11, 5.33, 24.13],
                color: colors[0]
            }
        }, {
            y: 10.38,
            color: colors[1],
            drilldown: {
                name: 'Firefox versions',
                categories: ['Firefox v31', 'Firefox v32', 'Firefox v33', 'Firefox v35', 'Firefox v36', 'Firefox v37', 'Firefox v38'],
                data: [0.33, 0.15, 0.22, 1.27, 2.76, 2.32, 2.31, 1.02],
                color: colors[1]
            }
        }, {
            y: 24.03,
            color: colors[2],
            drilldown: {
                name: 'Chrome versions',
                categories: ['Chrome v30.0', 'Chrome v31.0', 'Chrome v32.0', 'Chrome v33.0', 'Chrome v34.0',
                    'Chrome v35.0', 'Chrome v36.0', 'Chrome v37.0', 'Chrome v38.0', 'Chrome v39.0', 'Chrome v40.0', 'Chrome v41.0', 'Chrome v42.0', 'Chrome v43.0'
                    ],
                data: [0.14, 1.24, 0.55, 0.19, 0.14, 0.85, 2.53, 0.38, 0.6, 2.96, 5, 4.32, 3.68, 1.45],
                color: colors[2]
            }
        }, {
            y: 4.77,
            color: colors[3],
            drilldown: {
                name: 'Safari versions',
                categories: ['Safari v5.0', 'Safari v5.1', 'Safari v6.1', 'Safari v6.2', 'Safari v7.0', 'Safari v7.1', 'Safari v8.0'],
                data: [0.3, 0.42, 0.29, 0.17, 0.26, 0.77, 2.56],
                color: colors[3]
            }
        }, {
            y: 0.91,
            color: colors[4],
            drilldown: {
                name: 'Opera versions',
                categories: ['Opera v12.x', 'Opera v27', 'Opera v28', 'Opera v29'],
                data: [0.34, 0.17, 0.24, 0.16],
                color: colors[4]
            }
        }, {
            y: 0.2,
            color: colors[5],
            drilldown: {
                name: 'Proprietary or Undetectable',
                categories: [],
                data: [],
                color: colors[5]
            }
        }],
        browserData = [],
        versionsData = [],
        i,
        j,
        dataLen = data.length,
        drillDataLen,
        brightness;


    // Build the data arrays
    for (i = 0; i < dataLen; i += 1) {

        // add browser data
        browserData.push({
            name: categories[i],
            y: data[i].y,
            color: data[i].color
        });

        // add version data
        drillDataLen = data[i].drilldown.data.length;
        for (j = 0; j < drillDataLen; j += 1) {
            brightness = 0.2 - (j / drillDataLen) / 5;
            versionsData.push({
                name: data[i].drilldown.categories[j],
                y: data[i].drilldown.data[j],
                color: Highcharts.Color(data[i].color).brighten(brightness).get()
            });
        }
    }

    // Create the chart
    Highcharts.chart('pie3', {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Browser market share, January, 2015 to May, 2015'
        },
        subtitle: {
            text: 'Source: <a href="http://netmarketshare.com/">netmarketshare.com</a>'
        },
        yAxis: {
            title: {
                text: 'Total percent market share'
            }
        },
        plotOptions: {
            pie: {
                shadow: false,
                center: ['50%', '50%']
            }
        },
        tooltip: {
            valueSuffix: '%'
        },
        series: [{
            name: 'Browsers',
            data: browserData,
            size: '60%',
            dataLabels: {
                formatter: function () {
                    return this.y > 5 ? this.point.name : null;
                },
                color: '#ffffff',
                distance: -30
            }
        }, {
            name: 'Versions',
            data: versionsData,
            size: '80%',
            innerSize: '60%',
            dataLabels: {
                formatter: function () {
                    // display only if larger than 1
                    return this.y > 1 ? '<b>' + this.point.name + ':</b> ' + this.y + '%' : null;
                }
            }
        }]
    });
}
function dataHighchartpie4() {
     Highcharts.chart('pie4', {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Browser market shares. January, 2015 to May, 2015'
        },
        subtitle: {
            text: 'Click the slices to view versions. Source: netmarketshare.com.'
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}: {point.y:.1f}%'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Microsoft Internet Explorer',
                y: 56.33,
                drilldown: 'Microsoft Internet Explorer'
            }, {
                name: 'Chrome',
                y: 24.03,
                drilldown: 'Chrome'
            }, {
                name: 'Firefox',
                y: 10.38,
                drilldown: 'Firefox'
            }, {
                name: 'Safari',
                y: 4.77,
                drilldown: 'Safari'
            }, {
                name: 'Opera',
                y: 0.91,
                drilldown: 'Opera'
            }, {
                name: 'Proprietary or Undetectable',
                y: 0.2,
                drilldown: null
            }]
        }],
        drilldown: {
            series: [{
                name: 'Microsoft Internet Explorer',
                id: 'Microsoft Internet Explorer',
                data: [
                    ['v11.0', 24.13],
                    ['v8.0', 17.2],
                    ['v9.0', 8.11],
                    ['v10.0', 5.33],
                    ['v6.0', 1.06],
                    ['v7.0', 0.5]
                ]
            }, {
                name: 'Chrome',
                id: 'Chrome',
                data: [
                    ['v40.0', 5],
                    ['v41.0', 4.32],
                    ['v42.0', 3.68],
                    ['v39.0', 2.96],
                    ['v36.0', 2.53],
                    ['v43.0', 1.45],
                    ['v31.0', 1.24],
                    ['v35.0', 0.85],
                    ['v38.0', 0.6],
                    ['v32.0', 0.55],
                    ['v37.0', 0.38],
                    ['v33.0', 0.19],
                    ['v34.0', 0.14],
                    ['v30.0', 0.14]
                ]
            }, {
                name: 'Firefox',
                id: 'Firefox',
                data: [
                    ['v35', 2.76],
                    ['v36', 2.32],
                    ['v37', 2.31],
                    ['v34', 1.27],
                    ['v38', 1.02],
                    ['v31', 0.33],
                    ['v33', 0.22],
                    ['v32', 0.15]
                ]
            }, {
                name: 'Safari',
                id: 'Safari',
                data: [
                    ['v8.0', 2.56],
                    ['v7.1', 0.77],
                    ['v5.1', 0.42],
                    ['v5.0', 0.3],
                    ['v6.1', 0.29],
                    ['v7.0', 0.26],
                    ['v6.2', 0.17]
                ]
            }, {
                name: 'Opera',
                id: 'Opera',
                data: [
                    ['v12.x', 0.34],
                    ['v28', 0.24],
                    ['v27', 0.17],
                    ['v29', 0.16]
                ]
            }]
        }
    });
}
function dataHighchartpie5() {
  Highcharts.chart('pie5', {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Browser market shares. January, 2015 to May, 2015'
        },
        subtitle: {
            text: 'Click the slices to view versions. Source: netmarketshare.com.'
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}: {point.y:.1f}%'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Microsoft Internet Explorer',
                y: 56.33,
                drilldown: 'Microsoft Internet Explorer'
            }, {
                name: 'Chrome',
                y: 24.03,
                drilldown: 'Chrome'
            }, {
                name: 'Firefox',
                y: 10.38,
                drilldown: 'Firefox'
            }, {
                name: 'Safari',
                y: 4.77,
                drilldown: 'Safari'
            }, {
                name: 'Opera',
                y: 0.91,
                drilldown: 'Opera'
            }, {
                name: 'Proprietary or Undetectable',
                y: 0.2,
                drilldown: null
            }]
        }],
        drilldown: {
            series: [{
                name: 'Microsoft Internet Explorer',
                id: 'Microsoft Internet Explorer',
                data: [
                    ['v11.0', 24.13],
                    ['v8.0', 17.2],
                    ['v9.0', 8.11],
                    ['v10.0', 5.33],
                    ['v6.0', 1.06],
                    ['v7.0', 0.5]
                ]
            }, {
                name: 'Chrome',
                id: 'Chrome',
                data: [
                    ['v40.0', 5],
                    ['v41.0', 4.32],
                    ['v42.0', 3.68],
                    ['v39.0', 2.96],
                    ['v36.0', 2.53],
                    ['v43.0', 1.45],
                    ['v31.0', 1.24],
                    ['v35.0', 0.85],
                    ['v38.0', 0.6],
                    ['v32.0', 0.55],
                    ['v37.0', 0.38],
                    ['v33.0', 0.19],
                    ['v34.0', 0.14],
                    ['v30.0', 0.14]
                ]
            }, {
                name: 'Firefox',
                id: 'Firefox',
                data: [
                    ['v35', 2.76],
                    ['v36', 2.32],
                    ['v37', 2.31],
                    ['v34', 1.27],
                    ['v38', 1.02],
                    ['v31', 0.33],
                    ['v33', 0.22],
                    ['v32', 0.15]
                ]
            }, {
                name: 'Safari',
                id: 'Safari',
                data: [
                    ['v8.0', 2.56],
                    ['v7.1', 0.77],
                    ['v5.1', 0.42],
                    ['v5.0', 0.3],
                    ['v6.1', 0.29],
                    ['v7.0', 0.26],
                    ['v6.2', 0.17]
                ]
            }, {
                name: 'Opera',
                id: 'Opera',
                data: [
                    ['v12.x', 0.34],
                    ['v28', 0.24],
                    ['v27', 0.17],
                    ['v29', 0.16]
                ]
            }]
        }
    });
}
function dataHighchartpie6() {
    
    // Make monochrome colors and set them as default for all pies
    Highcharts.getOptions().plotOptions.pie.colors = (function () {
        var colors = [],
            base = Highcharts.getOptions().colors[0],
            i;

        for (i = 0; i < 10; i += 1) {
            // Start out with a darkened base color (negative brighten), and end
            // up with a much brighter color
            colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
        }
        return colors;
    }());

    // Build the chart
    Highcharts.chart('pie6', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Browser market shares at a specific website, 2014'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Brands',
            data: [
                { name: 'Microsoft Internet Explorer', y: 56.33 },
                { name: 'Chrome', y: 24.03 },
                { name: 'Firefox', y: 10.38 },
                { name: 'Safari', y: 4.77 },
                { name: 'Opera', y: 0.91 },
                { name: 'Proprietary or Undetectable', y: 0.2 }
            ]
        }]
    });
}
function dataHighchartpie7() {
      Highcharts.chart('pie7', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'Browser<br>shares<br>2015',
            align: 'center',
            verticalAlign: 'middle',
            y: 40
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: '50%',
            data: [
                ['Firefox',   10.38],
                ['IE',       56.33],
                ['Chrome', 24.03],
                ['Safari',    4.77],
                ['Opera',     0.91],
                {
                    name: 'Proprietary or Undetectable',
                    y: 0.2,
                    dataLabels: {
                        enabled: false
                    }
                }
            ]
        }]
    });
}
function dataHighchartheat1() {
    
    Highcharts.chart('heat1', {

        chart: {
            type: 'heatmap',
            marginTop: 40,
            marginBottom: 80,
            plotBorderWidth: 1
        },


        title: {
            text: 'Sales per employee per weekday'
        },

        xAxis: {
            categories: ['Alexander', 'Marie', 'Maximilian', 'Sophia', 'Lukas', 'Maria', 'Leon', 'Anna', 'Tim', 'Laura']
        },

        yAxis: {
            categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            title: null
        },

        colorAxis: {
            min: 0,
            minColor: '#FFFFFF',
            maxColor: Highcharts.getOptions().colors[0]
        },

        legend: {
            align: 'right',
            layout: 'vertical',
            margin: 0,
            verticalAlign: 'top',
            y: 25,
            symbolHeight: 280
        },

        tooltip: {
            formatter: function () {
                return '<b>' + this.series.xAxis.categories[this.point.x] + '</b> sold <br><b>' +
                    this.point.value + '</b> items on <br><b>' + this.series.yAxis.categories[this.point.y] + '</b>';
            }
        },

        series: [{
            name: 'Sales per employee',
            borderWidth: 1,
            data: [[0, 0, 10], [0, 1, 19], [0, 2, 8], [0, 3, 24], [0, 4, 67], [1, 0, 92], [1, 1, 58], [1, 2, 78], [1, 3, 117], [1, 4, 48], [2, 0, 35], [2, 1, 15], [2, 2, 123], [2, 3, 64], [2, 4, 52], [3, 0, 72], [3, 1, 132], [3, 2, 114], [3, 3, 19], [3, 4, 16], [4, 0, 38], [4, 1, 5], [4, 2, 8], [4, 3, 117], [4, 4, 115], [5, 0, 88], [5, 1, 32], [5, 2, 12], [5, 3, 6], [5, 4, 120], [6, 0, 13], [6, 1, 44], [6, 2, 88], [6, 3, 98], [6, 4, 96], [7, 0, 31], [7, 1, 1], [7, 2, 82], [7, 3, 32], [7, 4, 30], [8, 0, 85], [8, 1, 97], [8, 2, 123], [8, 3, 64], [8, 4, 84], [9, 0, 47], [9, 1, 114], [9, 2, 31], [9, 3, 48], [9, 4, 91]],
            dataLabels: {
                enabled: true,
                color: '#000000'
            }
        }]

    });
}
function dataHighchartheat2() {
      (function (H) {
        var Series = H.Series,
            each = H.each;

        /**
         * Create a hidden canvas to draw the graph on. The contents is later copied over
         * to an SVG image element.
         */
        Series.prototype.getContext = function () {
            if (!this.canvas) {
                this.canvas = document.createElement('canvas');
                this.canvas.setAttribute('width', this.chart.chartWidth);
                this.canvas.setAttribute('height', this.chart.chartHeight);
                this.image = this.chart.renderer.image('', 0, 0, this.chart.chartWidth, this.chart.chartHeight).add(this.group);
                this.ctx = this.canvas.getContext('2d');
            }
            return this.ctx;
        };

        /**
         * Draw the canvas image inside an SVG image
         */
        Series.prototype.canvasToSVG = function () {
            this.image.attr({ href: this.canvas.toDataURL('image/png') });
        };

        /**
         * Wrap the drawPoints method to draw the points in canvas instead of the slower SVG,
         * that requires one shape each point.
         */
        H.wrap(H.seriesTypes.heatmap.prototype, 'drawPoints', function () {

            var ctx = this.getContext();

            if (ctx) {

                // draw the columns
                each(this.points, function (point) {
                    var plotY = point.plotY,
                        shapeArgs,
                        pointAttr;

                    if (plotY !== undefined && !isNaN(plotY) && point.y !== null) {
                        shapeArgs = point.shapeArgs;

                        pointAttr = (point.pointAttr && point.pointAttr['']) || point.series.pointAttribs(point);

                        ctx.fillStyle = pointAttr.fill;
                        ctx.fillRect(shapeArgs.x, shapeArgs.y, shapeArgs.width, shapeArgs.height);
                    }
                });

                this.canvasToSVG();

            } else {
                this.chart.showLoading('Your browser doesn\'t support HTML5 canvas, <br>please use a modern browser');

                // Uncomment this to provide low-level (slow) support in oldIE. It will cause script errors on
                // charts with more than a few thousand points.
                // arguments[0].call(this);
            }
        });
        H.seriesTypes.heatmap.prototype.directTouch = false; // Use k-d-tree
    }(Highcharts));


    var start;
    Highcharts.chart('heat2', {

        data: {
            csv: document.getElementById('csv').innerHTML,
            parsed: function () {
                start = +new Date();
            }
        },

        chart: {
            type: 'heatmap',
            margin: [60, 10, 80, 50]
        },


        title: {
            text: 'Highcharts extended heat map',
            align: 'left',
            x: 40
        },

        subtitle: {
            text: 'Temperature variation by day and hour through 2013',
            align: 'left',
            x: 40
        },

        xAxis: {
            type: 'datetime',
            min: Date.UTC(2013, 0, 1),
            max: Date.UTC(2014, 0, 1),
            labels: {
                align: 'left',
                x: 5,
                y: 14,
                format: '{value:%B}' // long month
            },
            showLastLabel: false,
            tickLength: 16
        },

        yAxis: {
            title: {
                text: null
            },
            labels: {
                format: '{value}:00'
            },
            minPadding: 0,
            maxPadding: 0,
            startOnTick: false,
            endOnTick: false,
            tickPositions: [0, 6, 12, 18, 24],
            tickWidth: 1,
            min: 0,
            max: 23,
            reversed: true
        },

        colorAxis: {
            stops: [
                [0, '#3060cf'],
                [0.5, '#fffbbc'],
                [0.9, '#c4463a'],
                [1, '#c4463a']
            ],
            min: -15,
            max: 25,
            startOnTick: false,
            endOnTick: false,
            labels: {
                format: '{value}℃'
            }
        },

        series: [{
            borderWidth: 0,
            nullColor: '#EFEFEF',
            colsize: 24 * 36e5, // one day
            tooltip: {
                headerFormat: 'Temperature<br/>',
                pointFormat: '{point.x:%e %b, %Y} {point.y}:00: <b>{point.value} ℃</b>'
            },
            turboThreshold: Number.MAX_VALUE // #3404, remove after 4.0.5 release
        }]

    });
    console.log('Rendered in ' + (new Date() - start) + ' ms'); // eslint-disable-line no-console

}
function dataHighchartheat3() {
     Highcharts.chart('heat3', {
        colorAxis: {
            minColor: '#FFFFFF',
            maxColor: Highcharts.getOptions().colors[0]
        },
        series: [{
            type: 'treemap',
            layoutAlgorithm: 'squarified',
            data: [{
                name: 'A',
                value: 6,
                colorValue: 1
            }, {
                name: 'B',
                value: 6,
                colorValue: 2
            }, {
                name: 'C',
                value: 4,
                colorValue: 3
            }, {
                name: 'D',
                value: 3,
                colorValue: 4
            }, {
                name: 'E',
                value: 2,
                colorValue: 5
            }, {
                name: 'F',
                value: 2,
                colorValue: 6
            }, {
                name: 'G',
                value: 1,
                colorValue: 7
            }]
        }],
        title: {
            text: 'Highcharts Treemap'
        }
    });
}
function dataHighchartheat4() {
     Highcharts.chart('heat4', {
        series: [{
            type: "treemap",
            layoutAlgorithm: 'stripes',
            alternateStartingDirection: true,
            levels: [{
                level: 1,
                layoutAlgorithm: 'sliceAndDice',
                dataLabels: {
                    enabled: true,
                    align: 'left',
                    verticalAlign: 'top',
                    style: {
                        fontSize: '15px',
                        fontWeight: 'bold'
                    }
                }
            }],
            data: [{
                id: 'A',
                name: 'Apples',
                color: "#EC2500"
            }, {
                id: 'B',
                name: 'Bananas',
                color: "#ECE100"
            }, {
                id: 'O',
                name: 'Oranges',
                color: '#EC9800'
            }, {
                name: 'Anne',
                parent: 'A',
                value: 5
            }, {
                name: 'Rick',
                parent: 'A',
                value: 3
            }, {
                name: 'Peter',
                parent: 'A',
                value: 4
            }, {
                name: 'Anne',
                parent: 'B',
                value: 4
            }, {
                name: 'Rick',
                parent: 'B',
                value: 10
            }, {
                name: 'Peter',
                parent: 'B',
                value: 1
            }, {
                name: 'Anne',
                parent: 'O',
                value: 1
            }, {
                name: 'Rick',
                parent: 'O',
                value: 3
            }, {
                name: 'Peter',
                parent: 'O',
                value: 3
            }, {
                name: 'Susanne',
                parent: 'Kiwi',
                value: 2,
                color: '#9EDE00'
            }]
        }],
        title: {
            text: 'Fruit consumption'
        }
    });
}
function dataHighchartheat5() {
     var data = {
            'South-East Asia': {
                'Sri Lanka': {
                    'Communicable & other Group I': '75.5',
                    'Injuries': '89.0',
                    'Noncommunicable diseases': '501.2'
                },
                'Bangladesh': {
                    'Noncommunicable diseases': '548.9',
                    'Injuries': '64.0',
                    'Communicable & other Group I': '234.6'
                },
                'Myanmar': {
                    'Communicable & other Group I': '316.4',
                    'Injuries': '102.0',
                    'Noncommunicable diseases': '708.7'
                },
                'Maldives': {
                    'Injuries': '35.0',
                    'Noncommunicable diseases': '487.2',
                    'Communicable & other Group I': '59.2'
                },
                'Democratic People\'s Republic of Korea': {
                    'Injuries': '91.9',
                    'Noncommunicable diseases': '751.4',
                    'Communicable & other Group I': '117.3'
                },
                'Bhutan': {
                    'Injuries': '142.2',
                    'Noncommunicable diseases': '572.8',
                    'Communicable & other Group I': '186.9'
                },
                'Thailand': {
                    'Injuries': '72.8',
                    'Communicable & other Group I': '123.3',
                    'Noncommunicable diseases': '449.1'
                },
                'Nepal': {
                    'Noncommunicable diseases': '678.1',
                    'Injuries': '88.7',
                    'Communicable & other Group I': '251.8'
                },
                'Timor-Leste': {
                    'Injuries': '69.2',
                    'Noncommunicable diseases': '670.5',
                    'Communicable & other Group I': '343.5'
                },
                'India': {
                    'Communicable & other Group I': '253.0',
                    'Injuries': '115.9',
                    'Noncommunicable diseases': '682.3'
                },
                'Indonesia': {
                    'Injuries': '49.3',
                    'Noncommunicable diseases': '680.1',
                    'Communicable & other Group I': '162.4'
                }
            },
            'Europe': {
                'Hungary': {
                    'Communicable & other Group I': '16.8',
                    'Noncommunicable diseases': '602.8',
                    'Injuries': '44.3'
                },
                'Poland': {
                    'Communicable & other Group I': '22.6',
                    'Noncommunicable diseases': '494.5',
                    'Injuries': '48.9'
                },
                'Israel': {
                    'Communicable & other Group I': '31.2',
                    'Noncommunicable diseases': '311.2',
                    'Injuries': '20.8'
                },
                'France': {
                    'Communicable & other Group I': '21.4',
                    'Noncommunicable diseases': '313.2',
                    'Injuries': '34.6'
                },
                'Turkey': {
                    'Injuries': '39.1',
                    'Communicable & other Group I': '43.9',
                    'Noncommunicable diseases': '555.2'
                },
                'Kyrgyzstan': {
                    'Communicable & other Group I': '65.8',
                    'Injuries': '65.1',
                    'Noncommunicable diseases': '835.4'
                },
                'Croatia': {
                    'Communicable & other Group I': '12.2',
                    'Noncommunicable diseases': '495.8',
                    'Injuries': '40.1'
                },
                'Portugal': {
                    'Injuries': '25.2',
                    'Communicable & other Group I': '39.9',
                    'Noncommunicable diseases': '343.3'
                },
                'Greece': {
                    'Injuries': '26.5',
                    'Noncommunicable diseases': '365.0',
                    'Communicable & other Group I': '24.1'
                },
                'Italy': {
                    'Injuries': '20.1',
                    'Communicable & other Group I': '15.5',
                    'Noncommunicable diseases': '303.6'
                },
                'Belgium': {
                    'Communicable & other Group I': '27.8',
                    'Injuries': '38.9',
                    'Noncommunicable diseases': '356.8'
                },
                'Lithuania': {
                    'Noncommunicable diseases': '580.6',
                    'Communicable & other Group I': '25.5',
                    'Injuries': '76.4'
                },
                'Uzbekistan': {
                    'Communicable & other Group I': '85.8',
                    'Injuries': '47.4',
                    'Noncommunicable diseases': '810.9'
                },
                'Serbia': {
                    'Communicable & other Group I': '19.4',
                    'Injuries': '32.0',
                    'Noncommunicable diseases': '657.7'
                },
                'Austria': {
                    'Noncommunicable diseases': '359.5',
                    'Injuries': '30.6',
                    'Communicable & other Group I': '12.6'
                },
                'Bosnia and Herzegovina': {
                    'Injuries': '42.4',
                    'Noncommunicable diseases': '512.5',
                    'Communicable & other Group I': '20.0'
                },
                'Slovakia': {
                    'Injuries': '39.1',
                    'Communicable & other Group I': '35.3',
                    'Noncommunicable diseases': '532.5'
                },
                'The former Yugoslav republic of Macedonia': {
                    'Injuries': '24.0',
                    'Communicable & other Group I': '16.9',
                    'Noncommunicable diseases': '636.5'
                },
                'Sweden': {
                    'Communicable & other Group I': '19.3',
                    'Noncommunicable diseases': '333.5',
                    'Injuries': '26.1'
                },
                'Russian Federation': {
                    'Noncommunicable diseases': '790.3',
                    'Communicable & other Group I': '73.8',
                    'Injuries': '102.8'
                },
                'Republic of Moldova': {
                    'Noncommunicable diseases': '787.6',
                    'Injuries': '75.7',
                    'Communicable & other Group I': '44.5'
                },
                'Ireland': {
                    'Injuries': '31.8',
                    'Communicable & other Group I': '21.5',
                    'Noncommunicable diseases': '343.9'
                },
                'Estonia': {
                    'Injuries': '47.0',
                    'Communicable & other Group I': '18.5',
                    'Noncommunicable diseases': '510.7'
                },
                'Cyprus': {
                    'Noncommunicable diseases': '333.0',
                    'Injuries': '26.6',
                    'Communicable & other Group I': '16.2'
                },
                'Kazakhstan': {
                    'Noncommunicable diseases': '949.7',
                    'Injuries': '101.6',
                    'Communicable & other Group I': '55.3'
                },
                'Netherlands': {
                    'Noncommunicable diseases': '355.2',
                    'Injuries': '22.3',
                    'Communicable & other Group I': '25.5'
                },
                'Finland': {
                    'Noncommunicable diseases': '366.6',
                    'Injuries': '38.7',
                    'Communicable & other Group I': '9.0'
                },
                'Romania': {
                    'Noncommunicable diseases': '612.2',
                    'Injuries': '40.7',
                    'Communicable & other Group I': '38.5'
                },
                'Albania': {
                    'Noncommunicable diseases': '671.6',
                    'Injuries': '48.0',
                    'Communicable & other Group I': '46.5'
                },
                'Iceland': {
                    'Injuries': '29.0',
                    'Noncommunicable diseases': '311.7',
                    'Communicable & other Group I': '14.0'
                },
                'Azerbaijan': {
                    'Noncommunicable diseases': '664.3',
                    'Injuries': '33.6',
                    'Communicable & other Group I': '70.8'
                },
                'Tajikistan': {
                    'Injuries': '51.6',
                    'Communicable & other Group I': '147.7',
                    'Noncommunicable diseases': '752.6'
                },
                'Bulgaria': {
                    'Communicable & other Group I': '33.4',
                    'Injuries': '36.4',
                    'Noncommunicable diseases': '638.2'
                },
                'United Kingdom of Great Britain and Northern Ireland': {
                    'Communicable & other Group I': '28.5',
                    'Injuries': '21.5',
                    'Noncommunicable diseases': '358.8'
                },
                'Spain': {
                    'Communicable & other Group I': '19.1',
                    'Injuries': '17.8',
                    'Noncommunicable diseases': '323.1'
                },
                'Ukraine': {
                    'Communicable & other Group I': '69.3',
                    'Injuries': '67.3',
                    'Noncommunicable diseases': '749.0'
                },
                'Norway': {
                    'Noncommunicable diseases': '336.6',
                    'Communicable & other Group I': '25.2',
                    'Injuries': '25.6'
                },
                'Denmark': {
                    'Injuries': '22.5',
                    'Communicable & other Group I': '29.5',
                    'Noncommunicable diseases': '406.1'
                },
                'Belarus': {
                    'Noncommunicable diseases': '682.5',
                    'Communicable & other Group I': '28.3',
                    'Injuries': '91.3'
                },
                'Malta': {
                    'Noncommunicable diseases': '364.5',
                    'Injuries': '19.0',
                    'Communicable & other Group I': '23.6'
                },
                'Latvia': {
                    'Noncommunicable diseases': '623.7',
                    'Injuries': '54.5',
                    'Communicable & other Group I': '26.0'
                },
                'Turkmenistan': {
                    'Injuries': '93.0',
                    'Communicable & other Group I': '115.8',
                    'Noncommunicable diseases': '1025.1'
                },
                'Switzerland': {
                    'Communicable & other Group I': '14.5',
                    'Noncommunicable diseases': '291.6',
                    'Injuries': '25.4'
                },
                'Luxembourg': {
                    'Injuries': '31.1',
                    'Noncommunicable diseases': '317.8',
                    'Communicable & other Group I': '20.5'
                },
                'Georgia': {
                    'Injuries': '32.2',
                    'Communicable & other Group I': '39.3',
                    'Noncommunicable diseases': '615.2'
                },
                'Slovenia': {
                    'Noncommunicable diseases': '369.2',
                    'Communicable & other Group I': '15.4',
                    'Injuries': '44.2'
                },
                'Montenegro': {
                    'Communicable & other Group I': '18.7',
                    'Noncommunicable diseases': '571.5',
                    'Injuries': '41.2'
                },
                'Armenia': {
                    'Noncommunicable diseases': '847.5',
                    'Communicable & other Group I': '45.0',
                    'Injuries': '49.2'
                },
                'Germany': {
                    'Injuries': '23.0',
                    'Communicable & other Group I': '21.6',
                    'Noncommunicable diseases': '365.1'
                },
                'Czech Republic': {
                    'Injuries': '39.1',
                    'Noncommunicable diseases': '460.7',
                    'Communicable & other Group I': '27.0'
                }
            },
            'Africa': {
                'Equatorial Guinea': {
                    'Communicable & other Group I': '756.8',
                    'Injuries': '133.6',
                    'Noncommunicable diseases': '729.0'
                },
                'Madagascar': {
                    'Noncommunicable diseases': '648.6',
                    'Communicable & other Group I': '429.9',
                    'Injuries': '89.0'
                },
                'Swaziland': {
                    'Communicable & other Group I': '884.3',
                    'Injuries': '119.5',
                    'Noncommunicable diseases': '702.4'
                },
                'Congo': {
                    'Noncommunicable diseases': '632.3',
                    'Communicable & other Group I': '666.9',
                    'Injuries': '89.0'
                },
                'Burkina Faso': {
                    'Communicable & other Group I': '648.2',
                    'Noncommunicable diseases': '784.0',
                    'Injuries': '119.3'
                },
                'Guinea-Bissau': {
                    'Communicable & other Group I': '869.8',
                    'Noncommunicable diseases': '764.7',
                    'Injuries': '111.6'
                },
                'Democratic Republic of the Congo': {
                    'Noncommunicable diseases': '724.4',
                    'Injuries': '137.1',
                    'Communicable & other Group I': '920.7'
                },
                'Mozambique': {
                    'Injuries': '175.3',
                    'Noncommunicable diseases': '593.7',
                    'Communicable & other Group I': '998.1'
                },
                'Central African Republic': {
                    'Communicable & other Group I': '1212.1',
                    'Injuries': '107.9',
                    'Noncommunicable diseases': '550.8'
                },
                'United Republic of Tanzania': {
                    'Noncommunicable diseases': '569.8',
                    'Communicable & other Group I': '584.2',
                    'Injuries': '129.2'
                },
                'Cameroon': {
                    'Communicable & other Group I': '768.8',
                    'Injuries': '106.0',
                    'Noncommunicable diseases': '675.2'
                },
                'Togo': {
                    'Noncommunicable diseases': '679.0',
                    'Communicable & other Group I': '681.8',
                    'Injuries': '93.0'
                },
                'Eritrea': {
                    'Injuries': '118.7',
                    'Communicable & other Group I': '506.0',
                    'Noncommunicable diseases': '671.9'
                },
                'Namibia': {
                    'Injuries': '76.4',
                    'Noncommunicable diseases': '580.2',
                    'Communicable & other Group I': '356.6'
                },
                'Senegal': {
                    'Noncommunicable diseases': '558.1',
                    'Injuries': '89.3',
                    'Communicable & other Group I': '587.7'
                },
                'Chad': {
                    'Communicable & other Group I': '1070.9',
                    'Injuries': '114.5',
                    'Noncommunicable diseases': '712.6'
                },
                'Benin': {
                    'Injuries': '98.0',
                    'Noncommunicable diseases': '761.5',
                    'Communicable & other Group I': '577.3'
                },
                'Zimbabwe': {
                    'Communicable & other Group I': '711.3',
                    'Injuries': '82.5',
                    'Noncommunicable diseases': '598.9'
                },
                'Rwanda': {
                    'Noncommunicable diseases': '585.3',
                    'Injuries': '106.3',
                    'Communicable & other Group I': '401.7'
                },
                'Zambia': {
                    'Noncommunicable diseases': '587.4',
                    'Injuries': '156.4',
                    'Communicable & other Group I': '764.3'
                },
                'Mali': {
                    'Injuries': '119.5',
                    'Communicable & other Group I': '588.3',
                    'Noncommunicable diseases': '866.1'
                },
                'Ethiopia': {
                    'Injuries': '94.5',
                    'Communicable & other Group I': '558.9',
                    'Noncommunicable diseases': '476.3'
                },
                'South Africa': {
                    'Communicable & other Group I': '611.6',
                    'Injuries': '103.5',
                    'Noncommunicable diseases': '710.9'
                },
                'Burundi': {
                    'Injuries': '146.6',
                    'Communicable & other Group I': '704.8',
                    'Noncommunicable diseases': '729.5'
                },
                'Cabo Verde': {
                    'Injuries': '54.4',
                    'Noncommunicable diseases': '482.1',
                    'Communicable & other Group I': '141.9'
                },
                'Liberia': {
                    'Noncommunicable diseases': '656.9',
                    'Injuries': '83.3',
                    'Communicable & other Group I': '609.1'
                },
                'Uganda': {
                    'Noncommunicable diseases': '664.4',
                    'Communicable & other Group I': '696.7',
                    'Injuries': '166.8'
                },
                'Mauritius': {
                    'Noncommunicable diseases': '576.5',
                    'Injuries': '44.1',
                    'Communicable & other Group I': '61.8'
                },
                'Algeria': {
                    'Noncommunicable diseases': '710.4',
                    'Injuries': '53.8',
                    'Communicable & other Group I': '97.8'
                },
                'C\u00f4te d\'Ivoire': {
                    'Noncommunicable diseases': '794.0',
                    'Injuries': '124.0',
                    'Communicable & other Group I': '861.3'
                },
                'Malawi': {
                    'Injuries': '97.7',
                    'Communicable & other Group I': '777.6',
                    'Noncommunicable diseases': '655.0'
                },
                'Botswana': {
                    'Injuries': '87.9',
                    'Noncommunicable diseases': '612.2',
                    'Communicable & other Group I': '555.3'
                },
                'Guinea': {
                    'Injuries': '96.0',
                    'Noncommunicable diseases': '681.1',
                    'Communicable & other Group I': '679.6'
                },
                'Ghana': {
                    'Injuries': '76.1',
                    'Noncommunicable diseases': '669.9',
                    'Communicable & other Group I': '476.0'
                },
                'Kenya': {
                    'Noncommunicable diseases': '514.7',
                    'Injuries': '101.1',
                    'Communicable & other Group I': '657.5'
                },
                'Gambia': {
                    'Noncommunicable diseases': '629.6',
                    'Injuries': '96.0',
                    'Communicable & other Group I': '590.5'
                },
                'Angola': {
                    'Injuries': '137.8',
                    'Noncommunicable diseases': '768.4',
                    'Communicable & other Group I': '873.3'
                },
                'Sierra Leone': {
                    'Communicable & other Group I': '1327.4',
                    'Noncommunicable diseases': '963.5',
                    'Injuries': '149.5'
                },
                'Mauritania': {
                    'Communicable & other Group I': '619.1',
                    'Injuries': '83.4',
                    'Noncommunicable diseases': '555.1'
                },
                'Comoros': {
                    'Communicable & other Group I': '494.6',
                    'Injuries': '132.4',
                    'Noncommunicable diseases': '695.5'
                },
                'Gabon': {
                    'Noncommunicable diseases': '504.6',
                    'Injuries': '77.4',
                    'Communicable & other Group I': '589.4'
                },
                'Niger': {
                    'Injuries': '97.6',
                    'Communicable & other Group I': '740.0',
                    'Noncommunicable diseases': '649.1'
                },
                'Lesotho': {
                    'Communicable & other Group I': '1110.5',
                    'Injuries': '142.5',
                    'Noncommunicable diseases': '671.8'
                },
                'Nigeria': {
                    'Noncommunicable diseases': '673.7',
                    'Communicable & other Group I': '866.2',
                    'Injuries': '145.6'
                }
            },
            'Americas': {
                'Canada': {
                    'Noncommunicable diseases': '318.0',
                    'Injuries': '31.3',
                    'Communicable & other Group I': '22.6'
                },
                'Bolivia (Plurinational State of)': {
                    'Communicable & other Group I': '226.2',
                    'Noncommunicable diseases': '635.3',
                    'Injuries': '100.0'
                },
                'Haiti': {
                    'Communicable & other Group I': '405.4',
                    'Noncommunicable diseases': '724.6',
                    'Injuries': '89.3'
                },
                'Belize': {
                    'Noncommunicable diseases': '470.7',
                    'Injuries': '82.0',
                    'Communicable & other Group I': '104.6'
                },
                'Suriname': {
                    'Injuries': '70.5',
                    'Communicable & other Group I': '83.7',
                    'Noncommunicable diseases': '374.8'
                },
                'Argentina': {
                    'Communicable & other Group I': '68.7',
                    'Injuries': '50.7',
                    'Noncommunicable diseases': '467.3'
                },
                'Mexico': {
                    'Injuries': '63.2',
                    'Communicable & other Group I': '57.0',
                    'Noncommunicable diseases': '468.3'
                },
                'Jamaica': {
                    'Injuries': '51.5',
                    'Communicable & other Group I': '97.0',
                    'Noncommunicable diseases': '519.1'
                },
                'Peru': {
                    'Noncommunicable diseases': '363.5',
                    'Injuries': '47.9',
                    'Communicable & other Group I': '121.3'
                },
                'Brazil': {
                    'Injuries': '80.2',
                    'Communicable & other Group I': '92.8',
                    'Noncommunicable diseases': '513.8'
                },
                'Venezuela (Bolivarian Republic of)': {
                    'Communicable & other Group I': '58.2',
                    'Injuries': '103.2',
                    'Noncommunicable diseases': '410.6'
                },
                'Paraguay': {
                    'Noncommunicable diseases': '485.5',
                    'Communicable & other Group I': '77.3',
                    'Injuries': '67.6'
                },
                'Chile': {
                    'Noncommunicable diseases': '366.5',
                    'Communicable & other Group I': '36.3',
                    'Injuries': '41.2'
                },
                'Trinidad and Tobago': {
                    'Noncommunicable diseases': '705.3',
                    'Communicable & other Group I': '80.4',
                    'Injuries': '98.4'
                },
                'Colombia': {
                    'Noncommunicable diseases': '377.3',
                    'Communicable & other Group I': '55.0',
                    'Injuries': '72.6'
                },
                'Cuba': {
                    'Injuries': '45.3',
                    'Noncommunicable diseases': '421.8',
                    'Communicable & other Group I': '33.2'
                },
                'El Salvador': {
                    'Noncommunicable diseases': '474.9',
                    'Injuries': '157.7',
                    'Communicable & other Group I': '96.2'
                },
                'Honduras': {
                    'Injuries': '80.8',
                    'Communicable & other Group I': '117.5',
                    'Noncommunicable diseases': '441.5'
                },
                'Ecuador': {
                    'Noncommunicable diseases': '409.7',
                    'Injuries': '83.7',
                    'Communicable & other Group I': '97.3'
                },
                'Costa Rica': {
                    'Communicable & other Group I': '30.5',
                    'Noncommunicable diseases': '391.8',
                    'Injuries': '46.5'
                },
                'Dominican Republic': {
                    'Noncommunicable diseases': '396.0',
                    'Injuries': '66.4',
                    'Communicable & other Group I': '76.8'
                },
                'Nicaragua': {
                    'Communicable & other Group I': '75.2',
                    'Injuries': '64.4',
                    'Noncommunicable diseases': '546.6'
                },
                'Barbados': {
                    'Noncommunicable diseases': '404.5',
                    'Injuries': '28.0',
                    'Communicable & other Group I': '60.8'
                },
                'Uruguay': {
                    'Noncommunicable diseases': '446.0',
                    'Injuries': '53.8',
                    'Communicable & other Group I': '46.2'
                },
                'Panama': {
                    'Communicable & other Group I': '86.1',
                    'Injuries': '67.4',
                    'Noncommunicable diseases': '372.9'
                },
                'Bahamas': {
                    'Noncommunicable diseases': '465.2',
                    'Injuries': '45.7',
                    'Communicable & other Group I': '122.0'
                },
                'Guyana': {
                    'Communicable & other Group I': '177.2',
                    'Noncommunicable diseases': '1024.2',
                    'Injuries': '150.0'
                },
                'United States of America': {
                    'Noncommunicable diseases': '412.8',
                    'Injuries': '44.2',
                    'Communicable & other Group I': '31.3'
                },
                'Guatemala': {
                    'Communicable & other Group I': '212.7',
                    'Noncommunicable diseases': '409.4',
                    'Injuries': '111.0'
                }
            },
            'Eastern Mediterranean': {
                'Egypt': {
                    'Communicable & other Group I': '74.3',
                    'Noncommunicable diseases': '781.7',
                    'Injuries': '33.5'
                },
                'South Sudan': {
                    'Injuries': '143.4',
                    'Communicable & other Group I': '831.3',
                    'Noncommunicable diseases': '623.4'
                },
                'Sudan': {
                    'Injuries': '133.6',
                    'Noncommunicable diseases': '551.0',
                    'Communicable & other Group I': '495.0'
                },
                'Libya': {
                    'Injuries': '62.8',
                    'Noncommunicable diseases': '550.0',
                    'Communicable & other Group I': '52.6'
                },
                'Jordan': {
                    'Noncommunicable diseases': '640.3',
                    'Injuries': '53.5',
                    'Communicable & other Group I': '52.5'
                },
                'Pakistan': {
                    'Communicable & other Group I': '296.0',
                    'Noncommunicable diseases': '669.3',
                    'Injuries': '98.7'
                },
                'Djibouti': {
                    'Noncommunicable diseases': '631.1',
                    'Communicable & other Group I': '626.0',
                    'Injuries': '106.0'
                },
                'Syrian Arab Republic': {
                    'Communicable & other Group I': '41.0',
                    'Injuries': '308.0',
                    'Noncommunicable diseases': '572.7'
                },
                'Morocco': {
                    'Noncommunicable diseases': '707.7',
                    'Communicable & other Group I': '131.5',
                    'Injuries': '47.0'
                },
                'Yemen': {
                    'Communicable & other Group I': '515.0',
                    'Noncommunicable diseases': '626.9',
                    'Injuries': '84.3'
                },
                'Bahrain': {
                    'Injuries': '33.5',
                    'Noncommunicable diseases': '505.7',
                    'Communicable & other Group I': '48.5'
                },
                'United Arab Emirates': {
                    'Noncommunicable diseases': '546.8',
                    'Injuries': '31.5',
                    'Communicable & other Group I': '35.6'
                },
                'Lebanon': {
                    'Noncommunicable diseases': '384.6',
                    'Injuries': '40.6',
                    'Communicable & other Group I': '30.5'
                },
                'Saudi Arabia': {
                    'Noncommunicable diseases': '549.4',
                    'Injuries': '41.1',
                    'Communicable & other Group I': '71.3'
                },
                'Iran (Islamic Republic of)': {
                    'Injuries': '74.9',
                    'Communicable & other Group I': '56.2',
                    'Noncommunicable diseases': '569.3'
                },
                'Iraq': {
                    'Communicable & other Group I': '87.0',
                    'Noncommunicable diseases': '715.5',
                    'Injuries': '128.5'
                },
                'Qatar': {
                    'Communicable & other Group I': '28.3',
                    'Injuries': '41.0',
                    'Noncommunicable diseases': '407.0'
                },
                'Afghanistan': {
                    'Communicable & other Group I': '362.7',
                    'Injuries': '169.2',
                    'Noncommunicable diseases': '846.3'
                },
                'Somalia': {
                    'Noncommunicable diseases': '550.7',
                    'Communicable & other Group I': '927.2',
                    'Injuries': '188.5'
                },
                'Kuwait': {
                    'Communicable & other Group I': '82.5',
                    'Injuries': '25.4',
                    'Noncommunicable diseases': '406.3'
                },
                'Oman': {
                    'Injuries': '52.8',
                    'Noncommunicable diseases': '478.2',
                    'Communicable & other Group I': '84.2'
                },
                'Tunisia': {
                    'Noncommunicable diseases': '509.3',
                    'Communicable & other Group I': '65.0',
                    'Injuries': '39.1'
                }
            },
            'Western Pacific': {
                'Mongolia': {
                    'Injuries': '69.4',
                    'Noncommunicable diseases': '966.5',
                    'Communicable & other Group I': '82.8'
                },
                'Cambodia': {
                    'Injuries': '62.2',
                    'Communicable & other Group I': '227.5',
                    'Noncommunicable diseases': '394.0'
                },
                'Japan': {
                    'Injuries': '40.5',
                    'Noncommunicable diseases': '244.2',
                    'Communicable & other Group I': '33.9'
                },
                'Brunei Darussalam': {
                    'Injuries': '44.6',
                    'Noncommunicable diseases': '475.3',
                    'Communicable & other Group I': '56.1'
                },
                'Solomon Islands': {
                    'Communicable & other Group I': '230.6',
                    'Injuries': '75.1',
                    'Noncommunicable diseases': '709.7'
                },
                'Viet Nam': {
                    'Communicable & other Group I': '96.0',
                    'Injuries': '59.0',
                    'Noncommunicable diseases': '435.4'
                },
                'Lao People\'s Democratic Republic': {
                    'Communicable & other Group I': '328.7',
                    'Injuries': '75.2',
                    'Noncommunicable diseases': '680.0'
                },
                'China': {
                    'Communicable & other Group I': '41.4',
                    'Noncommunicable diseases': '576.3',
                    'Injuries': '50.4'
                },
                'New Zealand': {
                    'Injuries': '32.9',
                    'Noncommunicable diseases': '313.6',
                    'Communicable & other Group I': '18.0'
                },
                'Papua New Guinea': {
                    'Injuries': '100.1',
                    'Communicable & other Group I': '554.3',
                    'Noncommunicable diseases': '693.2'
                },
                'Philippines': {
                    'Communicable & other Group I': '226.4',
                    'Noncommunicable diseases': '720.0',
                    'Injuries': '53.8'
                },
                'Malaysia': {
                    'Injuries': '62.8',
                    'Noncommunicable diseases': '563.2',
                    'Communicable & other Group I': '117.4'
                },
                'Australia': {
                    'Communicable & other Group I': '13.7',
                    'Noncommunicable diseases': '302.9',
                    'Injuries': '28.2'
                },
                'Fiji': {
                    'Noncommunicable diseases': '804.0',
                    'Injuries': '64.0',
                    'Communicable & other Group I': '105.2'
                },
                'Singapore': {
                    'Communicable & other Group I': '66.2',
                    'Noncommunicable diseases': '264.8',
                    'Injuries': '17.5'
                },
                'Republic of Korea': {
                    'Injuries': '53.1',
                    'Communicable & other Group I': '33.8',
                    'Noncommunicable diseases': '302.1'
                }
            }
        },
        points = [],
        regionP,
        regionVal,
        regionI = 0,
        countryP,
        countryI,
        causeP,
        causeI,
        region,
        country,
        cause,
        causeName = {
            'Communicable & other Group I': 'Communicable diseases',
            'Noncommunicable diseases': 'Non-communicable diseases',
            'Injuries': 'Injuries'
        };

    for (region in data) {
        if (data.hasOwnProperty(region)) {
            regionVal = 0;
            regionP = {
                id: 'id_' + regionI,
                name: region,
                color: Highcharts.getOptions().colors[regionI]
            };
            countryI = 0;
            for (country in data[region]) {
                if (data[region].hasOwnProperty(country)) {
                    countryP = {
                        id: regionP.id + '_' + countryI,
                        name: country,
                        parent: regionP.id
                    };
                    points.push(countryP);
                    causeI = 0;
                    for (cause in data[region][country]) {
                        if (data[region][country].hasOwnProperty(cause)) {
                            causeP = {
                                id: countryP.id + '_' + causeI,
                                name: causeName[cause],
                                parent: countryP.id,
                                value: Math.round(+data[region][country][cause])
                            };
                            regionVal += causeP.value;
                            points.push(causeP);
                            causeI = causeI + 1;
                        }
                    }
                    countryI = countryI + 1;
                }
            }
            regionP.value = Math.round(regionVal / countryI);
            points.push(regionP);
            regionI = regionI + 1;
        }
    }
    Highcharts.chart('heat5', {
        series: [{
            type: 'treemap',
            layoutAlgorithm: 'squarified',
            allowDrillToNode: true,
            animationLimit: 1000,
            dataLabels: {
                enabled: false
            },
            levelIsConstant: false,
            levels: [{
                level: 1,
                dataLabels: {
                    enabled: true
                },
                borderWidth: 3
            }],
            data: points
        }],
        subtitle: {
            text: 'Click points to drill down. Source: <a href="http://apps.who.int/gho/data/node.main.12?lang=en">WHO</a>.'
        },
        title: {
            text: 'Global Mortality Rate 2012, per 100 000 population'
        }
    });
}
function datastockchart1() {
    var data_temp = {"Result":[{"Date":1479883500000.0,"Open":709.100000,"High":101500.000000,"Low":709.100000,"Close":709.000000},{"Date":1579883500000.0,"Open":709.100000,"High":101500.000000,"Low":709.100000,"Close":709.000000}]};
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
        Highcharts.stockChart('stockchart1', {

            


            rangeSelector: {
                selected: 1
            },

            title: {
                
                text: 'AAPL Stock Price',

            },

            series: [{
                type: 'candlestick',
                name: 'AAPL Stock Price',
                data: data,
                dataGrouping: {
                    units: [
                        [
                            'week', // unit name
                            [1] // allowed multiples
                        ], [
                            'month',
                            [1, 2, 3, 4, 6]
                        ]
                    ]
                }
            }]
        });
    
}
function datastockchart2() {
     $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', function (data) {

        // Create the chart
        Highcharts.stockChart('stockchart2', {


            rangeSelector: {
                selected: 1
            },

            title: {
                text: 'AAPL Stock Price'
            },

            series: [{
                name: 'AAPL Stock Price',
                data: data,
                type: 'areaspline',
                threshold: null,
                tooltip: {
                    valueDecimals: 2
                },
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                }
            }]
        });
    });
}
function datastockchart3() {
        $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', function (data) {
        // Create the chart
        Highcharts.stockChart('stockchart3', {
            rangeSelector: {
                selected: 1
            },
            title: {
                text: 'AAPL Stock Price'
            },
            series: [{
                name: 'AAPL Stock Price',
                data: data,
                marker: {
                    enabled: true,
                    radius: 3
                },
                shadow: true,
                tooltip: {
                    valueDecimals: 2
                }
            }]
        });
    });
}
function datastockchart4() {
     $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', function (data) {

        // Create the chart
        Highcharts.stockChart('stockchart4', {

            rangeSelector: {
                selected: 1
            },

            title: {
                text: 'AAPL Stock Price'
            },

            series: [{
                name: 'AAPL Stock Price',
                data: data,
                step: true,
                tooltip: {
                    valueDecimals: 2
                }
            }]
        });
    });
}
function datastockchart5() {
    $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-ohlc.json&callback=?', function (data) {

        // create the chart
        Highcharts.stockChart('stockchart5', {


            rangeSelector: {
                selected: 2
            },

            title: {
                text: 'AAPL Stock Price'
            },

            series: [{
                type: 'ohlc',
                name: 'AAPL Stock Price',
                data: data,
                dataGrouping: {
                    units: [[
                        'week', // unit name
                        [1] // allowed multiples
                    ], [
                        'month',
                        [1, 2, 3, 4, 6]
                    ]]
                }
            }]
        });
    });
}
function datastockchart6() {
    $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-v.json&callback=?', function (data) {

        // create the chart
        Highcharts.stockChart('stockchart6', {
            chart: {
                alignTicks: false
            },

            rangeSelector: {
                selected: 1
            },

            title: {
                text: 'AAPL Stock Volume'
            },

            series: [{
                type: 'column',
                name: 'AAPL Stock Volume',
                data: data,
                dataGrouping: {
                    units: [[
                        'week', // unit name
                        [1] // allowed multiples
                    ], [
                        'month',
                        [1, 2, 3, 4, 6]
                    ]]
                }
            }]
        });
    });
}
function datastockchart7() {
    $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=range.json&callback=?', function (data) {

        Highcharts.stockChart('stockchart7', {

            chart: {
                type: 'columnrange'
            },

            rangeSelector: {
                selected: 2
            },

            title: {
                text: 'Temperature variation by day'
            },

            tooltip: {
                valueSuffix: '°C'
            },

            series: [{
                name: 'Temperatures',
                data: data
            }]

        });
    });
}
function datastockchart8() {
    $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', function (data) {

        // Create the chart
        Highcharts.stockChart('stockchart8', {
            rangeSelector: {
                selected: 2
            },

            title: {
                text: 'AAPL Stock Price'
            },

            series: [{
                name: 'AAPL Stock Price',
                data: data,
                lineWidth: 0,
                marker: {
                    enabled: true,
                    radius: 2
                },
                tooltip: {
                    valueDecimals: 2
                },
                states: {
                    hover: {
                        lineWidthPlus: 0
                    }
                }
            }]
        });
    });
}
function datastockchart9() {
    $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-ohlcv.json&callback=?', function (data) {

        // split the data set into ohlc and volume
        var ohlc = [],
            volume = [],
            dataLength = data.length,
            // set the allowed units for data grouping
            groupingUnits = [[
                'week',                         // unit name
                [1]                             // allowed multiples
            ], [
                'month',
                [1, 2, 3, 4, 6]
            ]],

            i = 0;

        for (i; i < dataLength; i += 1) {
            ohlc.push([
                data[i][0], // the date
                data[i][1], // open
                data[i][2], // high
                data[i][3], // low
                data[i][4] // close
            ]);

            volume.push([
                data[i][0], // the date
                data[i][5] // the volume
            ]);
        }


        // create the chart
        Highcharts.stockChart('stockchart9', {

            rangeSelector: {
                selected: 1
            },

            title: {
                text: 'AAPL Historical'
            },

            yAxis: [{
                labels: {
                    align: 'right',
                    x: -3
                },
                title: {
                    text: 'OHLC'
                },
                height: '60%',
                lineWidth: 2
            }, {
                labels: {
                    align: 'right',
                    x: -3
                },
                title: {
                    text: 'Volume'
                },
                top: '65%',
                height: '35%',
                offset: 0,
                lineWidth: 2
            }],

            series: [{
                type: 'candlestick',
                name: 'AAPL',
                data: ohlc,
                dataGrouping: {
                    units: groupingUnits
                }
            }, {
                type: 'column',
                name: 'Volume',
                data: volume,
                yAxis: 1,
                dataGrouping: {
                    units: groupingUnits
                }
            }]
        });
    });
}
function datastockchart10() {
    var seriesOptions = [],
        seriesCounter = 0,
        names = ['MSFT', 'AAPL', 'GOOG'];

    /**
     * Create the chart when all data is loaded
     * @returns {undefined}
     */
    function createChart() {

        Highcharts.stockChart('stockchart10', {

            rangeSelector: {
                selected: 4
            },

            yAxis: {
                labels: {
                    formatter: function () {
                        return (this.value > 0 ? ' + ' : '') + this.value + '%';
                    }
                },
                plotLines: [{
                    value: 0,
                    width: 2,
                    color: 'silver'
                }]
            },

            plotOptions: {
                series: {
                    compare: 'percent',
                    showInNavigator: true
                }
            },

            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
                valueDecimals: 2,
                split: true
            },

            series: seriesOptions
        });
    }

    $.each(names, function (i, name) {

        $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=' + name.toLowerCase() + '-c.json&callback=?',    function (data) {

            seriesOptions[i] = {
                name: name,
                data: data
            };

            // As we're loading the data asynchronously, we don't know what order it will arrive. So
            // we keep a counter and create the chart when all the data is loaded.
            seriesCounter += 1;

            if (seriesCounter === names.length) {
                createChart();
            }
        });
    });
}
function datastockchart11() {
    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });

    // Create the chart
    Highcharts.stockChart('stockchart11', {
        chart: {
            events: {
                load: function () {

                    // set up the updating of the chart each second
                    var series = this.series[0];
                    setInterval(function () {
                        var x = (new Date()).getTime(), // current time
                            y = Math.round(Math.random() * 100);
                        series.addPoint([x, y], true, true);
                    }, 1000);
                }
            }
        },

        rangeSelector: {
            buttons: [{
                count: 1,
                type: 'minute',
                text: '1M'
            }, {
                count: 5,
                type: 'minute',
                text: '5M'
            }, {
                type: 'all',
                text: 'All'
            }],
            inputEnabled: false,
            selected: 0
        },

        title: {
            text: 'Live random data'
        },

        exporting: {
            enabled: false
        },

        series: [{
            name: 'Random data',
            data: (function () {
                // generate an array of random data
                var data = [],
                    time = (new Date()).getTime(),
                    i;

                for (i = -999; i <= 0; i += 1) {
                    data.push([
                        time + i * 1000,
                        Math.round(Math.random() * 100)
                    ]);
                }
                return data;
            }())
        }]
    });
}
function datahighmap1() {
    Highcharts.data({

        googleSpreadsheetKey: '0AoIaUO7wH1HwdFJHaFI4eUJDYlVna3k5TlpuXzZubHc',

        // custom handler when the spreadsheet is parsed
        parsed: function (columns) {

            // Read the columns into the data array
            var data = [];
            $.each(columns[0], function (i, code) {
                data.push({
                    code: code.toUpperCase(),
                    value: parseFloat(columns[2][i]),
                    name: columns[1][i]
                });
            });


            // Initiate the chart
            Highcharts.mapChart('map1', {
                chart: {
                    borderWidth: 1
                },

                colors: ['rgba(19,64,117,0.05)', 'rgba(19,64,117,0.2)', 'rgba(19,64,117,0.4)',
                    'rgba(19,64,117,0.5)', 'rgba(19,64,117,0.6)', 'rgba(19,64,117,0.8)', 'rgba(19,64,117,1)'],

                title: {
                    text: 'Population density by country (/km²)'
                },

                mapNavigation: {
                    enabled: true
                },

                legend: {
                    title: {
                        text: 'Individuals per km²',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                        }
                    },
                    align: 'left',
                    verticalAlign: 'bottom',
                    floating: true,
                    layout: 'vertical',
                    valueDecimals: 0,
                    backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 'rgba(255, 255, 255, 0.85)',
                    symbolRadius: 0,
                    symbolHeight: 14
                },

                colorAxis: {
                    dataClasses: [{
                        to: 3
                    }, {
                        from: 3,
                        to: 10
                    }, {
                        from: 10,
                        to: 30
                    }, {
                        from: 30,
                        to: 100
                    }, {
                        from: 100,
                        to: 300
                    }, {
                        from: 300,
                        to: 1000
                    }, {
                        from: 1000
                    }]
                },

                series: [{
                    data: data,
                    mapData: Highcharts.maps['custom/world'],
                    joinBy: ['iso-a2', 'code'],
                    animation: true,
                    name: 'Population density',
                    states: {
                        hover: {
                            color: '#BADA55'
                        }
                    },
                    tooltip: {
                        valueSuffix: '/km²'
                    }
                }]
            });
        },
        error: function () {
            $('#container').html('<div class="loading">' +
                '<i class="icon-frown icon-large"></i> ' +
                'Error loading data from Google Spreadsheets' +
                '</div>');
        }
    });
     
}
function datahighmap2() {
        $.getScript("https://code.highcharts.com/maps/highmaps.js");
    var data = [
        {
            "hc-key": "ir-5428",
            "value": 0
        },
        {
            "hc-key": "ir-hg",
            "value": 1
        },
        {
            "hc-key": "ir-bs",
            "value": 2
        },
        {
            "hc-key": "ir-kb",
            "value": 3
        },
        {
            "hc-key": "ir-fa",
            "value": 4
        },
        {
            "hc-key": "ir-es",
            "value": 5
        },
        {
            "hc-key": "ir-sm",
            "value": 6
        },
        {
            "hc-key": "ir-go",
            "value": 7
        },
        {
            "hc-key": "ir-mn",
            "value": 8
        },
        {
            "hc-key": "ir-th",
            "value": 9
        },
        {
            "hc-key": "ir-mk",
            "value": 10
        },
        {
            "hc-key": "ir-ya",
            "value": 11
        },
        {
            "hc-key": "ir-cm",
            "value": 12
        },
        {
            "hc-key": "ir-kz",
            "value": 13
        },
        {
            "hc-key": "ir-lo",
            "value": 14
        },
        {
            "hc-key": "ir-il",
            "value": 15
        },
        {
            "hc-key": "ir-ar",
            "value": 16
        },
        {
            "hc-key": "ir-qm",
            "value": 17
        },
        {
            "hc-key": "ir-hd",
            "value": 18
        },
        {
            "hc-key": "ir-za",
            "value": 19
        },
        {
            "hc-key": "ir-qz",
            "value": 20
        },
        {
            "hc-key": "ir-wa",
            "value": 21
        },
        {
            "hc-key": "ir-ea",
            "value": 22
        },
        {
            "hc-key": "ir-bk",
            "value": 23
        },
        {
            "hc-key": "ir-gi",
            "value": 24
        },
        {
            "hc-key": "ir-kd",
            "value": 25
        },
        {
            "hc-key": "ir-kj",
            "value": 26
        },
        {
            "hc-key": "ir-kv",
            "value": 27
        },
        {
            "hc-key": "ir-ks",
            "value": 28
        },
        {
            "hc-key": "ir-sb",
            "value": 29
        },
        {
            "hc-key": "ir-ke",
            "value": 30
        },
        {
            "hc-key": "ir-al",
            "value": 31
        }
    ];

    // Initiate the chart
    $('#map2').highcharts('Map', {

        title : {
            text : 'Highmaps basic demo'
        },

        subtitle : {
            text : 'Source map: <a href="https://code.highcharts.com/mapdata/countries/ir/ir-all.js">Iran</a>'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0
        },

        series : [{
            data : data,
            mapData: Highcharts.maps['countries/ir/ir-all'],
            joinBy: 'hc-key',
            name: 'Random data',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });
}
function datahighmap3(){
    var data = [
        {
            "hc-key": "sa",
            "value": 0
        },
        {
            "hc-key": "bh",
            "value": 1
        },
        {
            "hc-key": "tr",
            "value": 2
        },
        {
            "hc-key": "om",
            "value": 3
        },
        {
            "hc-key": "ir",
            "value": 4
        },
        {
            "hc-key": "ye",
            "value": 5
        },
        {
            "hc-key": "kw",
            "value": 6
        },
        {
            "hc-key": "eg",
            "value": 7
        },
        {
            "hc-key": "il",
            "value": 8
        },
        {
            "hc-key": "jo",
            "value": 9
        },
        {
            "hc-key": "iq",
            "value": 10
        },
        {
            "hc-key": "qa",
            "value": 11
        },
        {
            "hc-key": "ae",
            "value": 12
        },
        {
            "hc-key": "sy",
            "value": 13
        },
        {
            "hc-key": "lb",
            "value": 14
        },
        {
            "hc-key": "cy",
            "value": 15
        },
        {
            "hc-key": "nc",
            "value": 16
        }
    ];

    // Initiate the chart
    $('#map3').highcharts('Map', {

        title: {
            text: 'Highmaps basic demo'
        },

        subtitle: {
            text: 'Source map: <a href="https://code.highcharts.com/mapdata/custom/middle-east.js">Middle East</a>'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0
        },

        series: [{
            data: data,
            mapData: Highcharts.maps['custom/middle-east'],
            joinBy: 'hc-key',
            name: 'Random data',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });
}
function datahighmap4(){
    
    // Prepare random data
    var data = [
        ['DE.SH', 728],
        ['DE.BE', 710],
        ['DE.MV', 963],
        ['DE.HB', 541],
        ['DE.HH', 622],
        ['DE.RP', 866],
        ['DE.SL', 398],
        ['DE.BY', 785],
        ['DE.SN', 223],
        ['DE.ST', 605],
        ['DE.NW', 237],
        ['DE.BW', 157],
        ['DE.HE', 134],
        ['DE.NI', 136],
        ['DE.TH', 704],
        ['DE.', 361]
    ];

    $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=germany.geo.json&callback=?', function (geojson) {

        // Initiate the chart
        Highcharts.mapChart('map4', {

            title: {
                text: 'GeoJSON in Highmaps'
            },

            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },

            colorAxis: {
            },

            series: [{
                data: data,
                mapData: geojson,
                joinBy: ['code_hasc', 0],
                keys: ['code_hasc', 'value'],
                name: 'Random data',
                states: {
                    hover: {
                        color: '#BADA55'
                    }
                },
                dataLabels: {
                    enabled: true,
                    format: '{point.properties.postal}'
                }
            }]
        });
    });
}
function datahighmap5(){
    $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=us-population-density.json&callback=?', function (data) {

        // Make codes uppercase to match the map data
        $.each(data, function () {
            this.code = this.code.toUpperCase();
        });

        // Instanciate the map
        Highcharts.mapChart('map5', {

            chart: {
                borderWidth: 1
            },

            title: {
                text: 'US population density (/km²)'
            },

            legend: {
                layout: 'horizontal',
                borderWidth: 0,
                backgroundColor: 'rgba(255,255,255,0.85)',
                floating: true,
                verticalAlign: 'top',
                y: 25
            },

            mapNavigation: {
                enabled: true
            },

            colorAxis: {
                min: 1,
                type: 'logarithmic',
                minColor: '#EEEEFF',
                maxColor: '#000022',
                stops: [
                    [0, '#EFEFFF'],
                    [0.67, '#4444FF'],
                    [1, '#000022']
                ]
            },

            series: [{
                animation: {
                    duration: 1000
                },
                data: data,
                mapData: Highcharts.maps['countries/us/us-all'],
                joinBy: ['postal-code', 'code'],
                dataLabels: {
                    enabled: true,
                    color: '#FFFFFF',
                    format: '{point.code}'
                },
                name: 'Population density',
                tooltip: {
                    pointFormat: '{point.code}: {point.value}/km²'
                }
            }]
        });
    });
}