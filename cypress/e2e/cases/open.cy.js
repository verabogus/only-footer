describe('only page', function() {
  it('check that footer is exist', function() {
    cy.visit('https://only.digital')
	cy.scrollTo('bottom')
	cy.get('footer').should('be.visible')
  })
})