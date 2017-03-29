appModule.controller('teamController',function($scope, DivisionsFactory, $route, $routeParams, $location){
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;

    var localTeams = JSON.parse(localStorage.getItem("teams"));

	if(localTeams != undefined && localTeams.length>0) {
		$scope.teams = localTeams;
	}
	else {
		$scope.teams = [
			{id:"1", division:"1", name:"Ajax", small:"Amsterdam", url:"", subname:"Amsterdamsche Football Club Ajax (AFCA), also AFC Ajax, Ajax Amsterdam or simply Ajax, is a Dutch professional football club based in Amsterdam.", image:"AJAX.png"},
			{id:"2", division:"1", name:"Feyenoord", small:"Rotterdam", url:"", subname:"Feyenoord Rotterdam is a Dutch professional football club based in Rotterdam, playing in the Eredivisie.", image:"FEYENOORD.png"},
			{id:"3", division:"1", name:"PSV", small:"Eindhoven", url:"", subname:"The Philips Sport Vereniging (PSV), abbreviated as PSV and internationally known as PSV Eindhoven is a sports club from Eindhoven, Netherlands.", image:"PSV.png"},
			{id:"4", division:"1", name:"FC Utrecht", small:"Utrecht", url:"", subname:"Football Club Utrecht is a Dutch football club founded on 1 July 1970 and based in the city of Utrecht.", image:"FC_UTRECHT.png"},
			{id:"5", division:"1", name:"AZ", small:"Alkmaar", url:"", subname:"Alkmaar Zaanstreek, better known as AZ Alkmaar or simply AZ, is a Dutch professional football club from Alkmaar and the Zaanstreek.", image:"AZ.png"},
			{id:"6", division:"1", name:"FC Twente", small:"Twente", url:"", subname:"Football Club Twente is a Dutch professional football club from the city of Enschede, playing in the Eredivisie.", image:"FC_TWENTE.png"}
		];
	}

	$scope.divisions = DivisionsFactory.getAllDivisions();

	$scope.getDivisionName = function(id){
		return DivisionsFactory.getDivisionNameById(id);
	}

	$scope.saveNewTeam = function(team) {

		var teamId = parseInt($scope.teams[$scope.teams.length - 1].id) + 1;
		
		$scope.teams.push({
			id: teamId,
			division: $scope.newTeam.division,
			name: $scope.newTeam.name,
			small: $scope.newTeam.small,
			subname: $scope.newTeam.subname,
			image: $scope.newTeam.image
		});

		$scope.newTeam = {};

		team.adding = false;

		localStorage.setItem("teams", angular.toJson($scope.teams));
	};

	$scope.updateTeam = function(team) {
		team.updating=false;

		localStorage.setItem("teams", angular.toJson($scope.teams));
	};

	$scope.deleteTeam = function(team) {

		var deleteIndex = -1;
		$scope.teams.forEach(function(e, i) {
			if(e.id === team.id) {
				deleteIndex = i;
			}
		});

		$scope.teams.splice(deleteIndex, 1);

		localStorage.setItem("teams", JSON.stringify($scope.teams));
	};
});