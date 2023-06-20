describe('My First Test Suite',function()
{
    it('Addition Operation',function(){
        // write calculator app test cases that has two inputs Enter first numebr and second number and one drop down operator where action like Addition,subtraction,multcliplication and division can be selected and click on submit button and verify the result
        cy.visit("http://54.167.122.198:8080/myapp/")
        cy.wait(2000)
        cy.get('[name="txt1"]').type("2")
        cy.get('[name="txt2"]').type("3")
        cy.get('[name="op"]').select("Addition")
        //cy.get('[type="submit"]').click()
        
    })

    it('Subtraction Operation',function(){
        // write second test case of subtraction in continuation on same browser and clear previous inputs and enter new inputs and verify the result
        // clear the inputs
        cy.visit("http://54.167.122.198:8080/myapp/")
        cy.get('[name="txt1"]').type("4")
        cy.get('[name="txt2"]').type("3")
        cy.get('[name="op"]').select("Subtraction")
        // cy.get('[name="txt2"]').type("3")
        // cy.get('[name="op"]').select("Addition")
        //cy.get('[type="submit"]').click()
        
    })

    it('Multiplication Operation',function(){
        // write second test case of subtraction in continuation on same browser and clear previous inputs and enter new inputs and verify the result
        // clear the inputs
        cy.visit("http://54.167.122.198:8080/myapp/")
        cy.get('[name="txt1"]').type("6")
        cy.get('[name="txt2"]').type("4")
        cy.get('[name="op"]').select("multiplication")
        // cy.get('[name="txt2"]').type("3")
        // cy.get('[name="op"]').select("Addition")
        //cy.get('[type="submit"]').click()
        
    })
    it('Division Operation',function(){
        // write second test case of subtraction in continuation on same browser and clear previous inputs and enter new inputs and verify the result
        // clear the inputs
        cy.visit("http://54.167.122.198:8080/myapp/")
        cy.get('[name="txt1"]').type("6")
        cy.get('[name="txt2"]').type("4")
        cy.get('[name="op"]').select("division")
        // cy.get('[name="txt2"]').type("3")
        // cy.get('[name="op"]').select("Addition")
        //cy.get('[type="submit"]').click()
        
    })

    
})
