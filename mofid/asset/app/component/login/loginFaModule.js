(function () {
    "use strict";
    angular
        .module('loginFa', [])
        .config(routeconfig);

    function routeconfig($stateProvider) {
        $stateProvider
            .state('loginFa', {
                url: '/loginFa',
                templateUrl: "asset/app/component/login/loginFa.tpl.html",
                data: {
                    css: 'asset/style/fa-style-log.css'
                }
            });
    }
    angular
        .module('loginFa')
        .controller('loginFaCtrl', function ($scope, $http, $state, $localStorage, loader) {
            loader.deactive();

            $scope.loginFn = function () {
                //grecaptcha.execute();
                

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
                        //grecaptcha.reset();
                        loader.deactive();
                        if (data.Message === '1000') {
                            if (data.Result[0].AccessToken != null) {
                                $state.go('panel_fa.home', "");
                                key = data.Result[0].AccessToken;
                                $localStorage.key = data.Result[0].AccessToken;
                                $localStorage.name = data.Result[0].ApplicationUser.DisplayNameFa;
                                $localStorage.lang = 'Fa';
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