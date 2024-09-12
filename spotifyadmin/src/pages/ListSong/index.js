import { useEffect, useState } from "react"
import "./index.css"
import { url } from "../../App"
import axios from "axios"
import { toast } from "react-toastify"


const ListSong=()=>{
    const [data,setdata]=useState([])

    const fetchSongs=async()=>{
        try{
            const response=await axios.get(`${url}/api/song/list`);
            if(response.data.success){
                setdata(response.data.songs)
            }
        }catch(error){
toast.error("Error occured")
        }
    }

    const removeSong=async(id)=>{
        try{
            const response=await axios.post(`${url}/api/song/remove`,{id});
            if(response.data.success){
                toast.success(response.data.message)
                await fetchSongs()
            }
        }catch(error){
toast.error("Error occured")
        }
    }

    useEffect(()=>{
        fetchSongs();

    },[])
    return(
        <div>
            <p className="songs-list-name">All Songs List</p>
            <br/>
            <div>
                <div className="songs-list-container">
                <b>Image</b>
                <b>Name</b>
                <b>Album</b>
                <b>Duration</b>
                <b>Action</b>
                </div>
                {data.map((song,index)=>{
                    return(
                        <div key={index} className="song-container">
                            <img className="song-img" src={song.image} alt=""/>
                            <p>{song.name}</p>
                            <p>{song.album}</p>
                            <p>{song.duration}</p>
                            <p className="remove" onClick={()=>removeSong(song._id)}>x</p>
                            </div>

                    )
                })}
            </div>
        </div>
    )
}


export default ListSong