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
                available: true,
            },
            {
                name: "Crystal",
                belt: "Yellow",
                price: 30,
                available: false,
            },
            {
                name: "Ryu",
                belt: "orange",
                price: 10,
                available: false,
            },
            {
                name: "shaun",
                belt: "black",
                price: 40,
                available: true,
            },
        ];
    },
]);
