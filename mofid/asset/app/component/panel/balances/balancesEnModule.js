

(function () {
    "use strict";
    angular
        .module('balancesEn', [])
        .config(routeconfig);



    function routeconfig($stateProvider) {
        $stateProvider.state('panel_en.balances', {
            url: '/balances',
            templateUrl: "asset/app/component/panel/balances/balancesEn.tpl.html"
        });
    }
    angular
        .module('balancesEn')
        .config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('docs-dark', 'default')
                .primaryPalette('yellow')
                .dark();
        });

    angular
        .module('balancesEn')
        .controller('balancesEnCtrl', function ($scope, $http, $state, loader, $timeout) {
            $scope.ManagementTypeCode = '0';
            $scope.PortfolioBalanceEnStartDate = moment(new Date()).add(-10, 'days').format('YYYY-MM-DD');
            $scope.PortfolioBalanceEnEndDate = moment(new Date()).add(-1, 'days').format('YYYY-MM-DD');

            $http({
                url: $scope.apiReference.getPortfolioBlanceInPeriod,
                method: "POST",
                data: {
                    "ReportFilter": {
                    }
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + key
                }
            }).success(function (data, status, headers, config) {
                var temparr = [], dataarr = [];
                var categories = [];
                for (var prop1 in data.Result) {
                    categories.push(data.Result[prop1].Date);
                    temparr = []
                    temparr.push(data.Result[prop1].Date);
                    temparr.push(data.Result[prop1].Value);
                    dataarr.push(temparr);
                }
                Highcharts.chart('line15', {
                    chart: {
                        zoomType: 'x'
                    },
                    title: {
                        text: $scope.content.NetAsasetValueChange
                    },

                    xAxis: {
                        categories:categories
                    },
                    yAxis: {
                        title: {
                            text: $scope.content.Balance
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
                        name: 'Net Value',
                        data: dataarr
                    }]
                });
            }).error(function (data, status, headers, config) {
                if (status === 401) {
                    key = null;
                    $state.go('loginEn', "");
                    delete $localStorage.key;
                }
            });

            $timeout(function () {
                $scope.PortfolioBalanceGenerate();
            }, 0);

            $scope.PortfolioBalanceGenerate = function () {
                if ($scope.Form.managementTypeCode.$valid && $scope.Form.fromData.$valid && $scope.Form.toDate.$valid) {
                    $("#PortfolioBalanceEnGrid1").kendoGrid({
                        toolbar: ["excel"],
                        excel: {
                            text: "test",
                            fileName: "BalanceEn.xlsx",
                            proxyURL: $scope.apiReference.gridExcelExport,
                            filterable: true,
                            forceProxy: true,
                            allPages: true,
                            language: 1
                        },
                        dataSource: {
                            transport: {
                                read: function (options) {
                                    $.ajax({
                                        type: "POST",
                                        url: $scope.apiReference.getPortfolioBlance,
                                        headers: {
                                            'Authorization': 'Bearer ' + key
                                        },
                                        data: {
                                            ReportFilter: {
                                                "ContractType": $scope.ManagementTypeCode,
                                                "DateFilter": {
                                                    "StartDate": $scope.PortfolioBalanceEnStartDate,
                                                    "EndDate": $scope.PortfolioBalanceEnEndDate
                                                }
                                            },
                                            optionalFilter: options.data
,
                                            dataType: "json",  
                                        },
                                        success: function (result) {
                                            if (result.Message != "1000") { $scope.showCustomToast(result.Message); }
                                            options.success(result);
                                        }
                                    });
                                }
                            },
                            schema: {
                                data: "Result",
                                total: "TotalRecords",
                                model: {
                                    fields: {
                                        BalanceAccountName: "BalanceAccountName",
                                        BeginDayNetValue: "BeginDayNetValue",
                                        CashContributions: "CashContributions",
                                        CashWithdrawals: "CashWithdrawals",
                                        EndDayNetValue: "EndDayNetValue"
                                    }
                                }
                            },
                            pageSize: 100,
                            aggregate: [
                                { field: "BeginDayNetValue", aggregate: "sum" }, { field: "CashContributions", aggregate: "sum" }, { field: "CashWithdrawals", aggregate: "sum" },
                                { field: "EndDayNetValue", aggregate: "sum" }
                            ],

                            serverPaging: true,
                            serverSorting: true
                        },
                        autoBind: true,
                        sortable: true,
                        groupable: false,
                        height: 250,
                        pageable: {
                            refresh: false,
                            input: false
                            //autoBind: false,
                        },
                        allowCopy: true,
                        selectable: {
                            mode: "GridSelectionMode.Multiple",
                            type: "GridSelectionType.Row"
                        },
                        columns: [
                            {
                                field: "BalanceAccountName",
                                title: $scope.content.BalanceAccountName,
                                footerTemplate: $scope.content.sum,

                            },
                            {
                                field: "BeginDayNetValue",
                                title: $scope.content.BeginDayNetValue,
                                footerTemplate: "#=kendo.toString(sum, 'n')#",
                                format: "{0:n0}"
                            },
                            {
                                field: "CashContributions",
                                title: $scope.content.CashContributions,
                                footerTemplate: "#=kendo.toString(sum, 'n')#",
                                format: "{0:n0}"
                            },
                            {
                                field: "CashWithdrawals",
                                title: $scope.content.CashWithdrawals,
                                footerTemplate: "#=kendo.toString(sum, 'n')#",
                                format: "{0:n0}"
                            },
                            {
                                field: "EndDayNetValue",
                                title: $scope.content.EndDayNetValue,
                                aggregates: ["sum"],
                                footerTemplate: "#=kendo.toString(sum, 'n')#",
                                format: "{0:n0}"
                            }
                        ]
                    });
                } else {
                    $scope.showCustomToast('0');
                }
            };

            $scope.getBalancesEn =  function () {
                
            };

        });
})();



