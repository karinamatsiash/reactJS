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
    cy.contains('Comedy').click();
    cy.contains('Comedy').should('satisfy', hasClass('selected'));
  });

  it('does not highlight non-selected genre', () => {
    cy.contains('Crime').click();
    cy.contains('Comedy').should('not.satisfy', hasClass('selected'));
  });
});
