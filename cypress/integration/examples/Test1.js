describe('Ecommerce Website' , function(){

it('Placing an order',function(){

  cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
  cy.get('.search-keyword').type('ca')
  cy.wait(2000)
  /*cy.get('.product:visible').should('have.length',4)
  cy.get('.products').find('.product').should('have.length',4)
  cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click() 
*/
  cy.get('.products').as('productlocator')
  
  cy.get('@productlocator').find('.product').each(($el, index ,$list) => {
   
    const textVeg = $el.find('h4.product-name').text()
    if(textVeg.includes('Cashews'))
    {
      $el.find('button').click()
    }
  })

  cy.get('.brand').should('have.text','GREENKART')

  cy.get('.brand').then(function(logoelement){
    
    cy.log(logoelement.text())
     expect('GREENKART').to.equal(logoelement.text())
  })

})  


})