const Employee = require('../lib/Employee');

describe("Employee", () => {
  test("Can create an Employee instance", () => {
    const testEmployee = new employee();
    expect(typeof(testEmployee)).toBe("object");
  })

  test("Name can be set", () => {
    const employeeName = "John";
    const testEmployee = new employee(employeeName);
    expect(testEmployee.name).toBe(employeeName);
  })

  test("ID can be set", () => {
    const employeeId = 1;
    const testEmployee = new Employee ("John", employeeId);
  })

  test("Email can be set", () => {
    const employeeEmail = "employee@employer.com";
    const testEmployee = new Employee ("John", 1, employeeEmail);
    expect(testEmployee.email).toBe(employeeEmail);
  })

  test("Name can be set with getName()", () => {
    const employeeName = "John";
    const testEmployee = new Employee (employeeName);
    expect(testEmployee.getName()).toBe(employeeName);
  })

  test("ID can be set with getId()", () => {
    const employeeId = 1;
    const testEmployee = new Employee ("John", employeeId);
    expect(testEmployee.getId()).toBe(employeeId);
  })

  test("Email can be set with getEmail()", () => {
    const employeeEmail = "employee@employer.com";
    const testEmployee = new Employee ("John", 1, employeeEmail);
    expect(testEmployee.getEmail()).toBe(employeeEmail);
  })

});