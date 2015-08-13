var myApp = angular.module('myApp', []);

myApp.controller("WelcomeController", ['$scope', '$http', function ($scope, $http) {
    $scope.note = {};
    $scope.notes =[];
    $scope.heading = "Here is your message: ";

    $scope.getData = function () {
        $http.get('/data').then(function (response) {
            console.log(response);
            $scope.notes = response.data;
        });
    };

    $scope.updateMessage = function (note) {
        //post
        $http.post('/data', note).then($scope.getData());
    }


}]);
