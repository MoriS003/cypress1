describe('test04', () => {
    it('Test zakładki "blog"', () => {
        cy.visit('https://artmeb-hurt.pl/')

        cy.contains('Blog').click()   
        cy.url().should('include', '/blog')
        
        cy.contains('Hurtownia Materiałów Obiciowych').click()
        cy.url().should('include', '/hurtownia-materialow-obiciowych')
        cy.contains('Blog').click()  

        cy.contains('Hurtownia Materiałów Tapicerskich').click()
        cy.url().should('include', '/hurtownia-materia%C5%82%C3%B3w-tapicerskich')
        cy.contains('Blog').click()  

        cy.contains('Materiały Tapicerskie').click()
        cy.url().should('include', '/materialy-tapicerskie')
        cy.contains('Blog').click()  

        cy.contains('Tkaniny Tapicerskie').click()
        cy.url().should('include', '/tkaniny-tapicerskie')
        cy.contains('Blog').click()  
       

    })
})