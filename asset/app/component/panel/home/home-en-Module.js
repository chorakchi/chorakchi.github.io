(function () {
    "use strict";
    angular
        .module('home_en', [])
        .config(routeconfig);

    function routeconfig($stateProvider) {
        $stateProvider.state('panel_en.home', {
            url: '/home',
            templateUrl: "asset/app/component/panel/home/home.tpl.html",
            controller: 'home_en_ctrl'
        });
    }
    angular
        .module('home_en')
        .controller('home_en_ctrl', function () {
            datastockcharthome();
            dataHighchartpie5();
        });
})();