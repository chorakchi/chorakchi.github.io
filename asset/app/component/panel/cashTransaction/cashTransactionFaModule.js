(function () {
    "use strict";
    angular
        .module('cashTransactionFa', ['kendo.directives', 'ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
        .config(routeconfig);

    function routeconfig($stateProvider) {
        $stateProvider.state('panel_fa.cashTransaction', {
            url: '/cashTransaction',
            templateUrl: "asset/app/component/panel/cashTransaction/cashTransactionFa.tpl.html",
            controller: 'cashTransactionFaCtrl'
        });
    }

    angular
        .module('cashTransactionFa')
        .config(function($mdThemingProvider) {
            $mdThemingProvider.theme('docs-dark', 'default')
                .primaryPalette('yellow')
                .dark();
        });

    angular
        .module('cashTransactionFa')
        .controller('cashTransactionFaCtrl', function ($scope, $state, $timeout) {
            $scope.ManagementTypeCode = '0';
            $scope.cashFlowDatePickerFrom = moment(new Date()).add(-60, 'days').format('jYYYY/jMM/jDD');
            $scope.cashFlowDatePickerTo = moment(new Date()).add(-1, 'days').format('jYYYY/jMM/jDD');
            $scope.datepickerConfig = {
                allowFuture: false,
                dateFormat: 'jYYYY/jMM/jDD',
                gregorianDateFormat: 'YYYY-MM-DD',
                minDate: moment.utc('2015', 'YYYY')
            };

            $scope.cashFlowTransactionType = 1000;

            $timeout(function () {
                $scope.cashFlowGenerate();
            }, 0);
            $scope.cashFlowGenerate = function () {
                if ($scope.Form.managementTypeCode.$valid) {
                    $("#cashTransactionGrid1").kendoGrid({
                        toolbar: [{ name: 'excel', text: 'خروجی به اکسل' }],
                        excel: {
                            text: "test",
                            fileName: "CashFlowFa.xlsx",
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
                                        url: $scope.apiReference.getCashFlows,
                                        data: {
                                            ReportFilter: {
                                                "TransactionTypes": [
                                                    $scope.cashFlowTransactionType
                                                ],
                                                "DateFilter": {
                                                    "StartDate": moment($scope.cashFlowDatePickerFrom,'jYYYY/jMM/jDD').format('YYYY-MM-DD'),
                                                    "EndDate": moment($scope.cashFlowDatePickerTo, 'jYYYY/jMM/jDD').format('YYYY-MM-DD')
                                                },
                                                "ContractType": $scope.ManagementTypeCode
                                            },
                                            optionalFilter: options.data
                                        },
                                        dataType: "json",
                                        headers: {
                                            'Authorization': 'Bearer ' + key
                                        },
                                        success: function (result) {
                                            if (result.Message != "1000") { $scope.showCustomToast(result.Message); }
                                            options.success(result);

                                            for (var i = $("td").length; i >= 1; i-- ){
                                                var temp = $("td").eq(i).text()
                                            if (temp[0] === '-') {
                                                $("td").eq(i).addClass("redcolorbracket");
                                                $("td").eq(i).text(temp.slice(1));
                                            }
                                            }
                                            
                                        },
                                        error: function (xhr, ajaxOptions, thrownError) {
                                            if (xhr.status === 401) {
                                                key = null;
                                                $state.go('loginFa', "");
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
                                        Amount: "Amount",
                                        Balance: "Balance",
                                        Date: "Date",
                                        TransactionTypeEnumTitle: "TransactionTypeEnumTitle",
                                        TicketNumber: "TicketNumber",
                                        ConfirmDate: "ConfirmDate"
                                    }
                                }
                            },
                            pageSize: 20,
                            serverPaging: true,
                            serverSorting: true
                        },
                        autoBind: true,
                        sortable: true,
                        pageable: {
                            refresh: true,
                            pageSizes: [5, 10, 20, 50, 100],
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
                                field: "Date",
                                title: $scope.content.Date,
                                template: "#= moment(kendo.toString(kendo.parseDate(Date, 'yyyy-MM-dd'), 'yyyy-MM-dd'), 'YYYY-M-D').format('jYYYY/jM/jD') #"
                            },
                            {
                                field: "TransactionTypeEnumTitle",
                                title: $scope.content.TransactionType,
                                template: "#= TransactionTypeEnumTitle == 'CashInflow' ? 'واریز نقدی' :  TransactionTypeEnumTitle = 'برداشت نقدی' #"
                            },
                            {
                                field: "Amount",
                                title: $scope.content.Amount,
                                format: "{0:n0}"
                            },
                            {
                                field: "Balance",
                                title: $scope.content.Balance,
                                format: "{0:n0}"
                            },
                        ]
                    });

            } else {
                $scope.showCustomToast('0');
            }
            };


        });
})();