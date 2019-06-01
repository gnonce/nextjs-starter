/// <reference types="cypress" />

describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('has a title', () => {
    cy.contains('Gnonce next.js starter');
  });
});
