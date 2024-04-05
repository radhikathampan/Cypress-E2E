
import loginData from '../../fixtures/loginData.json'

describe('add a product to cart', () => {
   before(() => {
   cy.login(loginData.email, loginData.pwd)

   });

   it('add to cart', () =>
   {
    cy.get("[name= 'search']").type("Mac{enter}")
    cy.get(".fa.fa-shopping-cart").last().click()
    cy.get(".alert-dismissible")
   })

});
