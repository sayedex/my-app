import logo from './logo.svg';
import './App.css';
import web3 from "web3"
import React,{useEffect} from 'react';
import { html } from 'common-tags';


function App() {
const providerurl  = process.env.PROVIDER_URL  || "http://localhost:8545"
// useEffect(() => {
// const Web3 = new web3(providerurl);
// let provider = window.ethereum;
// if( typeof provider !=="undefined"){
// provider.request({
// method:"eth_requestAccounts"

// }).then(
//   account=>{
//     console.log(account);
//     alert(account);
//   }
// )
// }

// },[])
let html  = `<div>
Hello Sayed

</div>`


const Connet_function = ()=>{
  const hasan = document.querySelector("hasan");

const Web3  = new web3(providerurl);
let provider = window.ethereum;
if(typeof provider !=="undefined"){
provider.request(
  {
    method:"eth_requestAccounts"
  }
).then(
  account=>{
    // alert(account)
console.log(account);
document.write(html)

  }

)

}


}


  return (
    <div className="App">
<h1>we are goinng to connet the metamask to learn web3 deply</h1>
<div className="window_connet">

<button onClick={Connet_function}>Connet</button>
<div className="hasan"></div>

</div>
    </div>
  );
}

export default App;
