import Web3, { providers } from "web3";

// web3 instance
const web3 = new Web3(new providers.HttpProvider("http://127.0.0.1:7545"));

const source = "0xbC9c84097A7D0366509eE00a67236fC32E14bDCB";
const destination = "0xf8e81D47203A594245E36C48e151709F0C19fBe8";
const contractAddress = "0xf8e81D47203A594245E36C48e151709F0C19fBe8";

const remixABI = [
  {
    inputs: [],
    name: "getMyUint",
    outputs: [
      {
        internalType: "uint256",
        name: "number",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "myUint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_myUint",
        type: "uint256",
      },
    ],
    name: "setUint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

async function getBalance(address) {
  try {
    const result = await web3.eth.getBalance(address);
    const ether = web3.utils.fromWei(result, "ether");

    return {
      status: true,
      ether,
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
    };
  }
}

async function sendTransaction(from, to, amount) {
  try {
    const result = await web3.eth.sendTransaction({
      from,
      to,
      value: web3.utils.toWei(amount, "ether"),
    });

    return {
      status: true,
      result,
    };
  } catch (error) {
    console.log(error);

    return {
      status: false,
    };
  }
}

async function ethCall(from, to, data) {
  try {
    const result = await web3.eth.call({ from, to, data });

    return {
      status: true,
      result,
    };
  } catch (error) {
    console.log(error);

    return {
      status: false,
    };
  }
}

async function ethCall2() {
  try {
    const myContract = new web3.eth.Contract(remixABI, contractAddress, {
      from: source,
    });
    const sendResult = await myContract.methods.setUint(50).send();
    const result = await myContract.methods.window.getMyUint().call();

    return {
      status: true,
      sendResult,
      result,
    };
  } catch (error) {
    console.log(error);

    return {
      status: false,
    };
  }
}

(async () => {
  // const result = await sendTransaction(source, destination, "1");

  // const hexCode = web3.utils.sha3("myUint()").substr(0, 10);
  // const result = await ethCall(source, destination, hexCode);

  const result = await ethCall2();

  console.log(result);
})();
