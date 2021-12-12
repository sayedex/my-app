import React, { useState ,useEffect} from "react"
import {Avatar} from "@material-ui/core"
import db from "./firebaseas"
import {useParams,Link} from "react-router-dom";
const Sidebarchat = ({addNewchat,id,name})=>{

    const [seed,setseed] = useState("");
    const [sms,setsms ] = useState("");
    console.log(sms);
    useEffect(() => {
 setseed(Math.floor(Math.random()*5000));
}, []);
useEffect(() => {
   
if(id){

    db.collection("rooms").doc(id).collection("massages")
    .orderBy("timestamp","desc")
    .onSnapshot((spanshot)=>setsms(spanshot.docs.map((doc)=>doc.data())));
}


}, []);

const createchat = ()=>{
const roomname = prompt("Plz enter your chat name");
//clever stuff
if(roomname){
db.collection("rooms").add({
    name:roomname,
})
}
}
    return !addNewchat ? (
<Link to={`/rooms/${id}`} style={{ textDecoration: 'none' }}>
<div className="sidebarchata">
 <Avatar src={`https:avatars.dicebear.com/api/human/${seed}.svg`} />
<div className="sidebarChat_info">
<h2>{name}</h2>
<p>{sms[0]?.massages}...</p>

</div>

     </div>
</Link>

//      <div className="sidebarchata">
//  <Avatar src={`https:avatars.dicebear.com/api/human/${seed}.svg`} />
// <div className="sidebarChat_info">
// <h2>{name}</h2>
// <p>Last sms....</p>

// </div>

//      </div>
    ):(
    <div onClick={createchat} className="sidebarchata_add">

<h2>Add New Group</h2>

    </div>
)
};
export default Sidebarchat;