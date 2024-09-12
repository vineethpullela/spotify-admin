import "./index.css"
import {assets} from "../../assets/assets"
import { NavLink } from "react-router-dom"

const SideBar=()=>{
    return(
        <div className="sbr-container">
            <img src={assets.logo} className="sbr-img-bg" alt=""/>
            <img src={assets.logo_small} className="sbr-img-sm" alt=""/>
            <div className="sbr-tabs-container">
                <NavLink to="/add-song" className="sbr-tab-container">
                    <img src={assets.add_song} className="sbr-tab-img" alt=""/>
                    <p className="sbr-tab-p">
                        Add Song
                    </p>
                </NavLink>
                <NavLink  to="/list-song" className="sbr-tab-container">
                    <img src={assets.song_icon} className="sbr-tab-img" alt=""/>
                    <p className="sbr-tab-p">
                       List Song
                    </p>
                </NavLink>
                <NavLink to="/add-album" className="sbr-tab-container">
                    <img src={assets.add_album} className="sbr-tab-img" alt=""/>
                    <p className="sbr-tab-p">
                        Add Album
                    </p>
                </NavLink>
                <NavLink to="/list-album" className="sbr-tab-container">
                    <img src={assets.album_icon} className="sbr-tab-img" alt=""/>
                    <p className="sbr-tab-p">
                        List Album
                    </p>
                </NavLink>

            </div>
        </div>
    )
}


export default SideBar