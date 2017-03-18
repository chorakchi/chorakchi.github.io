



(function () {
    "use strict";
    angular
        .module('receivableDividendsEn', ['kendo.directives', 'ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
        .config(routeconfig);

    function routeconfig($stateProvider) {
        $stateProvider.state('panel_en.receivableDividends', {
            url: '/receivableDividends',
            templateUrl: "asset/app/component/panel/receivableDividends/receivableDividendsEn.tpl.html",
            controller: 'receivableDividendsEnCtrl'
        });
    }

    angular
        .module('receivableDividendsEn')
        .config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('docs-dark', 'default')
                .primaryPalette('yellow')
                .dark();
        });

    angular
        .module('receivableDividendsEn')
        .controller('receivableDividendsEnCtrl', function ($scope, $state, $timeout) {

            $scope.unreceivedCashDividendListDatePickerTo = moment(new Date()).add(-1, 'days').format('YYYY-MM-DD');

            $timeout(function () {
                $scope.unreceivedCashDividendListGenerate();
            }, 0);

            $scope.unreceivedCashDividendListGenerate = function () {
                if ($scope.Form.date.$valid) {
                    

                    $("#receivableDividendsGrid1").kendoGrid({
                        toolbar: ["excel"],
                        excel: {
                            text: "test",
                            fileName: "ReceivableCashDividendsEn.xlsx",
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
                                        url: $scope.apiReference.getCorporateActions,
                                        data: {
                                            ReportFilter: {
                                                "CorporateActionType": 1,
                                                "DividendStatus": 2,
                                                "Language": 1,
                                                "DateFilter": {
                                                    "StartDate": '2016-05-21',
                                                    "EndDate": $scope.unreceivedCashDividendListDatePickerTo
                                                },
                                                "ContractType": 5,
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

                                        },
                                        error: function (xhr, ajaxOptions, thrownError) {
                                            if (xhr.status === 401) {
                                                key = null;
                                                $state.go('loginEn', "");
                                                delete $localStorage.key;
                                            }
                                        }
                                    });
                                },
                                update: function (options) {
                                    $.ajax({
                                        type: "POST",
                                        url: $scope.apiReference.saveCorporateActionSecurityTransaction,
                                        data:
                                        {
                                            ReportFilter: {
                                                "CorporateActionId": options.data.models[0].CurrentId,
                                                "Date": $scope.getDateForrmat(options.data.models[0].TransactionDate),
                                                "ContractType": 5,
                                                "Status": options.data.models[0].StatusTitle
                                            }
                                        },
                                        dataType: "json",
                                        headers: {
                                            'Authorization': 'Bearer ' + key
                                        },
                                        success: function (result) {

                                            options.success(result);
                                            $("#receivableDividendsGrid1").data("kendoGrid").dataSource.read();
                                        }
                                    });
                                }
                            },
                            schema: {
                                data: "Result",
                                total: "TotalRecords",
                                model: {
                                    id: "CurrentId",
                                    fields: {
                                        ProductNameEn: { field: "ProductNameEn", editable: false, validation: { required: true } },
                                        ProductSymbolEn: { field: "ProductSymbolEn", editable: false },
                                        CurrentCorporateActionDate: { field: "CurrentCorporateActionDate", editable: false },
                                        StockAmount: { field: "StockAmount", editable: false },
                                        CurrentStockProfit: { field: "CurrentStockProfit", editable: false },
                                        TotalStockProfit: { field: "TotalStockProfit", editable: false },
                                        TransactionDate: "TransactionDate",
                                        Status: "StatusTitleEn"
                                    }
                                }
                            },
                            batch: true,
                            pageSize: 20,
                            aggregate: [
                                              { field: "TotalStockProfit", aggregate: "sum" }
                            ],
                            serverPaging: true,
                            serverSorting: true
                        },
                        height: 540,
                        autoBind: true,
                        columnMenu: true,
                        sortable: true,
                        editable: "inline",
                        scrollable: true,
                        pageable: {
                            refresh: true,
                            pageSizes: [10, 20, 50, 100],
                            buttonCount: 20,
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
                                footerTemplate: $scope.content.Total
                            },
                            {
                                field: "ProductSymbolEn",
                                title: $scope.content.Symbol
                            },
                            {
                                field: "CurrentCorporateActionDate",
                                title: $scope.content.Date,
                                template: "#= CurrentCorporateActionDate == null ? '' : kendo.toString(kendo.parseDate(CurrentCorporateActionDate, 'yyyy-MM-dd'), 'yyyy-MM-dd') #"
                            },
                            {
                                field: "StockAmount",
                                title: $scope.content.StockAmount,
                                format: "{0:n0}"
                            },
                            {
                                field: "CurrentStockProfit",
                                title: $scope.content.StockProfit,
                                format: "{0:n0}"
                            },
                            {
                                field: "TotalStockProfit",
                                title: $scope.content.TotalStockProfit,
                                format: "{0:n0}", aggregates: ["sum"],
                                footerTemplate: " #=kendo.toString(sum, '0:n0')#",
                            },
                            {
                                field: "TransactionDate",
                                title: $scope.content.ReceivedDate,
                                width: "200px",
                                editor: $scope.unreceivedCashDividendTransactionDatesDatePickerEditor
                            },
                            {
                                field: "Status",
                                title: $scope.content.Status,
                                editor: $scope.unreceivedCashDividendStatusDropDownEditor,
                                hidden: true,

                            },
                            { command: ["edit"], title: "&nbsp;", width: "250px" }
                        ]
                    });



                    $.ajax({
                        type: "POST",
                        url: $scope.apiReference.getCorporateActions,
                        data: {
                            "ReportFilter": {
                                "CorporateActionType": 1,
                                "DividendStatus": 2,
                                "Language": 1,
                                "DateFilter": {
                                    "StartDate": '2016-05-21',
                                    "EndDate": $scope.unreceivedCashDividendListDatePickerTo
                                },
                                "ContractType": 5,
                            },
                            "OptionalFilter": {
                                "take": 2147483640,
                                "skip": 0,
                                "page": 1
                            }
                        },
                        dataType: "json",
                        headers: {
                            'Authorization': 'Bearer ' + key
                        },
                        success: function (result) {
                            var unreceivedCashDividendArr = [];
                            var unreceivedCashDividendObj = {};
                            for (var prop1 in result.Result) {
                                unreceivedCashDividendObj = null;
                                unreceivedCashDividendObj = {
                                    'name': result.Result[prop1].ProductNameEn,
                                    'y': result.Result[prop1].TotalStockProfit
                                };
                                unreceivedCashDividendArr.push(unreceivedCashDividendObj);
                            }

                            Highcharts.chart('pie2', {
                                chart: {
                                    plotBackgroundColor: null,
                                    plotBorderWidth: null,
                                    plotShadow: false,
                                    type: 'pie'
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
                                    name: 'Brands',
                                    colorByPoint: true,
                                    data: unreceivedCashDividendArr
                                }]
                            });

                        }
                    });

            } else {
                $scope.showCustomToast('0');
            }
            };



            $scope.unreceivedCashDividendTransactionDatesDatePickerEditor = function (container, options) {
                options.format = 'yyyy-MM-dd';
                $('<input data-text-field="' + options.field + '" data-value-field="' + options.field + '" data-bind="value:' + options.field + '" data-format="' + options.format + '"/>')
                .appendTo(container)
                    .kendoDatePicker({
                        format: 'yyyy-MM-dd',
                        min: new Date(2016, 4, 21)
                    });
            }
            
            $scope.unreceivedCashDividendStatusDropDownEditor = function(container, options) {
                $('<input data-text-field="CorporateActionStatusTitle" data-value-field="CorporateActionStatusCode" data-bind="value:' + options.field + '"/>')
                    .appendTo(container)
                    .kendoDropDownList({
                        autoBind: false,
                        dataTextField: "CorporateActionStatusTitle",
                        dataValueField: "CorporateActionStatusCode",
                        dataSource: {
                            type: "json",
                            transport: {
                                read: $scope.apiReference.getCashDividendStatus
                            },
                            schema: {
                                data: "Result"
                            }
                        }
                    });
            }

            $scope.getDateForrmat = function(givenDate) {
                var stringDate = givenDate.toString();
                var monthName = stringDate.substring(4, 7);
                var month = 0;
                if (monthName === "Jan")
                    month = 1;
                else if (monthName === "Feb")
                    month = 2;
                else if (monthName === "Mar")
                    month = 3;
                else if (monthName === "Apr")
                    month = 4;
                else if (monthName === "May")
                    month = 5;
                else if (monthName === "Jun")
                    month = 6;
                else if (monthName === "Jul")
                    month = 7;
                else if (monthName === "Aug")
                    month = 8;
                else if (monthName === "Sep")
                    month = 9;
                else if (monthName === "Oct")
                    month = 10;
                else if (monthName === "Nov")
                    month = 11;
                else if (monthName === "Dec")
                    month = 12;
                var day = stringDate.substring(8, 10);
                var year = stringDate.substring(11, 15);

                var res = year + "-" + month + "-" + day;
                return res;
            }

        });
})();

