const Intern = require("../lib/Intern");

describe("Intern", () => {
  it("Set school", () => {
    const internSchool = "UCI Bootcamp";
    const testIntern = new Intern("John", 1, "student@school.com", internSchool);
    expect(testIntern.school).toBe(internSchool);
  });

  it("getRole should return Intern", () => {
    const internRole = "Intern";
    const testIntern = new Intern("John", 1, "student@school.com", "UCI Bootcamp");
    expect(testIntern.getRole()).toBe(internRole);
  });

  it("getSchool should return school name", () => {
    const internSchool = "UCI Bootcamp";
    const testIntern = new Intern("John", 1, "student@school.com", internSchool);
    expect(testIntern.getSchool()).toBe(internSchool);
  });
});