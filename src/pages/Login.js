import '../CSS files/Login.css';

const Login = () => {
    return (
        <div className="container">
            <div className="container-child">
                <h2>Login</h2>
            <label htmlFor="uname">Username</label><br />
            <input placeholder="Username"/>
            <br />
            <label htmlFor="pass">Password</label><br />
            <input placeholder="Password" type="password"/>
            <br />
            <button type="submit">Login</button>
            <button type="button">Sign Up</button>
            <br />
            <p>Forget password? Click here <a href="#">to reset password</a></p>
            </div>
        </div>
    )
  };
  
  export default Login;