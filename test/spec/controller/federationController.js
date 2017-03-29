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

        allAssociations = [
			{id:"1", name:"CONCACAF", small:"", url:"", subname:"Confederation of North, Central America and Caribbean Association Football", image:"CONCACAF.png"},
			{id:"2", name:"CONMEBOL", small:"", url:"", subname:"South American Football Confederation", image:"SAF.png"},
			{id:"3", name:"UEFA", small:"", url:"federation", subname:"Union of European Football Associations", image:"UEFA.png"},
			{id:"4", name:"CAF", small:"", url:"", subname:"Confederation of African Football", image:"CAF.png"},
			{id:"5", name:"AFC", small:"", url:"", subname:"Asian Football Confederation", image:"AFC.png"},
			{id:"6", name:"OFC", small:"", url:"", subname:"Oceania Football Confederation", image:"OFC.png"}
		];

        localStorage.setItem("associations", angular.toJson(allAssociations));

        inject(function(_$controller_){
            $controller = _$controller_;
        });
    });

    describe('$scope.getAssociationName', function(){
        it("should return the name of the id", function() {
            var $scope = {};
            var controller = $controller("federationController", {$scope:$scope });
            var input = "3";
            var output = "UEFA";

            expect($scope.getAssociationName(input)).toBe(output);
        });

        it("should return nothing when the id is not in the list", function() {
            var $scope = {};
            var controller = $controller("federationController", {$scope:$scope });
            var input = "77";
            var output = "";

            expect($scope.getAssociationName(input)).toBe(output);
        });
    });

    describe('$scope.deleteFederation', function(){
        it("should delete a federation form the localStorage", function(){
            var $scope = {};
            var controller = $controller("federationController", {$scope:$scope });

            $scope.deleteFederation({id:"6", name:"OFC", small:"", url:"", subname:"Oceania Football Confederation", image:"OFC.png"});

            var input = JSON.parse(localStorage.getItem("federations")).length;
            var output = 5;

            expect(input).toBe(output);
        });
    });
});