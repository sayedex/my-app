import React, { useState,useEffect } from "react"
import {Avatar,IconButton} from "@material-ui/core"
import AdjustIcon from '@mui/icons-material/Adjust';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';
import db from "./firebaseas"
import {useParams,Link} from "react-router-dom";
import {useStateValue} from './StateProvider'
import firebase from "firebase"
import { inputAdornmentClasses } from "@mui/material";
import ScrollableFeed from 'react-scrollable-feed'
import audio from "./button-3.mp3";


const Chat = ()=>{
    const chat_body = document.querySelector(".chat_body");
    const [sms,setsms] = useState([]);
    console.log(sms);
    const [{user},dispatch] = useStateValue();
    const [roomName,setroomname]= useState("");
    const {roomId} = useParams();
    const [input,setinput] = useState("");
console.log(user);
    useEffect(() => {
if(roomId){
db.collection('rooms')
.doc(roomId)
.onSnapshot(
(snap)=>setroomname(snap.data().name));


db.collection('rooms')
.doc(roomId)
.collection('massages')
.orderBy('timestamp','asc')
.onSnapshot((spanshot)=>setsms(spanshot.docs.map((doc)=>doc.data())))

}}, [roomId]);
const [seed,setseed] = useState("");
useEffect(() => {
    setseed(Math.floor(Math.random()*5000));
   }, []);


const sendmsg =(e)=>{
    e.preventDefault();

if(input==""){
    alert("type")
}else{
    new Audio(audio).play();
    db.collection('rooms').doc(roomId).collection('massages').add({
    massages:input,
    name:user.displayName,
    timestamp:firebase.firestore.FieldValue.serverTimestamp(),
     });
    setinput("");
}
}

return (

<div className="Chat_name">
<div className="chat_header">
<Avatar src={`https:avatars.dicebear.com/api/human/${seed}.svg`} />
<div className="chat_headerinfo">

<h3>{roomName}</h3>
<p>{new Date(sms[sms.length - 1]?.timestamp?.toDate()).toDateString()}</p>

</div>
<div className="chat_headerRight">
    <IconButton><AdjustIcon/></IconButton>
    <IconButton><AdjustIcon/></IconButton>    <IconButton><AdjustIcon/></IconButton>


</div>

</div>

<div className="chat_body">
{/* <ScrollableFeed className="off" > */}
    <ScrollableFeed className="off">
    {
        
sms.map((fullsms)=>(
<p className={`chat_sms ${fullsms.name===user.displayName && "chat_rcv"}` }>
    <span className="chat_name_"> ~ {fullsms.name}</span>
    {fullsms.massages}
<div className="timestap_chat">
{new Date(fullsms.timestamp?.toDate()).toLocaleTimeString()}
</div>
</p>

))

    }
    </ScrollableFeed>

{/* <p className={`chat_sms ${true && "chat_rcv"}` }>
    <span className="chat_name_">Sayed</span>
Hello Guys!!
<div className="timestap_chat">
3:00Am
</div>

</p> */}
</div>

<div className="chat_futter">
<SentimentSatisfiedAltIcon/>
<form>
<input required value={input} placeholder="Type Your sms" type="text" onChange={(e)=>{setinput(e.target.value)}}></input>
<button  onClick={sendmsg} type="submit"><IconButton><SendIcon/></IconButton></button>

</form>



</div>
</div>

)


}
export default Chat;