const Manager = require('../lib/Manager');

describe("Manager", () => {
  it("Set office number", () => {
    const managerOfficeNumber = 1;
    const testManager = new Manager("John", 1, "employee@employer.com", managerOfficeNumber);
    expect(testManager.officeNumber).toBe(managerOfficeNumber);
  });

  it("getRole() function should return Manager", () => {
    const managerRole = "Manager";
    const testManager = new Manager("John", 1, "employee@employer.com", 42);
    expect(testManager.getRole()).toBe(managerRole);
  });

  it("getOfficeNumber should return office number", () => {
    const managerOfficeNumber = 42;
    const testManager = new Manager("John", 1, "employee@employer.com", managerOfficeNumber);
    expect(testManager.getOfficeNumber()).toBe(managerOfficeNumber);
  });
});