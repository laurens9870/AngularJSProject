appModule.factory('DivisionsFactory', function() {
    var allDivisions;
        
    var localDivisions = JSON.parse(localStorage.getItem("divisions"));

    if(localDivisions != undefined && localDivisions.length>0) {
        allDivisions = localDivisions;
    } else {
        allDivisions = [
            {id:"1", federation:"1", name:"Eredivisie", small:"", url:"team", subname:"The Eredivisie is the highest echelon of professional football in the Netherlands.", image:"EREDIVISIE.png"},
            {id:"2", federation:"1", name:"Eerste Divisie", small:"Jupiler League", url:"", subname:"The Eerste Divisie is the second-highest tier of football in the Netherlands.", image:"Jupiler_League.png"}
        ];
    }

    function getAllDivisions() {    
        return allDivisions;
    }

    function getDivisionNameById(divisionId){
        var name = "";
        angular.forEach(allDivisions, function(value) {
            if(value.id == divisionId){
                name = value.name;
            }
        });

        return name;
    }

    return {
        getAllDivisions: getAllDivisions,
        getDivisionNameById: getDivisionNameById
    };
});