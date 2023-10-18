import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">About Me</span>
            <img
            src="https://images.pexels.com/photos/4064432/pexels-photo-4064432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
         />
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium, et numquam unde perspiciatis libero tempora.  </p>
     </div>
     <div className="sidebarItem">
        <span className="sidebarTitle">Category</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Cinema</li>
            <li className="sidebarListItem">Tech</li>
           
        </ul>
     </div>
     <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us </span>
     </div>
     <div className="sidebarSocial">
        <i class="sidebarIcon ri-instagram-fill"></i>
        <i class="sidebarIcon ri-facebook-circle-fill"></i>
        <i class=" sidebarIcon ri-youtube-fill"></i>
        <i class="sidebarIcon ri-pinterest-fill"></i>
     </div>
    </div>
  )
}
