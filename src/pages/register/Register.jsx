import "./register.css"

export default function Register() {
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm">
        <label>Username</label>
            <input type="text" className="inputTitle" placeholder="Enter your username....."/>
            <label>Email</label>
            <input type="text" className="inputTitle" placeholder="Enter your email....."/>
            <label>Password</label>
            <input type="password" className="inputTitle" placeholder="Enter your Password"/>
            <button className="registerButton">Register</button>
        </form>
        <button className="registerLoginButton">
        <a href="/login">Login</a>
        </button>
    </div>
  )
}
