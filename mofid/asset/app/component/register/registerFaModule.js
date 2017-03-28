(function () {
    "use strict";
    angular
        .module('registerFa', [])
        .config(routeconfig);

    function routeconfig($stateProvider) {
        $stateProvider
            .state('registerFa', {
                url: '/register_fa',
                templateUrl: "asset/app/component/register/registerFa.tpl.html",
                data: {
                    css: 'asset/style/fa-style-log.css'
                }
            }).state('register2Fa', {
                url: '/register2_fa',
                templateUrl: "asset/app/component/register/register2Fa.tpl.html",
                //url: 'register2Fa?mobile&email',
                params: { 'mobile': null, 'email': null, 'id': null },
                data: {
                    css: 'asset/style/fa-style-log.css'
                }
            }).state('register3Fa', {
                url: '/register3_fa',
                templateUrl: "asset/app/component/register/register3Fa.tpl.html",
                params: { 'id': null },
                data: {
                    css: 'asset/style/fa-style-log.css'
                }
            }).state('register4Fa', {
                url: '/register4_fa',
                templateUrl: "asset/app/component/register/register4Fa.tpl.html",
                params: { 'id': null },
                data: {
                    css: 'asset/style/fa-style-log.css'
                }
            }).state('register0Fa', {
                url: '/register0_fa',
                templateUrl: "asset/app/component/register/register0Fa.tpl.html",
                data: {
                    css: 'asset/style/fa-style-log.css'
                }
            }).state('registerFeedbackFa', {
                url: '/registerFeedback_fa',
                templateUrl: "asset/app/component/register/registerFeedbackFa.tpl.html",
                params: {'id': null },
                data: {
                    css: 'asset/style/fa-style-log.css'
                }
            });
    }
    angular
        .module('registerFa')
        .controller('registerFaCtrl', function ($scope, $http, $state, $localStorage, $timeout, loader) {
            
            
            $scope.ConfirmNationalIdFn = function () {
                if ($scope.Form.nationalID.$valid) {
                    loader.active();
                    $http({
                        url: $scope.apiReference.accountConfirmNationalId,
                        method: "POST",
                        data: {
                            "NationalId": $scope.nationalID,
                        },
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).success(function (data, status, headers, config) {
                        loader.deactive();
                        if (data.Message === '1000') {
                            $state.go('register2Fa', { 'mobile': data.Result[0].MobileNumber, 'email': data.Result[0].EmailAddress, 'id': data.Result[0].NationalId });

                        } else if (data.Message === '18000') {
                            $state.go('registerFeedbackFa', { 'id': $scope.nationalID });
                            $scope.showCustomToast(data.Message);
                        } else {
                            $scope.showCustomToast(data.Message);
                        }
                    });
                }
            else {
                $scope.showCustomToast('0');
            }
            }
            
            
            

        });
    angular
        .module('registerFa')
        .controller('register2FaCtrl', function ($scope, $http, $state, $localStorage, $timeout, $stateParams, loader) {

            if ($stateParams.id === null) {
                $state.go('loginFa', '');
            }
            $scope.MobileNumber = $stateParams.mobile;
            $scope.EmailAddress = $stateParams.email;;
            $scope.confirmAndContinueFn = function () {
                loader.active();
                $http({
                    url: $scope.apiReference.accountSendToken,
                    method: "POST",
                    data: {
                        "NationalId": $stateParams.id,
                    },
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).success(function (data, status, headers, config) {
                    loader.deactive();
                    if (data.Message === '1000') {
                        $state.go('register3Fa', {'id': $stateParams.id});
                    } else {
                        $scope.showCustomToast('0');
                    }
                });
                
            }
        });
    angular
        .module('registerFa')
        .controller('register3FaCtrl', function ($scope, $http, $state, $localStorage, $timeout, $stateParams, loader) {
            if ($stateParams.id === null) {
                $state.go('loginFa', '');
            }
            
            $scope.ContinueFn = function () {
                if ($scope.Form.activationCode.$valid) {
                    loader.active();
                    $http({
                        url: $scope.apiReference.accountVerifyToken,
                        method: "POST",
                        data: {
                            "NationalId": $stateParams.id,
                            "Token": $scope.activationCode
                        },
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).success(function (data, status, headers, config) {
                        loader.deactive();
                        if (data.Message === '1000') {
                            $state.go('register4Fa', { 'id': $stateParams.id });
                        } else {
                            $scope.showCustomToast(data.Message);
                        }
                    });

                }
            else {
                $scope.showCustomToast('0');
            }
            }
                 
        });

            angular
        .module('registerEn')
        .controller('register4FaCtrl', function ($scope, $http, $state, $localStorage, $timeout, $stateParams, loader) {
            if ($stateParams.id === null) {
                $state.go('loginFa', '');
            }
            
            $scope.singUpFn = function () {
                if ($scope.Form.singupPassWord.$valid && $scope.Form.ConfirmPassWord.$valid && $scope.Form.singupUserName.$valid) {
                    loader.active();
                    $http({
                        url: $scope.apiReference.accountCreateUser,
                        method: "POST",
                        data: {
                            "NationalId": $stateParams.id,
                            "Password": $scope.singupPassWord,
                            "ConfirmPasswod": $scope.ConfirmPassWord,
                            "UserName": $scope.singupUserName
                        },
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }).success(function (data, status, headers, config) {
                        loader.deactive();
                        if (data.Message === '1000') {
                            $state.go('loginFa', "");
                            $scope.showCustomToast(data.Message);
                        } else {
                            $scope.showCustomToast(data.Message);
                        }
                    });
                }
            else {
                $scope.showCustomToast('0');
            }
            }
            
            
        });
            angular
            .module('registerFa')
            .controller('registerFeedbackFaCtrl', function ($scope, $http, $state, $localStorage, $timeout, $stateParams, loader) {
                if ($stateParams.id === null) {
                    $state.go('loginFa', '');
                }
                
                $scope.registerfeedBackTextFn = function () {
                    if ($scope.Form.registerfeedBackText.$valid) {
                        loader.active();
                        $http({
                            url: $scope.apiReference.feedbackSendFeedBackAnonymos,
                            method: "POST",
                            data: {
                                "ReportFilter": {
                                    "NationalIdentification": $stateParams.id,
                                    "Message": $scope.registerfeedBackText,
                                    "Type": 3
                                }
                            },
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        }).success(function (data, status, headers, config) {
                            loader.deactive();
                            if (data.Message === '1000') {
                                $state.go('loginFa', "");
                                $scope.showCustomToast(data.Message);
                            } else {
                                $scope.showCustomToast(data.Message);
                            }
                        });

                    }
                else {
                    $scope.showCustomToast('0');
                }
                }
                
                
            });
})();