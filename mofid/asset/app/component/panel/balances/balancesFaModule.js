

(function () {
    "use strict";
    angular
        .module('balancesFa', [])
        .config(routeconfig);



    function routeconfig($stateProvider) {
        $stateProvider.state('panel_fa.balances', {
            url: '/balances',
            templateUrl: "asset/app/component/panel/balances/balancesFa.tpl.html"
        });
    }
    angular
        .module('balancesFa')
        .config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('docs-dark', 'default')
                .primaryPalette('yellow')
                .dark();
        });

    angular
        .module('balancesFa')
        .controller('balancesFaCtrl', function ($scope, $http, $state, loader, $timeout) {
            $scope.ManagementTypeCode = '0';
            $scope.PortfolioBalanceEnStartDate = moment(new Date()).add(-10, 'days').format('jYYYY/jMM/jDD');
            $scope.PortfolioBalanceEnEndDate = moment(new Date()).add(-1, 'days').format('jYYYY/jMM/jDD');
            $scope.datepickerConfig = {
                allowFuture: false,
                dateFormat: 'jYYYY/jMM/jDD',
                gregorianDateFormat: 'YYYY-MM-DD',
                minDate: moment.utc('2015', 'YYYY')
            };

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
                    categories.push(moment(data.Result[prop1].Date, 'D-M-YYYY').format('jYYYY/jM/jD'));
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
                    $state.go('loginFa', "");
                    delete $localStorage.key;
                }
            });

            $timeout(function () {
                $scope.PortfolioBalanceGenerate();
            }, 0);

            $scope.PortfolioBalanceGenerate = function () {
                if ($scope.Form.managementTypeCode.$valid) {
                    $("#PortfolioBalanceEnGrid1").kendoGrid({
                        toolbar: [{ name: 'excel', text: 'خروجی به اکسل' }],
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
                                                    "StartDate": moment($scope.PortfolioBalanceEnStartDate,'jYYYY/jMM/jDD').format('YYYY-MM-DD'),
                                                    "EndDate":  moment($scope.PortfolioBalanceEnEndDate, 'jYYYY/jMM/jDD').format('YYYY-MM-DD')
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
                                        BalanceAccountName: "BalanceAccountNameFa",
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
                                footerTemplate: "#=kendo.toString(sum, '0:n0')#",
                                format: "{0:n0}"
                            },
                            {
                                field: "CashContributions",
                                title: $scope.content.CashContributions,
                                footerTemplate: "#=kendo.toString(sum, '0:n0')#",
                                format: "{0:n0}"
                            },
                            {
                                field: "CashWithdrawals",
                                title: $scope.content.CashWithdrawals,
                                footerTemplate: "#=kendo.toString(sum, '0:n0')#",
                                format: "{0:n0}"
                            },
                            {
                                field: "EndDayNetValue",
                                title: $scope.content.EndDayNetValue,
                                aggregates: ["sum"],
                                footerTemplate: "#=kendo.toString(sum, '0:n0')#",
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



