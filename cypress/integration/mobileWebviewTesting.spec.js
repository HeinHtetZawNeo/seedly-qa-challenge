/// <reference types="Cypress" />

const reviewPage = require("../data/page/reviewPage");
let ReviewPage = require("../data/page/reviewPage");

context("Mobile WebView Testing", () => {
  beforeEach(() => {
    cy.viewport("iphone-8");
  });

  afterEach(() => {});

  it("tcs-7: Search Existing Product with full name in saving account and mobile view", () => {
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

    cy.xpath(reviewPage.page_items.menu_button.selector).click();

    //click Banking Menu
    cy.contains("Banking").click();

    //click Saving Account Menu
    cy.contains("Savings Accounts").click();

    //wait page loading to finish
    cy.wait("@getCampaigns");

    //scroll to top
    cy.scrollTo(0, 0);

    //header should show BEST Saving Accounts
    cy.xpath(reviewPage.page_items.pagetitle_h1.selector).should(
      "contain",
      "Best  Savings Accounts"
    );

    cy.intercept("GET", "https://api.seedly.sg//api/v4/product/items*").as(
      "getItems"
    );

    //type DBS
    cy.xpath(reviewPage.page_items.serachbox_textbox.selector).type(
      "DBS Multiplier Account"
    );

    cy.wait("@getItems");

    //get product item
    cy.xpath(ReviewPage.page_items.productitem_div.selector).within(
      (productItem) => {
        //Singtel Dash PET should exist
        cy.get("a")
          .should("be.visible")
          .should("contain", "DBS Multiplier Account");

        //view more button should exist
        cy.get("a").should("be.visible").should("contain", "View More");

        //remove target attribute not to create new tab
        cy.get("a").eq(1).invoke("removeAttr", "target").click();

        //check url is should be singtel-dash-pet
        cy.url().should("include", "/dbs-multiplier-account");
      }
    );
  });

  it("tcs-8: Search Existing Product with partial name in saving account and mobile view", () => {
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

    cy.xpath(reviewPage.page_items.menu_button.selector).click();

    //click Banking Menu
    cy.contains("Banking").click();

    //click Saving Account Menu
    cy.contains("Savings Accounts").click();

    //wait page loading to finish
    cy.wait("@getCampaigns");

    //scroll to top
    cy.scrollTo(0, 0);

    //header should show BEST Saving Accounts
    cy.xpath(reviewPage.page_items.pagetitle_h1.selector).should(
      "contain",
      "Best  Savings Accounts"
    );

    cy.intercept("GET", "https://api.seedly.sg//api/v4/product/items*").as(
      "getItems"
    );

    //type DBS
    cy.xpath(reviewPage.page_items.serachbox_textbox.selector).type("DBS");

    cy.wait("@getItems");

    //get product item
    cy.xpath(ReviewPage.page_items.productitem_div.selector).within(
      (productItem) => {
        //Singtel Dash PET should exist
        cy.get("a")
          .should("be.visible")
          .should("contain", "DBS Multiplier Account");

        //view more button should exist
        cy.get("a").should("be.visible").should("contain", "View More");

        //remove target attribute not to create new tab
        cy.get("a").eq(1).invoke("removeAttr", "target").click();

        //check url is should be singtel-dash-pet
        cy.url().should("include", "/dbs-multiplier-account");
      }
    );
  });

  it("tcs-9: Search Existing Product with partial name with white spaces end of the string in saving account and mobile view", () => {
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

    cy.xpath(reviewPage.page_items.menu_button.selector).click();

    //click Banking Menu
    cy.contains("Banking").click();

    //click Saving Account Menu
    cy.contains("Savings Accounts").click();

    //wait page loading to finish
    cy.wait("@getCampaigns");

    //scroll to top
    cy.scrollTo(0, 0);

    //header should show BEST Saving Accounts
    cy.xpath(reviewPage.page_items.pagetitle_h1.selector).should(
      "contain",
      "Best  Savings Accounts"
    );

    cy.intercept("GET", "https://api.seedly.sg//api/v4/product/items*").as(
      "getItems"
    );

    //type DBS
    cy.xpath(reviewPage.page_items.serachbox_textbox.selector).type(
      "DBS                "
    );

    cy.wait("@getItems");

    //get product item
    cy.xpath(ReviewPage.page_items.productitem_div.selector).within(
      (productItem) => {
        //Singtel Dash PET should exist
        cy.get("a")
          .should("be.visible")
          .should("contain", "DBS Multiplier Account");

        //view more button should exist
        cy.get("a").should("be.visible").should("contain", "View More");

        //remove target attribute not to create new tab
        cy.get("a").eq(1).invoke("removeAttr", "target").click();

        //check url is should be singtel-dash-pet
        cy.url().should("include", "/dbs-multiplier-account");
      }
    );
  });

  it("tcs-10: Search Existing Product with partial name with white spaces start of the string in saving account and mobile view", () => {
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

    cy.xpath(reviewPage.page_items.menu_button.selector).click();

    //click Banking Menu
    cy.contains("Banking").click();

    //click Saving Account Menu
    cy.contains("Savings Accounts").click();

    //wait page loading to finish
    cy.wait("@getCampaigns");

    //scroll to top
    cy.scrollTo(0, 0);

    //header should show BEST Saving Accounts
    cy.xpath(reviewPage.page_items.pagetitle_h1.selector).should(
      "contain",
      "Best  Savings Accounts"
    );

    cy.intercept("GET", "https://api.seedly.sg//api/v4/product/items*").as(
      "getItems"
    );

    //type DBS
    cy.xpath(reviewPage.page_items.serachbox_textbox.selector).type(
      "                DBS"
    );

    cy.wait("@getItems");

    //get product item
    cy.xpath(ReviewPage.page_items.productitem_div.selector).within(
      (productItem) => {
        //Singtel Dash PET should exist
        cy.get("a")
          .should("be.visible")
          .should("contain", "DBS Multiplier Account");

        //view more button should exist
        cy.get("a").should("be.visible").should("contain", "View More");

        //remove target attribute not to create new tab
        cy.get("a").eq(1).invoke("removeAttr", "target").click();

        //check url is should be singtel-dash-pet
        cy.url().should("include", "/dbs-multiplier-account");
      }
    );
  });

  it("tcs-11: Search Non-existing Product with normal string in saving account and mobile view", () => {
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

    cy.xpath(reviewPage.page_items.menu_button.selector).click();

    //click Banking Menu
    cy.contains("Banking").click();

    //click Saving Account Menu
    cy.contains("Savings Accounts").click();

    //wait page loading to finish
    cy.wait("@getCampaigns");

    //scroll to top
    cy.scrollTo(0, 0);

    //header should show BEST Saving Accounts
    cy.xpath(reviewPage.page_items.pagetitle_h1.selector).should(
      "contain",
      "Best  Savings Accounts"
    );

    cy.intercept("GET", "https://api.seedly.sg//api/v4/product/items*").as(
      "getItems"
    );

    //type Testing
    cy.xpath(reviewPage.page_items.serachbox_textbox.selector).type("Testing");

    cy.wait("@getItems");

    //No Products found should show
    /*
    cy.xpath(ReviewPage.page_items.noproductfound_div.selector)
      .should("be.visible")
      .should("contain", ReviewPage.page_items.noproductfound_div.value);
      */

    //No of product found should be 0
    cy.xpath(ReviewPage.page_items.noofproductfound_p.selector)
      .should("be.visible")
      .should("contain", "0 Products Found");
  });

  it.only("tcs-12: Search Non-existing Product with special char string in saving account and mobile view", () => {
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

    cy.xpath(reviewPage.page_items.menu_button.selector).click();

    //click Banking Menu
    cy.contains("Banking").click();

    //click Saving Account Menu
    cy.contains("Savings Accounts").click();

    //wait page loading to finish
    cy.wait("@getCampaigns");

    //scroll to top
    cy.scrollTo(0, 0);

    //header should show BEST Saving Accounts
    cy.xpath(reviewPage.page_items.pagetitle_h1.selector).should(
      "contain",
      "Best  Savings Accounts"
    );

    cy.intercept("GET", "https://api.seedly.sg//api/v4/product/items*").as(
      "getItems"
    );

    //type Testing
    cy.xpath(reviewPage.page_items.serachbox_textbox.selector).type(
      "@$%*(%^($#&*$"
    );

    cy.wait("@getItems");

    //No Products found should show
    /*
    cy.xpath(ReviewPage.page_items.noproductfound_div.selector)
      .should("be.visible")
      .should("contain", ReviewPage.page_items.noproductfound_div.value);
      */

    //No of product found should be 0
    cy.xpath(ReviewPage.page_items.noofproductfound_p.selector)
      .should("be.visible")
      .should("contain", "0 Products Found");
  });
});
