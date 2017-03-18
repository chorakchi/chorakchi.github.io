(function () {
    "use strict";
    angular
        .module('contributionsWithdrawalsFa', ['kendo.directives', 'ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
        .config(routeconfig);

    function routeconfig($stateProvider) {
        $stateProvider.state('panel_fa.contributionsWithdrawals', {
            url: '/contributionsWithdrawals',
            templateUrl: "asset/app/component/panel/contributionsWithdrawals/contributionsWithdrawalsFa.tpl.html"
        });
    }
    angular
        .module('contributionsWithdrawalsFa')
        .config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('docs-dark', 'default')
                .primaryPalette('yellow')
                .dark();
        });

    angular
        .module('contributionsWithdrawalsFa')
        .controller('contributionsWithdrawalsFaCtrl', function ($scope, $state, $timeout) {

            $("#fundTransactionMutualFundsAutoCom").kendoAutoComplete({
                dataSource: {
                    transport:
                        {
                            read: {
                                type: "GET",
                                dataType: "json",
                                contentType: "application/json; charset=utf-8",
                                url: $scope.apiReference.getMutualFunds,
                                data: AppControlFacility.onAdditionalData
                            },
                            prefix: ""
                        },
                    serverFiltering: true,
                    filter: [],
                    schema: {
                        data: "Result"
                    }
                },
                placeholder: $scope.content.SelectMutualFund,
                template: '<span>#: data.ProductNameFa #</span>',
                dataTextField: "ProductNameFa",
                dataValueField: "Isin",
                filter: "contains",
                select: AppControlFacility.onSelectDataItem,
                minLength: 3
            });

            $scope.FundTransactionEnDatePickerFrom = moment(new Date()).add(-10, 'days').format('jYYYY/jMM/jDD');
            $scope.FundTransactionEnDatePickerTo = moment(new Date()).add(-1, 'days').format('jYYYY/jMM/jDD');
            $scope.datepickerConfig = {
                allowFuture: false,
                dateFormat: 'jYYYY/jMM/jDD',
                gregorianDateFormat: 'YYYY-MM-DD',
                minDate: moment.utc('2015', 'YYYY')
            };

            $timeout(function () {
                $scope.getFundTransaction();
            }, 0);

            $scope.getFundTransaction = function () {
                if (true) {

                var isin = $("#fundTransactionMutualFundsAutoComHidden").val();
                var transactionType = [];
                var trade = $scope.fundTransactionEnTradeManagementType;
                switch (trade) {
                    case -1:
                        transactionType.push(15, 16);
                        break;
                    case 2:
                        transactionType.push(15);
                        break;
                    case 8:
                        transactionType.push(16);
                        break;
                    default:
                        transactionType.push(15, 16);
                }
                
                var filter = {
                    "Isin": isin,
                    "TransactionTypes": transactionType,
                    "DateFilter": {
                        "StartDate": moment($scope.FundTransactionEnDatePickerFrom, 'jYYYY/jMM/jDD').format('YYYY-MM-DD'),
                        "EndDate": moment($scope.FundTransactionEnDatePickerTo, 'jYYYY/jMM/jDD').format('YYYY-MM-DD')
                    }
                };
                $("#fundTransacionGrid1").kendoGrid({
                    toolbar: [{ name: 'excel', text: 'خروجی به اکسل' }],
                    excel: {
                        text: "test",
                        fileName: "FundTransactionEn.xlsx",
                        proxyURL: $scope.apiReference.gridExcelExport,
                        filterable: true,
                        forceProxy: true,
                        allPages: true
                    },
                    dataSource: {
                        transport: {
                            read: function (options) {
                                $.ajax({
                                    type: "POST",
                                    url: $scope.apiReference.getFundTransactions,
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
                                        for (var i = $("td").length; i >= 1; i--) {
                                            var temp = $("td").eq(i).text()
                                            if (temp === 'صدور') {
                                                $("td").eq(i).parent("tr").addClass("tablebuy");
                                                $("td").eq(i).parent("tr").children("td").eq(0).addClass("tablesellborder");


                                            } else if (temp === 'ابطال') {
                                                $("td").eq(i).parent("tr").addClass("tablesell");
                                                $("td").eq(i).parent("tr").children("td").eq(0).addClass("tablebuyborder");
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
                                    ProductNameEn: "ProductNameFa",
                                    Date: "Date",
                                    ConfirmDate: "ConfirmDate",
                                    TransactionTypeTitle: "TransactionTypeTitle",
                                    TransactionStatus: "TransactionStatus",
                                    Volume: "Volume",
                                    Price: "Price",
                                    Amount: "Amount",
                                    TotalFee: "TotalFee",
                                    TotalPrice: "TotalPrice",
                                    RemainCount: "RemainCount",
                                    AvgBoockCost: "AvgBoockCost"
                                }
                            }
                        },
                        pageSize: 20,
                        serverPaging: true,
                        serverSorting: true

                    },
                    height: 500,
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
                            title: $scope.content.ProductName
                        },
                        {
                            field: "Date",
                            title: $scope.content.OrderDate,
                            template: "#= Date == null ? '' : moment(kendo.toString(kendo.parseDate(Date, 'yyyy-MM-dd'), 'yyyy-MM-dd'), 'YYYY-M-D').format('jYYYY/jM/jD') #"
                        },
                        {
                            field: "ConfirmDate",
                            title: $scope.content.ConfirmDate,
                            template: "#= ConfirmDate == null ? '' : moment(kendo.toString(kendo.parseDate(ConfirmDate, 'yyyy-MM-dd'), 'yyyy-MM-dd'), 'YYYY-M-D').format('jYYYY/jM/jD') #"
                        },
                        {
                            field: "TransactionTypeTitle",
                            title: $scope.content.TransactionType,
                            template: "#= TransactionTypeTitle == 'UnitRedemption' ? 'ابطال' :  TransactionTypeTitle = 'صدور' #"
                        },
                        {
                            field: "TransactionStatus",
                            title: $scope.content.TransactionStatus,
                            template: "#= TransactionStatus == 'Confirmed' ? 'تایید شده' :  TransactionStatus = 'تایید نشده' #"
                        },
                        {
                            field: "Volume",
                            title: $scope.content.Volume,
                            format: "{0:n0}"

                        },
                        {
                            field: "AvgBoockCost",
                            title: $scope.content.AvgBoockCost,
                            format: "{0:n0}"

                        },
             {
                 field: "Price",
                 title: $scope.content.ContribiutionwithdrawPrice,
                 format: "{0:n0}"
             },
                        {
                            field: "TotalFee",
                            title: $scope.content.ContribiutionwithdrawFee,
                            format: "{0:n0}"
                        },
                        {
                            field: "TotalPrice",
                            title: $scope.content.TotalContribiutionwithdrawPrice,
                            format: "{0:n0}"
                        },
                              {
                                  field: "RemainCount",
                                  title: $scope.content.RemainCount,
                                  format: "{0:n0}"
                              }
                    ]
                });
            } else {
                $scope.showCustomToast('0');
            }

            };
            $scope.fundTransactionEnTradeManagementType = -1;
            $scope.monthSelectorOptions = {
                start: "year",
                depth: "year"
            };
            $scope.getType = function (x) {
                return typeof x;
            };
            $scope.isDate = function (x) {
                return x instanceof Date;
            };

        });
})();