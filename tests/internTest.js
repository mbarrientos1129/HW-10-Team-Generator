const Intern = require('../lib/intern');

describe("Intern", () => {
  describe("getName", () => {
    it('Should return a name', () => {
      const newIntern = new Intern('Mark', 3, 'mark@gmail.com', 'UPenn')
      expect(newIntern.getName()).toEqual('Mark')
    })
  });

  describe("getId", () => {
    it("Return the object's ID number", () => {
      const newIntern = new Intern('Mark', 3, 'mark@gmail.com', 'UPenn')
      expect(newIntern.getId()).toEqual(3)
    })
  });

  describe("getEmail", () => {
    it("Return the object's Email value as a string", () => {
      const newIntern = new Intern('Mark', 3, 'mark@gmail.com', 'UPenn')
      expect(newIntern.getEmail()).toEqual('mark@gmail.com')
    })
  });

  describe("getSchool", () => {
    it("Return the object's School value as a string", () => {
      const newIntern = new Intern('Mark', 3, 'mark@gmail.com', 'UPenn')
      expect(newIntern.getSchool()).toEqual('UPenn')
    })
  })

  describe("getRole", () => {
    it("Return the object's role value as a string", () => {
      const newIntern = new Intern('Mark', 3, 'mark@gmail.com', 'UPenn')
      expect(newIntern.getRole()).toEqual('Intern')
    })
  });

});