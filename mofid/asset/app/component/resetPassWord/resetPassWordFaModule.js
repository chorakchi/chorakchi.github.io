(function () {
    "use strict";
    angular
        .module('resetPassWordFa', [])
        .config(routeconfig);

    function routeconfig($stateProvider) {
        $stateProvider
        .state('resetPassWordFa', {
            url: '/resetPassWordFa',
            templateUrl: "asset/app/component/resetPassWord/resetPassWordFa.tpl.html",
            data: {
                css: 'asset/style/fa-style-log.css'
            }
        });
    }
})();