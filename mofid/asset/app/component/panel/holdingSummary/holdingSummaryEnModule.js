(function () {
    "use strict";
    angular
        .module('holdingSummaryEn', [])
        .config(routeconfig);

    function routeconfig($stateProvider) {
        $stateProvider.state('panel_en.holdingSummary', {
            url: '/holdingSummary',
            templateUrl: "asset/app/component/panel/holdingSummary/holdingSummaryEn.tpl.html",
        });
    }
    angular
        .module('holdingSummaryEn')
        .config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('docs-dark', 'default')
                .primaryPalette('yellow')
                .dark();
        });

    angular
        .module('holdingSummaryEn')
        .controller('holdingSummaryEnCtrl', function ($scope, $http, $state, $timeout) {
            $scope.ManagementTypeCode = '0';
            $scope.HoldingSummeryEnHoldingDate = moment(new Date()).add(-1, 'days').format('YYYY-MM-DD');
            

            $http({
                url: $scope.apiReference.getAssetTypes,
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
                    $state.go('loginEn', "");
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
                    "HoldingDate": $scope.HoldingSummeryEnHoldingDate
                };

                $("#PortfolioSummeryEnGrid1").kendoGrid({
                    toolbar: ["excel"],
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
                                    }
                                });
                            }
                        },
                        schema: {
                            data: "Result",
                            total: "TotalRecords",
                            model: {
                                fields: {
                                    ProductNameEn: "ProductNameEn",
                                    RemainValue: "RemainValue",
                                    ClosePrice: "ClosePrice",
                                    CouponAmount: "CouponAmount",
                                    NetAmount: "NetAmount",
                                    PercentageOfTotalAssets: "PercentageOfTotalAssets",
                                    AssetTypeEnTitle: "AssetTypeEnTitle"
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
                            title: $scope.content.ProductName
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
                            footerTemplate: $scope.content.Total + ": #=kendo.toString(sum, 'n')#",
                            groupFooterTemplate: $scope.content.sum + ": #= kendo.toString(sum, 'n')#",
                            format: "{0:n0}"
                        },
                        {
                            field: "PercentageOfTotalAssets",
                            title: $scope.content.PercentageOfTotalAssets,
                            format: "{0:n2}",
                            aggregates: ["sum"],
                            footerTemplate: $scope.content.Total + ": #=kendo.toString(sum, 'n2')#%",
                            groupFooterTemplate: $scope.content.sum + ": #=kendo.toString(sum, 'n2')#%"


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



