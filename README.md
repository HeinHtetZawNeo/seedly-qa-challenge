# Installation
```bash
## install all dependencies
npm install
```
# Opening Cypress GUI
```bash
# open Cypress GUI
npx cypress open
```

# Running from the CLI
Same as running Cypress GUI but with the `cypress run` command (and any CLI arguments)
```bash
# Cypress tests headlessly
npx cypress run
```

# Package
## Cypress-xpath
- To able to use xpath

# Testcase List
## tcs-1: Search Existing Product with full name
### Test Description
- Find the existing product.
- Product Detail page should available.
### Precondition
- Product item "Singtel Dash PET" should exist.

| Test Steps |Expected Result  |
|--|--|
|Go to Review Page (https://seedly.sg/reviews).  |Review Page Should have a search box.|
|Type "Singtel Dash PET" in the search box.|"Singtel Dash PET" product should show, and the "View More" button should exist for the product.|
|Click the "View More" button.|Page should lead to Product Detail Page.|

## tcs-2: Search Existing Product with partial name
### Test Description
- Find the existing product.
- Product Detail page should available.
### Precondition
- Product item "Singtel Dash PET" should exist.

| Test Steps |Expected Result  |
|--|--|
|Go to Review Page (https://seedly.sg/reviews).  |Review Page Should have a search box.|
|Type "Singtel" in the search box.|"Singtel Dash PET" product should show, and the "View More" button should exist for the product.|
|Click the "View More" button.|Page should lead to Product Detail Page.|

## tcs-3: Search Existing Product with partial name with white spaces end of the string
### Test Description
- Find the existing product.
- Product Detail page should available.
### Precondition
- Product item "Singtel Dash PET" should exist.

| Test Steps |Expected Result  |
|--|--|
|Go to Review Page (https://seedly.sg/reviews).  |Review Page Should have a search box.|
|Type "Singtel                " in the search box.|"Singtel Dash PET" product should show, and the "View More" button should exist for the product.|
|Click the "View More" button.|Page should lead to Product Detail Page.|

## tcs-4: Search Existing Product with partial name with white spaces start of the string
### Test Description
- Find the existing product.
- Product Detail page should available.
### Precondition
- Product item "Singtel Dash PET" should exist.

| Test Steps |Expected Result  |
|--|--|
|Go to Review Page (https://seedly.sg/reviews).  |Review Page Should have a search box.|
|Type "                Singtel" in the search box.|"Singtel Dash PET" product should show, and the "View More" button should exist for the product.|
|Click the "View More" button.|Page should lead to Product Detail Page.

## tcs-5: Search Non-existing Product with normal string
### Test Description
- Find the non-existing product.
### Precondition
- Product item "Testing" should not exist.

| Test Steps |Expected Result  |
|--|--|
|Go to Review Page (https://seedly.sg/reviews).  |Review Page Should have a search box.|
|Type "Testing" in the search box.|"0 product Found" and "No products found!" should show|

## tcs-6: Search Non-existing Product with special char string
### Test Description
- Search with special char
### Precondition
- NA

| Test Steps |Expected Result  |
|--|--|
|Go to Review Page (https://seedly.sg/reviews).  |Review Page Should have a search box.|
|Type "@$%*(%^($#&*$" in the search box.|"0 product Found" and "No products found!" should show|

## tcs-7: Search Existing Product with full name in saving account and mobile view
### Test Description
- Find the existing product.
- Product Detail page should available.
### Precondition
- Product item "DBS Multiplier Account" should exist.

| Test Steps |Expected Result  |
|--|--|
|Go to Review Page (https://seedly.sg/reviews).  |Review Page Should have a search box.|
|Click Menu Button|Banking menu should appear|
|Click Banking Menu||
|Click Saving Account Menu|page should lead to saving account and page title should be "Best  Savings Accounts"|
|Type "DBS Multiplier Account" in the search box|"DBS Multiplier Account" product should show, and the "View More" button should exist for the product.|
|Click the "View More" button.|Page should lead to Product Detail Page.|

## tcs-8: Search Existing Product with partial name in saving account and mobile view
### Test Description
- Find the existing product.
- Product Detail page should available.
### Precondition
- Product item "DBS Multiplier Account" should exist.

| Test Steps |Expected Result  |
|--|--|
|Go to Review Page (https://seedly.sg/reviews).  |Review Page Should have a search box.|
|Click Menu Button|Banking menu should appear|
|Click Banking Menu||
|Click Saving Account Menu|page should lead to saving account and page title should be "Best  Savings Accounts"|
|Type "DBS" in the search box|"DBS Multiplier Account" product should show, and the "View More" button should exist for the product.|
|Click the "View More" button.|Page should lead to Product Detail Page.|

## tcs-9: Search Existing Product with partial name with white spaces end of the string in saving account and mobile view
### Test Description
- Find the existing product.
- Product Detail page should available.
### Precondition
- Product item "DBS Multiplier Account" should exist.

| Test Steps |Expected Result  |
|--|--|
|Go to Review Page (https://seedly.sg/reviews).  |Review Page Should have a search box.|
|Type "DBS                " in the search box.|"Singtel Dash PET" product should show, and the "View More" button should exist for the product.|
|Click the "View More" button.|Page should lead to Product Detail Page.|

## tcs-10: Search Existing Product with partial name with white spaces start of the string in saving account
### Test Description
- Find the existing product.
- Product Detail page should available.
### Precondition
- Product item "DBS Multiplier Account" should exist.

| Test Steps |Expected Result  |
|--|--|
|Go to Review Page (https://seedly.sg/reviews).  |Review Page Should have a search box.|
|Type "                DBS" in the search box.|"Singtel Dash PET" product should show, and the "View More" button should exist for the product.|
|Click the "View More" button.|Page should lead to Product Detail Page.|

## tcs-11: Search Non-existing Product with normal string in saving account and mobile view
### Test Description
- Find the non-existing product.
### Precondition
- Product item "Testing" should not exist.

| Test Steps |Expected Result  |
|--|--|
|Go to Review Page (https://seedly.sg/reviews).  |Review Page Should have a search box.|
|Type "Testing" in the search box.|"0 product Found" and "No products found!" should show|

## tcs-12: Search Non-existing Product with special char string in saving account and mobile view
### Test Description
- Search with special char
### Precondition
- NA

| Test Steps |Expected Result  |
|--|--|
|Go to Review Page (https://seedly.sg/reviews).  |Review Page Should have a search box.|
|Type "@$%*(%^($#&*$" in the search box.|"0 product Found" and "No products found!" should show|


# Difficulty and Challenges
- When user click on “View More” button, it is open with new tab.
    - Cypress doesn’t allow handling of new browser tabs
    - Solution: remove target attribute from the <a> element and then click on it
