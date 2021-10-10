import Web3, { providers } from "web3";

// web3 instance
const web3 = new Web3(new providers.HttpProvider("http://127.0.0.1:7545"));

const source = "0x7D481adF27E28538b3EE123ab7C990CFa62a6629";
const destination = "0xCbc72A600686a98caF345D349bd7944137e6B751";

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

(async () => {
  const result = await sendTransaction(source, destination, "1");
  console.log(result);
})();
