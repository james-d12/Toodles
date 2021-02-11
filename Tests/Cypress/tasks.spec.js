describe('Tasks Page Test', () => {  
    it('opens the Landing Page', () => {
        cy.visit('http://localhost:8000/boards');
    })

    it('Add a Task', () => {
        cy.visit('http://localhost:8000/boards/1/');
        cy.get('#plusIcon-1 ').click()

        cy.get('#add-task-name-input').type('Homework-Project')
        cy.get('#add-task-description-input').type('Contains tasks related to doing homework.')
        cy.get('#add-task-user-input').type(1)
        cy.get('#add-task-column-input').select('Todo')

        cy.get('#add-task-button').click() 
        cy.get('#1-1').should('exist')
    })

})