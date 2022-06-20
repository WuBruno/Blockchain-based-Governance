module.exports = async () => {
  const addresses = await web3.eth.getAccounts();

  return web3.eth.personal.unlockAccount(
    addresses[0],
    process.env.GETH_ACCOUNT_PASSWORD,
  );
};
