import { JobsList } from "./components/JobsList";
import { GamePlayer } from "./components/GamePlayer";
import { ConnectButton, GlobalStyles, HeaderDiv, ProfileDiv, WalletDiv, ProfileIcon } from "./styles/global";
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
      const account = await wallet.account();
      setAccount(account);
      console.log(account);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <GlobalStyles />
      <HeaderDiv>
      <div><h1>Gamestation</h1>
        <small>by Cosmostation</small></div>
        <div>
          {account && <div><WalletDiv><ProfileDiv><ProfileIcon src="https://cdn-icons-png.flaticon.com/512/64/64572.png"/>&nbsp;Dragon <b>3,000 GST</b></ProfileDiv>{account.address}</WalletDiv></div>}
          {!account && <ConnectButton onClick={() => connect()}> Connect </ConnectButton>}
        </div>
      </HeaderDiv>
      {!isPlayer && <JobsList clickItem={clickItem}/>}
      {isPlayer && <GamePlayer game={game} clickItem={clickItem}/>}
    </>
  );
}

export default App;
