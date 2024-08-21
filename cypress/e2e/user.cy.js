describe("Home page", () => {
  it("User can see career goal", () => {
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
    cy.get("h1").should("have.text", "Hi, John Doe 👋🏻");

    // 3. And user should see their recent documents sorted in descending order.
    const widgetLayoutSelector = "[data-cy='cypress-widget-layout']";
    cy.get(widgetLayoutSelector).should("have.length", 2);

    const documentsSelector = `${widgetLayoutSelector}:last-child`;
    cy.get(documentsSelector).should("exist");
    cy.get(`${documentsSelector} [data-testid="table-head"]`).should("exist");
    cy.get(`${documentsSelector} [data-testid="table-row"]`).should(
      "have.length",
      2
    );

    // 4. And user should see his/her career goal
    const careerGoalSelector = `${widgetLayoutSelector}:first-child`;
    cy.get(careerGoalSelector).should("exist");
    cy.get(`${careerGoalSelector} h2`).and("have.text", "Career goal");
    cy.get(
      `${careerGoalSelector} [data-testid='circular-progress'] span`
    ).should("have.text", "35 %");
    cy.get(`${careerGoalSelector} b`).should("have.text", "Account Manager");

    // 5. When user clicks on account settings dropdown
    cy.contains("John Doe").click();
    // 6. And user clicks on log out option
    cy.contains("Log out").click();
    // 7. Then user should be logged out from the dashboard
    cy.get("h1").should("have.text", "Log in to Accredify");
  });

  it("Personal user can NOT see career goal", () => {
    cy.intercept(
      "GET",
      "/Phangster/Accredify-FE-Interview-Endpoint/main/user.json",
      { fixture: "user-personal.json" }
    ).as("getUser");

    cy.intercept(
      "GET",
      "/Phangster/Accredify-FE-Interview-Endpoint/main/documents.json",
      { fixture: "documents.json" }
    ).as("getDocuments");

    // 1. Given user is on home page
    cy.visit("/");

    // 2. Then user should see main navigation
    cy.get("nav").should("exist");

    cy.wait(["@getUser", "@getDocuments"]);
    cy.get("h1").should("have.text", "Hi, Jane Chan 👋🏻");

    // 3. And user should see their recent documents sorted in descending order.
    const widgetLayoutSelector = "[data-cy='cypress-widget-layout']";
    cy.get(widgetLayoutSelector).should("have.length", 1);

    const documentsSelector = `${widgetLayoutSelector}:first-child`;
    cy.get(documentsSelector).should("exist");
    cy.get(`${documentsSelector} [data-testid="table-head"]`).should("exist");
    cy.get(`${documentsSelector} [data-testid="table-row"]`).should(
      "have.length",
      2
    );

    // 5. When user clicks on account settings dropdown
    cy.contains("Jane Chan").click();
    // 6. And user clicks on log out option
    cy.contains("Log out").click();
    // 7. Then user should be logged out from the dashboard
    cy.get("h1").should("have.text", "Log in to Accredify");
  });
});
