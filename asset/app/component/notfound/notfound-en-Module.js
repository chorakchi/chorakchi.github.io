(function () {
    "use strict";
    angular
        .module('notfound_en', [])
        .config(routeconfig);

    function routeconfig($stateProvider) {
        $stateProvider
        .state('notfound_en', {
            url: '/notfound_en',
            templateUrl: "asset/app/component/notfound/notfound.tpl.html"
        })
    }
})();