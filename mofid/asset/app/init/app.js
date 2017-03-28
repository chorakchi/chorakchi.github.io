key = '';
(function () {
    "use strict";
    
    angular.module('App', [
        'ngMessages',
        'material.svgAssetsCache',
        'uiRouterStyles',
        'ui.router',
        'ngStorage',
        'ngJalaaliFlatDatepicker',
        'loginEn',
        'registerEn',
        'forgotpasswordEn',
        'resetPassWordEn',
        'notfoundEn',
        'panelEn',
        'homeEn',
        'assetAllocationEn',
        'industryAllocationEn',
        'historicalAllocationEn',
        'holdingSummaryEn',
        'balancesEn',
        'securityTransactionEn',
        'cashTransactionEn',
        'fundPositionEn',
        'contributionsWithdrawalsEn',
        'receivableDividendsEn',
        'stockDividendsEn',
        'performanceEn',
        //'reportsEn',
        'loginFa',
        'registerFa',
        'forgotpasswordFa',
        'resetPassWordFa',
        'notfoundFa',
        'panelFa',
        'homeFa',
        'assetAllocationFa',
        'industryAllocationFa',
        'historicalAllocationFa',
        'holdingSummaryFa',
        'balancesFa',
        'securityTransactionFa',
        'cashTransactionFa',
        'fundPositionFa',
        'contributionsWithdrawalsFa',
        'receivableDividendsFa',
        'stockDividendsFa',
        'performanceFa',
        //'reportsFa',
    ])
    .config(routeConfig);
    function routeConfig($urlRouterProvider ,$stateProvider){
        $urlRouterProvider.otherwise('/loginFa');
    }

    angular
        .module('App').filter('abs', function () {
        return function (val) {
            return Math.abs(val);
        }
        });

    angular
        .module('App').factory('loader', ['$timeout',function () {
            return {
                active: function () {
                    loaderfn(true);
                },
                deactive: function () {
                    loaderfn(false);
                }
            };
        }]);
    
    angular
        .module('App')
        .controller('AppCtrl', function ($scope, $http, $state, $mdToast, $localStorage, $timeout) {

            
    ////////////////////// highcharts config and theme //////////////////////
            
            Highcharts.setOptions({
                global: {
                    useUTC: false
                }
            });

            Highcharts.theme = {
                colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066', '#eeaaee',
                   '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
                chart: {
                    backgroundColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                        stops: [
                           [0, 'rgba(255,255,255,0.1)'],
                           [1, 'rgba(0,0,0,0.1)']
                        ]
                    },
                    style: {
                        fontFamily: '\'Unica One\', sans-serif'
                    },
                    plotBorderColor: '#606063'
                },
                title: {
                    style: {
                        color: '#E0E0E3',
                        textTransform: 'uppercase',
                        fontSize: '20px'
                    }
                },
                subtitle: {
                    style: {
                        color: '#E0E0E3',
                        textTransform: 'uppercase'
                    }
                },
                xAxis: {
                    gridLineColor: '#707073',
                    labels: {
                        style: {
                            color: '#E0E0E3'
                        }
                    },
                    lineColor: '#707073',
                    minorGridLineColor: '#505053',
                    tickColor: '#707073',
                    title: {
                        style: {
                            color: '#A0A0A3'
                        }
                    }
                },
                yAxis: {
                    gridLineColor: '#707073',
                    labels: {
                        style: {
                            color: '#E0E0E3'
                        }
                    },
                    lineColor: '#707073',
                    minorGridLineColor: '#505053',
                    tickColor: '#707073',
                    tickWidth: 1,
                    title: {
                        style: {
                            color: '#A0A0A3'
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.85)',
                    style: {
                        color: '#F0F0F0'
                    }
                },
                plotOptions: {
                    series: {
                        dataLabels: {
                            color: '#B0B0B3'
                        },
                        marker: {
                            lineColor: '#333'
                        }
                    },
                    boxplot: {
                        fillColor: '#505053'
                    },
                    candlestick: {
                        lineColor: 'white'
                    },
                    errorbar: {
                        color: 'white'
                    }
                },
                legend: {
                    itemStyle: {
                        color: '#E0E0E3'
                    },
                    itemHoverStyle: {
                        color: '#FFF'
                    },
                    itemHiddenStyle: {
                        color: '#606063'
                    }
                },
                credits: {
                    style: {
                        color: '#666'
                    }
                },
                labels: {
                    style: {
                        color: '#707073'
                    }
                },

                drilldown: {
                    activeAxisLabelStyle: {
                        color: '#F0F0F3'
                    },
                    activeDataLabelStyle: {
                        color: '#F0F0F3'
                    }
                },

                navigation: {
                    buttonOptions: {
                        symbolStroke: '#DDDDDD',
                        theme: {
                            fill: '#505053'
                        }
                    }
                },

                // scroll charts
                rangeSelector: {
                    buttonTheme: {
                        fill: '#505053',
                        stroke: '#000000',
                        style: {
                            color: '#CCC'
                        },
                        states: {
                            hover: {
                                fill: '#707073',
                                stroke: '#000000',
                                style: {
                                    color: 'white'
                                }
                            },
                            select: {
                                fill: '#000003',
                                stroke: '#000000',
                                style: {
                                    color: 'white'
                                }
                            }
                        }
                    },
                    inputBoxBorderColor: '#505053',
                    inputStyle: {
                        backgroundColor: '#333',
                        color: 'silver'
                    },
                    labelStyle: {
                        color: 'silver'
                    }
                },

                navigator: {
                    handles: {
                        backgroundColor: '#666',
                        borderColor: '#AAA'
                    },
                    outlineColor: '#CCC',
                    maskFill: 'rgba(255,255,255,0.1)',
                    series: {
                        color: '#7798BF',
                        lineColor: '#A6C7ED'
                    },
                    xAxis: {
                        gridLineColor: '#505053'
                    }
                },

                scrollbar: {
                    barBackgroundColor: '#808083',
                    barBorderColor: '#808083',
                    buttonArrowColor: '#CCC',
                    buttonBackgroundColor: '#606063',
                    buttonBorderColor: '#606063',
                    rifleColor: '#FFF',
                    trackBackgroundColor: '#404043',
                    trackBorderColor: '#404043'
                },

                // special colors for some of the
                legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
                background2: '#505053',
                dataLabelsColor: '#B0B0B3',
                textColor: '#C0C0C0',
                contrastTextColor: '#F0F0F3',
                maskColor: 'rgba(255,255,255,0.3)'
            };
            // Apply the theme
            Highcharts.setOptions(Highcharts.theme);

    //////////////////// API Reference /////////////////////////////

            //$scope.baseApiUrl = 'http://192.168.100.77:8001/';
            $scope.baseApiUrl = 'https://api.mofidentekhab.com/';

            $scope.apiReference = {
                signout: $scope.baseApiUrl + 'api/Token/signout',
                login: $scope.baseApiUrl + 'api/Token/Login',
                getLanguage: '/asset/app/init/language.json',
                getError: '/asset/app/init/error.json',
                getManagementTypes: $scope.baseApiUrl + 'api/common/getManagementTypes',
                getManagementTypesFa: $scope.baseApiUrl + 'api/common/getManagementTypesFa',
                getAssetAllocation: $scope.baseApiUrl + 'api/assetallocation/getAssetAllocation',
                getPortfolioBlance: $scope.baseApiUrl + 'api/portfolioBalance/GetPortfolioBlance',
                getSimpleProducts: $scope.baseApiUrl + 'api/product/GetSimpleProducts/',
                getCashFlows: $scope.baseApiUrl + 'api/cashFlow/getCashFlows',
                getPeriodicPerformanceBreakdowns: $scope.baseApiUrl + 'api/portfolioEfficiencyBreakdown/getPeriodicPerformanceBreakdowns',
                getFundTransactions: $scope.baseApiUrl + 'api/Fund/GetFundTransactions',
                getMutualFunds: $scope.baseApiUrl + 'api/Fund/GetMutualFunds',
                getDoubleAssetAllocation: $scope.baseApiUrl + 'api/assetallocation/getDoubleAssetAllocation',
                getAssetAllocationDifference: $scope.baseApiUrl + 'api/assetallocation/getAssetAllocationDifference',
                getHoldings: $scope.baseApiUrl + 'api/holding/GetHoldings',
                getAssetTypes: $scope.baseApiUrl + 'api/common/getAssetTypes',
                getAssetTypesFa: $scope.baseApiUrl + 'api/common/getAssetTypesFa',
                getBrokerBalance: $scope.baseApiUrl + 'api/PortfolioValues/GetBrokerBalance',
                getFundUnitsValue: $scope.baseApiUrl + 'api/PortfolioValues/GetFundUnitsValue',
                getFixedIncomeFundValue: $scope.baseApiUrl + 'api/PortfolioValues/GetFixedIncomeFundValue',
                getExecutionOnlyPortfolioValue: $scope.baseApiUrl + 'api/PortfolioValues/GetExecutionOnlyPortfolioValue',
                getDiscretionaryPortfolioValue: $scope.baseApiUrl + 'api/PortfolioValues/GetDiscretionaryPortfolioValue',
                getMarketDetailsOverviewByDate: $scope.baseApiUrl + 'api/marketDetail/getMarketDetailsOverviewByDate',
                getIndices: $scope.baseApiUrl + 'api/indexOverview/getIndices',
                getLoserAndGainer: $scope.baseApiUrl + 'api/loserAndGainer/getLoserAndGainer',
                getOhlcDaily: $scope.baseApiUrl + 'api/OhlcDetails/GetOhlcDaily',
                getOhlcDailyRealTime: $scope.baseApiUrl + 'api/OhlcDetails/GetOhlcDailyRealTime',
                getOhlcEndOfDay: $scope.baseApiUrl + 'api/OhlcDetails/GetOhlcEndOfDay',
                getMutliContractTypeAssetAllocationBySingleFilter: $scope.baseApiUrl + 'api/assetallocation/GetMutliContractTypeAssetAllocationBySingleFilter',
                getSectorAssetAllocation: $scope.baseApiUrl + 'api/assetallocation/getSectorAssetAllocation',
                gridExcelExport: $scope.baseApiUrl + 'Export/GridExcelExport',
                getTrades: $scope.baseApiUrl + 'api/trade/getTrades',
                getCorporateActions: $scope.baseApiUrl + 'api/corporateAction/getCorporateActions',
                saveCorporateActionSecurityTransaction: $scope.baseApiUrl + 'api/corporateAction/saveCorporateActionSecurityTransaction',
                getCashDividendStatus: $scope.baseApiUrl + 'api/common/getCashDividendStatus',
                getPortfolioCumulativePerformance: $scope.baseApiUrl + 'api/performance/getPortfolioCumulativePerformance',
                getPortfolioPeriodicPerformance: $scope.baseApiUrl + 'api/performance/getPortfolioPeriodicPerformance',
                getFundPositions: $scope.baseApiUrl + 'api/Fund/GetFundPositions',
                getTotalNetPortfolioValue: $scope.baseApiUrl + 'api/PortfolioValues/GetTotalNetPortfolioValue',
                getOperatorTypes: $scope.baseApiUrl + 'api/common/getOperatorTypes',
                SendFeedBack: $scope.baseApiUrl + 'api/feedback/SendFeedBack',
                accountConfirmNationalId: $scope.baseApiUrl + 'api/account/ConfirmNationalId',
                accountSendToken: $scope.baseApiUrl + 'api/account/sendToken',
                accountVerifyToken: $scope.baseApiUrl + 'api/account/VerifyToken',
                accountCreateUser: $scope.baseApiUrl + 'api/account/CreateUser',
                feedbackSendFeedBackAnonymos: $scope.baseApiUrl + 'api/feedback/SendFeedBackAnonymos',
                accountResetPassword: $scope.baseApiUrl + 'api/account/ResetPassword',
                accountForgotPassword: $scope.baseApiUrl + 'api/account/ForgotPassword',
                getPortfolioBlanceInPeriod: $scope.baseApiUrl + 'api/portfolioBalance/GetPortfolioBlanceInPeriod',
                getActivityPerformances: $scope.baseApiUrl + '/api/performance/GetActivityPerformances'
            };
            ///////////////////////// chack key wuth request///////////////////////////////////
            var reportFilter = {
                MarketDataPeriod: 'IntraDay'
            }
            var fill = {
                ReportFilter: reportFilter,
                OptionalFilter: null
            }
            if ($localStorage.key != null) {
                key = $localStorage.key;
                $http({
                    url: $scope.apiReference.getMarketDetailsOverviewByDate,
                    method: "POST",
                    data: fill,
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + key
                    }
                })
                    .success(function (data, status, headers, config) {
                        if ($localStorage.lang === 'En') {                            
                            $timeout(function () {
                                $state.go('panel_en.home', "");
                            }, 100);
                            } else {
                            $timeout(function () {
                                $state.go('panel_fa.home', "");
                            }, 100);
                            }
                    });
            } else {
                if ($localStorage.lang === 'En') {
                    $timeout(function () {
                        $state.go('loginEn', "");
                    }, 100);
                } else {
                    $timeout(function () {
                        $state.go('loginFa', "");
                    }, 100);
                }
            }

    //////////////////////// get language /////////////////////////
            $http({
                url: $scope.apiReference.getLanguage,
                method: "GET"
            }).success(function (data, status, headers, config) {
                $scope.language = data;
            });

            $http({
                url: $scope.apiReference.getError,
                method: "GET"
            }).success(function (data, status, headers, config) {
                $scope.error = data;
                $scope.errorMsg = $scope.error.Error;
                $scope.showCustomToast = function (msg) {
                    $scope.msg = $scope.errorMsg[0].valueEn;
                    for (var prop in $scope.errorMsg) {
                        if ($scope.errorMsg[prop].code === msg) {
                            $scope.msg = $scope.errorMsg[prop].valueFa;
                        }  
                    }

                    $mdToast.show(
                        $mdToast.simple()
                        .textContent($scope.msg)
                        .position('top right')
                        .hideDelay(3000)
                    );

                };
            });


    ///////////////////// singout function //////////////////////
            $scope.singOutFn = function (languag) {

                if (languag === 'fa') {
                    $state.go('loginFa', "");
                } else {
                    $state.go('loginEn', "");
                }

                
                $http({
                    url: $scope.apiReference.signout,
                    method: "POST",
                    headers: {
                        'Authorization': 'Bearer ' + key
                    }
                });
                key = null;
                delete $localStorage.key;
            }
        });
    /////////////////// toast controller ///////////////////////////

    angular
        .module('App').controller('ToastCtrl', function ($scope, $mdToast, $mdDialog) {
            $scope.closeToast = function () {
                if (isDlgOpen) return;

                $mdToast
                  .hide()
                  .then(function () {
                      isDlgOpen = false;
                  });
            };

            $scope.openMoreInfo = function (e) {
                if (isDlgOpen) return;
                isDlgOpen = true;

                $mdDialog
                  .show($mdDialog
                    .alert()
                    .title('More info goes here.')
                    .textContent('Something witty.')
                    .ariaLabel('More info')
                    .ok('Got it')
                    .targetEvent(e)
                  )
                  .then(function () {
                      isDlgOpen = false;
                  })
            };
        });

    ////////////////// input data validator /////////////////////////

    angular
        .module('App').directive('dateValid', function () {
            return {
                require: 'ngModel',
                link: function (scope, element, attr, mCtrl) {
                    function myValidation(value) {
                        var temp = value.split("-");

                        var flagtemp = true;
                        if (parseInt(temp[0], 10) <= 2016)
                            if (parseInt(temp[1], 10) <= 5) 
                                if (parseInt(temp[2], 10) <= 20)
                                    flagtemp = false;
            
                        if (temp.length === 3 && temp[0].length === 4 && temp[1].length === 2 && temp[2].length === 2 && flagtemp) {
                            mCtrl.$setValidity('charE', true);
                        } else {
                            mCtrl.$setValidity('charE', false);
                        }
                        return value;
                    }
                    mCtrl.$parsers.push(myValidation);
                }
            };
        });
    angular
        .module('App').directive('fromDateValid', function () {
            return {
                require: 'ngModel',
                link: function (scope, element, attr, mCtrl) {
                    function myValidation(value) {
                        var temp = value.split("-");

                        var flagtemp = true;
                        if (parseInt(temp[0], 10) <= 2016)
                            if (parseInt(temp[1], 10) <= 5)
                                if (parseInt(temp[2], 10) <= 20)
                                    flagtemp = false;

                        if (temp.length === 3 && temp[0].length === 4 && temp[1].length === 2 && temp[2].length === 2 && flagtemp) {
                            mCtrl.$setValidity('charE', true);
                        } else {
                            mCtrl.$setValidity('charE', false);
                        }
                        return value;
                    }
                    mCtrl.$parsers.push(myValidation);
                }
            };
        });
    angular
        .module('App').directive('toDateValid', function () {
            return {
                require: 'ngModel',
                link: function (scope, element, attr, mCtrl) {
                    function myValidation(value) {
                        var temp = value.split("-");

                        var today = new Date();

                        var today1 = moment(new Date()).add(-1, 'days').format('YYYY-MM-DD');

                        var flagtemp1 = true;
                        if (parseInt(temp[0], 10) >= today.getFullYear())
                            if (parseInt(temp[1], 10) >= today.getMonth() + 1)
                                if (parseInt(temp[2], 10) >= today.getDate())
                                    flagtemp1 = false;

                        var flagtemp2 = true;
                        if (parseInt(temp[0], 10) <= 2016)
                            if (parseInt(temp[1], 10) <= 5)
                                if (parseInt(temp[2], 10) <= 20)
                                    flagtemp2 = false;

                        if (temp.length === 3 && temp[0].length === 4 && temp[1].length === 2 && temp[2].length === 2 && flagtemp1 && flagtemp2) {
                            mCtrl.$setValidity('charE', true);
                        } else {
                            mCtrl.$setValidity('charE', false);
                        }
                        return value;
                    }
                    mCtrl.$parsers.push(myValidation);
                }
            };
        });
    ///////// end ////////////////
})();
