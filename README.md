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

# Testcase List

## Testcase 1
### Test Description
- Find the existing product.
### Precondition
- Product item "Singtel Dash PET" should exist.
### Test Steps and expected Result
1. Go to Review Page (https://seedly.sg/reviews).
2. Type "Singtel Dash PET" in the search box.
3. Click the "View More" button.
### Test Expected Result
1. Review Page Should have a search box.
2. "Singtel Dash PET" product should show, and the "View More" button should exist for the product.
3. Page should lead to Product Detail Page.
