import { useState } from "react";
import axios from "axios";
import './Login.css'
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [isSignup, setIsSignup] = useState(false);

  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const adminEmail = "admin123@gmail.com"

  // LOGIN                                                                  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://street-style-shop-server.onrender.com/api/user/login", {
        email,
        password,
      });
      const userEmail = response.data.user.email
      const adminEmail="admin123@gmail.com"


    
      if (userEmail === adminEmail) {
        window.location.href = "http://localhost:5173/";
      } else {
        navigate('/home')
      }
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  // SIGN UP 
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://street-style-shop-server.onrender.com/api/user/signup", {
        username,
        phone,
        email,
        password,
      });

      navigate("/home");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="login-container" style={{ width: 320, margin: "80px auto" }}>
      <h2>{isSignup ? "Sign Up" : "Login"}</h2>

      <form onSubmit={isSignup ? handleSignup : handleLogin}>
        {isSignup && (
          <>
            <input
              type="text"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br /><br />

            <input
              type="tel"
              placeholder="Phone Number"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <br /><br />
          </>
        )}

        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />

        <button type="submit">
          {isSignup ? "Sign Up" : "Login"}
        </button>
      </form>

      <p style={{ marginTop: 10 }}>
        {isSignup ? "Already have an account?" : "New user?"}
        <span
          onClick={() => setIsSignup(!isSignup)}
          style={{ color: "blue", cursor: "pointer", marginLeft: 5 }}
        >
          {isSignup ? "Login" : "Sign Up"}
        </span>
      </p>
    </div>
  );
}

export default Login;
