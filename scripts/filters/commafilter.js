var testAppFilters = angular.module("angularApp.filters", []);

testAppFilters.filter("commaFilter", function(){
    return function(input){
        if(input == undefined) input = "";

        if(input.length > 0){
            input = ","
        }

        return input;
    };
});