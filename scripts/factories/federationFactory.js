appModule.factory('FederationsFactory', function() {
    
    var allFederations;
        
    var localFederations = JSON.parse(localStorage.getItem("federations"));

    if(localFederations != undefined && localFederations.length>0) {
        allFederations = localFederations;
    } else {
        allFederations = [
			{id:"1", association:"3", name:"KNVB", small:"The Netherlands", url:"division", subname:"Royal Dutch Football Association", image:"KNVB.png"},
			{id:"2", association:"3", name:"The FA", small:"England", url:"", subname:"The Football Association", image:"THE_FA.png"},
			{id:"3", association:"3", name:"DFB", small:"Germany", url:"", subname:"German Football Association", image:"DFB.png"},
			{id:"4", association:"3", name:"RFEF", small:"Spain", url:"", subname:"Royal Spanish Football Federation", image:"RFEF.png"},
			{id:"5", association:"3", name:"FIGC", small:"Itali", url:"", subname:"Italian Football Federation", image:"FIGC.png"},
			{id:"6", association:"1", name:"USSF", small:"USA", url:"", subname:"United States Soccer Federation", image:"USSF.png"}
		];
    }

    function getAllFederations() {
        return allFederations;
    }

    function getFederationNameById(federationId){
        var name = "";
        angular.forEach(allFederations, function(value) {
            if(value.id == federationId){
                name = value.name;
            }
        });

        return name;
    }

    return {
        getAllFederations: getAllFederations,
        getFederationNameById: getFederationNameById
    };
});