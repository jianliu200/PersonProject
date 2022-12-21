import React from "react"
import {Outlet,Link,Routes, Route} from "react-router-dom"
import FindArtist from "./theme/artist"
import Lofi from "./theme/lofi"
import Party from "./theme/party"
import Rap from "./theme/rap"
import Home from "./home"
import "./css/navbar.css"
function Navbar(){
    

return(
    <>
    <nav class = "bar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/artist">Artist</Link>
          </li>
          <li>
            <Link to="/lofi">Lofi</Link>
          </li>
          <li>
            <Link to="/party">Party</Link>
          </li>
          <li>
            <Link to="/rap">Rap</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    <Routes>
        <Route exact path ="/home" element={<Home/>}></Route>
        <Route exact path ="/artist" element={<FindArtist/>}></Route>
        <Route exact path ="/lofi" element={<Lofi/>}></Route>
        <Route exact path ="/party" element={<Party/>}></Route>
        <Route exact path ="/rap" element={<Rap/>}></Route>
    </Routes>
    <div>Howdy</div></>
)

}
export default Navbar