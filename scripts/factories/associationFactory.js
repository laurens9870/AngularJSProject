appModule.factory('AssociationsFactory', function() {

    var allAssociations;
        
    var localAssociations = JSON.parse(localStorage.getItem("associations"));

    if(localAssociations != undefined && localAssociations.length>0) {
        allAssociations = localAssociations;
    } else {
        allAssociations = [
			{id:"1", name:"CONCACAF", small:"", url:"", subname:"Confederation of North, Central America and Caribbean Association Football", image:"CONCACAF.png"},
			{id:"2", name:"CONMEBOL", small:"", url:"", subname:"South American Football Confederation", image:"SAF.png"},
			{id:"3", name:"UEFA", small:"", url:"federation", subname:"Union of European Football Associations", image:"UEFA.png"},
			{id:"4", name:"CAF", small:"", url:"", subname:"Confederation of African Football", image:"CAF.png"},
			{id:"5", name:"AFC", small:"", url:"", subname:"Asian Football Confederation", image:"AFC.png"},
			{id:"6", name:"OFC", small:"", url:"", subname:"Oceania Football Confederation", image:"OFC.png"}
		];
    }

    function getAllAssociations() {
        return allAssociations;
    }

    function getAssociationNameById(associationId){
        var name = "";
        angular.forEach(allAssociations, function(value) {
            if(value.id == associationId){
                name = value.name;
            }
        });

        return name;
    }

    return {
        getAllAssociations: getAllAssociations,
        getAssociationNameById: getAssociationNameById
    };
});