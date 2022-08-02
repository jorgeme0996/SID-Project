const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ERC721 SID", () => {
  let ERC721SID, ERC721SIDContract, owner, account1, otheraccounts;

  beforeEach(async () => {
    ERC721SID = await ethers.getContractFactory("ERC721SID");
    [owner, account1, ...otheraccounts] = await ethers.getSigners();
    ERC721SIDContract = await ERC721SID.deploy();
  });

  describe("Deploymet", () => {
    it("Should set the right owner", async () => {
      expect(await ERC721SIDContract.owner()).to.equal(owner.address);
    });
  });

  describe("safeMint", () => {
    it("Should mint token", async () => {
        const addresToSend = account1.address;
        await ERC721SIDContract.safeMint(addresToSend)
        expect(await ERC721SIDContract.ownerOf(0)).to.equal(addresToSend)
    })
  })
});
