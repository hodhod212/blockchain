// https://eth-ropsten.alchemyapi.io/v2/O4N_B_2Md0o9sX0gbR9nSsVWopSVfkec
require('@nomiclabs/hardhat-waffle');
module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/O4N_B_2Md0o9sX0gbR9nSsVWopSVfkec',
      accounts: [
        '73b5cb15fca23e96605ce4a20b98b5d1affe11e08202e9e3cc9c2567a2ad8330',
      ],
    },
  },
};
