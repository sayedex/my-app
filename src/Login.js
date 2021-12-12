import React from "react"
import { auth, provider} from "./firebaseas"
import { useStateValue } from "./StateProvider"
import {actionTypes} from "./Reducer"
const Login = ()=>{
const [{},dispatch] = useStateValue();


const Signin  = ()=>{

auth.signInWithPopup(provider)
.then((result)=> {
    dispatch({
        type:actionTypes.SET_USER,
        user:result.user,
    
    });
})
.catch((error)=> alert(error.massage));

}

return (
<div className="login">
<div className="login_cointainer">
<h2>Sign in to 
    SayedEx<br/> WhatsApp Clone</h2>
<button onClick={Signin}>Sign in</button>

</div>
</div>
)



}
export default Login;