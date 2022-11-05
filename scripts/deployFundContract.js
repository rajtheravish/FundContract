const hre = require("hardhat");

async function main() {

  const [owner] = await hre.ethers.getSigners();

  const FundContract = await hre.ethers.getContractFactory("FundContract");
  const fundContract = await FundContract.deploy();
  await fundContract.deployed();
  
  await fundContract.deposit({ value: 2 });

  const res = await fundContract.sendEth(owner.address, 1);
  console.log(res);

  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
