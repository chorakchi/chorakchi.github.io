(function () {
    "use strict";
    angular
        .module('notfoundEn', [])
        .config(routeconfig);

    function routeconfig($stateProvider) {
        $stateProvider
            .state('notfoundEn', {
                url: '/notfoundEn',
                templateUrl: "asset/app/component/notfound/notfound.tpl.html",
                data: {
                    css: 'asset/style/style-animat-change state.css'
                }
            });
    }
})();