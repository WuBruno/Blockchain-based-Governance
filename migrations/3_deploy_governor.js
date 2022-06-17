const ICVCMToken = artifacts.require('ICVCMToken');
const ICVCMGovernor = artifacts.require('ICVCMGovernor');

module.exports = (deployer) => {
  deployer.deploy(ICVCMGovernor, ICVCMToken.address);
};
