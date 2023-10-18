import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrap">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img 
            src='https://images.pexels.com/photos/23547/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
            <label htmlFor="fileInput">
            <i class=" settingsIcon ri-shield-user-line"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
         
          </div>
          <label>Username</label>
         <input type="text" placeholder="Prince"/>
         <label>Email</label>
         <input type="email" placeholder="prince@gmail.com"/>
         <label>Password</label>
         <input type="password" placeholder="......"/>
         <button className="settingsSubmit">Update</button>
        </form>
       
      </div>
      <Sidebar/>
    </div>
  )
}
