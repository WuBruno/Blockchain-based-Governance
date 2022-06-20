const receivers = [
  '0x2340CE3d0b52849E3192FaebFf75C4d327dA9440', // Voter 1
  '0xc79B83721c54B1Ef79f90B48E14A7f95E085B189', // Voter 2
  '0x2f5f9a1b383aBdBE29C237EfCeC6Cb659B672d88', // Voter 3
];

const Token = artifacts.require('ICVCMToken');
const Governor = artifacts.require('ICVCMGovernor');

module.exports = async function (callback) {
  const token = await Token.deployed();
  const governor = await Governor.deployed();

  console.log('start proposal', await governor.name());

  const results = await governor.hashProposal(
    [token.address],
    [0],
    [0],
    'The best proposal 1233',
  );

  // const results = await governor.state(
  //   '0x7d84a6263ae0d98d3329bd7b46bb4e8d6f98cd35a7adb45c274c8b7fd5ebd5e0',
  // );

  console.log(results);

  callback();
};
