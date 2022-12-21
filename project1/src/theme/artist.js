import React from 'react'
import "../css/indie.css"
import axios from "axios"
import {useState} from 'react'
function FindArtist(){
    const[searchKey,setSearchKey] = useState("");
    let token = window.localStorage.getItem("token")
    const [artists, setArtists] = useState([])
    const [album,setAlbum] = useState([])
    const [id,setId] = useState("")

    // const searchArtists = async (e) => {
    //     console.log("it made it to search artist")
    //     e.preventDefault()
    //     const {data} = await axios.get("https://api.spotify.com/v1/search", {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         },
    //         params: {
    //             q: searchKey,
    //             type: "artist"
    //         }
    //     })
    //     console.log(data.artists.items[0].id)
    //     setId(data.artists.items[0].id)
    //     setArtists(data.artists.items) 
    //     searchAlbum();       
    // }
    // const searchAlbum = async() =>{
    //     console.log("Made it into the search Album")
    //     console.log(token)
    //     console.log(id)
    //     const {data} = await axios.get(`https://api.spotify.com/v1/artists/${id}/albums`, {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         },
    //     })
    //     console.log("Did this have any data",data)
    // }

    const searchArtists = async (e) => {
        console.log("it made it to search artist")
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "artist"
            }
        })
        //console.log(data.artists.items[0].id)
        
        setId(data.artists.items[0].id)
        setArtists(data.artists.items[0]) 
        console.log("This is the data: ",data.artists.items[0])
        let thisId = data.artists.items[0].id

        console.log("Made it into the search Album")
        console.log(token)
        console.log(thisId)
        console.log(`https://api.spotify.com/v1/artists/${thisId}/albums`)
        await axios.get(`https://api.spotify.com/v1/artists/${thisId}/albums`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params:{
                limit:"5"
            }
        }).then((result)=>{
            console.log(result.data.items);
            setAlbum(result.data.items);
        })
    }

    const renderArtists = () => {
        // console.log(artists.id)
        // console.log(artists.followers.total)
        if(artists.length===0){
            return(<div></div>)
        }
        return(
            <>
            <div class="artist" key={artists.id}>
                 {artists.images.length ? <img width={"100%"} src={artists.images[0].url} alt="" /> : <div>No Image</div>}
                 {artists.name}
                 <br></br>
                 popularity: {artists.popularity}
                 <br></br>
                 Followers: {artists.followers.total}

            </div>
            <div>Howdy</div></>
        )
        
    }
    const renderAlbum=()=>{
        if(album.length ===0){
            return(
                <div></div>
            )
        }
        
        return album.map(album=>(
            
            <div class="album">
                {album.images.length ?<img width={"50%"} src={album.images[0].url} alt="" /> : <div>No Image</div>}
                <br/>
                Album: {album.name}
                <br/>
                Date: {album.release_date}
                <br/>
                <a href={album.uri}> Listen on Spotify </a>

            </div>
        ))
    }
    return(
        <>
        <form onSubmit={searchArtists}>
            <input type="text" onChange={e => setSearchKey(e.target.value)}/>
            <button type={"submit"}>Search</button>
        </form>

        {renderArtists()}
        {renderAlbum()}
        </>
    )
}

export default FindArtist
