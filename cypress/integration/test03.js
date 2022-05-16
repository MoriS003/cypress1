describe('test03', () => {
        it('Test zakładki "Kontakt"', () => {
            cy.visit('https://artmeb-hurt.pl/kontakt')
            cy.get('#company-name')
              .type('ABC')
            cy.get('#email')
              .type('ABC@email.com')
            cy.get('#validationTextarea')    
                .type('Test: abcdefghijklmnoprstuwz123567890!@#$%^&*()_+-=[]\{}|:";<>?,./~`') 
            cy.contains('Potwierdzam').click()
            cy.contains('Wyślij').click()       
              
            
        })
    })