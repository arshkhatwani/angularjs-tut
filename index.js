const myNinjaApp = angular.module("myNinjaApp", []);

myNinjaApp.controller("NinjaController", [
    "$scope",
    ($scope) => {
        $scope.message = "The Ninjas:";

        $scope.ninjas = [
            {
                name: "Yoshi",
                belt: "green",
                price: 20,
            },
            {
                name: "Crystal",
                belt: "Yellow",
                price: 30,
            },
            {
                name: "Ryu",
                belt: "orange",
                price: 10,
            },
            {
                name: "shaun",
                belt: "black",
                price: 40,
            },
        ];
    },
]);
