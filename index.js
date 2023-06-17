const myNinjaApp = angular.module("myNinjaApp", []);

myNinjaApp.controller("NinjaController", [
    "$scope",
    ($scope) => {
        $scope.message = "Hello everyone!";
        $scope.coders = ["Arsh", "Ravi", "John", "Jake"];
    },
]);
