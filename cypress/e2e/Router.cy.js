describe('Router', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should update url with search value on button cilck', () => {
    cy.get('input').type('and');
    cy.contains('SEARCH').click();
    cy.url().should('include', 'search=and');
  });

  it('should update url with search value on Enter click', () => {
    cy.get('input').type('son').type('{enter}');
    cy.url().should('include', 'search=son');
  });

  it('should update url with selected genre', () => {
    cy.contains('Comedy').click();
    cy.url().should('include', 'genre=Comedy');
  });

  it('should update url with sort', () => {
    cy.contains('TITLE').click();
    cy.url().should('include', 'sortOption=title&sortState=ASC');

    cy.contains('TITLE').click();
    cy.url().should('include', 'sortOption=title&sortState=DESC');
  });

  it('should update url with movieId', () => {
    cy.contains('Fifty Shades Freed').click();

    cy.url().should('include', '337167');
  });

  it('should update url with all selections', () => {
    cy.contains('Comedy').click();
    cy.contains('TITLE').click();
    cy.get('input').type('son').type('{enter}');
    cy.contains('Hudson Hawk').click();

    cy.url().should(
      'include',
      '9292?genre=Comedy&sortOption=title&sortState=ASC&search=son'
    );
  });

  it('should preserve selection', () => {
    cy.contains('Comedy').click();
    cy.contains('TITLE').click();
    cy.get('input').type('son').type('{enter}');
    cy.contains('Hudson Hawk').click();

    cy.url().should(
      'include',
      '9292?genre=Comedy&sortOption=title&sortState=ASC&search=son'
    );

    cy.get('a[href="/?genre=Comedy&sortOption=title&sortState=ASC&search=son"]').click();

    cy.url().should('include', 'genre=Comedy&sortOption=title&sortState=ASC&search=son');
  });
});
