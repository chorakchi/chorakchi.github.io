(function () {
    "use strict";
    angular
        .module('notfound_fa', [])
        .config(routeconfig);

    function routeconfig($stateProvider) {
        $stateProvider
        .state('notfound_fa', {
            url: '/notfound_fa',
            templateUrl: "asset/app/component/notfound/notfound.tpl.html"
        })
    }
})();