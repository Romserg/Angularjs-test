(function () {
    var app = angular.module('my-app', []);

    app.controller("usersCtrl", ['$scope', '$http', function ($scope, $http) {
        $scope.usersArray = [{
            firstName: '',
            lastName: '',
            year: null
        }];
        $scope.get = function () {
            $http({
                method: "GET",
                url: "./data/db.json"
            }).then(function successCallback(response) {
                $scope.usersArray = response.data;
                console.log(response);
            }, function errorCallback(response) {
                console.log("Error " + response.status + ": " + response.data)
            });
        } 
        $scope.tempFirst = "Example";
        $scope.tempLast = "Example";
        $scope.tempYear = 2000;

        $scope.addNew = function () {
            
                $scope.usersArray.push({
                    'firstName': $scope.tempFirst,
                    'lastName': $scope.tempLast,
                    'year': $scope.tempYear
                });
                $scope.tempFirst = "";
                $scope.tempLast = "";
                $scope.tempYear = null;
            
        };

        $scope.deletePerson = function (user) {
            let index = $scope.usersArray.indexOf(user);
            $scope.usersArray.splice(index, 1);
        };

    }]);
})();