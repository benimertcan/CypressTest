describe('Hatalı durumlarda beklenen hata mesajları görünüyor ve buton disabled kalıyor.', () => {
    it('Email yanlış', () => {
      cy.visit('http://localhost:5173/')
      cy.get('[data-cy="emailInput"]').type("aaaa")
  
      cy.get('[data-cy="errorMessageEmail"]').should('exist');
      cy.contains("Please enter a valid email address")
      cy.get('[data-cy="buttonInput"]').should('be.disabled');
    })
  })