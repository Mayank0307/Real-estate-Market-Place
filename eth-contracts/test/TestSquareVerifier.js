// define a variable to import the <Verifier> or <renamedVerifier> solidity contract generated by Zokrates
var SquareVerifier = artifacts.require('SquareVerifier');
const Proofzokrates = require("../../zokrates/code/square/proof.json");

contract('TestSquareVerifier', accounts => {
  const owner = accounts[0];

  console.log("TestSquareVerifier:");
  console.log("Contract Owner: accounts[0] ", accounts[0]);

  beforeEach(async() => {
      this.contract = await SquareVerifier.new({from: owner});
    });
// Test verification with correct proof

it("should verify correct proof", async() => {
    let result = await this.contract.verifyTx.call(...Object.values(Proofzokrates.proof), Proofzokrates.inputs);
    assert.equal(result, true)
  });
// - use the contents from proof.json generated from zokrates steps

    
// Test verification with incorrect proof
it("should not verify incorrect proof", async() => {
    let result = await this.contract.verifyTx.call(...Object.values(Proofzokrates.proof), [42, 23]);
    assert.equal(result, false);
  });
});