describe('Home page', () => {
  it('Visit Home page', () => {
    cy.visit('/')
    cy.contains('Cypress example').should('be.visible')
    cy.get('a').contains('Learn how to use Cypress').should('have.attr', 'href', 'https://docs.cypress.io/app/get-started/why-cypress')
  })
})