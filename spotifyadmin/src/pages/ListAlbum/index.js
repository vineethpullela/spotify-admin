import { useEffect, useState } from "react"
import "./index.css"
import axios from "axios";
import { url } from "../../App";
import { toast } from "react-toastify";

const ListAlbum=()=>{
    const [data,setdata]=useState([]);

const fetchAlbums=async()=>{
    try{

        const response=await axios.get(`${url}/api/album/list`);
        if(response.data.success){
            setdata(response.data.albums)
        }

    }catch(error){
toast.error("error occured")
    }
}

const removeAlbum=async(id)=>{
    try{
        const response=await axios.post(`${url}/api/album/remove`,{id});
        if(response.data.success){
            toast.success(response.data.message)
            await fetchAlbums()
        }
    }catch(error){
toast.error("Error occured")
    }
}

useEffect(()=>{
fetchAlbums()
},[])

    return( <div>
        <p>All Albums List</p>
        <br/>
        <div>
            <div className="album-list-container">
            <b>Image</b>
            <b>Name</b>
            <b>Description</b>
            <b>Album Color</b>
            <b>Action</b>
            </div>
            {data.map((album,index)=>{
                return(
                    <div key={index} className="album-container">
                        <img className="album-img" src={album.image} alt=""/>
                        <p>{album.name}</p>
                        <p>{album.desc}</p>
                        <input type="color" value={album.bgColor}/>
                        <p className="remove" onClick={()=>removeAlbum(album._id)}>x</p>
                        </div>

                )
            })}
        </div>
    </div>)
}

export default ListAlbum