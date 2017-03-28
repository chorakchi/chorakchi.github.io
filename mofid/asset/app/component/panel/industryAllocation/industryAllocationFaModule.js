(function () {
    "use strict";
    angular
        .module('industryAllocationFa', [])
        .config(routeconfig);

    function routeconfig($stateProvider) {
        $stateProvider.state('panel_fa.industryAllocation', {
            url: '/industryAllocation',
            templateUrl: "asset/app/component/panel/industryAllocation/industryAllocationFa.tpl.html"
        });
    }
    angular
        .module('industryAllocationFa')
        .config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('docs-dark', 'default')
                .primaryPalette('yellow')
                .dark();
        });

    angular
        .module('industryAllocationFa')
        .controller('industryAllocationFaCtrl', function ($scope, $http, $state, $timeout) {
            $scope.ManagementTypeCode = '0';
            $scope.industryAllocationDate = moment(new Date()).add(-1, 'days').format('jYYYY/jMM/jDD');
            $scope.datepickerConfig = {
                allowFuture: false,
                dateFormat: 'jYYYY/jMM/jDD',
                gregorianDateFormat: 'YYYY-MM-DD',
                minDate: moment.utc('2015', 'YYYY')
            };

            $timeout(function () {
                $scope.industryAllocationReportEnGenerate();
            }, 0);

            $scope.industryAllocationReportEnGenerate = function () {
                if ($scope.Form.managementTypeCode.$valid && $scope.Form.date.$valid) {
                var filter = {
                     "ContractType": $scope.ManagementTypeCode,
                     "Date": moment($scope.industryAllocationDate, 'jYYYY/jMM/jDD').format('YYYY-MM-DD'),
                };
                $("#industryAllocationGrid1").kendoGrid({
                    toolbar: [{name: 'excel', text: 'خروجی به اکسل'}],
                    excel: {

                        fileName: "IndustryAllocationFa.xlsx",
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
                                    url: $scope.apiReference.getSectorAssetAllocation,
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
                                    Sector: "AssetTypeFa",
                                    stock: "AssetTitleFa",
                                    stockCunt: "Volume",
                                    price: "Price",
                                    totalValueofDay: "NetValue",
                                    Percent: "Percent"
                                }
                            }
                        },
                        pageSize: 100,
                        group: {
                            field: "Sector",
                            dir: "desc",
                            aggregates: [
                                { field: "totalValueofDay", aggregate: "sum" },
                                { field: "stockCunt", aggregate: "sum" },
                                { field: "Percent", aggregate: "sum" }

                            ]
                        },
                        aggregate: [
                                                  { field: "totalValueofDay", aggregate: "sum" },
                                                  { field: "stockCunt", aggregate: "sum" },
                                                  { field: "Percent", aggregate: "sum" }

                        ],

                        serverPaging: true,
                        serverSorting: true
                    },
                    autoBind: true,
                    height: 450,
                    sortable: true,
                    groupable: false,
                    pageable: {
                        refresh: true,
                        pageSizes: [5, 10, 20, 50, 100],
                        buttonCount: 5,
                        input: true
                        //autoBind: false,
                    },
                    dataBound: resizeGrid,
                    allowCopy: true,
                    selectable: {
                        mode: "GridSelectionMode.Multiple",
                        type: "GridSelectionType.Row"
                    },
                    columns: [
                        {
                            field: "Sector",
                            title: $scope.content.Sector,
                                hidden: true,
                                groupHeaderTemplate: "#=value#",
                                footerTemplate: $scope.content.Total,
                                groupFooterTemplate: $scope.content.Total,
                            },
                        {
                            field: "stock",
                            title: $scope.content.Stock,
                            footerTemplate: $scope.content.Total 
                        },
                        {
                            field: "stockCunt",
                            title: $scope.content.StockCunt,
                            format: "{0:n0}",
                            aggregates: ["sum"],
                            footerTemplate: " #=kendo.toString(sum, 'n')#",
                            groupFooterTemplate: " #= kendo.toString(sum, 'n')#"
                        },
                        {
                            field: "price",
                            title: $scope.content.Price,
                            format: "{0:n0}"
                        },
                        {
                            field: "totalValueofDay",
                            title: $scope.content.TotalValueOfDay,
                            format: "{0:n0}",
                            aggregates: ["sum"],
                            footerTemplate: " #=kendo.toString(sum, 'n')#",
                            groupFooterTemplate:  " #= kendo.toString(sum, 'n')#",
                        },
                        {
                            field: "Percent",
                            title: $scope.content.Percent,
                            format: "{0:n2}",
                            template: '<div style="border: 1px solid rgba(179, 179, 179, 0.88);background: rgba(255, 255, 255, 0.07);width:80%;color: rgb(52, 218, 0);text-align: center;position: relative;">#= kendo.toString(Percent, "n2") #%<div style="background: rgba(249, 249, 249, 0.35);width: #=Percent#%;height: 20px;position: absolute;top: 0;"></div></div>',
                            aggregates: ["sum"],
                            footerTemplate: '<div style="border: 1px solid rgba(179, 179, 179, 0.88);background: rgba(255, 255, 255, 0.07);width:80%;color: rgb(52, 218, 0);text-align: center;position: relative;">#= kendo.toString(sum, "n")#%<div style="background: rgba(249, 249, 249, 0.35);width: #= kendo.toString(sum, "n")#%;height: 20px;position: absolute;top: 0;"></div></div>',
                            groupFooterTemplate: '<div style="border: 1px solid rgba(179, 179, 179, 0.88);background: rgba(255, 255, 255, 0.07);width:80%;color: rgb(52, 218, 0);text-align: center;position: relative;">#= kendo.toString(sum, "n")#%<div style="background: rgba(249, 249, 249, 0.35);width: #= kendo.toString(sum, "n")#%;height: 20px;position: absolute;top: 0;"></div></div>',

                        }

                        
                        
                    ]
                });
            }else{
                    $scope.showCustomToast('0');
            }
            };

        });
    function resizeGrid() {
        var gridElement = $("#industryAllocationGrid1");
        var dataArea = gridElement.find(".k-grid-content");
        var newHeight = gridElement.parent().innerHeight() - 2;
        var diff = gridElement.innerHeight() - dataArea.innerHeight();
        gridElement.height($('.main-admin').height() - 270);
        dataArea.height($('.main-admin').height() - diff - 270);
    }
})();


