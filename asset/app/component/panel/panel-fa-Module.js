(function () {
    "use strict";
    angular
        .module('panel_fa', [])
        .config(routeconfig);

    function routeconfig($stateProvider) {
        $stateProvider
        .state('panel_fa', {
                url: '/panel_fa',
                templateUrl: "asset/app/component/panel/panel-fa.tpl.html",
                controller: 'panel_fa_ctrl',
                data: {
                    css: 'asset/style/fa-style.css'
                }
            });
    }
    angular
        .module('panel_fa')
        .controller('panel_fa_ctrl', function () {
            fonclick();
            accordmenu();
        });
})();