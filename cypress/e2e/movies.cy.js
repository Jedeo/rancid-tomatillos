describe('home page', () => {
  beforeEach(() => {
    cy.visit('localhost:3000/')
  })
  it('should go to local host url', () => {})

  it('should display title', () => {
    cy.get('.header').contains('P E T R I F I E D P O T A T O')
  })

  it('should display all movies', () => {
    cy.get('.movieData').children(':nth-child(1)')
    .children('a')
    .children('.posterImg')
  })

  it('should show details of movie when clicked', () => {
    cy.get(':nth-child(1) > a > .posterImg').click()
    cy.get('.movieDetails')
    //cy.get('[data-layer="Content"]')
    // .children('.detailsContainer')
    // .children('.moviePoster')
  })

  it('should not show any other movies when a single movie is displayed', () => {
    cy.get(':nth-child(1) > a > .posterImg').click()
    cy.get('.movieDetailsContainer')
    .contains('.movieDetails').should('not.exist')
  })

  it('should have a home button', () => {
    cy.get(':nth-child(1) > a > .posterImg').click()
    cy.get('.movieDetailsContainer')
    cy.get('.potatoImg').click()
    cy.url('localhost:3000/')
  })

  it('should throw 500 error', () => {
    cy.intercept(
      'GET',
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
      { statusCode: 500 }
    ).as('getServerFailure')

    cy.get(".movieData")
    .contains("Error!")
  })




})
