import { useEffect, useState } from "react"
import {ColorRing} from "react-loader-spinner"
import { assets } from "../../assets/assets"
import "./index.css"
import  axios from "axios"
import { url } from "../../App"
import { toast } from "react-toastify"


const AddSong=()=>{
const [image,setImage]=useState(false);
const [song,setSong]=useState(false);
const [name,setName]=useState("");
const [desc,setDesc]=useState("");
const [album,setAlbum]=useState("none");
const [loading,setLoading]=useState(false);
const [albumData,setAlbumData]=useState([]);

const onSubmitHandler=async(e)=>{
    e.preventDefault();
    setLoading(true)
try{
    const formData=new FormData();
    formData.append("name",name);
    formData.append("desc",desc);
    formData.append("image",image);
    formData.append("audio",song);
    formData.append("album",album);

    const response=await axios.post(`${url}/api/song/add`,formData)
if(response.data.success){
    toast.success("Song Added");
    setName("")
    setDesc("")
    setAlbum("none")
    setImage(false)
    setSong(false)
}else{
    toast.error("Something went wrong")
}
}catch(error){
toast.error("Error occured")
}
setLoading(false)
}

const loadAlbumData=async()=>{
    try{
        const response=await axios.get(`${url}/api/album/list`);
        if(response.data.success){
            setAlbumData(response.data.albums)
        }else{
            alert("unable to load albums data")
        }

    }catch(error){
toast.error("Error Occured")
    }
}


useEffect(()=>{
loadAlbumData()
},[])


    return loading? (<div className="loading-container">
      
<ColorRing visible={true} height="80" width="80"/>
       

    </div>):(<form onSubmit={onSubmitHandler} className="addsong-container">

        <div className="addsong-sub-container">
            <div className="addsong-flex-container">
                <p>Upload song</p>
                <input onChange={(e)=>setSong(e.target.files[0])} type="file" id="song" accept="audio/*" hidden/>
                <label htmlFor="song">
                    <img src={song?assets.upload_added:assets.upload_song} className="upload-img" alt=""/>
                </label>
            </div>
            <div className="addsong-flex-container">
                <p>Upload Image</p>
                <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" accept="image/*" hidden/>
                <label htmlFor="image">
                    <img src={image?URL.createObjectURL(image):assets.upload_area} className="upload-img" alt=""/>
                </label>
            </div>
        </div>
        <div className="form-inputs-container">
<p>Song name</p>
<input onChange={(e)=>setName(e.target.value)} value={name} type="text" className="input" placeholder="Type Here" required/>
        </div>
        <div className="form-inputs-container">
<p>Song description</p>
<input onChange={(e)=>setDesc(e.target.value)} value={desc} type="text" className="input" placeholder="Type Here" required/>
        </div>
        <div className="addalbum-container">
            <p>Album</p>
            <select onChange={(e)=>setAlbum(e.target.value)} defaultValue={album} className="album-select-container">
               {albumData.map((album,index)=>(<option key={index} value={album.name}>{album.name}</option>))} 
            </select>
        </div>
        <button type="submit" className="album-submit-button">Add</button>
    </form>)
}

export default AddSong