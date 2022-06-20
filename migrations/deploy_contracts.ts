type Network = 'development' | 'kovan' | 'mainnet';

module.exports = (artifacts: Truffle.Artifacts, web3: Web3) => {
  return async (
    deployer: Truffle.Deployer,
    network: Network,
    accounts: string[],
  ) => {
    const ICVCMToken = artifacts.require('ICVCMToken');
    const ICVCMGovernor = artifacts.require('ICVCMGovernor');

    // Governance token deployment
    await deployer.deploy(ICVCMToken);
    // Governor contract deployment
    await deployer.deploy(ICVCMGovernor, ICVCMToken.address);

    console.log('Deployment complete');
  };
};
