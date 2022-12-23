import React from "react"
import {Outlet,Link,Routes, Route} from "react-router-dom"
import FindArtist from "./theme/artist"
import Album from "./theme/album"
import User from "./theme/user"
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
            <Link to="/album">Album</Link>
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
        <Route exact path ="/album" element={<Album/>}></Route>
        <Route exact path ="/user" element={<User/>}></Route>
        <Route exact path ="/rap" element={<Rap/>}></Route>
    </Routes>
    <div>Howdy</div></>
)

}
export default Navbar