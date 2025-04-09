describe('MoviesTopSection', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000', {
      onBeforeLoad: (win) => cy.stub(win.console, 'log').as('consoleLog')
    });
  });

  it('should print input value after search button click', () => {
    cy.get('input').type('some movie');
    cy.contains('SEARCH').click();
    cy.get('@consoleLog').should('be.calledWith', 'Search value: some movie');
  });

  it('should print input value after Enter key button click', () => {
    cy.get('input').type('some new movie').type('{enter}');
    cy.get('@consoleLog').should('be.calledWith', 'Search value: some new movie');
  });
});
