describe("Filter: commafilter", function(){

    var filter;

    beforeEach(function(){
        //WORDT VOOR ELKE TEST UITGEVOERD
        module ("angularApp.filters");

        inject(function($filter){
            filter = $filter('commaFilter');
        });
    });

    it("should add comma while string length is longer than 0", function() {
        var input = "Klaas";
        var output = ",";

        expect(filter(input)).toBe(output);
	});

    it("should return nothing when nothing is insert.", function(){
        var input = "";
        var output ="";

        expect(filter(input)).toBe(output);
    });
});