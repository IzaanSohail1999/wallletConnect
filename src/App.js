import './App.css';
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from '@web3-react/core'
const { ethereum } = window;


const CoinbaseWallet = new WalletLinkConnector({
  url: `https://rinkeby.infura.io/v3/f9393070d836406d882c48e92469b634`,
  appName: "Web3-react Demo",
  supportedChainIds: [1, 3, 4, 5, 42],
 });
 
 
//  const Injected = new InjectedConnector({
//   supportedChainIds: [1, 3, 4, 5, 42]
//  });

function App() {

  async function metamask(){
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    // setCurrentAccount(accounts[0]);
    // activate(Injected)
    console.log(accounts[0]);
  }

  const { activate, active, chainId, account, deactivate } = useWeb3React();
  // console.log(active)
  // console.log(chainId)
  // console.log(account)
  // console.log(Injected)
  return (
    <div className="App">
      <button onClick={() => { activate(CoinbaseWallet) }}>Coinbase Wallet</button>
      {/* <button onClick={() => { activate(WalletConnect) }}>Wallet Connect</button> */}
      <button onClick={() => {metamask()}}>Metamask</button>
      <button onClick={deactivate}>Disconnect</button>
      <div>Connection Status: {active}</div>
    <div>Account: {account}</div>
    <div>Network ID: {chainId}</div>
    </div>
  );
}

export default App;
