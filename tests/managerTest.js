const Manager = require('../lib/Manager')

describe("Manager", () => {
  describe("getName", () => {
    it('should return a name', () => {
      const newManager = new Manager('Nick', 4, 'nick@gmail.com', 123)
      expect(newManager.getName()).toEqual('Nick')
    })
  });

  describe("getId", () => {
    it("should return the object's ID number", () => {
      const newManager = new Manager('Nick', 4, 'nick@gmail.com', 123)
      expect(newManager.getId()).toEqual(4)
    })
  });

  describe("getEmail", () => {
    it("should return the object's Email value as a string", () => {
      const newManager = new Manager('Nick', 4, 'nick@gmail.com', 123)
      expect(newManager.getEmail()).toEqual('nick@gmail.com')
    })
  })

  describe("getOfficeNumber", () => {
    it("should return the object's Office Number value as a number", () => {
      const newManager = new Manager('Nick', 4, 'nick@gmail.com', 123)
      expect(newManager.getOfficeNumber()).toEqual(123)
    })
  })

  describe("getRole", () => {
    it("should return the object's role value as a string", () => {
      const newManager = new Manager('Nick', 4, 'nick@gmail.com', 123)
      expect(newManager.getRole()).toEqual('Manager')
    })
  });

});