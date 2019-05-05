describe('Star Wars API', () => {
  it('Retorno - Luke Skywalker', () => {
    const starwars = cy.request('GET', 'https://swapi.co/api/people/1/')

    starwars.its('name')
		expect({ name: 'Luke Skywalker' }).to.eql({ name: 'Luke Skywalker' })
	
  })
  it('Retorno Negativo - Luke Skywalker', () => {
    const starwars = cy.request('GET', 'https://swapi.co/api/people/1/')

    starwars.its('name')
		expect(name).to.not.equal('Jane')
  })
  
  it('Retorno Altura', () => {
    const starwars = cy.request('GET', 'https://swapi.co/api/people/1/')

    starwars.its('height')
		expect(172).to.equal(172)
  })
  
  it('Retorno Peso', () => {
    const starwars = cy.request('GET', 'https://swapi.co/api/people/1/')

    starwars.its('mass')
		expect(77).to.equal(77)
  })
  
  it('Retorno Cor do Cabelo', () => {
    const starwars = cy.request('GET', 'https://swapi.co/api/people/1/')

    starwars.its('hair_color')
		expect({ hair_color: 'blond' }).to.eql({ hair_color: 'blond' })
	
  })
  
   it('Retorno Cor da Pele', () => {
    const starwars = cy.request('GET', 'https://swapi.co/api/people/1/')

    starwars.its('skin_color')
		expect({ skin_color: 'fair' }).to.eql({ skin_color: 'fair' })
	
  })
  
   it('Retorno Cor dos Olhos', () => {
    const starwars = cy.request('GET', 'https://swapi.co/api/people/1/')

    starwars.its('eye_color')
		expect({ eye_color: 'blue' }).to.eql({ eye_color: 'blue' })
	
  })
  
  it('Retorno Cor dos Olhos', () => {
    const starwars = cy.request('GET', 'https://swapi.co/api/people/1/')

    starwars.its('birth_year')
		expect({ birth_year: '19BBY' }).to.eql({ birth_year: '19BBY' })
	
  })
  
    it('Retorno Gênero', () => {
    const starwars = cy.request('GET', 'https://swapi.co/api/people/1/')

    starwars.its('gender')
		expect({ gender: 'male' }).to.eql({ gender: 'male' })
	
  })


})