/// <reference types="cypress" />

import config from '../../site.config';

describe('Page head <meta> tags', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  /**
   * Basic head tags for PWA
   */
  describe('Basic head tags for PWA', () => {
    it('has a <title> tag', () => {
      cy.get('head title');
    });

    it('has a <meta> tag for description', () => {
      cy.get('head meta[name="description"]').should('have.attr', 'content');
    });

    it('has a <meta> tag for image', () => {
      cy.get('head meta[name="image"').should('have.attr', 'content');
    });

    it('has a <meta> tag for application-name', () => {
      cy.get('head meta[name="application-name"').should(
        'have.attr',
        'content'
      );
    });

    it('has a <theme-color> tag for application-name', () => {
      cy.get('head meta[name="theme-color"').should('have.attr', 'content');
    });

    it('has a <link> tag for canonical', () => {
      cy.get('head link[rel="canonical"').should('have.attr', 'href');
    });

    it('has a <link> tag for manifest.json', () => {
      cy.get('head link[rel="manifest"').should('have.attr', 'href');
    });

    it('has a <link> tag for favicon', () => {
      cy.get('head link[rel="icon"').should('have.attr', 'href');
    });
  });

  /**
   * open-graph protocol tags
   */
  describe('Open-Graph protocol -tags', () => {
    it('has a <meta> tag for property og:url', () => {
      cy.get('head meta[property="og:url"]').should('have.attr', 'content');
    });

    it('has a <meta> tag for property og:title', () => {
      cy.get('head meta[property="og:title"]').should('have.attr', 'content');
    });

    it('has a <meta> tag for property og:description', () => {
      cy.get('head meta[property="og:description"]').should(
        'have.attr',
        'content'
      );
    });

    it('has a <meta> tag for property og:image', () => {
      cy.get('head meta[property="og:image"]').should('have.attr', 'content');
    });
  });
  /**
   * Twitter
   */
  describe('Twitter -tags', () => {
    it('has a <meta> tag for property twitter:creator', () => {
      cy.get('head meta[name="twitter:creator"]').should(
        'have.attr',
        'content'
      );
    });

    it('has a <meta> tag for property twitter:card', () => {
      cy.get('head meta[name="twitter:card"]').should('have.attr', 'content');
    });

    it('has a <meta> tag for property twitter:title', () => {
      cy.get('head meta[name="twitter:title"]').should('have.attr', 'content');
    });

    it('has a <meta> tag for property twitter:description', () => {
      cy.get('head meta[name="twitter:description"]').should(
        'have.attr',
        'content'
      );
    });

    it('has a <meta> tag for property twitter:image', () => {
      cy.get('head meta[name="twitter:image"]').should('have.attr', 'content');
    });

    it('has a <meta> tag for property twitter:url', () => {
      cy.get('head meta[name="twitter:url"]').should('have.attr', 'content');
    });
  });
});
