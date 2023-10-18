import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
            <label>Email</label>
            <input type="text" className="inputTitle" placeholder="Enter your email....."/>
            <label>Password</label>
            <input type="password" className="inputTitle" placeholder="Enter your Password"/>
            <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton">
          <a href="/register">Register</a>
        </button>
    </div>
  )
}
