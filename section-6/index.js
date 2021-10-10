import Web3, { providers } from "web3";

// web3 instance
const web3 = new Web3(new providers.HttpProvider("http://127.0.0.1:7545"));

web3.eth
  .getBalance("0x7D481adF27E28538b3EE123ab7C990CFa62a6629")
  .then((val) => console.log(val))
  .catch((err) => console.log(err));
