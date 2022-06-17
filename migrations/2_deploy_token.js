const ICVCMToken = artifacts.require('ICVCMToken');

module.exports = (deployer) => {
  deployer.deploy(ICVCMToken);
};
