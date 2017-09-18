angular.module("OR").controller("LayoutController",["$scope","$mdSidenav",function($scope,$mdSidenav) {
    $scope.open = function() {
        $mdSidenav('left').toggle();
    };
}]);