const Employee = require('../lib/employee')

describe("Employee", () => {
  describe("getName", () => {
    it('Should return a name', () => {
      const newEmployee = new Employee('Michael', 1, 'michae.barrientos1129@gmail.com')
      expect(newEmployee.getName()).toEqual('Michael')
    })
  });

  describe("getId", () => {
    it("Return the object's ID number", () => {
      const newEmployee = new Employee('Michael', 1, 'michae.barrientos1129@gmail.com')
      expect(newEmployee.getId()).toEqual(1)
    })
  });

  describe("getEmail", () => {
    it("Return the object's Email value as a string", () => {
      const newEmployee = new Employee('Michael', 1, 'michae.barrientos1129@gmail.com')
      expect(newEmployee.getEmail()).toEqual('michae.barrientos1129@gmail.com')
    })
  })

  describe("getRole", () => {
    it("Return the object's role value as a string", () => {
      const newEmployee = new Employee('Michael', 1, 'michae.barrientos1129@gmail.com')
      expect(newEmployee.getRole()).toEqual('Employee')
    })
  });

});