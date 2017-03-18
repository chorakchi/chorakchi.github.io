(function () {
    "use strict";
    angular
        .module('resetPassWordEn', [])
        .config(routeconfig);

    function routeconfig($stateProvider) {
        $stateProvider
        .state('resetPassWordEn', {
            url: '/resetPassWordEn',
            templateUrl: "asset/app/component/resetPassWord/resetPassWordEn.tpl.html",
            params: { 'mobile': null, 'email': null, 'id': null },
            data: {
                css: 'asset/style/style-animat-change state.css'
            }
        })
    }
    angular
        .module('resetPassWordEn')
        .controller('resetPassWordEnCtrl', function ($scope, $http, $location, $state, loader) {
            $scope.resetPassWordFn = function () {
                if ($scope.Form.NewPassword.$valid && $scope.Form.ConfirmNewPassWord.$valid) {
                    loader.active();
                $http({
                    url: $scope.apiReference.accountResetPassword,
                    method: "POST",
                    data: {
                        "Email": $location.search().userId,
                        "Password": $scope.NewPassword,
                        "ConfirmPassword": $scope.ConfirmNewPassWord,
                        "Code": $location.search().code
                    },
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).success(function (data, status, headers, config) {
                    loader.deactive();
                    $scope.showCustomToast(data.Message);
                    if (data.Message === '1000') {
                        $state.go('loginEn', "");
                    }
                    


                });
                } else {
                    $scope.showCustomToast('0');
                }

            }



        });
})();