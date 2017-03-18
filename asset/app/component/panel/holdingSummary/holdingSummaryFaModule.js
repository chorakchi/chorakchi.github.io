(function () {
    "use strict";
    angular
        .module('holdingSummaryFa', [])
        .config(routeconfig);

    function routeconfig($stateProvider) {
        $stateProvider.state('panel_fa.holdingSummary', {
            url: '/holdingSummary',
            templateUrl: "asset/app/component/panel/holdingSummary/holdingSummaryFa.tpl.html",
        });
    }
    angular
        .module('holdingSummaryFa')
        .config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('docs-dark', 'default')
                .primaryPalette('yellow')
                .dark();
        });

    angular
        .module('holdingSummaryFa')
        .controller('holdingSummaryFaCtrl', function ($scope, $http, $state, $timeout) {
            $scope.ManagementTypeCode = '0';
            $scope.HoldingSummeryEnHoldingDate = moment(new Date()).add(-1, 'days').format('jYYYY/jMM/jDD');
            $scope.datepickerConfig = {
                allowFuture: false,
                dateFormat: 'jYYYY/jMM/jDD',
                gregorianDateFormat: 'YYYY-MM-DD',
                minDate: moment.utc('2015', 'YYYY')
            };
            

            $http({
                url: $scope.apiReference.getAssetTypesFa,
                method: "GET"
            }).success(function (data, status, headers, config) {
                $scope.holdingSumeryReportEnAssetTypesResult = data.Result;
                var holdingSumeryReportEnAssetTypeDataSource = new kendo.data.ObservableArray($scope.holdingSumeryReportEnAssetTypesResult);

                $scope.dropOptionsHoldingSumeryReportEnAssetType = {
                    dataSource: holdingSumeryReportEnAssetTypeDataSource,
                    dataTextField: 'AssetTypeTitle',
                    dataValueField: 'AssetTypeCode',
                    index: 4
                };
            }).error(function (data, status, headers, config) {
                if (status === 401) {
                    key = null;
                    $state.go('loginFa', "");
                    delete $localStorage.key;
                }
            });

            $timeout(function () {
                $scope.HoldingSummeryReportEnGenerate();
            }, 0);

            $scope.HoldingSummeryReportEnGenerate = function () {
                if ($scope.Form.managementTypeCode.$valid && $scope.Form.date.$valid) {
                var filter = {
                    "ContractType": $scope.ManagementTypeCode,
                    "AssetType": $scope.holdingAssetType.id,
                    "HoldingDate": moment($scope.HoldingSummeryEnHoldingDate,'jYYYY/jMM/jDD').format('YYYY-MM-DD'),
                };

                $("#PortfolioSummeryEnGrid1").kendoGrid({
                    toolbar: [{ name: 'excel', text: 'خروجی به اکسل' }],
                    excel: {
                        text: "test",
                        fileName: "HoldingSummeryEn.xlsx",
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
                                    url: $scope.apiReference.getHoldings,
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
                                            if (temp[0] === '-') {
                                                $("td").eq(i).addClass("redcolorbracket");
                                                $("td").eq(i).text(temp.slice(1));
                                            }
                                        }
                                        for (var i = $("td").length; i >= 1; i--) {
                                            var temp = $("td").eq(i).text()
                                            if (temp.includes("-")) {
                                                $("td").eq(i).addClass("redcolorbracket");
                                                $("td").eq(i).text(temp.replace("-", ""));
                                            }
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
                                    ClosePrice: "ClosePrice",
                                    CouponAmount: "CouponAmount",
                                    NetAmount: "NetAmount",
                                    PercentageOfTotalAssets: "PercentageOfTotalAssets",
                                    AssetTypeEnTitle: "AssetTypeFaTitle"
                                }
                            }
                        },
                        pageSize: 100,
                        group: {
                            field: "AssetTypeEnTitle",
                            aggregates: [
                                { field: "NetAmount", aggregate: "sum" },
                                { field: "PercentageOfTotalAssets", aggregate: "sum" },

                            ],
                            dir: "desc"
                        }, aggregate: [
                                                  { field: "NetAmount", aggregate: "sum" },
                                                  { field: "PercentageOfTotalAssets", aggregate: "sum" }

                        ],

                        serverPaging: true,
                        serverSorting: true
                    },
                    autoBind: true,
                    sortable: true,
                    groupable: false,
                    height: 510,
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
                            field: "AssetTypeEnTitle",
                            title: "Asset Type En Title",
                            hidden: true,
                            groupHeaderTemplate: "#=value#"
                        },

                        {
                            field: "ProductNameEn",
                            title: $scope.content.ProductName,
                            footerTemplate: $scope.content.Total,
                            groupFooterTemplate: $scope.content.sum,
                        },
                        {
                            field: "RemainValue",
                            title: $scope.content.RemainValue,
                            format: "{0:n0}"
                        },
                        {
                            field: "ClosePrice",
                            title: $scope.content.Price,
                            format: "{0:n0}"
                        },
                        {
                            field: "CouponAmount",
                            title: $scope.content.CouponAmount,
                            format: "{0:n0}"
                        },
                        {
                            field: "NetAmount",
                            title: $scope.content.NetAmount,
                            aggregates: ["sum"],
                            footerTemplate: ": #=kendo.toString(sum, 'n')#",
                            groupFooterTemplate:  " #= kendo.toString(sum, 'n')#",
                            format: "{0:n0}"
                        },
                        {
                            field: "PercentageOfTotalAssets",
                            title: $scope.content.PercentageOfTotalAssets,
                            format: "{0:n2}",
                            Template: " #=kendo.toString(PercentageOfTotalAssets, 'n2')#%",
                            aggregates: ["sum"],
                            footerTemplate: ": #=kendo.toString(sum, 'n2')#%",
                            groupFooterTemplate:  " #=kendo.toString(sum, 'n2')#%"


                                }
                            ]
                        });
                    } else {
                        $scope.showCustomToast('0');
                    }
                };
                $scope.holdingAssetType = 0;
                $scope.holdingAssetCode = 1000;
            });
})();



