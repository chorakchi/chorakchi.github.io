(function () {
    "use strict";
    angular
        .module('forgotpasswordEn', [])
        .config(routeconfig);

    function routeconfig($stateProvider) {
        $stateProvider
        .state('forgotpasswordEn', {
            url: '/forgotpasswordEn',
            templateUrl: "asset/app/component/forgotpassword/forgotpasswordEn.tpl.html"
        })
    }
    angular
        .module('forgotpasswordEn')
        .controller('forgotPasswordEnCtrl', function ($scope, $http, loader) {
            $scope.sendRecoverypageFn = function () {
                if ($scope.Form.emailAddress.$valid) {
                    loader.active();
                    $http({
                        url: $scope.apiReference.accountForgotPassword,
                        method: "POST",
                        data: {
                            "Email": $scope.emailAddress,
                            "ResetPasswprdAddress": window.location.origin + '/#/resetPassWordEn'
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