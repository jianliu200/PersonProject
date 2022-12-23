import React from "react"
import {useState,useEffect} from 'react'
import axios from 'axios'
import "../css/album.css"

function Album(){
    const [searchKey, setSearchKey] = useState("")
    let token = window.localStorage.getItem("token")
    const [album, setAlbum] = useState([])
    const [track, setTrack] = useState([])


    const searchAlbum = async(e)=>{
        console.log("it made it to album")
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "album"
            }
        })
        console.log(data.albums.items[0])
        let id = data.albums.items[0].id
        setAlbum(data.albums.items[0])

        console.log(`https://api.spotify.com/v1/albums/${id}/tracks`)
        console.log(id)
        await axios.get(`https://api.spotify.com/v1/albums/${id}/tracks`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }).then((result)=>{
            console.log("It has made it into the result page")
            console.log(result)
            setTrack(result.data.items)
        })
        
               
        
    }

    const renderAlbum=()=>{
        if(album.length===0){
            return(
                <div></div>
            )
        }
        return(
            <><div class="album" key={album.id}>
                {album.images.length ? <img width={"100%"} src={album.images[0].url} alt="" /> : <div>No Image</div>}
                <br/>
                {album.name}
                <br/>
                {album.artists[0].name}
                <br/>
                Album release: {album.release_date}
                <br/>
                <a href={album.uri}> Listen on Spotify </a>

            </div><div>Howdy</div></>
        )
    }

    const renderTrack=()=>{
        if(track.length===0){
            return(
                <div></div>
            )

        }
        return track.map(track=>(
            <div class="track">
                {track.name}
                <br/>
                Explicit:{track.explicit}
                <br/>
                Preview to the track: 
                <br/>
                <audio controls>
                    <source src={track.preview_url}/>
                </audio>
            </div>

        ))
    }

    return(
        <>
        <h1 class="header">Check Album Information</h1>
        <center><form class = "form" onSubmit={searchAlbum}>
            <input type="text" onChange={e => setSearchKey(e.target.value)} />
            <button type={"submit"}>Search</button>
        </form></center>
        {renderAlbum()}
        {renderTrack()}
        </>
    )
}

export default Album