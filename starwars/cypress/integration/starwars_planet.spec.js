describe('Star Wars API', () => {
  it('Retorno Tatooine', () => {
    const starwars = cy.request('GET', 'https://swapi.co/api/planets/1/')
    
     starwars.its('name')
		expect({ name: 'Tatooine' }).to.eql({ name: 'Tatooine' })
    
  })  

  it('Retorno Período de Rotação', () => {
    const starwars = cy.request('GET', 'https://swapi.co/api/planets/1/')
    
	    starwars.its('rotation_period')
		expect(23).to.equal(23)

  })    

    it('Retorno Período de Orbitação', () => {
    const starwars = cy.request('GET', 'https://swapi.co/api/planets/1/')
    
	    starwars.its('orbital_period')
		expect(304).to.equal(304)

  })  

    it('Retorno Diâmetro', () => {
    const starwars = cy.request('GET', 'https://swapi.co/api/planets/1/')
    
	    starwars.its('diameter')
		expect(10465).to.equal(10465)

  })   

    it('Retorno Clima', () => {
    const starwars = cy.request('GET', 'https://swapi.co/api/planets/1/')
    
     starwars.its('climate')
		expect({ climate: 'arid' }).to.eql({ climate: 'arid' })

  }) 
  
    it('Retorno Gravidade', () => {
    const starwars = cy.request('GET', 'https://swapi.co/api/planets/1/')
    
	    starwars.its('gravity')
		expect({ gravity: '1 standard' }).to.eql({ gravity: '1 standard' })

  }) 

    it('Retorno Solo', () => {
    const starwars = cy.request('GET', 'https://swapi.co/api/planets/1/')
    
	    starwars.its('terrain')
		expect({ terrain: 'desert' }).to.eql({ terrain: 'desert' })

  }) 
   
    it('Retorno Águas Superficiais', () => {
    const starwars = cy.request('GET', 'https://swapi.co/api/planets/1/')
    
	    starwars.its('surface_water')
		expect(1).to.equal(1)

  }) 
 
    it('Retorno População', () => {
    const starwars = cy.request('GET', 'https://swapi.co/api/planets/1/')
    
	    starwars.its('population')
		expect(200000).to.equal(200000)

  })  


})