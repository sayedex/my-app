import logo from './logo.svg';
import './App.css';
import React,{useEffect, useState} from 'react';
import Sidebar from "./Sidebar"
import Chat from "./Chat";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import Login from "./Login"
import { Switch, Route } from "react-router-dom";
import { useStateValue } from './StateProvider';
import {actionTypes} from "./Reducer"
// development Repo
// react
// firebase real time detabase
//meraral ui for styling 
//react router
//react contextApi


function App() {
  const [{user},dispatch] = useStateValue();
// const [user,setuser] = useState(true);
return (
<div className="app">
<div className="app_body">
  {!user ?( <Login/>) :(

<Router>
   <Sidebar/>
   <Switch>

     <Route exact path="/rooms/:roomId">
 <Chat/>
     </Route>
     <Route path="/">
     <Chat/>a
     </Route>

   </Switch>
 </Router>

  ) }
   

 </div>




</div>


)

}

export default App;
