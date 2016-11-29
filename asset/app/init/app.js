(function () {
    "use strict";
angular.module('App', [
        'uiRouterStyles',
        'ui.router',
        'ngMaterial',
        'ngMessages',
        'material.svgAssetsCache',
        'MyApp',
        'KendoDemos',
        'app4',
        'panel_fa',
        'panel_en',
        'login_fa',
        'login_en',
        'notfound_fa',
        'notfound_en',
        'home_fa',
        'home_en',
        'page1_fa',
        'page1_en',
        'sample'
    ])
    .config(routeConfig);
    function routeConfig($urlRouterProvider ,$stateProvider){
        $urlRouterProvider.otherwise('/notfound_en');
         $stateProvider
        .state('default', {
            url: '/',
            templateUrl: "asset/app/component/login/login-fa.tpl.html"
        })
    }
})();