describe('E2E: angularjs federation page', function() {

    beforeEach(function() {
        browser.get('http://localhost:8080/#!/federation');
    });

    it('should display a list of federation items', function() {
        var rows = element.all(by.repeater('federation in federations')).count();
        expect(rows).toBe(6);
    });
});