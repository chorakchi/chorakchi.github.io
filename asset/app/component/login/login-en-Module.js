(function () {
    "use strict";
    angular
        .module('login_en', [])
        .config(routeconfig);

    function routeconfig($stateProvider) {
        $stateProvider
        .state('login_en', {
            url: '/login_en',
            templateUrl: "asset/app/component/login/login-en.tpl.html"
        })
    }
})();