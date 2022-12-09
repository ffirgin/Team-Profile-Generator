const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("Set GitHub account", () => {
    const engineerGitHub = "GitHubUserName";
    const testEngineer = new Engineer("John", 1, "employee@employer.com", engineerGitHub);
    expect(testEngineer.github).toBe(engineerGitHub);
  })

  it("getRole() function should return Engineer", () => {
    const engineerRole = "Engineer";
    const testEngineer = new Engineer("John", 1, "employee@employer.com", "GitHubUserName");
    expect(testEngineer.getRole()).toBe(engineerRole);
  });

  it("getGitHub() function should return GitHub username", () => {
    const engineerGitHub = "GitHubUserName";
    const testEngineer = new Engineer("John", 1, "employee@employer.com", engineerGitHub); 
    expect(testEngineer.getGitHub()).toBe(engineerGitHub);
  });

});
