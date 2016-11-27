// app.js
(function () {
    "use strict";
    var mainApp = angular.module('App', [
        'uiRouterStyles',
        'ui.router',
        'ngMaterial',
        'ngMessages',
        'material.svgAssetsCache',
        'MyApp',
        'KendoDemos',
        'app4'
    ]);

    mainApp.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/login_en');
        $stateProvider
            .state('login_en', {
            url: '/login_en',
            templateUrl: "asset/template/login-en.tpl.html"
        })
        .state('login_fa', {
            url: '/login_fa',
            templateUrl: "asset/template/login-fa.tpl.html"
        })
            .state('panel_en', {
                url: '/panel_en',
                templateUrl: "asset/template/panel-en.tpl.html",
                controller: 'panel_en_ctrl'
            })
            .state('panel_fa', {
                url: '/panel_fa',
                templateUrl: "asset/template/panel-fa.tpl.html",
                controller: 'panel_fa_ctrl',
                data: {
                    css: 'asset/style/fa-style.css'
                }

            })
            .state('panel_en.home', {
                url: '/home',
                templateUrl: "asset/template/home.tpl.html",
                controller: 'home_ctrl'
            })
            .state('panel_fa.home', {
                url: '/home',
                templateUrl: "asset/template/home.tpl.html",
                controller: 'home_ctrl'
            })
            .state('panel_en.page1', {
                url: '/page1',
                templateUrl: "asset/template/page1_en.tpl.html",
                controller: 'page1_ctrl'
            })
            .state('panel_fa.page1', {
                url: '/page1',
                templateUrl: "asset/template/page1_fa.tpl.html",
                controller: 'page1_ctrl'
            })
            .state('panel_en.sample_button', {
                url: '/sample_button',
                templateUrl: "asset/template/sample-button.tpl.html"
            })
            .state('panel_en.sample_input', {
                url: '/sample_inpu',
                templateUrl: "asset/template/sample-input.tpl.html"
            })
            .state('panel_en.sample_alert', {
                url: '/sample_alert',
                templateUrl: "asset/template/sample-alert.tpl.html"
            })
            .state('panel_en.sample_icon', {
                url: '/sample_icon',
                templateUrl: "asset/template/sample-icon.tpl.html"
            })
            .state('panel_en.sample_grid', {
                url: '/sample_grid',
                templateUrl: "asset/template/sample-grid.tpl.html"
            })
            .state('panel_en.highchart_bar', {
                url: '/highchart_bar',
                templateUrl: "asset/template/highchart-bar.tpl.html",
                controller: 'highchart_bar_ctrl'
            })
            .state('panel_en.highchart_line', {
                url: '/highchart_line',
                templateUrl: "asset/template/highchart-line.tpl.html",
                controller: 'highchart_line_ctrl'
            })
            .state('panel_en.highchart_pie', {
                url: '/highchart_pie',
                templateUrl: "asset/template/highchart-pie.tpl.html",
                controller: 'highchart_pie_ctrl'
            })
            .state('panel_en.highchart_heat', {
                url: '/highchart_heat',
                templateUrl: "asset/template/highchart-heat.tpl.html",
                controller: 'highchart_heat_ctrl'
            })
            .state('panel_en.stockchart', {
                url: '/stockchart',
                templateUrl: "asset/template/stockchart.tpl.html",
                controller: 'stockchart_ctrl'
            })
            .state('panel_en.highmap', {
                url: '/highmap',
                templateUrl: "asset/template/highmap.tpl.html",
                controller: 'highmap_ctrl'
            })
            .state('panel_en.mdesign_button', {
                url: '/mdesign_button',
                templateUrl: "asset/template/mdesign_button.tpl.html"
            })
            .state('panel_en.mdesign_checkbox', {
                url: '/mdesign_checkbox',
                templateUrl: "asset/template/mdesign_checkbox.tpl.html"
            })
            .state('panel_en.mdesign_autocomplate', {
                url: '/mdesign_autocomplate',
                templateUrl: "asset/template/mdesign_autocomplate.tpl.html"
            })
            .state('panel_en.sample-kendo-grid', {
                url: '/sample-kendo-grid',
                templateUrl: "asset/template/sample-kendo-grid.tpl.html"
            });
    });
    mainApp.controller('panel_en_ctrl', function () {
        fonclick();
        accordmenu();
    });
    mainApp.controller('panel_fa_ctrl', function () {
        fonclick();
        accordmenu();
    });
    mainApp.controller('page1_ctrl', function () {
        $(document)
            .ready(function () {

                kendo.culture("fa-IR");

                // create DatePicker from input HTML element
                $("#datepicker").kendoDatePicker();
            });
    });
    mainApp.controller('highchart_bar_ctrl', function () {
        dataHighchartbar1();
        dataHighchartbar2();
        dataHighchartbar3();
        dataHighchartbar4();
        dataHighchartbar5();
        dataHighchartbar6();
        dataHighchartbar7();
        dataHighchartbar8();
        dataHighchartbar9();
        dataHighchartbar10();
        dataHighchartbar11();
        dataHighchartbar12();
        dataHighchartbar13();
    });
    mainApp.controller('highchart_line_ctrl', function () {
        dataHighchartline1();
        dataHighchartline2();
        dataHighchartline3();
        dataHighchartline4();
        dataHighchartline5();
        dataHighchartline6();
        dataHighchartline7();
        dataHighchartline8();
        dataHighchartline9();
        dataHighchartline10();
        dataHighchartline11();
        dataHighchartline12();
        dataHighchartline13();
        dataHighchartline14();
        dataHighchartline15();
        dataHighchartline16();
        dataHighchartline17();
    });
    mainApp.controller('highchart_pie_ctrl', function () {
        dataHighchartpie1();
        dataHighchartpie2();
        dataHighchartpie3();
        dataHighchartpie4();
        dataHighchartpie5();
        dataHighchartpie6();
        dataHighchartpie7();
    });
    mainApp.controller('highchart_heat_ctrl', function () {
        dataHighchartheat1();
        dataHighchartheat2();
        dataHighchartheat3();
        dataHighchartheat4();
        dataHighchartheat5();
    });
    mainApp.controller('stockchart_ctrl', function () {
        datastockchart1();
        datastockchart2();
        datastockchart3();
        datastockchart4();
        datastockchart5();
        datastockchart6();
        datastockchart7();
        datastockchart8();
        datastockchart9();
        datastockchart10();
        datastockchart11();
    });
    mainApp.controller('highmap_ctrl', function () {
        datahighmap1();
        datahighmap2();
        datahighmap3();
        datahighmap4();
        datahighmap5();
    });
    mainApp.controller('AppCtrl', function ($scope) {

        $scope.data = {};
        $scope.data.cb1 = true;
        $scope.data.cb2 = false;
        $scope.data.cb3 = false;
        $scope.data.cb4 = false;
        $scope.data.cb5 = false;

    });
    mainApp.controller('home_ctrl', function () {
        datastockcharthome();
        dataHighchartpie5();
    });

})();