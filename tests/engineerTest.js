const Engineer = require('../lib/engineer');

describe("Engineer", () => {
  describe("getName", () => {
    it('Should return the name of the created object', () => {
      const newEngineer = new Engineer('Seth', 2, 'seth@gmail.com', 'sethGit')
      expect(newEngineer.getName()).toEqual('Seth')
    })
  });

  describe("getId", () => {
    it("Return the object's ID number", () => {
      const newEngineer = new Engineer('Seth', 2, 'seth@gmail.com', 'sethGit')
      expect(newEngineer.getId()).toEqual(2)
    })
  });

  describe("getEmail", () => {
    it("Return the object's Email value as a string", () => {
      const newEngineer = new Engineer('Seth', 2, 'seth@gmail.com', 'sethGit')
      expect(newEngineer.getEmail()).toEqual('seth@gmail.com')
    })
  });

  describe("getGithub", () => {
    it("Return the object's github value as a string", () => {
      const newEngineer = new Engineer('Seth', 2, 'seth@gmail.com', 'sethGit')
      expect(newEngineer.getGithub()).toEqual('sethGit')
    })
  });

  describe("getRole", () => {
    it("Return the object's role value as a string", () => {
      const newEngineer = new Engineer('Seth', 2, 'seth@gmail.com', 'sethGit')
      expect(newEngineer.getRole()).toEqual('Engineer')
    })
  });

});