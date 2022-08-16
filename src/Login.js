// import axios from "axios";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "./context/AuthProvider";
import { Navigate } from "react-router-dom";
import styled from "styled-components";

import axios from "./api/axios";
import Visit from "./components/Visit";
import Homepage from "./components/Homepage";
const LOGIN_URL = "/token/";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,

        { username: user, password: pwd }
      );
      console.log({ response });
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.access;
      setAuth({ user, pwd, accessToken });
      localStorage.setItem("accessToken", accessToken);
      setUser("");
      setPwd("");
      setSuccess(true);

      // <Redirect to="/visit" />;
      //redirect to the visit page /visit
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
        // <Navigate to={"/home/"} />;
        // redirect to the home page /home
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <Visit />
      ) : (
        <StyledSection>
          <p ref={errRef}>{errMsg}</p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <br />
            <input
              type="text"
              id="username"
              ref={userRef}
              // autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
            <br />
            <label htmlFor="password">Password:</label>
            <br />
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <br />
            <button>Sign In</button>
          </form>
        </StyledSection>
      )}
    </>
  );
};

// FORM STYLE
const StyledSection = styled.section`
  width: 100vw;
  margin: 100px 20vw;
  h1 {
    margin-bottom: 20px;
    line-height: 28px;
    text-align: left;
    color: #4a5c86;
  }
  input {
    width: 50%;
    margin: 20px;
  }
  button {
    background: linear-gradient(to bottom right, #ef4765, #ff9a5a);
    border: 0;
    border-radius: 12px;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-family: -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial,
      sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 2.5;
    outline: transparent;
    padding: 0 1rem;
    text-align: center;
    text-decoration: none;
    transition: box-shadow 0.2s ease-in-out;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
  }

  .button-62:not([disabled]):focus {
    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
      -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
      0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
  }

  .button-62:not([disabled]):hover {
    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
      -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
      0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
  }
`;

export default Login;
