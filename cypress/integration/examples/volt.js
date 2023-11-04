describe('Investor', () => {
    it('Creating new profile', () => {
      cy.visit('https://app.staging.voltmoney.in/')
      cy.get('div input[placeholder="Enter mobile number"]').type('9833721887')
      var a = cy.get(':nth-child(11) > .r-1ydw1k6 > :nth-child(1) > .r-1loqt21').should("not.be.disabled")
      a.click()
      cy.wait(15000)
      cy.get('div[class=css-text-1rynq56]').contains('Continue with Other Email').click()
      cy.wait(2000)
      cy.get('input[placeholder="Enter email id"]').type('vishx93@gmail.com')
      cy.wait(2000)
     // cy.get('div[class=css-text-1rynq56]').contains('Continue').click()
     cy.get(':nth-child(11) > [style="padding-right: 24px; padding-left: 24px;"] > .r-cursor-1loqt21').click()
     cy.wait(2000)

     cy.get('input[placeholder="Enter PAN number"]').type('AZWPA0311P')
     cy.wait(500)
     cy.get('input[placeholder="Enter date of birth"]').type('13/09/1993')
     cy.wait(1000)
     cy.get('[style="flex: 1 1 0%; background-color: rgb(255, 255, 255);"] > :nth-child(4) > :nth-child(1) > .r-cursor-1loqt21').click()
     cy.wait(1000)
     cy.get('[style="flex: 1 1 0%; flex-direction: column; justify-content: center; align-items: center; padding: 0px;"] > [style="background-color: rgb(20, 52, 203); border-radius: 1000px; padding: 12px 40px; border-width: 0px; box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px; width: 100%;"]').click()
     cy.wait(1000)
     cy.get(':nth-child(7) > :nth-child(1) > .r-flex-13awgt0 > [style="height: 660px; width: 1000px; display: flex; background-color: rgb(255, 255, 255);"] > [style="flex: 1 1 0%; background-color: rgb(255, 255, 255);"] > :nth-child(4) > [style="padding-right: 24px; padding-left: 24px;"] > .r-cursor-1loqt21').click()
    })
  })
  
  /*"test": "echo \"Error: no test specified\" && exit 1"*/