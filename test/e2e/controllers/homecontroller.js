describe('E2E: angularjs homepage', function() {

    beforeEach(function() {
        browser.get('http://localhost:8080');
    });

    it('should display a list of association items', function() {
        var rows = element.all(by.repeater('association in associations')).count();
        expect(rows).toBe(6);
    });
});