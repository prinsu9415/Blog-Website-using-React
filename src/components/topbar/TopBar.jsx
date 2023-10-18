
import "./topbar.css"
export default function TopBar() {
  const user = false;
  return (
    <div className='top'>
  <div className="icon">
  <i class="ri-instagram-fill"></i>
  <i class="ri-facebook-circle-fill"></i>
  <i class="ri-youtube-fill"></i>
  <i class="ri-pinterest-fill"></i>
  </div>
  <div className="list">
    <li><a href="/">Home</a></li>
    <li><a href="/">About</a></li>
    <li><a href="/">Contact</a></li>
    <li><a href="/write">Write</a></li>
    <li><a href="/">
      {user && "Logout"}</a></li>
  </div>
  <div className="profile">
   {
    user ? (
  <img className="profile-img" src="./images/profile.jpg"></img>
) : (
  <>
  <li className="lastLink"><a href="/Register">Register</a></li>
  <li className="lastLink"><a href="/login">Login</a></li>
  </>
)
   } 
    
    <i class="ri-search-line"></i>
  </div>

    </div>
  )
}
