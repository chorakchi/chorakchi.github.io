(function () {
    "use strict";
    angular
        .module('forgotpasswordFa', [])
        .config(routeconfig);

    function routeconfig($stateProvider) {
        $stateProvider
        .state('forgotpasswordFa', {
            url: '/forgotpasswordFa',
            templateUrl: "asset/app/component/forgotpassword/forgotpasswordFa.tpl.html",
            data: {
                css: 'asset/style/fa-style-log.css'
            }
        })
    }
    angular
        .module('forgotpasswordFa')
        .controller('forgotPasswordFaCtrl', function ($scope, $http, loader) {
            $scope.sendRecoverypageFn = function () {
                if ($scope.Form.emailAddress.$valid) {
                    loader.active();
                    $http({
                        url: $scope.apiReference.accountForgotPassword,
                        method: "POST",
                        data: {
                            "Email": $scope.emailAddress,
                            "ResetPasswprdAddress": window.location.origin + '/#/resetPassWordFa'
                        },
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).success(function (data, status, headers, config) {
                        loader.deactive();
                        $scope.showCustomToast(data.Message);


                    });
                } else {
                    $scope.showCustomToast('0');
                }


            }



        });
})();