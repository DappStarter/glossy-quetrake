require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom system tragic name reward stereo purse include area sun giggle'; 
let testAccounts = [
"0x9d92deb3e70b9e02ca8cdd2325ec3a6cd9564e7fdf3012f50c68c9d9b0cbae22",
"0xa5fd81f87863d94c1e5a10e8281a7deda4fd9d10fef87604647d1c0576f31e2d",
"0x5a608a5db00b4a18df5cb7378fa7cbf1756d849fdb90284dc99bef9604811a88",
"0x96629bb143a1fbf967680dcb03b9590d47af4c7e4b306039c71f30117d03e4dc",
"0x85a97d703d71ac499e056bd86090bd796079b4522ee3310cdf1978eb90c14ae9",
"0x4416b68100b2b89fc0b15f37777cb015db56a56c2b8b70c82373016b8264fdc2",
"0x3657741ff1c015351ec7e33c5e3a37a63eb13bb711a7913dd09d24a7887dde35",
"0x4606eeb090c3da5a9d1f244c437ac04570106d54724f5e12670e8209d450d39f",
"0xfd984d235f119c28e6acd97914ef119ac00610b5012465f7fa58e4f016f0bdd1",
"0x8a069a7913c5074c9fc43f7744bf1d6d9f713f8c290d881b91c223582ad93e67"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
