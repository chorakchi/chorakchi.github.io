(function () {
    "use strict";
    angular
        .module('panel_en', [])
        .config(routeconfig);

    function routeconfig($stateProvider) {
        $stateProvider.state('panel_en', {
            url: '/panel_en',
            templateUrl: "asset/app/component/panel/panel-en.tpl.html",
            controller: 'panel_en_ctrl'
        });
    }
    angular
        .module('panel_en')
        .controller('panel_en_ctrl', function () {
            fonclick();
            accordmenu();
        });
})();