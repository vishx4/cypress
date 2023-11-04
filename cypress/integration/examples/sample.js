
describe('Sample' , function() {
    it('Creating new profile', () => {
      cy.visit('https://www.google.com/')
      cy.get('.gLFyf').type('cypress')
      cy.get(':nth-child(1) > .eIPGRd').click()
    
      //cy.get('input[value="Google Search"]').click()
      
      cy.wait(3000)

      cy.get("h3[class='LC20lb MBeuO DKV0Md']").each(($el, index, $list) => {
        if($el.text().includes('tutorial'))
        {
            console.log("Nothing found")
        }

        else {
            cy.get("h3[class='LC20lb MBeuO DKV0Md']").eq(index).click()
        } 
      
        ["name1", "name2",,"name3"...."name10]
      
        totalNoOfFiles = 10
        [name1, name2, name3, name6, name8, name10]
      
        const  a = [[name1, name2, name3, name6, name8, name10]] ,


        const l = a.length() 

        for (let i = 0; i < a.length; i++) {
            a.
        }
      
        if($el.text().includes('tutorial'))
        {
            console.log("Nothing found")
        }

        else {
            cy.get("h3[class='LC20lb MBeuO DKV0Md']").eq(index).click()
        } 
      




        //cy.get('[lang="en"] > .tF2Cxc > .yuRUbf > a > .TbwUpd > .iUh30').should('have.not.value' ,'tutorial')

      
      
     
    })
  })
  
})