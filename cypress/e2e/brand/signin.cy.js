describe('Sign In Page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:7070/brand/signin', { failOnStatusCode: false });
    });
    it('should successfully sign in with valid credentials', () => {
        // Enter valid email or phone number
        cy.get('#mat-input-0').type('9999955555');
    
        // Click the "Next" button
        cy.get('.get-otp-btn').click();
    
        // Wait for OTP input to be visible
        cy.get('#mat-input-1').should('be.visible');
    
        // Simulate OTP generation (replace with your logic)
        // For example, you might want to intercept API calls to handle OTP generation
    
        // Enter valid OTP
        cy.get('#mat-input-1').type('100512');
    
        // Click the "Login" button
        cy.get('.get-otp-btn').click();
    
        // Assert successful login - replace with appropriate success element or condition
        cy.url().should('include', '/home');
      });
    it('should display error for invalid email/phone', () => {
      // Enter invalid email or phone number
      cy.get('#mat-input-0').type('gayathri');
  
      // Click the "Next" button
      cy.get('.get-otp-btn').should('be.disabled')
  
      // Assert error message is displayed
      //cy.get('.mat-error').should('contain', 'Invalid email/phone');
    });
  
    it('should display error for invalid OTP', () => {
      // Enter valid email or phone number
      cy.get('#mat-input-0').type('9999955555');
  
      // Click the "Next" button
      cy.get('.get-otp-btn').click();
  
      // Enter invalid OTP
      cy.get('#mat-input-1').type('123456');
  
      // Click the "Login" button
      cy.get('.get-otp-btn').click();
      
  
      // Assert error message is displayed
      cy.get('.db-notifi').should('contain', 'Please enter the correct OTP and try again.');
    });
  
     
    it('should resend OTP successfully', () => {
      // Enter valid email or phone number
      cy.get('#mat-input-0').type('9999955555');
  
      // Click the "Next" button
      cy.get('.get-otp-btn').click();
  
      // Wait for OTP input to be visible
      cy.get('#mat-input-1').should('be.visible');
      cy.wait(40000)
  
      // Click the "Resend OTP" button
      cy.get('.resend-otp').click();
  
      // Assert success message or handle API call interception for resend logic
      cy.get('.db-notifi').should('contain', 'A new OTP has been sent to your WhatsApp number');
    });
  
    // Add more test cases as needed for different scenarios
  });

