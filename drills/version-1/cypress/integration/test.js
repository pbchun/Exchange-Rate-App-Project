describe('Foreign Currency Exchange Rate App', () => {
    it('Landing page a link with href to conversion.html', () => {
        cy.visit('http://localhost:3000/');
        cy.get('p').should('have.text', '*These foreign exchange rates are published by the European Central Bank*');
        cy.get('a').should('have.attr', 'href', 'conversion.html');
    });

    it('Link at the bottom of the landing page goes to exchange rates page', () => {
        cy
            .get('a')
            .click()
            .url().should('be', '/conversion.html')
    });

    it('Exchange rate page diplays most recent exchange rates', () => {
        cy.visit('http://localhost:3000/conversion.html');
        cy.get('ul').should('have', 'class', 'dollar-conversion');
    });

    it('If user enters date in correct format, the comparison rates should appear next to the latest exchange rates', () => {
        cy
            .get('form')
            .submit()
            .get('ul').should('have', 'class', 'comparison-rates');
    });

    it('Back to main page link takes user back to home page', () => {
        cy
        .get('a')
        .click()
        .url().should('be', '/index.html')
    });


});