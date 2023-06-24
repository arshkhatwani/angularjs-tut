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
                belt: "blue",
                price: 40,
                available: true,
            },
            {
                name: "paxton",
                belt: "green",
                price: 50,
                available: true,
            },
            {
                name: "ella",
                belt: "orange",
                price: 80,
                available: true,
            },
        ];

        $scope.removeNinja = function (ninja) {
            const index = $scope.ninjas.indexOf(ninja);
            $scope.ninjas.splice(index, 1);
        };
    },
]);
