(function () {
    "use strict";
    angular
        .module('stockDividendsFa', ['kendo.directives', 'ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
        .config(routeconfig);

    function routeconfig($stateProvider) {
        $stateProvider.state('panel_fa.stockDividends', {
            url: '/stockDividends',
            templateUrl: "asset/app/component/panel/stockDividends/stockDividendsFa.tpl.html",
        });
    }

    angular
        .module('stockDividendsFa')
        .config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('docs-dark', 'default')
                .primaryPalette('yellow')
                .dark();
        });

    angular
        .module('stockDividendsFa')
        .controller('stockDividendsFaCtrl', function ($scope, $state, $timeout) {

            $scope.cashDividendListDatePickerFrom = moment(new Date()).add(-60, 'days').format('jYYYY/jMM/jDD');
            $scope.cashDividendListDatePickerTo = moment(new Date()).add(-1, 'days').format('jYYYY/jMM/jDD');
            $scope.datepickerConfig = {
                allowFuture: false,
                dateFormat: 'jYYYY/jMM/jDD',
                gregorianDateFormat: 'YYYY-MM-DD',
                minDate: moment.utc('2015', 'YYYY')
            };

            $("#cashDividendListDividendAmountOperator").kendoComboBox({
                dataTextField: "ConditionTypeTitle",
                dataValueField: "ConditionTypeCode",
                index: 2,
                dataSource: {
                    transport:
                    {
                        read: {
                            type: "GET",
                            dataType: "json",
                            contentType: "application/json; charset=utf-8",
                            url: $scope.apiReference.getOperatorTypes
                        },
                        prefix: ""
                    },
                    filter: [],
                    schema: {
                        data: "Result"
                    }
                },
                filter: "contains",
                suggest: true,
                select: AppControlFacility.onSelectDataItem
            });

            $timeout(function () {
                $scope.cashDividendListGenerate();
            }, 0);

            $scope.cashDividendListGenerate = function () {
                if (true) {
                    $("#cashDividendListGrid1").kendoGrid({
                        toolbar: [{ name: 'excel', text: 'خروجی به اکسل' }],
                        excel: {
                            text: "test",
                            fileName: "StockDividendsEn.xlsx",
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
                                                "DividendStatus": $scope.cashDividendListReceiveType,
                                                "StockProfit": $scope.cashDividendListDividendAmount,
                                                "StockProfitOperatorCriteria": $("#cashDividendListDividendAmountOperatorComboBoxHidden").val(),
                                                "Language": 1,
                                                "Isin": $("#cashDividendListProductAutoComHidden").val(),
                                                "DateFilter": {
                                                    "StartDate": moment($scope.cashDividendListDatePickerFrom,'jYYYY/jMM/jDD').format('YYYY-MM-DD'),
                                                    "EndDate": moment($scope.cashDividendListDatePickerTo, 'jYYYY/jMM/jDD').format('YYYY-MM-DD'),
                                                },
                                                "ContractType": 5
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
                                        ProductTitle: "ProductNameFa",
                                        ProductSymbol: "ProductSymbolFa",
                                        CorporationActionDate: "CurrentCorporateActionDate",
                                        StockAmount: "StockAmount",
                                        StockProfit: "CurrentStockProfit",
                                        TotalStockProfit: "TotalStockProfit",
                                        ProfitReveicedDate: "TransactionDate",
                                        Status: "StatusTitleFa"
                                    }
                                }
                            },
                            pageSize: 20,
                            aggregate: [
                                              { field: "TotalStockProfit", aggregate: "sum" }
                            ],
                            serverPaging: true,
                            serverSorting: true
                        },
                        columnMenu: true,
                        height: 450,
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
                                field: "ProductTitle",
                                title: $scope.content.ProductName,
                                footerTemplate: $scope.content.Total
                            },
                            {
                                field: "ProductSymbol",
                                title: $scope.content.Symbol
                            },
                            {
                                field: "CorporationActionDate",
                                title: $scope.content.Date,
                                template: "#= CorporationActionDate == null ? '' : moment(kendo.toString(kendo.parseDate(CorporationActionDate, 'yyyy-MM-dd'), 'yyyy-MM-dd'), 'YYYY-M-D').format('jYYYY/jM/jD') #"
                            },
                            {
                                field: "StockAmount",
                                title: $scope.content.StockAmount,
                                format: "{0:n0}"
                            },
                            {
                                field: "StockProfit",
                                title: $scope.content.StockProfit,
                                format: "{0:n0}"
                            },
                            {
                                field: "TotalStockProfit",
                                title: $scope.content.TotalStockProfit,
                                format: "{0:n0}",
                                aggregates: ["sum"],
                                footerTemplate: " #=kendo.toString(sum, '0:n0')#",
                            },
                            {
                                field: "ProfitReveicedDate",
                                title: $scope.content.ReceivedDate,
                                template: "#= ProfitReveicedDate == null ? '' : moment(kendo.toString(kendo.parseDate('2017/03/01', 'yyyy/MM/dd'), 'yyyy-MM-dd'), 'YYYY-M-D').format('jYYYY/jM/jD')#"
                            },
                            {
                                field: "Status",
                                title: $scope.content.Status
                            }
                        ]
                    });
            } else {
                $scope.showCustomToast('0');
            }
            };
            
            $scope.cashDividendListReceiveType = 3;
            $scope.cashDividendListDividendAmount = 0;
            $scope.cashDividendListProductAutoCom = {
                dataSource: {
                    transport:
                    {
                        read: {
                            type: "GET",
                            dataType: "json",
                            contentType: "application/json; charset=utf-8",
                            url: $scope.apiReference.getSimpleProducts,
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
                placeholder: $scope.content.SelectProducts,
                template: '<span>#: data.SymbolFa # --- #: data.ProductNameFa  #</span>',
                dataTextField: "SymbolFa",
                dataValueField: "Isin",
                filter: "contains",
                select: AppControlFacility.onSelectDataItem,
                minLength: 3
            };
        });
})();

