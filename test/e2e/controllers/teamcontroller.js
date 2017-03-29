describe('E2E: angularjs team page', function() {

    beforeEach(function() {
        browser.get('http://localhost:8080/#!/team');
    });

    it('should display a list of team items', function() {
        var rows = element.all(by.repeater('team in teams')).count();
        expect(rows).toBe(6);
    });
});