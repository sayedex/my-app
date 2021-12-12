import React, { useState,useEffect } from "react"
 import {Avatar,IconButton} from "@material-ui/core"
 import AdjustIcon from '@mui/icons-material/Adjust';
 import ChatIcon from '@mui/icons-material/Chat';
 import MoreVertIcon from '@mui/icons-material/MoreVert';
 import SearchIcon from '@mui/icons-material/Search';
import Sidebarchat from "./SideChat";import Chat from "./Chat";
import {useStateValue} from "./StateProvider"
// import { spanshot } from "firebase/app";
// import {onSnapshot } from "firebase/firestore";
import db from "./firebaseas"
import { Unsubscribe } from "@mui/icons-material";
 const Sidebar  = (addNewchat)=>{




const [{user},dispatch] = useStateValue();
const [rooms,setrooms ] = useState([]);
// console.log(db.collection("rooms").onSnapshot(span=>(
//     setrooms(span.docs.map(doc=> ({
// id:doc.id,
// deta:doc.deta(),
//     })))
// )))
console.log(db.collection("rooms"))

useEffect(() => {
    db.collection("rooms").onSnapshot((span)=>(
          setrooms(span.docs.map((doc)=> ({
     id:doc.id,
       deta:doc.data(),
          })))
   ));

   return () =>{
       Unsubscribe();
   }

}, []);


return (

<div className="sidebar">
 
<div className='sidebar_header'>
 <Avatar src={user?.photoURL}/> 
<div className="sidebar_headerright">
    <IconButton> <AdjustIcon/></IconButton>
    <IconButton><ChatIcon/> </IconButton>
    <IconButton><MoreVertIcon/></IconButton>

</div>
</div>
<div className="siderbar_serch">
    <div className="sidebarserch_container">
    <SearchIcon/>
<input type="text" placeholder="type Somthing" />

    </div>


</div>
<div className="siderbar_chat">

<Sidebarchat addNewchat={addNewchat}/>
{ 
   rooms.map((room)=>(
<Sidebarchat key={room.id} id={room.id} name={room.deta.name}/>

   )) 
} 

</div>
</div>


)



}
export default Sidebar;
