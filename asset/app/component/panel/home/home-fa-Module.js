(function () {
    "use strict";
    angular
        .module('home_fa', [])
        .config(routeconfig);

    function routeconfig($stateProvider) {
        $stateProvider.state('panel_fa.home', {
            url: '/home',
            templateUrl: "asset/app/component/panel/home/home.tpl.html",
            controller: 'home_fa_ctrl'
        });
    }
    angular
        .module('home_fa')
        .controller('home_fa_ctrl', function () {
            datastockcharthome();
            dataHighchartpie5();
        });
})();