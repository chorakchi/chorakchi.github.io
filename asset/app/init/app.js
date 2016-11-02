// app.js
(function(){
    "use strict";
var mainApp = angular.module('App', ['ui.router','ngMaterial', 'ngMessages', 'material.svgAssetsCache','MyApp','KendoDemos','app4']);

mainApp.config(function($stateProvider, $urlRouterProvider) {
$urlRouterProvider.otherwise('/login');
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: "asset/template/login.tpl.html"
        })
        .state('panel', {
            url: '/panel',
            templateUrl: "asset/template/panel.tpl.html",
            controller : 'panel_ctrl'
        })
        .state('panel.page1', {
            url: '/page1',
            templateUrl: "asset/template/page1.tpl.html",
            controller : 'page1_ctrl'
        })
        .state('panel.sample_button', {
            url: '/sample_button',
            templateUrl: "asset/template/sample-button.tpl.html",
        })
        .state('panel.sample_input', {
            url: '/sample_inpu',
            templateUrl: "asset/template/sample-input.tpl.html",
        })
        .state('panel.sample_alert', {
            url: '/sample_alert',
            templateUrl: "asset/template/sample-alert.tpl.html",
        })
        .state('panel.sample_icon', {
            url: '/sample_icon',
            templateUrl: "asset/template/sample-icon.tpl.html",
        })
        .state('panel.sample_grid', {
            url: '/sample_grid',
            templateUrl: "asset/template/sample-grid.tpl.html",
        })
        .state('panel.highchart_bar', {
            url: '/highchart_bar',
            templateUrl: "asset/template/highchart-bar.tpl.html",
            controller : 'highchart_bar_ctrl'
        })
        .state('panel.highchart_line', {
            url: '/highchart_line',
            templateUrl: "asset/template/highchart-line.tpl.html",
            controller : 'highchart_line_ctrl'
        })
        .state('panel.highchart_pie', {
            url: '/highchart_pie',
            templateUrl: "asset/template/highchart-pie.tpl.html",
            controller : 'highchart_pie_ctrl'
        })
        .state('panel.mdesign_button', {
            url: '/mdesign_button',
            templateUrl: "asset/template/mdesign_button.tpl.html"
        })
        .state('panel.mdesign_checkbox', {
            url: '/mdesign_checkbox',
            templateUrl: "asset/template/mdesign_checkbox.tpl.html"
        })
        .state('panel.mdesign_autocomplate', {
            url: '/mdesign_autocomplate',
            templateUrl: "asset/template/mdesign_autocomplate.tpl.html"
        })
        .state('panel.sample-kendo-grid', {
            url: '/sample-kendo-grid',
            templateUrl: "asset/template/sample-kendo-grid.tpl.html"
        });
});
mainApp.controller('panel_ctrl', function () {
    fonclick();
    accordmenu(); 
});
mainApp.controller('page1_ctrl', function () {
});
mainApp.controller('highchart_bar_ctrl', function () {
    dataHighchartbar1();
});
mainApp.controller('highchart_line_ctrl', function () {
    dataHighchartline1();
});
mainApp.controller('highchart_pie_ctrl', function () {
    dataHighchartpie1();
});
mainApp.controller('AppCtrl', function($scope) {

  $scope.data = {};
  $scope.data.cb1 = true;
  $scope.data.cb2 = false;
  $scope.data.cb3 = false;
  $scope.data.cb4 = false;
  $scope.data.cb5 = false;

});



})();