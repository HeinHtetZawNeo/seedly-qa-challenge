module.exports = {
  page_items: {
    pagetitle_h1: {
      selector: "//h1[@data-testid='review-page-title']",
      testid: "review-page-title",
    },
    menu_button: {
      selector: '//*[@id="__next"]/div/div[1]/div[1]/div/div[1]/div/button',
    },
    serachbox_textbox: {
      selector: "/html/body/div[1]/div/div[2]/div[1]/div/div[3]/div/input",
      value: "Find All Product",
    },
    productitem_div: {
      selector: "//div[@data-testid='product-item']",
      testid: "product-item",
    },
    noofproductfound_p: {
      selector: "//*[@id='__next']/div/div[2]/div[3]/div/div[2]/div[1]/p",
    },
    noproductfound_div: {
      selector: "//*[@id='__next']/div/div[2]/div[3]/div/div[2]/div[3]/div[1]",
      value: "No products found!",
    },
  },
};
