describe('Landing Page Test', () => {  
    it('opens the Landing Page', () => {
        cy.visit('http://localhost:8000/boards');
    })

    it('Add a project', () => {
        cy.visit('http://localhost:8000/boards');
        cy.get('#open-add-project-button').click()

        cy.get('#add-project-name-input').type('Homework Project')
        cy.get('#add-project-description-input').type('Contains tasks related to doing homework.')
        cy.get('#add-project-url-input').type('https://www.dummyimage.com/image.png')

        cy.get('#add-project-button').click() 
        cy.get('#Homework Project-52').should('exist')
    })
  
})