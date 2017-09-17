angular.module("OR").controller("LayoutController",["$scope","$mdSidenav",function($scope,$mdSidenav) {

    $scope.open = function() {
        console.log("OPEN");
        $mdSidenav('left').toggle();
    };
}]);