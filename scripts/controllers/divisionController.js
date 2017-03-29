appModule.controller('divisionController',function($scope, FederationsFactory, DivisionsFactory, $route, $routeParams, $location){
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
    
	$scope.divisions = DivisionsFactory.getAllDivisions();
	$scope.federations = FederationsFactory.getAllFederations();

	$scope.getFederationName = function(id){
		return FederationsFactory.getFederationNameById(id);
	}
	
	$scope.saveNewDivision = function(division) {
		
		var divisionId = parseInt($scope.divisions[$scope.divisions.length - 1].id) + 1;

		$scope.divisions.push({
			id: divisionId.toString(),
			name: $scope.newDivision.name,
			small: $scope.newDivision.small,
			subname: $scope.newDivision.subname,
			image: $scope.newDivision.image,
			federation: $scope.newDivision.federation
		});

		$scope.newDivision = {};

		division.adding = false;

		localStorage.setItem("divisions", angular.toJson($scope.divisions));
	};

	$scope.updateDivision = function(division) {
		division.updating=false;

		localStorage.setItem("divisions", angular.toJson($scope.divisions));
	};

	$scope.deleteDivision = function(division) {

		var deleteIndex = -1;
		$scope.divisions.forEach(function(e, i) {
			if(e.id === division.id) {
				deleteIndex = i;
			}
		});

		$scope.divisions.splice(deleteIndex, 1);

		localStorage.setItem("divisions", JSON.stringify($scope.divisions));
	};
});