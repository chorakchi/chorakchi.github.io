(function () {
    "use strict";
    angular
        .module('page1_en', [])
        .config(routeconfig);

    function routeconfig($stateProvider) {
        $stateProvider.state('panel_en.page1', {
            url: '/page1',
            templateUrl: "asset/app/component/panel/page1/page1_en.tpl.html",
            controller: 'page1_en_ctrl'
        })
    }
    angular
        .module('page1_en')
        .controller('page1_en_ctrl', function () {
            // $(document)     .ready(function () {         kendo.culture("fa-IR");
            // // create DatePicker from input HTML element
            // $("#datepicker").kendoDatePicker();     });
        });
})();