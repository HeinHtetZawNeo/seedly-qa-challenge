/// <reference types="Cypress" />

let ReviewPage = require("../data/page/reviewPage");

context("Review Page Testing", () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
  });

  afterEach(() => {});

  it("tcs-1: Search Existing Product with full name", () => {
    cy.intercept("GET", "https://api.seedly.sg/api/v4/navigation/campaigns").as(
      "getCampaigns"
    );

    //Go to review page
    cy.visit("reviews");

    //wait review page to finsih loading (wait with campaigns api)
    cy.wait("@getCampaigns");

    //cy.intercept("https://api.seedly.sg/api/v4/product/items/*").as("getItems");
    cy.intercept("GET", "https://api.seedly.sg//api/v4/product/items*").as(
      "getItems"
    );

    //type Singtel Dash PET in the search box
    cy.xpath(ReviewPage.page_items.serachbox_textbox.selector).type(
      "Singtel Dash PET"
    );

    cy.wait("@getItems");

    //get product item
    cy.get('[data-testid="product-item"]').within((productItem) => {
      //Singtel Dash PET should exist
      cy.get("a").should("be.visible").should("contain", "Singtel Dash PET");

      //view more button should exist
      cy.get("a").should("be.visible").should("contain", "View More");

      //remove target attribute not to create new tab
      cy.get("a").eq(1).invoke("removeAttr", "target").click();

      //check url is should be singtel-dash-pet
      cy.url().should("include", "/singtel-dash-pet");
    });
  });

  it("tcs-2: Search Existing Product with partial name", () => {
    cy.intercept("GET", "https://api.seedly.sg/api/v4/navigation/campaigns").as(
      "getCampaigns"
    );

    //Go to review page
    cy.visit("reviews");

    //wait review page to finsih loading (wait with campaigns api)
    cy.wait("@getCampaigns");

    //cy.intercept("https://api.seedly.sg/api/v4/product/items/*").as("getItems");
    cy.intercept("GET", "https://api.seedly.sg//api/v4/product/items*").as(
      "getItems"
    );

    //type Singtel Dash PET in the search box
    cy.xpath(ReviewPage.page_items.serachbox_textbox.selector).type("Singtel");

    cy.wait("@getItems");

    //get product item
    cy.get('[data-testid="product-item"]').within((productItem) => {
      //Singtel Dash PET should exist
      cy.get("a").should("be.visible").should("contain", "Singtel Dash PET");

      //view more button should exist
      cy.get("a").should("be.visible").should("contain", "View More");

      //remove target attribute not to create new tab
      cy.get("a").eq(1).invoke("removeAttr", "target").click();

      //check url is should be singtel-dash-pet
      cy.url().should("include", "/singtel-dash-pet");
    });
  });
});
