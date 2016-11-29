(function () {
    "use strict";
    angular
        .module('page1_fa', [])
        .config(routeconfig);

    function routeconfig($stateProvider) {
        $stateProvider.state('panel_fa.page1', {
            url: '/page1',
            templateUrl: "asset/app/component/panel/page1/page1_fa.tpl.html",
            controller: 'page1_fa_ctrl'
        })
    }
    angular
        .module('page1_fa')
        .controller('page1_fa_ctrl', function () {
            // $(document)     .ready(function () {         kendo.culture("fa-IR"); //
            // create DatePicker from input HTML element $("#datepicker").kendoDatePicker();
            //     });
        });
})();