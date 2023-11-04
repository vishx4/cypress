import 'cypress-iframe'
describe('Ecommerce Website' , function(){

    it('Selecting an order',function(){
    
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      //cy.visit("http://qaclickacademy.com/practice.php")
    /* cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
      cy.get('input[type="checkbox"]').check(['option2','option3'])

      cy.get('select').select('option2').should('have.value','option2')

      cy.get('#autocomplete').type('ind')

     cy.get('.ui-menu-item div').each(($el, index , $list) => {

        if($el.text()==="India"){
            $el.click();

        }
    })
    cy.get('#autocomplete').should('have.value','India')
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')


    cy.get('[value="radio2"]').check().should('be.checked')

    

    cy.get('#alertbtn').click()
    cy.get('[value="Confirm"]').click()
    cy.on('window:alert',(str)=>
    {
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })
    

    cy.on('window:confirm',(str)=>
    {
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })
    

    cy.get('#opentab').invoke('removeAttr','target').click()
    cy.url().should('include','rahulshettyacademy')
    cy.go('back')

    

    cy.get('tr td:nth-child(2)').each(($el, index, $list) => {

        const text = $el.text() 
        if(text.includes("Python"))
        {
            cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
            {
              const priceText = price.text()
              cy.log(priceText)
              expect(priceText).to.equal('25')
            })
        }
         })
     
   // cy.get('.mouse-hover-content').invoke('show')
    cy.contains('Top').click({force: true})
    cy.url().should('include' ,'top')
   

    cy.get('#opentab').then(function(el) 
    {
        const url=el.prop('href')
        cy.log(url)
        cy.visit(url)
    })
    
  */
  cy.frameLoaded("#courses-iframe")

cy.iframe().find("a[href*='mentorship']").eq(0).click()
cy.iframe().find("h1[class*='pricing-title']").should('have.length' ,2)
}) 
    
}) 