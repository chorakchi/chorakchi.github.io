(function () {
    "use strict";
    angular
        .module('registerEn', [])
        .config(routeconfig);

    function routeconfig($stateProvider) {
        $stateProvider
            .state('registerEn', {
                url: '/register_en',
                templateUrl: "asset/app/component/register/registerEn.tpl.html",
                data: {
                    css: 'asset/style/style-animat-change state.css'
                }
            }).state('register2En', {
                url: '/register2_en',
                templateUrl: "asset/app/component/register/register2En.tpl.html",
                //url: 'register2En?mobile&email',
                params: { 'mobile': null, 'email': null, 'id': null },
                data: {
                    css: 'asset/style/style-animat-change state.css'
                }
            }).state('register3En', {
                url: '/register3_en',
                templateUrl: "asset/app/component/register/register3En.tpl.html",
                params: { 'id': null },
                data: {
                    css: 'asset/style/style-animat-change state.css'
                }
            }).state('register4En', {
                url: '/register4_en',
                templateUrl: "asset/app/component/register/register4En.tpl.html",
                params: { 'id': null },
                data: {
                    css: 'asset/style/style-animat-change state.css'
                }
            }).state('register0En', {
                url: '/register0_en',
                templateUrl: "asset/app/component/register/register0En.tpl.html",
                data: {
                    css: 'asset/style/style-animat-change state.css'
                }
            }).state('registerFeedbackEn', {
                url: '/registerFeedback_en',
                templateUrl: "asset/app/component/register/registerFeedbackEn.tpl.html",
                params: {'id': null },
                data: {
                    css: 'asset/style/style-animat-change state.css'
                }
            });
    }
    angular
        .module('registerEn')
        .controller('registerEnCtrl', function ($scope, $http, $state, $localStorage, $timeout, loader) {
            
            
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
                            $state.go('register2En', { 'mobile': data.Result[0].MobileNumber, 'email': data.Result[0].EmailAddress, 'id': data.Result[0].NationalId });

                        } else if (data.Message === '18000') {
                            $state.go('registerFeedbackEn', { 'id': $scope.nationalID });
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
        .module('registerEn')
        .controller('register2EnCtrl', function ($scope, $http, $state, $localStorage, $timeout, $stateParams, loader) {

            if ($stateParams.id === null) {
                $state.go('loginEn', '');
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
                        $state.go('register3En', {'id': $stateParams.id});
                    } else {
                        $scope.showCustomToast('0');
                    }
                });
                
            }
        });
    angular
        .module('registerEn')
        .controller('register3EnCtrl', function ($scope, $http, $state, $localStorage, $timeout, $stateParams, loader) {
            if ($stateParams.id === null) {
                $state.go('loginEn', '');
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
                            $state.go('register4En', { 'id': $stateParams.id });
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
        .controller('register4EnCtrl', function ($scope, $http, $state, $localStorage, $timeout, $stateParams, loader) {
            if ($stateParams.id === null) {
                $state.go('loginEn', '');
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
                            $state.go('loginEn', "");
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
            .module('registerEn')
            .controller('registerFeedbackEnCtrl', function ($scope, $http, $state, $localStorage, $timeout, $stateParams, loader) {
                if ($stateParams.id === null) {
                    $state.go('loginEn', '');
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
                                $state.go('loginEn', "");
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