describe('Landing Page Test', () => {  
    it('opens the Landing Page', () => {
        cy.visit('http://localhost:8000/boards');
    })

    it('Add a project', () => {
        cy.visit('http://localhost:8000/boards');
        cy.get('#open-add-project-button').click()

        cy.get('#add-project-name-input').type('Homework-Project')
        cy.get('#add-project-description-input').type('Contains tasks related to doing homework.')

        cy.get('#add-project-button').click() 
        cy.get('#Homework-Project-4').should('exist')
    })

    it('Delete a project', () => {
        cy.visit('http://localhost:8000/boards');
        cy.get('#delete-project-button-4').click()

        cy.get('#Homework-Project-4').should('not.exist')
    })
  
})