describe('movie details page', () => {
  beforeEach(() => {
    cy.visit('localhost3000/movieDetails/694919')
  })
  it('should show details of movie when clicked', () => {
    cy.get('.detailsContainer').contains('.movieDetails')
  })
})
