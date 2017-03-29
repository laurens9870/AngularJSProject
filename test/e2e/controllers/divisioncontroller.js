describe('E2E: angularjs division page', function() {

    beforeEach(function() {
        browser.get('http://localhost:8080/#!/division');
    });

    it('should display a list of division items', function() {
        var rows = element.all(by.repeater('division in divisions')).count();
        expect(rows).toBe(2);
    });
});