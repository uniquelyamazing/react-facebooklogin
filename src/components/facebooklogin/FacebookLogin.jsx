import './FacebookLogin.css'

const FacebookLogin = () => {
  return (
    <div className="section">
      <div className="d1">
        <h1>Facebook</h1>
        <p className="p1">
          Facebook helps you connect and share
          <br />
          with people in your life
        </p>
      </div>
      <div className="d2">
        <div className="box">
          <input type="text" placeholder="Email address or phone number" id="email" />
          <input type="password" placeholder="Password" id="password" />
          <button>Login</button>
          <p>Forgotten password?</p>
          <hr />
          <button className="btn">
            <a href="/facebookform.html">Create new account</a>
          </button>
        </div>
        <p>Create a Page for a celebrity, brand or business</p>
      </div>
    </div>
  );
}

export default FacebookLogin;
