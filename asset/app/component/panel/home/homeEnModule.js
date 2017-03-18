(function () {
    "use strict";
    angular
        .module('homeEn', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'easypiechart', 'md.data.table', 'perfect_scrollbar'])
        .config(routeconfig);

    function routeconfig($stateProvider) {

        
        $stateProvider.state('panel_en.home', {
            url: '/home',
            templateUrl: "asset/app/component/panel/home/homeEn.tpl.html"
        });
    }
    angular
        .module('homeEn')
        .controller('homeEnCtrl', function ($scope, $http, $interval, $state, $localStorage) {
            $('.title-menu-main').eq(0).click();
            

            $scope.datastockcharthomefn = function (param) {
                datastockcharthome(param);
                $scope.datastockcharthometemp = param;
            }
            datastockcharthome(15);
            $scope.datastockcharthometemp = 15;
            datastockcharthome2();

            getIndices();
            var intervalPromise1 = $interval(getIndices, 1000 * 30 * 10);
            getMarketDetailsOverviewByDate();
            var intervalPromise2 = $interval(getMarketDetailsOverviewByDate, 1000 * 30 * 10);

            function allGetLoserAndGains() {
                getLoserAndGains(0);
                getLoserAndGains(2);
                getLoserAndGains(5);
            }
           
            allGetLoserAndGains();
            var intervalPromisegetLoserAndGains = $interval(allGetLoserAndGains, 1000 * 30 * 10);

            var intervalinjs
            $scope.$on('$destroy', function () { $interval.cancel(intervalPromise1); $interval.cancel(intervalPromise2); $interval.cancel(intervalPromisegetLoserAndGains); clearInterval(intervalinjs); });

            $scope.limitOptions = [5, 10, 15];

            $scope.options = {
                rowSelection: false,
                multiSelect: false,
                autoSelect: true,
                decapitate: false,
                largeEditDialog: false,
                boundaryLinks: false,
                limitSelect: true,
                pageSelect: true
            };

            $scope.query = {
                order: '',
                limit: 10,
                page: 1
            };
            

            setTimeout(function () {
                pieSectorAssetHome();
            }, 0);


            var homeItemfilter = {ReportFilter: {}}

            $http({
                url: $scope.apiReference.getTotalNetPortfolioValue,
                method: "POST",
                data: homeItemfilter,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + key

                }
            }).success(function (data, status, headers, config) {
                if (data.Message != "1000") { $scope.showCustomToast("1"); } else {
                    $scope.itemNetAsasetValue = addcommas2(data.Result.Value);
                    $scope.itemNetAsasetValuePercent = data.Result.Percentage;
                }      
            }).error(function (data, status, headers, config) {
                if (status === 401) {
                    key = null;
                    $state.go('loginEn', "");
                    delete $localStorage.key;
                }
            });

            $http({
                url: $scope.apiReference.getBrokerBalance,
                method: "POST",
                data: homeItemfilter,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + key
                }
            }).success(function (data, status, headers, config) {
                if (data.Message != "1000") { $scope.showCustomToast("1"); } else {
                    $scope.itemCashBalanaceValue = addcommas2(data.Result.Value);
                    $scope.itemCashBalanaceValuePercent = data.Result.Percentage;
                }  
            });

            $http({
                url: $scope.apiReference.getFundUnitsValue,
                method: "POST",
                data: homeItemfilter,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + key
                }
            }).success(function (data, status, headers, config) {
                if (data.Message != "1000") { $scope.showCustomToast("1"); } else {
                    $scope.itemMutualFunds = addcommas2(data.Result.Value);
                    $scope.itemMutualFundsPercent = data.Result.Percentage;
                }   
            });

            $http({
                url: $scope.apiReference.getFixedIncomeFundValue,
                method: "POST",
                data: homeItemfilter,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + key
                }
            }).success(function (data, status, headers, config) {
                if (data.Message != "1000") { $scope.showCustomToast("1"); } else {
                    $scope.itemHamiFund = addcommas2(data.Result.Value);
                    $scope.itemHamiFundPercent = data.Result.Percentage;
                }
            });

            $http({
                url: $scope.apiReference.getExecutionOnlyPortfolioValue,
                method: "POST",
                data: homeItemfilter,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + key
                }
            }).success(function (data, status, headers, config) {
                if (data.Message != "1000") { $scope.showCustomToast("1"); } else {
                    $scope.itemNonDiscretionaryPortfolioValue = addcommas2(data.Result.Value);
                    $scope.itemNonDiscretionaryPortfolioPercent = data.Result.Percentage;
                }   
            });
            
            $http({
                url: $scope.apiReference.getDiscretionaryPortfolioValue,
                method: "POST",
                data: homeItemfilter,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + key
                }
            }).success(function (data, status, headers, config) {
                if (data.Message != "1000") { $scope.showCustomToast("1"); } else {
                    $scope.itemDiscretionaryPrivatePortfolioValue = addcommas2(data.Result.Value);
                    if ($scope.itemDiscretionaryPrivatePortfolioValue === 0) {
                        $scope.itemDiscretionaryPrivatePortfolioValue = 'In computing'
                    }
                    $scope.itemDiscretionaryPrivatePortfolioValuePercent = data.Result.Percentage;
                }  
            });

            $scope.itemAdvisoryPortfolioPercent = 0;

            $scope.optionspie = {
                easing: 'easeOutCirc',
                animate: { duration: 5000, enabled: true },
                trackColor: 'rgba(255, 255, 255, 0.1)',
                barColor: 'rgba(255,255,255,0.3)',
                scaleColor: false,
                lineWidth: 18,
                lineCap: 'circle',
                onStep: function (from, to, percent) { $(this.el).find('.percent').text(Math.round(percent)); }
            };

            // function  ////////////////////////////////////////////////////////////////////////
            function getMarketDetailsOverviewByDate() {

                var reportFilter = {
                    MarketDataPeriod: 'IntraDay'
                }
                var fill = {
                    ReportFilter: reportFilter,
                    OptionalFilter: null
                }

                $http({
                    url: $scope.apiReference.getMarketDetailsOverviewByDate,
                    method: "POST",
                    data: fill,
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + key
                    }
                })
                    .success(function (data, status, headers, config) {
                        if (data.Message != "1000") { $scope.showCustomToast("1"); }
                        if (data.Result[0][0].MarketStatus == '2') {
                            $scope.TSCMarketStatus = 'Open';
                        } else {
                            $scope.TSCMarketStatus = 'Close';
                        }
                        $scope.TSCMarketValue = addcommas2(data.Result[0][0].MarketValue);
                        $scope.TSCOverallIndexValue = addcommas2(data.Result[0][0].OverallIndexValue);
                        $scope.TSCTotalEqualWeithedValue = addcommas2(data.Result[0][0].TotalEqualWeithedValue);
                        $scope.TSCTotalTradesCount = addcommas2(data.Result[0][0].TotalTradesCount);
                        $scope.TSCTotalTradesValue = addcommas2(data.Result[0][0].TotalTradesValue);
                        $scope.TSCTotalTradesVolume = addcommas2(data.Result[0][0].TotalTradesVolume);
                        $scope.TSCdate = data.Result[0][0].Date;

                        if (data.Result[0][0].MarketStatus == '2') {
                            $scope.IFBMarketStatus = 'Open';
                        } else {
                            $scope.IFBMarketStatus = 'Close';
                        }
                        $scope.IFBMarketValue = addcommas2(data.Result[0][1].MarketValue);
                        $scope.IFBOverallIndexValue = addcommas2(data.Result[0][1].OverallIndexValue);
                        $scope.IFBTotalEqualWeithedValue = addcommas2(data.Result[0][1].TotalEqualWeithedValue);
                        $scope.IFBTotalTradesCount = addcommas2(data.Result[0][1].TotalTradesCount);
                        $scope.IFBTotalTradesValue = addcommas2(data.Result[0][1].TotalTradesValue);
                        $scope.IFBTotalTradesVolume = addcommas2(data.Result[0][1].TotalTradesVolume);
                        $scope.IFBdate = data.Result[0][1].Date;
                    });
            }

            // function  ////////////////////////////////////////////////////////////////////////
            function getIndices() {
                $http({
                    url: $scope.apiReference.getIndices,
                    method: "POST",
                    data:{},
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + key
                    }
                })
                    .success(function (data, status, headers, config) {
                        if (data.Message != "1000") { $scope.showCustomToast("1"); }
                        $scope.users = data.Result;
                        $scope.tempMarketBlock1 = [];
                        $scope.tempMarketBlock2 = [];
                        for (var count = 2; count < data.Result.length; count++) {
                            $scope.users[count].ClosePrice = addcommas2($scope.users[count].ClosePrice);
                                if ($scope.users[count].PriceVariation >= 0) {
                                    $scope.tempMarketBlock1.push($scope.users[count]);
                                } else {
                                    $scope.tempMarketBlock2.push($scope.users[count]);
                                }
                        }


                    });

            }


            // function  ////////////////////////////////////////////////////////////////////////
            function getLoserAndGains(BackOfficeProvidervalue) {
                var GetLoserAndGainsValueFilter = {
                    ContractType: BackOfficeProvidervalue,
                }

                var GetLoserAndGainsfilter = {
                    ReportFilter: GetLoserAndGainsValueFilter
                }

                $http({
                    url: $scope.apiReference.getLoserAndGainer,
                    method: "POST",
                    data: GetLoserAndGainsfilter,
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + key
                    }
                }).success(function (data, status, headers, config) {
                    if (data.Message != "1000") { $scope.showCustomToast("1"); }

                    if (BackOfficeProvidervalue == 5) {
                        $scope.itemGetLoserAndGainsValueExecutionOnly = {
                            "count": 5,
                            "data": data.Result
                        };
                    }
                    if (BackOfficeProvidervalue == 2) {
                        $scope.itemGetLoserAndGainsValueDiscretionary = {
                            "count": 10,
                            "data": data.Result
                        };
                    }
                    if (BackOfficeProvidervalue == 0) {
                        $scope.itemGetLoserAndGainsValueConsolidate = {
                            "count": 10,
                            "data": data.Result
                        };
                    }
                });
            }

            // function  ////////////////////////////////////////////////////////////////////////
            function datastockcharthome(Range) {
                var reportFilter = {
                    Isin: 'IRX6XTPI0006',
                    Range: Range
                }
                var fil = {
                    ReportFilter: reportFilter,
                    KendoFilter: null
                }
                $.ajax({
                    url: $scope.apiReference.getOhlcDaily,
                    type: 'POST',
                    data: fil,
                    dataType: "json",
                    headers: {
                        'Authorization': 'Bearer ' + key
                    },
                    success: function (data_temp) {
                        if (data_temp.Message != "1000") { $scope.showCustomToast("1"); }
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

                        // create the chart
                        
                        Highcharts.stockChart('stockchart-home', {
                            plotOptions: {
                                candlestick: {
                                    color: 'red',
                                    upColor: 'green',
                                    lineColor: 'red',
                                    upLineColor: 'green'
                                }
                            },

                            chart: {
                                spacingTop: 50,
                                events: {
                                    load: function () {

                                        // set up the updating of the chart each second
                                        var series = this.series[0];
                                        intervalinjs = setInterval(function () {
                                            // var x = (new Date()).getTime(), // current time     y =
                                            // Math.round(Math.random() * 100); series.addPoint([     x, y ], true, true);

                                            var reportFilterlive = {
                                                Date: data[data.length - 1][0],
                                                Isin: reportFilter.Isin,
                                                Range: 15
                                            }
                                            var fillive = {
                                                ReportFilter: reportFilterlive,
                                                KendoFilter: null
                                            }
                                            $.ajax({
                                                url: $scope.apiReference.getOhlcDailyRealTime,
                                                type: 'POST',
                                                data: fillive,
                                                dataType: "json",
                                                headers: {
                                                    'Authorization': 'Bearer ' + key
                                                },
                                                success: function (data_temp) {
                                                    if (data_temp.Message != "1000") { $scope.showCustomToast("1"); }
                                                    var sarr1 = [];
                                                    var sarr = [];
                                                    var sdata = [];
                                                    for (var prop1 in data_temp.Result) {
                                                        sarr1 = data_temp.Result[prop1];
                                                        sarr = [];
                                                        for (var prop in sarr1) {
                                                            sarr.push(sarr1[prop]);
                                                        }
                                                        sdata.push(sarr);
                                                        if (sdata.length > 0) {
                                                            data = data.concat(sdata);

                                                        }
                                                    }

                                                    for (var prop3 in sdata) {
                                                        series.addPoint([
                                                            sdata[prop3][0], sdata[prop3][1], sdata[prop3][2], sdata[prop3][3], sdata[prop3][4]
                                                        ], true, true);
                                                    }

                                                }
                                            });
                                        }, 60000);
                                    }
                                }
                            },

                            rangeSelector: {
                                enabled: false,
                                inputEnabled: false,
                                selected: 'all'
                            },

                            series: [
                                {
                                    name: 'TSE Index',
                                    type: 'candlestick',
                                    data: data,
                                    tooltip: {
                                        valueDecimals: 2
                                    }
                                }
                            ]
                        });
                        resizehighchartobj('#stockchart-home');
                    }
                });
            };

            // function  ////////////////////////////////////////////////////////////////////////
            function datastockcharthome2() {
                var reportFilter = {
                    Isin: 'IRX6XTPI0006'
                }
                var fil = {
                    ReportFilter: reportFilter,
                    KendoFilter: null
                }
                $.ajax({
                    url: $scope.apiReference.getOhlcEndOfDay,
                    type: 'POST',
                    data: fil,
                    dataType: "json",
                    headers: {
                        'Authorization': 'Bearer ' + key
                    },
                    success: function (data_temp) {
                        if (data_temp.Message != "1000") { $scope.showCustomToast("1"); }
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

                        data[198] = [
                                 1477341000000,
                                 78836.8,
                                 79304.3,
                                 79299.6,
                                 78836.8];

                        // create the chart
                        Highcharts.stockChart('stockchart-home2', {
                            plotOptions: {
                                candlestick: {
                                    color: 'red',
                                    upColor: 'green',
                                    lineColor: 'red',
                                    upLineColor: 'green'
                                }
                            },
                            rangeSelector: {
                                buttons: [
                                    {
                                        type: 'month',
                                        count: 1,
                                        text: '1 M'
                                    }, {
                                        type: 'month',
                                        count: 6,
                                        text: '6 M'
                                    }, {
                                        type: 'month',
                                        count: 9,
                                        text: '9 M'
                                    }, {
                                        type: 'month',
                                        count: 12,
                                        text: 'Y'
                                    }, {
                                        type: 'all',
                                        text: 'All'
                                    }
                                ],
                                buttonTheme: {
                                    width: 20
                                },

                                inputEnabled: true,
                                selected: 'all'
                            },

                            series: [
                                {
                                    name: 'TSE Index',
                                    type: 'candlestick',
                                    data: data,
                                    tooltip: {
                                        valueDecimals: 2
                                    }
                                }
                            ]
                        });
                        resizehighchartobj('#stockchart-home2');
                    }
                });
            };

            // function  ////////////////////////////////////////////////////////////////////////
            function pieSectorAssetHome() {
                $.ajax({
                    type: "POST",
                    url: $scope.apiReference.getMutliContractTypeAssetAllocationBySingleFilter,
                    data: {
                        "ReportFilter": {
                            "L": 1
                        }
                    },
                    dataType: "json",
                    headers: {
                        'Authorization': 'Bearer ' + key
                    },
                    success: function (result) {
                        var flagExistDiscretionary = [true,true,true]
                        if (result.Result.Discretionary.length === 0) { flagExistDiscretionary = [false, true, true] }
                        if (result.Message != "1000") { $scope.showCustomToast("1"); }
                        
                        var tempSeriesTempArr = [];
                        var tempAssetAllocationArr = [];
                        for (var contractLoop = 0 ; contractLoop <= 2 ; contractLoop++) {
                            var tempContractType;
                            switch (contractLoop) {
                                case 0:
                                    tempContractType = result.Result.Discretionary;
                                    break;
                                case 1:
                                    tempContractType = result.Result.Consolidate;
                                    break;
                                case 2:
                                    tempContractType = result.Result.Execution;
                                    break;

                            }

                            var assetAllocationArr = [];
                            var assetAllocationObj = {};

                            var seriesTempArr = [];
                            var seriesTempObj = {};
                            var typechart = ['pie', 'pie', 'pie'];
                            for (var prop1 in tempContractType) {
                                assetAllocationObj = null;
                                if (flagExistDiscretionary[contractLoop]) {
                                    assetAllocationObj = {
                                    
                                        'name': tempContractType[prop1].AssetAllocation.AssetTitleEn,
                                        'y': tempContractType[prop1].AssetAllocation.NetValue,
                                        'drilldown': tempContractType[prop1].AssetAllocation.AssetTitleEn
                                    };
                                }
                                assetAllocationArr.push(assetAllocationObj);

                                /////

                                var datatempArr = [];
                                var datatempObj = {};

                                for (var prop2 in tempContractType[prop1].AssetAllocations) {
                                    if (flagExistDiscretionary[contractLoop]) {
                                        datatempObj = {
                                            'name': tempContractType[prop1].AssetAllocations[prop2].AssetTitleEn,
                                            'y': tempContractType[prop1].AssetAllocations[prop2].NetValue
                                        };
                                    }
                                    datatempArr.push(datatempObj);
                                }

                                seriesTempObj = null;
                                if (flagExistDiscretionary[contractLoop]) {
                                    seriesTempObj = {
                                        'name': tempContractType[prop1].AssetAllocation.AssetTitleEn,
                                        'id': tempContractType[prop1].AssetAllocation.AssetTitleEn,
                                        'data': datatempArr
                                    };
                                }

                                datatempArr = null;
                                seriesTempArr.push(seriesTempObj);
                                
                            }
                            tempSeriesTempArr.push(seriesTempArr);
                            tempAssetAllocationArr.push(assetAllocationArr);
                            var typechart = ['pie', 'pie', 'pie'];

                            if (flagExistDiscretionary[contractLoop]) {
                            for (var prop1 in tempAssetAllocationArr) {
                                for (var prop2 in tempAssetAllocationArr[prop1]) {
                                    if (tempAssetAllocationArr[prop1][prop2].name === 'Cash & Equivalents' || tempAssetAllocationArr[prop1][prop2].name === 'نقد و معادل وجه نقد') {
                                        if (tempAssetAllocationArr[prop1][prop2].y < 0) {
                                            typechart[prop1] = 'bar';
                                        }
                                    }
                                }
                            }
                        }
                        }

                        if (flagExistDiscretionary[0]) {
                            Highcharts.chart('homeTabPie0', {
                                chart: {
                                    plotBackgroundColor: null,
                                    plotBorderWidth: null,
                                    plotShadow: false,
                                    type: typechart[0],
                                    events: {
                                        drilldown: function (e) {
                                            var myParentsPie = $('#homeTabPie0').find('.highcharts-series rect');
                                            $.each(myParentsPie, function (i, plotItem) {
                                                $(plotItem).hide();
                                            });
                                            var myParentsPie = $('#homeTabPie0').find('.highcharts-series path');
                                            $.each(myParentsPie, function (i, plotItem) {
                                                $(plotItem).hide();
                                            });


                                        }
                                    }
                                },
                                title: {
                                    text: ''
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
                                                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                                                textDecoration: 'none'
                                            }
                                        }
                                    }
                                },
                                series: [{
                                    name: 'Percent',
                                    colorByPoint: true,
                                    data: tempAssetAllocationArr[0]
                                }],

                                drilldown: {
                                    series: tempSeriesTempArr[0]
                                }
                            });
                            resizehighchartobj('#homeTabPie0');

                        } else {
                            $('#homeTabPie0').append('<div style="    margin: auto;width: 168px;color: rgba(255,255,255,0.3);line-height: 400px;">' + $scope.content.NotExistDiscretionary + '</div>');
                        }

                            
                            

                            Highcharts.chart('homeTabPie1', {
                                chart: {
                                    plotBackgroundColor: null,
                                    plotBorderWidth: null,
                                    plotShadow: false,
                                    type: typechart[1],
                                    events: {
                                        drilldown: function (e) {
                                            var myParentsPie = $('#homeTabPie1').find('.highcharts-series rect');
                                            $.each(myParentsPie, function (i, plotItem) {
                                                $(plotItem).hide();
                                            });
                                            var myParentsPie = $('#homeTabPie1').find('.highcharts-series path');
                                            $.each(myParentsPie, function (i, plotItem) {
                                                $(plotItem).hide();

                                            });
                                        }
                                    }
                                },
                                title: {
                                    text: ''
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
                                    name: 'Percent',
                                    colorByPoint: true,
                                    data: tempAssetAllocationArr[1]
                                }],

                                drilldown: {
                                    series: tempSeriesTempArr[1]
                                }
                            });
                            resizehighchartobj('#homeTabPie1');

                            Highcharts.chart('homeTabPie2', {
                                chart: {
                                    plotBackgroundColor: null,
                                    plotBorderWidth: null,
                                    plotShadow: false,
                                    type: typechart[2],
                                    events: {
                                        drilldown: function (e) {
                                            var myParentsPie = $('#homeTabPie2').find('.highcharts-series rect');
                                            $.each(myParentsPie, function (i, plotItem) {
                                                $(plotItem).hide();
                                            });
                                            var myParentsPie = $('#homeTabPie2').find('.highcharts-series path');
                                            $.each(myParentsPie, function (i, plotItem) {
                                                $(plotItem).hide();

                                            });
                                        }
                                    }
                                },
                                title: {
                                    text: ''
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
                                    name: 'Percent',
                                    colorByPoint: true,
                                    data: tempAssetAllocationArr[2]
                                }],

                                drilldown: {
                                    series: tempSeriesTempArr[2]
                                }
                            });
                            resizehighchartobj('#homeTabPie2')
                        

                    }
                });
                
            }
        });
})();

