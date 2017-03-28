(function () {
    "use strict";
    angular
        .module('notfoundFa', [])
        .config(routeconfig);

    function routeconfig($stateProvider) {
        $stateProvider
        .state('notfoundFa', {
            url: '/notfoundFa',
            templateUrl: "asset/app/component/notfound/notfound.tpl.html"
        })
    }
})();