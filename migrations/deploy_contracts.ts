import Web3 from 'web3';
import Truffle from '@typechain/truffle-v5';

type Network = 'development' | 'kovan' | 'mainnet';

module.exports = (artifacts: Truffle.Artifacts, _web3: Web3) => {
  return async (
    deployer: Truffle.Deployer,
    _network: Network,
    _accounts: string[],
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
