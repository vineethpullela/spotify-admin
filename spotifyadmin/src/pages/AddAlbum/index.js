import { useState } from "react"
import { assets } from "../../assets/assets"
import { ColorRing } from "react-loader-spinner"
import "./index.css"
import axios from "axios"
import { url } from "../../App"
import { toast } from "react-toastify"

const AddAlbum=()=>{

const [image,setImage]=useState(false)
const [color,setColor]=useState("#fffff");
const [name,setName]=useState("");
const [desc,setDesc]=useState("");
const [loading,setLoading]=useState(false);

const onSubmitHandler=async(e)=>{
e.preventDefault()
setLoading(true)

try{
    const formData=new FormData();
    formData.append("name",name)
    formData.append("desc",desc)
    formData.append("image",image)
    formData.append("bgColor",color)

    const response=await axios.post(`${url}/api/album/add`,formData)
    if(response.data.success){
       toast.success("Album Added");
        setDesc("")
        setColor("#fffff")
        setImage(false)
        setName("")
    }else{
        toast.error("Something went wrong")
    }


}catch(error){
  toast.error("Error Occured")
}

setLoading(false)
}


    return loading?(<div className="loading-container">
      
        <ColorRing visible={true} height="80" width="80"/>
               
        
            </div>) :(

        <form onSubmit={onSubmitHandler} className="addalbum-container">
            <div className="addalbum-sub-container">
            <p>Upload Image</p>
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" accept="image/*" hidden/>
            <label htmlFor="image">
                <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" className="addalbum-img"/>
            </label>
            </div>
            <div className="addalbum-inputs-container">
                <p>Album name</p>
                <input onChange={(e)=>setName(e.target.value)} value={name} className="addalbum-input" type="text" placeholder="Type here"/>
            </div>
            <div className="addalbum-inputs-container">
                <p>Album Description</p>
                <input onChange={(e)=>setDesc(e.target.value)} value={desc} className="addalbum-input" type="text" placeholder="Type here"/>
            </div>


            <div className="addalbum-color-container">
                <p>Background color</p>
                <input onChange={(e)=>setColor(e.target.value)} value={color} type="color"/>
            </div>
            <button type="submit" className="addalbum-submit-btn">ADD</button>
        </form>
    )
}


export default AddAlbum