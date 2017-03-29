describe("Division", function(){
    
    var $controller;

    beforeEach(function(){
        //WORDT VOOR ELKE TEST UITGEVOERD
        module ("angularApp");

        allFederations = [
			{id:"1", association:"3", name:"KNVB", small:"The Netherlands", url:"division", subname:"Royal Dutch Football Association", image:"KNVB.png"},
			{id:"2", association:"3", name:"The FA", small:"England", url:"", subname:"The Football Association", image:"THE_FA.png"},
			{id:"3", association:"3", name:"DFB", small:"Germany", url:"", subname:"German Football Association", image:"DFB.png"},
			{id:"4", association:"3", name:"RFEF", small:"Spain", url:"", subname:"Royal Spanish Football Federation", image:"RFEF.png"},
			{id:"5", association:"3", name:"FIGC", small:"Itali", url:"", subname:"Italian Football Federation", image:"FIGC.png"},
			{id:"6", association:"1", name:"USSF", small:"USA", url:"", subname:"United States Soccer Federation", image:"USSF.png"}
		];

        localStorage.setItem("federations", angular.toJson(allFederations));

        allDivisions = [
            {id:"1", federation:"1", name:"Eredivisie", small:"", url:"team", subname:"The Eredivisie is the highest echelon of professional football in the Netherlands.", image:"EREDIVISIE.png"},
            {id:"2", federation:"1", name:"Eerste Divisie", small:"Jupiler League", url:"", subname:"The Eerste Divisie is the second-highest tier of football in the Netherlands.", image:"Jupiler_League.png"}
        ];

        localStorage.setItem("divisions", angular.toJson(allDivisions));

        inject(function(_$controller_){
            $controller = _$controller_;
        });
    });

    describe('$scope.getFederationName', function(){
        it("should return the name of the id", function() {
            var $scope = {};
            var controller = $controller("divisionController", {$scope:$scope });
            var input = "1";
            var output = "KNVB";

            expect($scope.getFederationName(input)).toBe(output);
        });

        it("should return nothing when the id is not in the list", function() {
            var $scope = {};
            var controller = $controller("divisionController", {$scope:$scope });
            var input = "77";
            var output = "";

            expect($scope.getFederationName(input)).toBe(output);
        });
    });

    describe('$scope.deleteDivision', function(){
        it("should delete a division form the localStorage", function(){
            var $scope = {};
            var controller = $controller("divisionController", {$scope:$scope });

            $scope.deleteDivision({id:"1", federation:"1", name:"Eredivisie", small:"", url:"team", subname:"The Eredivisie is the highest echelon of professional football in the Netherlands.", image:"EREDIVISIE.png"});

            var input = JSON.parse(localStorage.getItem("divisions")).length;
            var output = 1;

            expect(input).toBe(output);
        });
    });
});