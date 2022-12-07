/// <reference types="cypress" />
describe('Tools QA - Elements', () => {

    beforeEach(() => {
        cy.visit("https://demoqa.com/");
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })
    it('Text Box', () => {
        cy.get('.card.mt-4.top-card').eq(0).should('be.visible').click();
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click();
        cy.get('#userName').type('Pablo Ortiz');
        cy.get('#userEmail').type('pablo_ortiz_07@hotmail.com');
        cy.get('#currentAddress').type("It's a test!");
        cy.get('#permanentAddress').type('Sabadell');
        cy.get('#submit').click();
        cy.get('#name').should('have.text','Name:Pablo Ortiz').and('be.visible');
        cy.get('#email').should('have.text','Email:pablo_ortiz_07@hotmail.com');
        cy.get('.border > #currentAddress').should('have.text',"Current Address :It's a test! ");
        cy.get('.border > #permanentAddress').should('have.text','Permananet Address :Sabadell');
    })
    it('Check Box', () => {
        cy.get('.card.mt-4.top-card').eq(0).should('be.visible').click();
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-1').click();
        cy.get('.rct-checkbox').click();
    })

    it('Radio Button', () => {
        cy.get('.card.mt-4.top-card').eq(0).should('be.visible').click();
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-2').click();
        cy.get('.col-md-6 > :nth-child(2) > :nth-child(3)').click();
    })

    it('Web Tables', () => {
        cy.get('.card.mt-4.top-card').eq(0).should('be.visible').click();
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-3').click();
        cy.get('#addNewRecordButton').click();
        cy.get('#firstName').type('Pablo');
        cy.get('#lastName').type('Ortiz');
        cy.get('#userEmail').type('pablo_ortiz_07@hotmail.com');
        cy.get('#age').type('30');
        cy.get('#salary').type('1000');
        cy.get('#department').type('QA');
        cy.get('#submit').click();
    })

    it('Buttons', () => {
        cy.get('.card.mt-4.top-card').eq(0).should('be.visible').click();
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-4').click();
        cy.get('#doubleClickBtn').click();
        cy.get('#rightClickBtn').click();
        cy.contains('Click Me').click();
    })


    
})
