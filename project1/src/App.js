import React from "react"
import "./css/bright.css"
import { useEffect,useState } from "react";
import Home from "./home"
function App() {
  const[token,setToken] = useState("")
  useEffect(()=>{
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if(!token && hash){
      token = hash.substring(1).split("&").find(elem=>elem.startsWith("access_token")).split("=")[1];
      window.location.hash="";
      window.localStorage.setItem("token",token);
      
    }

    setToken(token)
    //console.log(token)
    


  },[])
  const CLIENT_ID = '76660fc079df437cb78d97cbf95ef26b';
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
  const RESPONSE_TYPE = "token"


  const logout = () =>{
    setToken("");
    window.localStorage.removeItem("token")
  }
  
  
  return (
    <>
    <body>
      <h1 class="Title">Howdy, welcome to John's thing for the thingy</h1>
      {!token ?
      <h3 class = "link"><a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to your Account</a></h3>
      :
      <>
      <Home />
      <button onClick={logout}>Logout</button>
      </>      
      }




    </body>
    </>

  );
}

export default App;
