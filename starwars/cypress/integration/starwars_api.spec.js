describe('Star Wars API', () => {
  it('Retorno status Bem Sucedido', () => {
    const starwars = cy.request('GET', 'https://swapi.co/api/people/1/')
    
    starwars.its('status')
      .should('be.eql', 200)
    
  }) 

  it('Retorno status Erro', () => {
    const starwars = cy.request('GET', 'https://swapi.co/api/people/1/')
    
    starwars.its('status')
      .should('not.be.eql', 501)
    
  }) 	  
  

 
})