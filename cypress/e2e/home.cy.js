describe('lrnr App Home Page', () => {
    beforeEach(() => {
      cy.visit('/'); // Visit the home page before each test
    });
  
    it('Visits the home page and checks the title', () => {
      cy.title().should('include', 'lrnr'); // Check page title
    });
  
    it('Displays the app logo', () => {
      cy.get('img[src="/lrnr.png"]').should('be.visible');
      cy.get('img[alt="lrnr logo"]').should('exist');
    });
  
    it('Shows the tagline and Begin Journey button', () => {
      cy.get('h2').should('contain', 'Your guided path to programming enlightenment');
      cy.get('button').contains('Begin Journey').should('exist');
    });
  
    it('Displays the three feature cards with correct content', () => {
      // Check all three cards exist
      cy.get('.bg-white.text-gray-800').should('have.length', 3);
      
      // Check specific content in each card
      cy.contains('Personalized Quizzes').should('exist');
      cy.contains('Rewarding').should('exist');
      cy.contains('Personal SME').should('exist');
      
      // Verify images in the cards
      cy.get('img[src="/lightening.png"]').should('be.visible');
      cy.get('img[src="/money.png"]').should('be.visible');
      cy.get('img[src="/person.png"]').should('be.visible');
    });
    
    it('Button navigates to quiz page when clicked', () => {
      cy.get('button').contains('Begin Journey').click();
      cy.url().should('include', '/quiz');
    });
  });