describe('Hatalı durumlarda beklenen hata mesajları görünüyor ve buton disabled kalıyor.', () => {
    it('Email yanlış', () => {
      cy.visit('http://localhost:5173/')
      cy.get('[data-cy="emailInput"]').type("aaaa")
  
      cy.get('[data-cy="errorMessageEmail"]').should('exist');
      cy.contains("Please enter a valid email address")
      cy.get('[data-cy="buttonInput"]').should('be.disabled');
    })
    it('Email ve Password yanlış', () => {
        cy.visit('http://localhost:5173/')
        cy.get('[data-cy="emailInput"]').type("aaaa")
        cy.get('[data-cy="passwordInput"]').type("aaa")
    
        cy.get('[data-cy="errorMessageEmail"]').should('exist');
        cy.get('[data-cy="errorMessagePassword"]').should('exist');
        cy.contains("Please enter a valid email address")
        cy.contains("Password must be at least 4 characters long")
        cy.get('[data-cy="buttonInput"]').should('be.disabled');
      })
      it('Email ve Password doğru ama terms kabul edilmedi', () => {
        cy.visit('http://localhost:5173/')
        cy.get('[data-cy="emailInput"]').type("aaaa@gmail.com")
        cy.get('[data-cy="passwordInput"]').type("aaaaa")
        cy.get('[data-cy="termsInput"]').not("check")
    
        cy.get('[data-cy="buttonInput"]').should('be.disabled');
      })
  })