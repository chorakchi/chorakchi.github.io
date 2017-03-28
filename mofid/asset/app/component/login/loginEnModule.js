(function () {
    "use strict";
    angular
        .module('loginEn', [])
        .config(routeconfig);

    function routeconfig($stateProvider) {
        $stateProvider
            .state('loginEn', {
                url: '/loginEn',
                templateUrl: "asset/app/component/login/loginEn.tpl.html",
                data: {
                    css: 'asset/style/style-animat-change state.css'
                }
            });
    }
    angular
        .module('loginEn')
        .controller('loginEnCtrl', function ($scope, $http, $state, $localStorage, loader) {
            loader.deactive();

            $scope.loginFn = function () {
                
                if ($scope.Form.userName.$valid && $scope.Form.passWord.$valid) {
                    loader.active();
                $http({
                    url: $scope.apiReference.login,
                    method: "POST",
                    data: {
                        "UserName": $scope.userName,
                        "Password": $scope.passWord,
                        "ClientId": "AmsPortal"
                    },
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).success(function (data, status, headers, config) {
                    loader.deactive();
                    if (data.Message === '1000') {
                        if (data.Result[0].AccessToken != null) {
                            $state.go('panel_en.home', "");
                            key = data.Result[0].AccessToken;
                            $localStorage.key = data.Result[0].AccessToken;
                            $localStorage.name = data.Result[0].ApplicationUser.DisplayNameEn;
                            $localStorage.lang = 'En';
                        }
                    }
                    else {
                        $scope.showCustomToast(data.Message);
                    }
                });
                } else {
                    $scope.showCustomToast('0');
                    loader.deactive();
                }
            }         
        });
})();