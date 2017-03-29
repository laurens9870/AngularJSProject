describe("Teams", function(){
    
    var $controller;

    beforeEach(function(){
        //WORDT VOOR ELKE TEST UITGEVOERD
        module ("angularApp");

        allDivisions = [
            {id:"1", federation:"1", name:"Eredivisie", small:"", url:"team", subname:"The Eredivisie is the highest echelon of professional football in the Netherlands.", image:"EREDIVISIE.png"},
            {id:"2", federation:"1", name:"Eerste Divisie", small:"Jupiler League", url:"", subname:"The Eerste Divisie is the second-highest tier of football in the Netherlands.", image:"Jupiler_League.png"}
        ];

        localStorage.setItem("divisions", angular.toJson(allDivisions));

        teams = [
			{id:"1", division:"1", name:"Ajax", small:"Amsterdam", url:"", subname:"Amsterdamsche Football Club Ajax (AFCA), also AFC Ajax, Ajax Amsterdam or simply Ajax, is a Dutch professional football club based in Amsterdam.", image:"AJAX.png"},
			{id:"2", division:"1", name:"Feyenoord", small:"Rotterdam", url:"", subname:"Feyenoord Rotterdam is a Dutch professional football club based in Rotterdam, playing in the Eredivisie.", image:"FEYENOORD.png"},
			{id:"3", division:"1", name:"PSV", small:"Eindhoven", url:"", subname:"The Philips Sport Vereniging (PSV), abbreviated as PSV and internationally known as PSV Eindhoven is a sports club from Eindhoven, Netherlands.", image:"PSV.png"},
			{id:"4", division:"1", name:"FC Utrecht", small:"Utrecht", url:"", subname:"Football Club Utrecht is a Dutch football club founded on 1 July 1970 and based in the city of Utrecht.", image:"FC_UTRECHT.png"},
			{id:"5", division:"1", name:"AZ", small:"Alkmaar", url:"", subname:"Alkmaar Zaanstreek, better known as AZ Alkmaar or simply AZ, is a Dutch professional football club from Alkmaar and the Zaanstreek.", image:"AZ.png"},
			{id:"6", division:"1", name:"FC Twente", small:"Twente", url:"", subname:"Football Club Twente is a Dutch professional football club from the city of Enschede, playing in the Eredivisie.", image:"FC_TWENTE.png"}
		];

        localStorage.setItem("teams", angular.toJson(teams));

        inject(function(_$controller_){
            $controller = _$controller_;
        });
    });

    describe('$scope.getDivisionName', function(){
        it("should return the name of the id", function() {
            var $scope = {};
            var controller = $controller("teamController", {$scope:$scope });
            var input = "1";
            var output = "Eredivisie";

            expect($scope.getDivisionName(input)).toBe(output);
        });

        it("should return nothing when the id is not in the list", function() {
            var $scope = {};
            var controller = $controller("teamController", {$scope:$scope });
            var input = "77";
            var output = "";

            expect($scope.getDivisionName(input)).toBe(output);
        });
    });

    describe('$scope.deleteTeam', function(){
        it("should delete a team form the localStorage", function(){
            var $scope = {};
            var controller = $controller("teamController", {$scope:$scope });

            $scope.deleteTeam({id:"2", division:"1", name:"Feyenoord", small:"Rotterdam", url:"", subname:"Feyenoord Rotterdam is a Dutch professional football club based in Rotterdam, playing in the Eredivisie.", image:"FEYENOORD.png"});

            var input = JSON.parse(localStorage.getItem("teams")).length;
            var output = 5;

            expect(input).toBe(output);
        });
    });
});