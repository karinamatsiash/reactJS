describe('GenreSelect', () => {
  const hasClass = (expectedClass) => {
    return ($el) => {
      const classList = Array.from($el[0].classList);
      return classList.includes(expectedClass);
    };
  };

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('highlight selected genre', () => {
    cy.contains('COMEDY').click();
    cy.contains('COMEDY').should('satisfy', hasClass('selected'));
  });

  it('does not highlight non-selected genre', () => {
    cy.contains('HORROR').click();
    cy.contains('COMEDY').should('not.satisfy', hasClass('selected'));
  });
});
