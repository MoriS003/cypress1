describe('test02', () => {
    it('Test zakładki "o nas"', () => {
        cy.visit('https://artmeb-hurt.pl/')

        cy.contains('O nas').click()
        cy.url().should('include', '/o-nas')

        cy.contains('Cały ten Jazz').click()
        cy.url().should('include', '/kolekcja/caly-ten-jazz')  
        cy.contains('O nas').click()          
        
        cy.contains('Trendy 2022').click()    
        cy.url().should('include', '/kolekcja/trendy-2022')            
        cy.contains('O nas').click()        

        cy.contains('Przyjemne kombinacje').click()    
        cy.url().should('include', '/kolekcja/przyjemne-kombinacje')            
        cy.contains('O nas').click()        
        
        cy.contains('Dom pełen miłości').click()    
        cy.url().should('include', '/kolekcja/dom-pelen-milosci')            
        cy.contains('O nas').click()
        
        cy.contains('Bestsellery').click()    
        cy.url().should('include', '/kolekcja/bestsellery')            
        cy.contains('O nas').click()
        
        cy.contains('Styl industrialny').click()    
        cy.url().should('include', '/kolekcja/styl-industrialny')            
        cy.contains('O nas').click()
        
        cy.contains('Cudny urok klasyki').click()    
        cy.url().should('include', '/kolekcja/cudny-urok-klasyki')            
        cy.contains('O nas').click()
        
        cy.contains('Zobacz więcej').click()    
        cy.url().should('include', '/oferta')                  
        
      
    })
  })
