/// <reference types="Cypress" />

let ReviewPage = require("../data/page/reviewPage");

context("Dasktop WebView Testing", () => {
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

    cy.intercept("GET", "https://api.seedly.sg//api/v4/product/items*").as(
      "getItems"
    );

    //type Singtel Dash PET in the search box
    cy.xpath(ReviewPage.page_items.serachbox_textbox.selector).type(
      "Singtel Dash PET"
    );

    cy.wait("@getItems");

    //get product item
    cy.xpath(ReviewPage.page_items.productitem_div.selector).within(
      (productItem) => {
        //Singtel Dash PET should exist
        cy.get("a").should("be.visible").should("contain", "Singtel Dash PET");

        //view more button should exist
        cy.get("a").should("be.visible").should("contain", "View More");

        //remove target attribute not to create new tab
        cy.get("a").eq(1).invoke("removeAttr", "target").click();

        //check url is should be singtel-dash-pet
        cy.url().should("include", "/singtel-dash-pet");
      }
    );
  });

  it("tcs-2: Search Existing Product with partial name", () => {
    cy.intercept("GET", "https://api.seedly.sg/api/v4/navigation/campaigns").as(
      "getCampaigns"
    );

    //Go to review page
    cy.visit("reviews");

    //wait review page to finsih loading (wait with campaigns api)
    cy.wait("@getCampaigns");

    cy.intercept("GET", "https://api.seedly.sg//api/v4/product/items*").as(
      "getItems"
    );

    //type Singtel Dash PET in the search box
    cy.xpath(ReviewPage.page_items.serachbox_textbox.selector).type("Singtel");

    cy.wait("@getItems");

    //get product item
    cy.xpath(ReviewPage.page_items.productitem_div.selector).within(
      (productItem) => {
        //Singtel Dash PET should exist
        cy.get("a").should("be.visible").should("contain", "Singtel Dash PET");

        //view more button should exist
        cy.get("a").should("be.visible").should("contain", "View More");

        //remove target attribute not to create new tab
        cy.get("a").eq(1).invoke("removeAttr", "target").click();

        //check url is should be singtel-dash-pet
        cy.url().should("include", "/singtel-dash-pet");
      }
    );
  });

  it("tcs-3: Search Existing Product with partial name with white spaces end of the string", () => {
    cy.intercept("GET", "https://api.seedly.sg/api/v4/navigation/campaigns").as(
      "getCampaigns"
    );

    //Go to review page
    cy.visit("reviews");

    //wait review page to finsih loading (wait with campaigns api)
    cy.wait("@getCampaigns");

    cy.intercept("GET", "https://api.seedly.sg//api/v4/product/items*").as(
      "getItems"
    );

    //type Singtel Dash PET in the search box
    cy.xpath(ReviewPage.page_items.serachbox_textbox.selector).type(
      "Singtel                "
    );

    cy.wait("@getItems");

    //get product item
    cy.xpath(ReviewPage.page_items.productitem_div.selector).within(
      (productItem) => {
        //Singtel Dash PET should exist
        cy.get("a").should("be.visible").should("contain", "Singtel Dash PET");

        //view more button should exist
        cy.get("a").should("be.visible").should("contain", "View More");

        //remove target attribute not to create new tab
        cy.get("a").eq(1).invoke("removeAttr", "target").click();

        //check url is should be singtel-dash-pet
        cy.url().should("include", "/singtel-dash-pet");
      }
    );
  });

  it("tcs-4: Search Existing Product with partial name with white spaces start of the string", () => {
    cy.intercept("GET", "https://api.seedly.sg/api/v4/navigation/campaigns").as(
      "getCampaigns"
    );

    //Go to review page
    cy.visit("reviews");

    //wait review page to finsih loading (wait with campaigns api)
    cy.wait("@getCampaigns");

    cy.intercept("GET", "https://api.seedly.sg//api/v4/product/items*").as(
      "getItems"
    );

    //type Singtel Dash PET in the search box
    cy.xpath(ReviewPage.page_items.serachbox_textbox.selector).type(
      "                Singtel"
    );

    cy.wait("@getItems");

    //get product item
    cy.xpath(ReviewPage.page_items.productitem_div.selector).within(
      (productItem) => {
        //Singtel Dash PET should exist
        cy.get("a").should("be.visible").should("contain", "Singtel Dash PET");

        //view more button should exist
        cy.get("a").should("be.visible").should("contain", "View More");

        //remove target attribute not to create new tab
        cy.get("a").eq(1).invoke("removeAttr", "target").click();

        //check url is should be singtel-dash-pet
        cy.url().should("include", "/singtel-dash-pet");
      }
    );
  });

  it("tcs-5: Search Non-existing Product with normal string", () => {
    cy.intercept("GET", "https://api.seedly.sg/api/v4/navigation/campaigns").as(
      "getCampaigns"
    );

    //Go to review page
    cy.visit("reviews");

    //wait review page to finsih loading (wait with campaigns api)
    cy.wait("@getCampaigns");

    cy.intercept("GET", "https://api.seedly.sg//api/v4/product/items*").as(
      "getItems"
    );

    //type Singtel Dash PET in the search box
    cy.xpath(ReviewPage.page_items.serachbox_textbox.selector).type("Testing");

    cy.wait("@getItems");

    //No Products found should show
    cy.xpath(ReviewPage.page_items.noproductfound_div.selector)
      .should("be.visible")
      .should("contain", ReviewPage.page_items.noproductfound_div.value);

    //No of product found should 0
    cy.xpath(ReviewPage.page_items.noofproductfound_p.selector)
      .should("be.visible")
      .should("contain", "0 Products Found");
  });

  it("tcs-6: Search Non-existing Product with special char string", () => {
    cy.intercept("GET", "https://api.seedly.sg/api/v4/navigation/campaigns").as(
      "getCampaigns"
    );

    //Go to review page
    cy.visit("reviews");

    //wait review page to finsih loading (wait with campaigns api)
    cy.wait("@getCampaigns");

    cy.intercept("GET", "https://api.seedly.sg//api/v4/product/items*").as(
      "getItems"
    );

    //type Singtel Dash PET in the search box
    cy.xpath(ReviewPage.page_items.serachbox_textbox.selector).type(
      "@$%*(%^($#&*$"
    );

    cy.wait("@getItems");

    //No Products found should show
    cy.xpath(ReviewPage.page_items.noproductfound_div.selector)
      .should("be.visible")
      .should("contain", ReviewPage.page_items.noproductfound_div.value);

    //No of product found should 0
    cy.xpath(ReviewPage.page_items.noofproductfound_p.selector)
      .should("be.visible")
      .should("contain", "0 Products Found");
  });
});
