import { JobsList } from "./components/JobsList";
import { GamePlayer } from "./components/GamePlayer";
import { ConnectButton, GlobalStyles, HeaderDiv, ProfileDiv, WalletDiv, ProfileIcon, ProfileButton } from "./styles/global";
import { useEffect, useState } from "react";

function App() {
  const [isPlayer, setIsPlayer] = useState(false);
  const [game, setGame] = useState(null);
  const [account, setAccount] = useState();
  
  const getAptosWallet = () => {
    if ('aptos' in window) {
      return window.aptos;
    } else {
      window.open('https://petra.app/', `_blank`);
    }
  };

  useEffect(() => {
    async function connectWallet() {
      const wallet = getAptosWallet();
      try {
        const account = await wallet.account();
        setAccount(account);
        console.log(account);
      } catch (error) {
        console.log(error);
      }
    }
    connectWallet();
  }, []);

  const clickItem = (game) => {
    if (game == null) {
      setIsPlayer(false)
    } else {
      setIsPlayer(true)
      setGame(game)
    }
  }

  const connect = async ()=> {
    const wallet = getAptosWallet();
    try {
      const account = await wallet.connect();
      setAccount(account);
      console.log(account);
    } catch (error) {
      console.log(error);
    }
  }

  const profile = async () => {
    const wallet = getAptosWallet(); // see "Connecting"

    // Example Transaction, following an [EntryFunctionPayload](https://github.com/aptos-labs/aptos-core/blob/main/ecosystem/typescript/sdk/src/generated/models/EntryFunctionPayload.ts#L8-L21)
    const transaction = {
      arguments: ["Gamestation", "https://cdn-icons-png.flaticon.com/512/64/64572.png"],
      function: '0x783672e07e1faf708b47588d32c1c1ea423395ca954aa61a1bf0f49efb746d2d::gamestation_profile::set_profile',
      type: 'entry_function_payload',
      type_arguments: [],
    };

    try {
      const pendingTransaction = await window.aptos.signAndSubmitTransaction(transaction);

      // In most cases a dApp will want to wait for the transaction, in these cases you can use the typescript sdk
      const client = new AptosClient('https://fullnode.testnet.aptoslabs.com');
      const txn = await client.waitForTransactionWithResult(
        pendingTransaction.hash,
      );
      alert(txn);
    } catch (error) {
      // see "Errors"
    }
  }

  return (
    <>
      <GlobalStyles />
      <HeaderDiv>
      <div><h1>Gamestation</h1>
        <small>by Cosmostation</small></div>
        <div>
          {account && <div><WalletDiv><ProfileDiv><ProfileIcon src="https://cdn-icons-png.flaticon.com/512/64/64572.png"/>&nbsp;Dragon <b>3,000 GST<ProfileButton onClick={() => profile()}><small>Set Profile</small> </ProfileButton></b></ProfileDiv>{account.address}</WalletDiv></div>}
          {!account && <ConnectButton onClick={() => connect()}> Connect </ConnectButton>}
        </div>
      </HeaderDiv>
      {!isPlayer && <JobsList clickItem={clickItem}/>}
      {isPlayer && <GamePlayer game={game} clickItem={clickItem}/>}
    </>
  );
}

export default App;
