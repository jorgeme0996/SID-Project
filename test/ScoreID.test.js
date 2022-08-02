const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Score ID', () => {
    let ScoreID, ScoreIDContract, owner, addr1, addr2, addr3, addrs;


    beforeEach(async () => {
        ScoreID = await ethers.getContractFactory('ScoreID');
        [owner, addr1, addr2, addr3, ...addrs] = await ethers.getSigners();
        ScoreIDContract = await ScoreID.deploy();
    })

    describe('Deploymet', () => {
        it('Should contructor started', async() => {
            expect(await ScoreIDContract.contPersons())
                .to.equal(0)
            expect(await ScoreIDContract.contScores())
                .to.equal(0)
        })
    }) 
})
