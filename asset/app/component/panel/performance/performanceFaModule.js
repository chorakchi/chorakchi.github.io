(function () {
    "use strict";
    angular
        .module('performanceFa', [])
        .config(routeconfig);

    function routeconfig($stateProvider) {
        $stateProvider.state('panel_fa.performance', {
            url: '/performance',
            templateUrl: "asset/app/component/panel/performance/performanceFa.tpl.html",
        });
    }
    angular
        .module('performanceEn')
        .config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('docs-dark', 'default')
                .primaryPalette('yellow')
                .dark();
        });

    angular
        .module('performanceFa')
        .controller('performanceFaCtrl', function ($scope, $http, $timeout, $state, loader, $filter) {
            loader.active();
            $scope.performanceStartDate = moment(new Date()).add(-60, 'days').format('jYYYY/jMM/jDD');
            $scope.performanceEndDate = moment(new Date()).add(-1, 'days').format('jYYYY/jMM/jDD');
            $scope.datepickerConfig = {
                allowFuture: false,
                dateFormat: 'jYYYY/jMM/jDD',
                gregorianDateFormat: 'YYYY-MM-DD',
                minDate: moment.utc('2015', 'YYYY')
            };

            $http({
                url: $scope.apiReference.getActivityPerformances,
                method: "POST",
                data: {
                    "ReportFilter": {
                    }
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + key
                },
            }).success(function (data) {
                $scope.getActivityPerformances = data.Result[0];
            }).error(function (data, status, headers, config) {
                if (status === 401) {
                    key = null;
                    $state.go('loginFa', "");
                    delete $localStorage.key;
                }
            });

            $http({
                url: $scope.apiReference.getPortfolioPeriodicPerformance,
                method: "POST",
                data: {
                    "ReportFilter": {
                        "Language": 0
                    }
                },
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + key
                }
            }).success(function (data) {
                var tempArr0 = [], tempArr1 = [], tempArr2 = [], tempArr3 = [];
                for (var prop1 in data.Result) {
                    tempArr0.push(data.Result[prop1].Date);
                    tempArr1.push(data.Result[prop1].Mwrr);
                    tempArr2.push(data.Result[prop1].Index);
                    tempArr3.push(data.Result[prop1].Difference);

                }
                Highcharts.chart('bar5', {
                    chart: {
                        type: 'column'
                    },
                    tooltip: {
                        pointFormat: "Value: {point.y:.2f} mm"
                    },
                    title: {
                        text: ''
                    },
                    xAxis: {
                        categories: tempArr0
                    },
                    yAxis: {
                        title: {
                            text: $scope.content.Values
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    series: [{
                        name: $scope.content.Mwrr,
                        data: tempArr1
                    }, {
                        name: $scope.content.Index,
                        data: tempArr2
                    }, {
                        name: $scope.content.Difference,
                        data: tempArr3
                    }]
                });
            });
            $timeout(function () {
                $scope.performanceGenerate();
            }, 0);
            
            $scope.performanceGenerate = function () {
                
                if (true) {
                    loader.active();
                $http({
                    url: $scope.apiReference.getPortfolioCumulativePerformance,
                    method: "POST",
                    data: {
                        "ReportFilter": {
                            "DateFilter": {
                                "StartDate": moment($scope.performanceStartDate,'jYYYY/jMM/jDD').format('YYYY-MM-DD'),
                                "EndDate": moment($scope.performanceEndDate, 'jYYYY/jMM/jDD').format('YYYY-MM-DD')
                            }
                        }
                    },
                    headers: {
                        'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + key
                },
                }).success(function (data) {
                    loader.deactive();

                    if (data.Message != "1000") {$scope.showCustomToast(data.Message);}

                    var tempDataArr = [], tempDataArr1 = [], tempDataObj = {}, tempdata = [];

                    for (var prop1 in data.Result) {
                        tempDataArr = [];
                        for (var prop2 in data.Result[prop1].Data) {
                            tempDataArr1 = [];
                            tempDataArr1.push(data.Result[prop1].Data[prop2].Date);
                            tempDataArr1.push(data.Result[prop1].Data[prop2].Performance);
                            tempDataArr.push(tempDataArr1);
                        }
                        tempDataObj = {
                            name: data.Result[prop1].Name,
                            data: tempDataArr
                        }
                        tempdata.push(tempDataObj);
                    }
                    Highcharts.stockChart('stockchart10', {

                        rangeSelector: {
                            selected: 4,
                            inputEnabled: false,
                            enabled: false
                        },

                        yAxis: {
                            labels: {
                                formatter: function () {
                                    return (this.value > 0 ? ' + ' : '') + this.value + '%';
                                }
                            },
                            plotLines: [{
                                value: 0,
                                width: 2,
                                color: 'silver'
                            }]
                        },
                        xAxis: {

                            dateTimeLabelFormats: { // don't display the dummy year
                                day: '<div>%d</div> <div>%B</div>',
                                week: '%B-%e',
                                month: '%B %y',
                                year: '%Y'
                            },
                            labels: {
                                formatter: function () {
                                    return moment(this.value).format("jYY/jM/jD");
                                }
                            }
                        },

                        plotOptions: {
                            series: {
                                compare: 'value',
                                showInNavigator: true
                            }
                        },

                        tooltip: {
                            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
                            valueDecimals: 2,
                            split: true
                        },
                        navigator: {
                            xAxis: {

                                labels: {
                                    formatter: function () {
                                        return moment(this.value).format("jYY/jM/jD");
                                    }
                                }
                            }
                        },

                        series: tempdata
                    });
                }).error(function (data) {
                });
            } else {
                    $scope.showCustomToast('0');
                    loader.deactive();
            }
            }
            
                
        });
})();

