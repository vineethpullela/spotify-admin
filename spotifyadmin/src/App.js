import { Routes,Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import AddSong from "./pages/AddSong"
import AddAlbum from "./pages/AddAlbum"
import ListSong from "./pages/ListSong"
import ListAlbum from "./pages/ListAlbum"
import "./App.css"
import SideBar from "./components/SideBar"
import NavBar from "./components/NavBar"

export const url="https://spotify-backend-maog.onrender.com"


const App=()=>{
  return(
    <div className="App-container">
     <ToastContainer/>
      <SideBar/>
      <div className="app-sub-container">
        <NavBar/>
        <div className="app-routes-container">
          <Routes>
            <Route path="/add-song" Component={AddSong}/>
            <Route path="/add-album" Component={AddAlbum}/>
            <Route path="/list-song" Component={ListSong}/>
            <Route path="/list-album" Component={ListAlbum}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}



export default App