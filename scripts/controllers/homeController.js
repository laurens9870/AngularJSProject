appModule.controller('homeController',function($scope, AssociationsFactory, $route, $routeParams, $location){
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;

	$scope.associations = AssociationsFactory.getAllAssociations();
});