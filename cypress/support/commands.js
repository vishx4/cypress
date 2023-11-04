// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// avoma
/*Cypress.Commands.add('loginByGoogleApi', () => {
    cy.log('Logging in to Google')
    cy.request({
      method: 'POST',
      url: 'https://www.googleapis.com/oauth2/v4/token',
      body: {
        grant_type: 'refresh_token',
      

        client_id: '889056352853-f1frfcncaq1qr9uh3m2m5m91laqitnu0.apps.googleusercontent.com',
        client_secret: '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',
        refresh_token: '1//04pXbXSXm9CFpCgYIARAAGAQSNwF-L9IrEu3_VGGDThx04yI7VcAxHKOaj1TqE_VIVxbRBKYoLAFxnhr2ozy195u3wRe1dQALop4'
      },
    }).then(({ body }) => {
      const { access_token, id_token } = body
  
      cy.request({
        method: 'GET',
        url: 'https://www.googleapis.com/oauth2/v3/userinfo',
        headers: { Authorization: `Bearer ${access_token}` },
      }).then(({ body }) => {
        cy.log(body)
        const userItem = {
          token: id_token,
          user: {
            googleId: body.sub,
            email: body.email,
            givenName: body.given_name,
            familyName: body.family_name,
            imageUrl: body.picture,
          },
        }
  
        window.localStorage.setItem('googleCypress', JSON.stringify(userItem))
        cy.visit('/')
      })
    })
  }) 

*/












  Cypress.Commands.add("selectProduct" ,(productName) => {
  cy.get('h4.card-title').each(($el, index, $list) => {
    if($el.text().includes(productName))
    {
       cy.get('button.btn.btn-info').eq(index).click()
    }
       
    })
  })
  