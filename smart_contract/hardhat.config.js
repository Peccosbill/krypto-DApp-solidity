// https://eth-ropsten.alchemyapi.io/v2/94NsPAgpa-wYSP9WrqUb17mBqQjYw8kn

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/94NsPAgpa-wYSP9WrqUb17mBqQjYw8kn',
      accounts: [ 'b95cacfb15e05a85ef652cd088d197630695804d438a09ce2e4631b3ea0a7804' ]
    }
  }
}

// npx hardhat run scripts/deploy.js --network ropsten
