(function () {
    "use strict";
    angular
        .module('cashTransactionEn', ['kendo.directives', 'ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
        .config(routeconfig);

    function routeconfig($stateProvider) {
        $stateProvider.state('panel_en.cashTransaction', {
            url: '/cashTransaction',
            templateUrl: "asset/app/component/panel/cashTransaction/cashTransactionEn.tpl.html",
            controller: 'cashTransactionEnCtrl'
        });
    }

    angular
        .module('cashTransactionEn')
        .config(function($mdThemingProvider) {
            $mdThemingProvider.theme('docs-dark', 'default')
                .primaryPalette('yellow')
                .dark();
        });

    angular
        .module('cashTransactionEn')
        .controller('cashTransactionEnCtrl', function ($scope, $state, $timeout) {
            $scope.ManagementTypeCode = '0';
            $scope.cashFlowDatePickerFrom = moment(new Date()).add(-60, 'days').format('YYYY-MM-DD');
            $scope.cashFlowDatePickerTo = moment(new Date()).add(-1, 'days').format('YYYY-MM-DD');
            $scope.cashFlowTransactionType = 1000;
            $timeout(function () {
                $scope.cashFlowGenerate();
            }, 0);
            $scope.cashFlowGenerate = function () {
                if ($scope.Form.managementTypeCode.$valid && $scope.Form.fromData.$valid && $scope.Form.toDate.$valid) {
                    $("#cashTransactionGrid1").kendoGrid({
                        toolbar: ["excel"],
                        excel: {
                            text: "test",
                            fileName: "CashFlowEn.xlsx",
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
                                                    "StartDate": $scope.cashFlowDatePickerFrom,
                                                    "EndDate": $scope.cashFlowDatePickerTo
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
                                template: "#= kendo.toString(kendo.parseDate(Date, 'yyyy-MM-dd'), 'yyyy-MM-dd') #"
                            },
                            {
                                field: "TransactionTypeEnumTitle",
                                title: $scope.content.TransactionType
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