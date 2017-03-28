(function () {
    "use strict";
    angular
        .module('historicalAllocationEn', [])
        .config(routeconfig);

    function routeconfig($stateProvider) {
        $stateProvider.state('panel_en.historicalAllocation', {
            url: '/historicalAllocation',
            templateUrl: "asset/app/component/panel/historicalAllocation/historicalAllocationEn.tpl.html"
        });
    }
    angular
        .module('historicalAllocationEn')
        .config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('docs-dark', 'default')
                .primaryPalette('yellow')
                .dark();
        });

    angular
        .module('historicalAllocationEn')
        .controller('historicalAllocationEnCtrl', function ($scope, $state, loader, $timeout) {
            $scope.ManagementTypeCode = '0';
            $scope.historicalAllocationReportFrom = moment(new Date()).add(-10, 'days').format('YYYY-MM-DD');
            $scope.historicalAllocationReportTo = moment(new Date()).add(-1, 'days').format('YYYY-MM-DD');
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
            $timeout(function () {
                $scope.historicalAllocationReportGenerate();
            }, 0);
            $scope.historicalAllocationReportGenerate = function () {
                
                if ($scope.Form.managementTypeCode.$valid && $scope.Form.fromData.$valid && $scope.Form.toDate.$valid) {
                    loader.active();
                $.ajax({
                    type: "POST",
                    url: $scope.apiReference.getDoubleAssetAllocation,
                    data: {
                        "ReportFilter": {
                            "DateFilter": {
                                "StartDate": $scope.historicalAllocationReportFrom,
                                "EndDate": $scope.historicalAllocationReportTo
                            },
                            "ContractType": $scope.ManagementTypeCode
                        }
                    },
                    dataType: "json",
                    headers: {
                        'Authorization': 'Bearer ' + key
                    },
                    success: function (result) {
                        loader.deactive();
                        
                        var typeChart = [];
                        var tempAssetAllocationArr = [];
                        var tempSeriesTempArr = [];
                        var titlePieChart = [$scope.content.Beginning, $scope.content.Ending];

                        for (var prop3 = 0 ; prop3 <= 1 ; prop3++) {

                            var tempFromOrTo;
                            switch (prop3) {
                                case 0:
                                    tempFromOrTo = result.Result.FromDateAssetAllocation;
                                    break;
                                case 1:
                                    tempFromOrTo = result.Result.ToDateAssetAllocation;
                                    break;
                            }

                            var assetAllocationArr = [];
                            var assetAllocationObj = {};

                            var seriesTempArr = [];
                            var seriesTempObj = {};

                            for (var prop1 in tempFromOrTo) {
                                assetAllocationObj = null;
                                assetAllocationObj = {
                                    'name': tempFromOrTo[prop1].AssetAllocation.AssetTitleEn,
                                    'y': tempFromOrTo[prop1].AssetAllocation.NetValue,
                                    'drilldown': tempFromOrTo[prop1].AssetAllocation.AssetTitleEn,
                                    'percent': tempFromOrTo[prop1].AssetAllocation.Percent
                                };
                                assetAllocationArr.push(assetAllocationObj);

                                /////

                                var datatempArr = [];
                                var datatempObj = {};

                                for (var prop2 in tempFromOrTo[prop1].AssetAllocations) {

                                    datatempObj = {
                                        'name': tempFromOrTo[prop1].AssetAllocations[prop2].AssetTitleEn,
                                        'y': tempFromOrTo[prop1].AssetAllocations[prop2].NetValue
                                    };
                                    datatempArr.push(datatempObj);
                                }

                                seriesTempObj = null;
                                seriesTempObj = {
                                    'name': tempFromOrTo[prop1].AssetAllocation.AssetTitleEn,
                                    'id': tempFromOrTo[prop1].AssetAllocation.AssetTitleEn,
                                    'data': datatempArr
                                };

                                datatempArr = null;
                                seriesTempArr.push(seriesTempObj);
                            }

                            tempAssetAllocationArr.push(assetAllocationArr);
                            tempSeriesTempArr.push(seriesTempArr);
                        }
                        

                        for (var elementarrayselector in tempAssetAllocationArr) {
                            for (var assetAllocationArrcount in tempAssetAllocationArr[elementarrayselector]) {
                                if (tempAssetAllocationArr[elementarrayselector][assetAllocationArrcount].name === "Cash & Equivalents" && tempAssetAllocationArr[elementarrayselector][assetAllocationArrcount].y < 0) {
                                    typeChart[elementarrayselector] = 'bar';
                                } else {
                                    typeChart[elementarrayselector] = 'pie';
                                }
                            }
                        }

                        Highcharts.chart('pie0', {
                            chart: {
                                plotBackgroundColor: null,
                                plotBorderWidth: null,
                                plotShadow: false,
                                type: typeChart[0],
                                events: {
                                    drilldown: function (e) {
                                        var myParents = $('#pie0').find('.highcharts-series rect');
                                        $.each(myParents, function (i, plotItem) {
                                            $(plotItem).hide();
                                        });
                                        var myParentsPie = $('#pie0').find('.highcharts-series path');
                                        $.each(myParentsPie, function (i, plotItem) {
                                            $(plotItem).hide();
                                        });
                                    }
                                },

                            },
                            title: {
                                text: titlePieChart[0] + ''
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
                                data: tempAssetAllocationArr[0]
                            }],

                            drilldown: {
                                series: tempSeriesTempArr[0]
                            }
                        });

                        Highcharts.chart('pie1', {
                            chart: {
                                plotBackgroundColor: null,
                                plotBorderWidth: null,
                                plotShadow: false,
                                type: typeChart[elementarrayselector],
                                events: {
                                    drilldown: function (e) {
                                        var myParents = $('#pie1').find('.highcharts-series rect');
                                        $.each(myParents, function (i, plotItem) {
                                            $(plotItem).hide();
                                        });
                                        var myParentsPie = $('#pie1').find('.highcharts-series path');
                                        $.each(myParentsPie, function (i, plotItem) {
                                            $(plotItem).hide();
                                        });
                                    }
                                },
          
                            },
                            title: {
                                text: titlePieChart[1] + ''
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


                        $scope.$apply();

                    }
                });
                /////////////////////

                $.ajax({
                    type: "POST",
                    url: $scope.apiReference.getAssetAllocationDifference,
                    data: {
                        "ReportFilter": {
                            "DateFilter": {
                                "StartDate": $scope.historicalAllocationReportFrom,
                                "EndDate": $scope.historicalAllocationReportTo
                            },
                            "ContractType": $scope.ManagementTypeCode
                        },
                        "OptionalFilter": null
                    },
                    dataType: "json",
                    headers: {
                        'Authorization': 'Bearer ' + key
                    },
                    success: function (result) {
                        
                        if (result.Message != "1000") { $scope.showCustomToast(result.Message); }
                        var categories = [];

                        var series = [
                            {
                                name: $scope.content.MutualFunds,
                                data: [],
                                datap: []
                            }, {
                                name: $scope.content.FixedIncomes,
                                data: [],
                                datap: []
                            }, {
                                name: $scope.content.Equities,
                                data: [],
                                datap: []
                            }, {
                                name: $scope.content.CashEquivalents,
                                data: [],
                                datap: []
                            }
                        ];

                        for (var prop1 in result.Result) {

                            categories.push(result.Result[prop1].Date.split("T")[0]);
                            var fundVal = parseFloat(result.Result[prop1].FundValue);
                            var bondVal = parseFloat(result.Result[prop1].BondValue);
                            var stockVal = parseFloat(result.Result[prop1].StockValue);
                            var cashVal = parseFloat(result.Result[prop1].BasicCashAndEquivalentsValue);

                            var fundValp = parseFloat(result.Result[prop1].FundPercentage);
                            var bondValp = parseFloat(result.Result[prop1].BondPercentage);
                            var stockValp = parseFloat(result.Result[prop1].StockPercentage);
                            var cashValp = parseFloat(result.Result[prop1].BasicCashAndEquivalentsPercentage);

                            series[0].data.push(fundVal);
                            series[1].data.push(bondVal);
                            series[2].data.push(stockVal);
                            series[3].data.push(cashVal);

                            series[0].datap.push(fundValp);
                            series[1].datap.push(bondValp);
                            series[2].datap.push(stockValp);
                            series[3].datap.push(cashValp);
                        }

                        var assetAllocationObj = {};
                        var assetAllocationArr = [];

                        for (var prop1 in series) {
                            assetAllocationObj = {
                                assetClass: series[prop1].name,
                                beginningValue: series[prop1].data[0],
                                beginningPercentOfTotal: series[prop1].datap[0],
                                EndingValue: series[prop1].data[(series[prop1].data.length) - 1],
                                EndingPercentOfTotal: series[prop1].datap[(series[prop1].datap.length) - 1],
                                DifValue: series[prop1].data[(series[prop1].data.length) - 1] - series[prop1].data[0],
                                DifPercent: series[prop1].datap[(series[prop1].datap.length) - 1] - series[prop1].datap[0],
                            }
                            assetAllocationArr.push(assetAllocationObj);

                        }
                        $scope.assetAllocationTable = {
                            "count": 10,
                            "data": assetAllocationArr
                        };


                        Highcharts.chart('line9', {
                            chart: {
                                type: 'area'
                            },
                            title: {
                                text: $scope.content.HistoricalAllocation
                            },
                            xAxis: {
                                categories:categories,
                                tickmarkPlacement: 'on',
                                title: {
                                    enabled: false
                                }
                            },
                            yAxis: {
                                title: {
                                    text: $scope.content.Percent,
                                }
                            },
                            tooltip: {
                                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} '+$scope.content.IRR+')<br/>',
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
                            series: series
                        });
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        if (xhr.status === 401) {
                            key = null;
                            $state.go('loginEn', "");
                            delete $localStorage.key;
                        }
                    }
                });
            } else {
                    $scope.showCustomToast('0');
                    loader.deactive();
            }
            };
        });
})();