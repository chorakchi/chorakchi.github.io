(function () {
    "use strict";
    angular
        .module('reportsEn', [])
        .config(routeconfig);

    function routeconfig($stateProvider) {
        $stateProvider.state('panel_en.reports', {
            url: '/reports',
            templateUrl: "asset/app/component/panel/reports/reportsEn.tpl.html",
        });
    }
})();

