describe('Pizza Sipariş Testleri', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/pizza');
    });
  
    it('İsim inputuna metin girilebiliyor mu?', () => {
      cy.get('#name-input')
        .type('Ali')
        .should('have.value', 'Ali');
    });
  
    it('Birden fazla malzeme seçilebiliyor mu?', () => {
      cy.get('input[name="pepperoni"]').check();
      cy.get('input[name="cheese"]').check();
      cy.get('input[name="mushroom"]').check();
    });
  
    it('Form gönderilebiliyor mu?', () => {
      cy.get('#name-input').type('Ali');
      cy.get('#size-dropdown').select('orta');
      cy.get('input[name="pepperoni"]').check();
      cy.get('#special-text').type('Ekstra sıcak');
      cy.get('#order-button').click();
  
      cy.url().should('include', '/success');
      cy.contains('Tebrikler');
      cy.contains('Ali');
    });
  });  