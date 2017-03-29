appModule.controller('federationController',function($scope, AssociationsFactory, FederationsFactory, $route, $routeParams, $location){
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;

	$scope.federations = FederationsFactory.getAllFederations();
	$scope.associations = AssociationsFactory.getAllAssociations();

	$scope.getAssociationName = function(id){
		return AssociationsFactory.getAssociationNameById(id);
	}

	$scope.saveNewFederation = function(federation) {
		
		var federationId = parseInt($scope.federations[$scope.federations.length - 1].id) + 1;

		$scope.federations.push({
			id: federationId.toString(),
			name: $scope.newFederation.name,
			small: $scope.newFederation.small,
			subname: $scope.newFederation.subname,
			image: $scope.newFederation.image,
			association: $scope.newFederation.association
		});

		$scope.newFederation = {};

		federation.adding = false;

		localStorage.setItem("federations", angular.toJson($scope.federations));
	};

	$scope.updateFederation = function(federation) {
		federation.updating=false;

		localStorage.setItem("federations", angular.toJson($scope.federations));
	};

	$scope.deleteFederation = function(federation) {

		var deleteIndex = -1;
		$scope.federations.forEach(function(e, i) {
			if(e.id === federation.id) {
				deleteIndex = i;
			}
		});

		$scope.federations.splice(deleteIndex, 1);

		localStorage.setItem("federations", JSON.stringify($scope.federations));
	};
});