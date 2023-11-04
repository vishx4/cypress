describe('Login',function() {
    it('Go to GSuite calendar', function() {
      cy.visit('https://www.google.com/calendar')
    })
 
    it('Login', function() {
      cy.get('.cxMOTc > .rFrNMe').type('vishqatest93')

      cy.get('#identifierNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d').click()
      cy.get('#next').click()
      cy.get('#Passwd').type('00000000')
     
    })
 })  