import { CloseButton, Icon2, GamePlayerContainer, Rank, GamePlayerIframe, GamePlayerInfo } from "./styles";
import {useEffect,useState} from "react"

export function GamePlayer({game, clickItem}) {
  const [account, setAccount] = useState();
  
  const getAptosWallet = () => {
    if ('aptos' in window) {
      return window.aptos;
    } else {
      window.open('https://petra.app/', `_blank`);
    }
  };

  const registerScore = async (score) => {
    const wallet = getAptosWallet(); // see "Connecting"

    // Example Transaction, following an [EntryFunctionPayload](https://github.com/aptos-labs/aptos-core/blob/main/ecosystem/typescript/sdk/src/generated/models/EntryFunctionPayload.ts#L8-L21)
    const transaction = {
      arguments: ["0x58b5e58c4d149442b1920f75c2451c596c241bd3441cda3e5b05f12409054063", score],
      function: '0x1::coin::transfer',
      type: 'entry_function_payload',
      type_arguments: ['0x1::aptos_coin::AptosCoin'],
    };

    try {
      const pendingTransaction = await window.aptos.signAndSubmitTransaction(transaction);

      // In most cases a dApp will want to wait for the transaction, in these cases you can use the typescript sdk
      const client = new AptosClient('https://devnet.aptoslabs.com');
      const txn = await client.waitForTransactionWithResult(
        pendingTransaction.hash,
      );
      alert(txn);
    } catch (error) {
      // see "Errors"
    }
  }

  useEffect(() => {
    async function connectWallet() {
      const wallet = getAptosWallet();
      try {
        const account = await wallet.account();
        setAccount(account);
        window.addEventListener('message', (e) => {
          if (e.data.type == "gamecenter-set-score") {
            registerScore(e.data.data);
          } else if (e.data.type == "gamecenter-buy-item") {
            registerScore(e.data.data);
          } else if (e.data.type == "gamecenter-request-data") { 
            document.querySelector('iframe').contentWindow.postMessage({type:"gamecenter-response-data", data:{account:account, items:[], score:0}}, '*' );
          }
        }, true)
      } catch (error) {
        console.log(error);
      }
    }
    connectWallet();
  }, []);

  return (
    <GamePlayerContainer>
      <div className="left">
        <GamePlayerIframe src={game.html_url} />
      </div>
      <GamePlayerInfo className="right">
        <div style={{display:"flex",justifyContent: "right"}}><CloseButton onClick={() => clickItem(null)}>&nbsp;X&nbsp;</CloseButton></div>
        <h1>{game.title}</h1>
        <br/>
        <Icon2 src={game.image} width="100px" height="100px"/>
        <p>{game.body}</p>
        <br/>-------------------------------------------------------<br/><br/>
        <h3>Top Ranking</h3>
        <ul>
          <li><Rank>1</Rank>&nbsp;Seoul : 3</li>
          <li><Rank>2</Rank>&nbsp;Aptos : 2</li>
          <li><Rank>3</Rank>&nbsp;Dragon : 2</li>
          <li><Rank>4</Rank>&nbsp;01 : 2</li>
          <li><Rank>5</Rank>&nbsp;Gorani : 1</li>
        </ul>
        <br/>-------------------------------------------------------<br/><br/>
        <h3>Play</h3>
        <ul>
          <li>Total play : 110,311</li>
          <li>Today : 3,812</li>
        </ul>
        <br/>-------------------------------------------------------<br/><br/>
      </GamePlayerInfo>
    </GamePlayerContainer>
  );
}
