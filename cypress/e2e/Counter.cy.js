describe('Counter', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('renders the counter with initial value 0', () => {
    cy.contains('Current value: 1');
  });

  it('increments the counter value on Increment button click', () => {
    cy.contains('+').click();
    cy.contains('Current value: 2');
  });

  it('decrements the counter value on Decrement button click', () => {
    cy.contains('-').click();
    cy.contains('Current value: 0');
  });
});
