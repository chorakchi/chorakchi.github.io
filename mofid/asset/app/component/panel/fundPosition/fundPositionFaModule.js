 (function () {
    "use strict";
    angular
        .module('fundPositionFa', ['kendo.directives', 'ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
        .config(routeconfig);

    function routeconfig($stateProvider) {
        $stateProvider.state('panel_fa.fundPosition', {
            url: '/fundPosition',
            templateUrl: "asset/app/component/panel/fundPosition/fundPositionFa.tpl.html",
        });
    }
    angular
        .module('fundPositionFa')
        .config(function ($mdThemingProvider) {

            // Configure a dark theme with primary foreground yellow

            $mdThemingProvider.theme('docs-dark', 'default')
                .primaryPalette('yellow')
                // .backgroundPalette('grey')
                .dark();
        });

    angular
        .module('fundPositionFa')
        .controller('fundPositionFaCtrl', function ($scope, $state, $timeout) {
            $scope.fundPositionDate = moment(new Date()).add(-1, 'days').format('jYYYY/jMM/jDD');
            $scope.datepickerConfig = {
                allowFuture: false,
                dateFormat: 'jYYYY/jMM/jDD',
                gregorianDateFormat: 'YYYY-MM-DD',
                minDate: moment.utc('2015', 'YYYY')
            };
            
            $timeout(function () {
                $scope.getFundPositionReport();
            }, 0);

            $scope.getFundPositionReport = function() {
                if ($scope.Form.date.$valid) {

                    var filter = {
                        "PositionDate": moment($scope.fundPositionDate, 'jYYYY/jMM/jDD').format('YYYY-MM-DD'),
                    };
                    $("#fundPositionGrid1").kendoGrid({
                        dataSource: {
                            transport: {
                                read: function(options) {
                                    $.ajax({
                                        type: "POST",
                                        url: $scope.apiReference.getFundPositions,
                                        data: {
                                            ReportFilter: filter,
                                            optionalFilter: options.data
                                        },
                                        dataType: "json",
                                        headers: {
                                            'Authorization': 'Bearer ' + key
                                        },
                                        success: function (result) {
                                            if (result.Message != "1000") { $scope.showCustomToast(result.Message); }

                                            options.success(result);
                                            var fundPositionArr = [];
                                            var fundPositionObj = {};
                                            for (var prop1 in result.Result) {
                                                fundPositionObj = null;
                                                fundPositionObj = {
                                                    'name': result.Result[prop1].ProductNameEn,
                                                    'y': result.Result[prop1].PercentageOfTotalAssets
                                                };
                                                fundPositionArr.push(fundPositionObj);
                                            }
                                            Highcharts.chart('fundpositionschart',
                                            {
                                                chart: {
                                                    type: 'pie'
                                                },
                                                title: {
                                                    text: ''
                                                },
                                                subtitle: {
                                                    text: ''
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
                                                            format: '{point.name} : <br/>%<b>{point.y:.2f}</b>'
                                                        }
                                                    }
                                                },
                                                tooltip: {
                                                    headerFormat:
                                                        ' ',
                                                    pointFormat:
                                                        '<span style="color:{point.color}">{point.name}</span>: <br/>%<b>{point.y:.2f}</b>'
                                                },

                                            series: [{
                                                name: 'Brands',
                                                colorByPoint: true,
                                                data: fundPositionArr
                                            }]
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
                            }
                        },
                        schema: {
                            data: "Result",
                            total: "TotalRecords",
                            model: {
                                fields: {
                                    ProductNameEn: "ProductNameFa",
                                    RemainValue: "RemainValue",
                                    PositionDate: "PositionDate",
                                    ClosePrice: "ClosePrice",
                                    TotalDailyValue: "TotalDailyValue",
                                    AvgBookCost: "AvgBookCost",
                                    PercentageOfTotalAssets: "PercentageOfTotalAssets",
                                    ProfitOrLossOfCurrent: "ProfitOrLossOfCurrent",
                                    ProfitOrLossOfwithdraw: "ProfitOrLossOfwithdraw",
                                   // TotalProfitOrLoss: "TotalProfitOrLoss",
                                    Efficiency: "Efficiency"
                                }
                            }
                        },
                        pageSize: 20,
                        aggregate: [
                                              { field: "RemainValue", aggregate: "sum" },
                                              { field: "PercentageOfTotalAssets", aggregate: "sum" },
                                              { field: "ProfitOrLossOfCurrent", aggregate: "sum" },
                                              { field: "ProfitOrLossOfwithdraw", aggregate: "sum" },
                                              { field: "Efficiency", aggregate: "sum" }

                        ],
                        serverPaging: true,
                        serverSorting: true

                    },
                        toolbar: [{ name: 'excel', text: 'خروجی به اکسل' }],

                    excel: {
                        text: "test",
                        fileName: "FundPositionReport.xlsx",
                        proxyURL: $scope.apiReference.gridExcelExport,
                        filterable: true,
                        forceProxy: true,
                        allPages: true
                    },

                    
                    autoBind: true,
                    sortable: true,
                    resizable: true,
                    reorderable: true,
                    navigatable: true,
                    columnMenu: true,


                    pageable: {
                        refresh: true,
                        pageSizes: [10, 20, 50, 100],
                        buttonCount: 5,
                        input: true
                        //autoBind: false,
                    },
                    allowCopy: true,
                    selectable: {
                        mode: "GridSelectionMode.Multiple",
                        type: "GridSelectionType.Row"
                    },
                    columns: [
                        {
                            field: "ProductNameEn",
                            title: $scope.content.ProductName,
                            sortable: true,
                            footerTemplate: $scope.content.Total,
                        },
                        {
                            field: "RemainValue",
                            title: $scope.content.RemainValue,
                            format: "{0:n0}",
                            sortable: true,
                            aggregates: ["sum"],
                            footerTemplate: " #=kendo.toString(sum, '0:n0')#",
                        },
                        {
                            field: "ClosePrice",
                            title: $scope.content.NAV,
                            format: "{0:n0}"
                            , sortable: true
                        }
                        ,
                        {
                            field: "AvgBookCost",
                            title: $scope.content.AverageBookCost,
                            format: "{0:n0}"
                            , sortable: true
                        }
                        ,
                        {
                            field: "PercentageOfTotalAssets",
                            title: $scope.content.PercentageOfTotalFundPositions,
                            format: "{0:n0}",
                            sortable: true,
                            aggregates: ["sum"],
                            footerTemplate: " #=kendo.toString(sum, '0:n0')#",
                        },
                        {
                            field: "ProfitOrLossOfCurrent",
                            title: $scope.content.ProfitOrLossOfCurrentpositions,
                            format: "{0:n0}",
                            sortable: false,
                            aggregates: ["sum"],
                            footerTemplate: " #=kendo.toString(sum, '0:n0')#",
                        },
                        {
                            field: "ProfitOrLossOfwithdraw",
                            title: $scope.content.ProfitOrLossOfwithdraws,
                            format: "{0:n0}"
                            , sortable: false,
                            aggregates: ["sum"],
                            footerTemplate: " #=kendo.toString(sum, '0:n0')#",
                        },
                        //{
                        //    field: "TotalProfitOrLoss",
                        //    title: "Total ProfitOr Loss",
                        //    format: "{0:n0}"
                        //    , sortable: false
                        //},
                        {
                            field: "Efficiency",
                            title: $scope.content.Efficiency,
                            format: "{0:n0}"
                            , sortable: false,
                            aggregates: ["sum"],
                            footerTemplate: " #=kendo.toString(sum, '0:n0')#",
                        }
                    ]
                });

            
        } else {
                    $scope.showCustomToast('0');
                }
            };
            
        });
})();