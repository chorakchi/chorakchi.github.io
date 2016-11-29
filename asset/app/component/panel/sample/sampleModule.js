(function () {
    "use strict";
angular.module('sample',[])
.config(routeconfig);

function routeconfig($stateProvider){
    $stateProvider
        .state('panel_en.sample_button', {
                url: '/sample_button',
                templateUrl: "asset/app/component/panel/sample/sample-button.tpl.html"
            })
            .state('panel_en.sample_input', {
                url: '/sample_inpu',
                templateUrl: "asset//app/component/panel/sample/sample-input.tpl.html"
            })
            .state('panel_en.sample_alert', {
                url: '/sample_alert',
                templateUrl: "asset//app/component/panel/sample/sample-alert.tpl.html"
            })
            .state('panel_en.sample_icon', {
                url: '/sample_icon',
                templateUrl: "asset//app/component/panel/sample/sample-icon.tpl.html"
            })
            .state('panel_en.sample_grid', {
                url: '/sample_grid',
                templateUrl: "asset/app/component/panel/sample/sample-grid.tpl.html"
            })
            .state('panel_en.highchart_bar', {
                url: '/highchart_bar',
                templateUrl: "asset/app/component/panel/sample/highchart-bar.tpl.html",
                controller: 'highchart_bar_ctrl'
            })
            .state('panel_en.highchart_line', {
                url: '/highchart_line',
                templateUrl: "asset/app/component/panel/sample/highchart-line.tpl.html",
                controller: 'highchart_line_ctrl'
            })
            .state('panel_en.highchart_pie', {
                url: '/highchart_pie',
                templateUrl: "asset/app/component/panel/sample/highchart-pie.tpl.html",
                controller: 'highchart_pie_ctrl'
            })
            .state('panel_en.highchart_heat', {
                url: '/highchart_heat',
                templateUrl: "asset/app/component/panel/sample/highchart-heat.tpl.html",
                controller: 'highchart_heat_ctrl'
            })
            .state('panel_en.stockchart', {
                url: '/stockchart',
                templateUrl: "asset/app/component/panel/sample/stockchart.tpl.html",
                controller: 'stockchart_ctrl'
            })
            .state('panel_en.highmap', {
                url: '/highmap',
                templateUrl: "asset/app/component/panel/sample/highmap.tpl.html",
                controller: 'highmap_ctrl'
            })
            .state('panel_en.mdesign_button', {
                url: '/mdesign_button',
                templateUrl: "asset/app/component/panel/sample/mdesign_button.tpl.html"
            })
            .state('panel_en.mdesign_checkbox', {
                url: '/mdesign_checkbox',
                templateUrl: "asset/app/component/panel/sample/mdesign_checkbox.tpl.html"
            })
            .state('panel_en.mdesign_autocomplate', {
                url: '/mdesign_autocomplate',
                templateUrl: "asset/app/component/panel/sample/mdesign_autocomplate.tpl.html"
            })
            .state('panel_en.sample-kendo-grid', {
                url: '/sample-kendo-grid',
                templateUrl: "asset/app/component/panel/sample/sample-kendo-grid.tpl.html"
            });
}
angular.module('sample')
.controller('highchart_bar_ctrl', function () {
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
    })
    .controller('highchart_line_ctrl', function () {
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
    })
    .controller('highchart_pie_ctrl', function () {
        dataHighchartpie1();
        dataHighchartpie2();
        dataHighchartpie3();
        dataHighchartpie4();
        dataHighchartpie5();
        dataHighchartpie6();
        dataHighchartpie7();
    })
    .controller('highchart_heat_ctrl', function () {
        dataHighchartheat1();
        dataHighchartheat2();
        dataHighchartheat3();
        dataHighchartheat4();
        dataHighchartheat5();
    })
    .controller('stockchart_ctrl', function () {
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
    })
    .controller('highmap_ctrl', function () {
        datahighmap1();
        datahighmap2();
        datahighmap3();
        datahighmap4();
        datahighmap5();
    });
    })();