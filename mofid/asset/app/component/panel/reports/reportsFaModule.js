(function () {
    "use strict";
    angular
        .module('reportsFa', [])
        .config(routeconfig);

    function routeconfig($stateProvider) {
        $stateProvider.state('panel_fa.reports', {
            url: '/reports',
            templateUrl: "asset/app/component/panel/reports/reportsFa.tpl.html",
        });
    }
})();

