describe("template spec", () => {
  it("passes", () => {
    cy.intercept(
      "GET",
      "/Phangster/Accredify-FE-Interview-Endpoint/main/user.json",
      { fixture: "user.json" }
    ).as("getUser");

    cy.intercept(
      "GET",
      "/Phangster/Accredify-FE-Interview-Endpoint/main/documents.json",
      { fixture: "documents.json" }
    ).as("getDocuments");

    cy.intercept(
      "GET",
      "/Phangster/Accredify-FE-Interview-Endpoint/main/goals.json",
      { fixture: "goals.json" }
    ).as("getGoals");

    // 1. Given user is on home page
    cy.visit("/");

    // 2. Then user should see main navigation
    cy.get("nav").should("exist");

    cy.wait(["@getUser", "@getDocuments", "@getGoals"]);
    cy.get("h1").should("have.text", "Hi, John Smith 👋🏻");

    // 3. And user should see their recent documents sorted in descending order.
    cy.get("[data-cy='cypress-widget-layout']").should("have.length", 2);

    // 4. And user should see his/her career goal

    // 5. When user clicks on account settings dropdown

    // 6. And user clicks on log out option

    // 7. Then user should be logged out from the dashboard
  });
});
