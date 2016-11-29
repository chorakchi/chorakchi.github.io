(function () {
    "use strict";
    angular
        .module('login_fa', [])
        .config(routeconfig);

    function routeconfig($stateProvider) {
        $stateProvider
        .state('login_fa', {
            url: '/login_fa',
            templateUrl: "asset/app/component/login/login-fa.tpl.html"
        });
    }
})();