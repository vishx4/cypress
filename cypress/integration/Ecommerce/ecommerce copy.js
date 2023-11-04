/// <reference types="Cypress"/>

import HomePage from '../../support/pageObjects/HomePage'
import ProductPage from '../../support/pageObjects/ProductPage'

describe('Purchasing Electronic Device' , function(){
   before(function(){
      cy.fixture('testData').then(function(data){

       this.data = data
      })
    
   })
   it('Visiting the website' , function(){
     Cypress.config('defaultCommandTimeout' , 80000)
     const homePage = new HomePage()
     const productPage = new ProductPage()
     cy.visit(Cypress.config().baseUrl) 
     //cy.visit(this.data.url)

      homePage.getEditbox().type(this.data.name)
      
      homePage.getGender().select(this.data.gender)
      homePage.getTwoWayDataBinding().should('have.value' ,this.data.name)
      homePage.getEditbox().should('have.attr','minlength','2')
      homePage.getEntrepreneur().should('be.disabled')
      homePage.getShopTab().click()
  
      this.data.productName.forEach(function(element){
         cy.selectProduct(element)

      })

      productPage.getCheckOutButton().click();
       var sum = 0
      cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
         const amount = $el.text()
         var res = amount.split(" ")
         res = res[1].trim()
         sum = Number(sum) + Number (res)

      }).then(function()
         {
          cy.log(sum)
       
      })

      cy.contains('Checkout').click();
      cy.get("#country").type('India')
      cy.wait(5000)
      cy.get('.suggestions > ul > li > a').click()
      cy.get('#checkbox2').click({force: true})
      cy.get('input[type="submit"]').click()
      cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
      cy.get('.alert').then(function(element) {
         const actualText=element.text() 
         var res = 
         expect(actualText.includes("Success")).to.be.true
      })

         
      
      
   }) 


})