describe('Test 10.1', () => {
    it('Test zakupu', () => {
        cy.visit('www.saucedemo.com')
        cy.get('[data-test="username"]')
        .type('standard_user')
        .should("have.value","standard_user")
        cy.get('[data-test="password"]')
        .type('secret_sauce')
        .should('have.value','secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('.inventory_item_name')
        .should(($el) => {
            expect($el).to.have.length(6)
        })
        cy.get('.inventory_item_name')
        .then(($el) => {
          const items = $el.toArray()
          return Cypress._.sample(items)
        })
        .then(($el) => {
          expect(Cypress.dom.isJquery($el), 'jQuery element').to.be.true
        })
        .click()
        cy.contains("Add to cart").click()
        cy.contains(".shopping_cart_badge","1")
        cy.contains("Back to products").click()
        cy.get('.shopping_cart_link').click()
        cy.get('.inventory_item_name')
        .should(($el) => {
            expect($el).to.have.length(1)
        })
        cy.contains(".cart_quantity","1")
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]')
        .type('test')
        .should(($el) => {
            expect('test').to.be.a('string')            
        })
        cy.get('[data-test="lastName"]')
        .type('test')
        .should(($el) => {
            expect('test').to.be.a('string')            
        })
        cy.get('[data-test="postalCode"]')
        .type("12-345")
        .should(($el) => {
            expect('12-345').to.be.a('string')            
        })        
        cy.get('[data-test="continue"]').click()
        cy.contains("FREE PONY EXPRESS DELIVERY!")
        cy.get('[data-test="finish"]').click()
        cy.contains(".complete-header","THANK YOU FOR YOUR ORDER")
    })
})

describe('Test 10.2', () => {
    it('Test zakupu', () => {
        cy.visit('www.saucedemo.com')
        cy.get('[data-test="username"]')
        .type('locked_out_user')
        .should("have.value","locked_out_user")
        cy.get('[data-test="password"]')
        .type('secret_sauce')
        .should('have.value','secret_sauce')
        cy.get('[data-test="login-button"]').click()
    })
})

// describe('Test 10.3', () => {
//     it('Test zakupu', () => {
//         cy.visit('www.saucedemo.com')
//         cy.get('[data-test="username"]')
//         .type('problem_user')
//         .should("have.value","problem_user")
//         cy.get('[data-test="password"]')
//         .type('secret_sauce')
//         .should('have.value','secret_sauce')
//         cy.get('[data-test="login-button"]').click()
//         cy.get('.inventory_item_name')
//         .should(($el) => {
//             expect($el).to.have.length(6)
//         })
//         cy.get('.inventory_item_name')
//         .then(($el) => {
//           const items = $el.toArray()
//           return Cypress._.sample(items)
//         })
//         .then(($el) => {
//           expect(Cypress.dom.isJquery($el), 'jQuery element').to.be.true
//         })
//         .click()
//         cy.contains("Add to cart").click()
//         cy.contains(".shopping_cart_badge","1")
//         cy.contains("Back to products").click()
//         cy.get('.shopping_cart_link').click()
//         cy.get('.inventory_item_name')
//         .should(($el) => {
//             expect($el).to.have.length(1)
//         })
//         cy.contains(".cart_quantity","1")
//         cy.get('[data-test="checkout"]').click()
//         cy.get('[data-test="firstName"]')
//         .type('test')
//         .should(($el) => {
//             expect('test').to.be.a('string')            
//         })
//         cy.get('[data-test="lastName"]')
//         .type('test')
//         .should(($el) => {
//             expect('test').to.be.a('string')            
//         })
//         cy.get('[data-test="postalCode"]')
//         .type("12-345")
//         .should(($el) => {
//             expect('12-345').to.be.a('string')            
//         })        
//         cy.get('[data-test="continue"]').click()
        
//         cy.contains("FREE PONY EXPRESS DELIVERY!")
//         cy.get('[data-test="finish"]').click()
//         cy.contains(".complete-header","THANK YOU FOR YOUR ORDER")   
//     })
// })

describe('Test 10.4', () => {
    it('Test zakupu', () => {
        cy.visit('www.saucedemo.com')
        cy.get('[data-test="username"]')
        .type('performance_glitch_user')
        .should("have.value","performance_glitch_user")
        cy.get('[data-test="password"]')
        .type('secret_sauce')
        .should('have.value','secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('.inventory_item_name')
        .should(($el) => {
            expect($el).to.have.length(6)
        })
        cy.get('.inventory_item_name')
        .then(($el) => {
          const items = $el.toArray()
          return Cypress._.sample(items)
        })
        .then(($el) => {
          expect(Cypress.dom.isJquery($el), 'jQuery element').to.be.true
        })
        .click()
        cy.contains("Add to cart").click()
        cy.contains(".shopping_cart_badge","1")
        cy.contains("Back to products").click()
        cy.get('.shopping_cart_link').click()
        cy.get('.inventory_item_name')
        .should(($el) => {
            expect($el).to.have.length(1)
        })
        cy.contains(".cart_quantity","1")
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]')
        .type('test')
        .should(($el) => {
            expect('test').to.be.a('string')            
        })
        cy.get('[data-test="lastName"]')
        .type('test')
        .should(($el) => {
            expect('test').to.be.a('string')            
        })
        cy.get('[data-test="postalCode"]')
        .type("12-345")
        .should(($el) => {
            expect('12-345').to.be.a('string')            
        })        
        cy.get('[data-test="continue"]').click()
        cy.contains("FREE PONY EXPRESS DELIVERY!")
        cy.get('[data-test="finish"]').click()
        cy.contains(".complete-header","THANK YOU FOR YOUR ORDER")
    })
})






