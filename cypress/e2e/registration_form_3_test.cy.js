beforeEach(() => {
    cy.visit('cypress/fixtures/registration_form_3.html')
})

describe('Visual tests', () => {
    it('Check that radio button list is correct', () => {
        cy.get('input[type="radio"]').should('have.length', 4)
        // Verify labels of the radio buttons
        cy.get('input[type="radio"]').next().eq(0).should('have.text','Daily')
        cy.get('input[type="radio"]').next().eq(1).should('have.text','Weekly')
        cy.get('input[type="radio"]').next().eq(2).should('have.text','Monthly')
        cy.get('input[type="radio"]').next().eq(3).should('have.text','Never')
        //Verify default state of radio buttons
        cy.get('input[type="radio"]').eq(0).should('not.be.checked')
        cy.get('input[type="radio"]').eq(1).should('not.be.checked')
        cy.get('input[type="radio"]').eq(2).should('not.be.checked')
        cy.get('input[type="radio"]').eq(3).should('not.be.checked')
        // Selecting one will remove selection from the other radio button
        cy.get('input[type="radio"]').eq(0).should('not.be.checked')
        cy.get('input[type="radio"]').eq(1).check().should('be.checked')
        cy.get('input[type="radio"]').eq(2).should('not.be.checked')
        cy.get('input[type="radio"]').eq(3).should('not.be.checked')
    })

    it('Spain dropdown have correct citys', () => {
        cy.get('#country').find('option').should('have.length', 4)
        cy.get('#country').select('Spain').should('have.value', 'object:3')
        // Get the length of array of elements in City dropdown
        cy.get('#city').find('option').should('have.length', 5)
        // Check  that first element in the dropdown is empty
        cy.get('#city').find('option').eq(0).should('have.text', '')
        cy.get('#city').find('option').eq(1).should('have.text', 'Malaga')
        cy.get('#city').find('option').eq(2).should('have.text', 'Madrid')
        cy.get('#city').find('option').eq(3).should('have.text', 'Valencia')
        cy.get('#city').find('option').eq(4).should('have.text', 'Corralejo')
    })

    it('Estonia dropdown have correct citys', () => {
        cy.get('#country').find('option').should('have.length', 4)
        cy.get('#country').select('Estonia').should('have.value', 'object:4')
        // Get the length of array of elements in City dropdown
        cy.get('#city').find('option').should('have.length', 4)
        // Check  that first element in the dropdown is empty
        cy.get('#city').find('option').eq(0).should('have.text', '')
        cy.get('#city').find('option').eq(1).should('have.text', 'Tallinn')
        cy.get('#city').find('option').eq(2).should('have.text', 'Haapsalu')
        cy.get('#city').find('option').eq(3).should('have.text', 'Tartu')
    })

    it('Austria dropdown have correct citys', () => {
        cy.get('#country').find('option').should('have.length', 4)
        cy.get('#country').select('Austria').should('have.value', 'object:5')
        // Get the length of array of elements in City dropdown
        cy.get('#city').find('option').should('have.length', 4)
        // Check  that first element in the dropdown is empty
        cy.get('#city').find('option').eq(0).should('have.text', '')
        cy.get('#city').find('option').eq(1).should('have.text', 'Vienna')
        cy.get('#city').find('option').eq(2).should('have.text', 'Salzburg')
        cy.get('#city').find('option').eq(3).should('have.text', 'Innsbruck')
    })  

    it('if city is already chosen and country is updated, then city choice should be removed', () => {
        cy.get('#country').select('Spain').should('have.value', 'object:3')
        cy.get('#city').find('option').eq(1).click().should('have.text', 'Malaga')
        //Change country and check for city
        cy.get('#country').select('Estonia').should('have.value', 'object:4')
        // Assert that the city dropdown is reset or cleared
    })

    it('Check that checkbox list is correct', () => {
        // Array of found elements with given selector has 3 elements in total
        cy.get('input[type="checkbox"]').should('have.length', 2)
        //Verify default state of checkbox buttons
        cy.get('input[type="checkbox"]').eq(0).should('not.be.checked')
        cy.get('input[type="checkbox"]').eq(1).should('not.be.checked')
        // Verify labels of the radio buttons
        cy.get('input[type="checkbox"]').next().eq(0).should('have.text','')
        cy.get('input[type="checkbox"]').next().eq(1).should('have.text','Accept our cookie policy')
        // Select first checkbox
        cy.get('input[type="checkbox"]').eq(0).check().should('be.checked')
        //Verify state of checkbox button
        cy.get('input[type="checkbox"]').eq(0).should('be.checked')
        // Select second checkbox
        cy.get('input[type="checkbox"]').eq(1).check().should('be.checked')
        //Verify default state of checkbox buttons
        cy.get('input[type="checkbox"]').eq(0).should('be.checked')
        cy.get('input[type="checkbox"]').eq(1).should('be.checked')
        //Verify link of checkbox
        cy.get('a[href="cookiePolicy.html"]').click()
    })

    
    it('email filed should accept only correct email format', () => {
        cy.get('[name="email"]').type('wrong')
        cy.get('#emailAlert').should('be.visible').and('contain', 'Invalid email address')
        cy.get('[name="email"]').clear()
        cy.get('[name="email"]').type('correct@gmail.com')
        cy.get('#emailAlert').should('not.be.visible')


    })

    
})   

describe('Functional tests', () => {
    it('email filed should accept only correct email format', () => {
        cy.get('[name="email"]').type('wrong')
        cy.get('#emailAlert').should('be.visible').and('contain', 'Invalid email address')
        cy.get('[name="email"]').clear()
        cy.get('[name="email"]').type('correct@gmail.com')
        cy.get('#emailAlert').should('not.be.visible')


    })

    
})   
/*
BONUS TASK: add visual tests for registration form 3
Task list:
* Create test suite for visual tests for registration form 3 (describe block)
* Create tests to verify visual parts of the page:
    * radio buttons and its content
    * dropdown and dependencies between 2 dropdowns:
        * list of cities changes depending on the choice of country
        * if city is already chosen and country is updated, then city choice should be removed
    * checkboxes, their content and links
    * email format
 */


/*
BONUS TASK: add functional tests for registration form 3
Task list:
* Create second test suite for functional tests
* Create tests to verify logic of the page:
    * all fields are filled in + corresponding assertions
    * only mandatory fields are filled in + corresponding assertions
    * mandatory fields are absent + corresponding assertions (try using function)
    * add file functionlity(google yourself for solution!)
 */