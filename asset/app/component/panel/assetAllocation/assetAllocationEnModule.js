(function () {
    "use strict";
    angular
        .module('assetAllocationEn', [])
        .config(routeconfig);

    function routeconfig($stateProvider) {
        $stateProvider.state('panel_en.assetAllocation', {
            url: '/assetAllocation',
            templateUrl: "asset/app/component/panel/assetAllocation/assetAllocationEn.tpl.html"
        });
    }


    angular
        .module('assetAllocationEn')
        .controller('assetAllocationEnCtrl', function ($scope, $http, $state, loader, $timeout) {
            $scope.ManagementTypeCode = '0';
            $scope.assetAllocationDatePickerDate = moment(new Date()).add(-1, 'days').format('YYYY-MM-DD');

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
                $scope.assetAllocationReportGenerate();
            }, 0);

            $scope.assetAllocationReportGenerate = function () {
                
                
                if ($scope.Form.managementTypeCode.$valid && $scope.Form.date.$valid) {
                    loader.active();
                    $.ajax({
                        type: "POST",
                        url: $scope.apiReference.getAssetAllocation,
                        data: {
                            "ReportFilter": {
                                "Date": $scope.assetAllocationDatePickerDate,
                                "ContractType": $scope.ManagementTypeCode
                            }
                        },
                        dataType: "json",
                        headers: {
                            'Authorization': 'Bearer ' + key
                        },
                        success: function (result) {
                            loader.deactive();
                            
                            if (result.Message != "1000") { $scope.showCustomToast(result.Message); }
                            var assetAllocationArr = [];
                            var assetAllocationObj = {};

                            var seriesTempArr = [];
                            var seriesTempObj = {};
                            for (var prop1 in result.Result) {
                                assetAllocationObj = null;
                                assetAllocationObj = {
                                    'name': result.Result[prop1].AssetAllocation.AssetTitleEn,
                                    'y': result.Result[prop1].AssetAllocation.NetValue,
                                    'drilldown': result.Result[prop1].AssetAllocation.AssetTitleEn,
                                    'percent': result.Result[prop1].AssetAllocation.Percent
                                };
                                assetAllocationArr.push(assetAllocationObj);

                                /////

                                var datatempArr = [];
                                var datatempObj = {};

                                for (var prop2 in result.Result[prop1].AssetAllocations) {

                                    datatempObj = {
                                        'name': result.Result[prop1].AssetAllocations[prop2].AssetTitleEn,
                                        'y': result.Result[prop1].AssetAllocations[prop2].NetValue
                                    };
                                    datatempArr.push(datatempObj);
                                }

                                seriesTempObj = null;
                                seriesTempObj = {
                                    'name': result.Result[prop1].AssetAllocation.AssetTitleEn,
                                    'id': result.Result[prop1].AssetAllocation.AssetTitleEn,
                                    'data': datatempArr
                                };

                                datatempArr = null;
                                seriesTempArr.push(seriesTempObj);
                            }

                            var typeChart;
                            for (var assetAllocationArrcount in assetAllocationArr) {
                                if (assetAllocationArr[assetAllocationArrcount].name === "Cash & Equivalents" && assetAllocationArr[assetAllocationArrcount].y < 0) {
                                    typeChart = 'bar';
                                } else {
                                    typeChart = 'pie';
                                }
                            }
                            Highcharts.chart('pie2', {
                                chart: {
                                    plotBackgroundColor: null,
                                    plotBorderWidth: null,
                                    plotShadow: false,
                                    type: typeChart,
                                    events: {
                                        drilldown: function (e) {
                                            var myParents = $('.highcharts-series rect');
                                            $.each(myParents, function (i, plotItem) {
                                                $(plotItem).hide();
                                            });
                                            var myParentsPie = $('.highcharts-series path');
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
                                    data: assetAllocationArr
                                }],

                                drilldown: {
                                    series: seriesTempArr
                                }
                            });

                            $scope.assetAllocationTable = {
                                "count": 10,
                                "data": assetAllocationArr
                            };
                            $scope.$apply();
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



