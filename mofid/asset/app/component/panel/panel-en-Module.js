(function () {
    "use strict";
    angular
        .module('panelEn', ['perfect_scrollbar', 'ngMaterial', 'ngMessages', ])
        .config(routeconfig);

    function routeconfig($stateProvider) {
        $stateProvider.state('panel_en', {
            url: '/panel_en',
            templateUrl: "asset/app/component/panel/panel-en.tpl.html",
            controller: 'panel_en_ctrl',
            data: {
                css: 'asset/style/style-animat-change state.css'
            }
        });
    }
    angular
        .module('panelEn')
        .controller('panel_en_ctrl', function ($scope, $http, $state, $mdDialog, $localStorage) {
            $scope.routedSelected = 'home';
            $scope.name = $localStorage.name;
            $scope.feedbackType = 1;
            $scope.content = $scope.language.LanguageEn;
            fonclick();
            accordmenu();
            feedback();
            $scope.feedbackBTN = function () {
                $http({
                    url: $scope.apiReference.SendFeedBack,
                    method: "POST",
                    data: {
                        "ReportFilter": {
                            "Message": $scope.feedBackText,
                            "Type": $scope.feedbackType
                        }
                    },
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + key
                    }
                })
                    .success(function (data, status, headers, config) {
                         $scope.showCustomToast(data.Message + ""); 
                    });
            }

            $scope.status = '  ';

            $scope.showAdvanced = function (ev) {
                $mdDialog.show({
                    controller: DialogController,
                    templateUrl: 'dialog1.tmpl.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true
                })
                .then(function (answer) {
                    $scope.status = 'You said the information was "' + answer + '".';
                }, function () {
                    $scope.status = 'You cancelled the dialog.';
                });
            };

            function DialogController($scope, $mdDialog) {
                $scope.hide = function () {
                    $mdDialog.hide();
                };
                $scope.cancel = function () {
                    $mdDialog.cancel();
                };
            }

            /////////////////////// getManagementTypes global ///////////////

            $http({
                url: $scope.apiReference.getManagementTypes,
                method: "GET"
            }).success(function (data, status, headers, config) {
                $scope.ManagementTypes = data.Result;
                var usersDataSource = new kendo.data.ObservableArray($scope.ManagementTypes);

                $scope.dropOptionsManagementTypeCode = {
                    dataSource: usersDataSource,
                    dataTextField: 'ManagementTypeTitle',
                    dataValueField: 'ManagementTypeCode',
                    //dataBound: function () {
                    //    $scope.dropOptionsManagementTypeCode.index= 2;
                    //}
                    //value: 2,
                    index: 2,
                    //search: 'Discretionary',
                    //select: 1
                };
            });
            //////////////////////////////////////////////
        });  
})();