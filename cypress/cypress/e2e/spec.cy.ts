describe('Home page', () => {
  it('Visit Home page', () => {
    cy.visit('/')
    cy.contains('Cypress example').should('be.visible')
    // this test verifies the behavior and will run considerably faster
    // no page load!
    cy.get('a').contains('Learn how to use Cypress').should('have.attr', 'href', 'https://docs.cypress.io/app/get-started/why-cypress')
    
    cy.get('a').contains('Learn how to use Cypress').click()
    // do not do this unless you control domain
    cy.origin('https://docs.cypress.io', () => {
      cy.get('h1').should('contain', 'Why Cypress')
    })
  })
})