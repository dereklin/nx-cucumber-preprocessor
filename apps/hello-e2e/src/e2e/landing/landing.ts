import { Before, Given, Then } from '@badeball/cypress-cucumber-preprocessor';

Before(() => {
  cy.visit("/")
})

Given("invalid the user is logged in", () => {
  cy.login("my-email@something.com", "myPassword")
})

Then("the {string} message is displayed", (message: string) => {
  cy.get("h1").contains(message)
})
