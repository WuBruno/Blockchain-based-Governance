// const unlockAccount = require('./account');

const receivers = [
  '0x2340CE3d0b52849E3192FaebFf75C4d327dA9440', // Voter 1
  '0xc79B83721c54B1Ef79f90B48E14A7f95E085B189', // Voter 2
  '0x2f5f9a1b383aBdBE29C237EfCeC6Cb659B672d88', // Voter 3
];

const Token = artifacts.require('ICVCMToken');

module.exports = async function (callback) {
  // await unlockAccount();

  const token = await Token.deployed();

  const results = await Promise.all(
    receivers.map((receiver) => token.safeMint(receiver)),
  );

  console.log('complete', results);

  callback();
};
