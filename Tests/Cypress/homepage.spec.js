describe('Homepage Test', () => {

    it('finds the homepage website', () => {
      cy.visit('http://localhost:8000');
    })
  
    it('opens the Landing Page', () => {
        cy.visit('http://localhost:8000');
    

        /* Example code from restaurant - saved for reference.
        cy.get('#name').type('Mcdonalds')
        cy.get('#image').type('https://i1.wp.com/www.eatthis.com/wp-content/uploads/2018/12/the-golden-mcdonalds-arch.jpg?fit=1200%2C879&ssl=1')
        cy.get('#add-restaurant-button').click()
        
        cy.visit('https://localhost:443')
        cy.get('#Mcdonalds-9').should('exist')
        */
    })
  
})