import { useRecoilState } from "recoil";
import { UserData, isAuth, userError } from "../state/state.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const go = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const [IsAuth, setIsAuth] = useRecoilState(isAuth);
  const [userData, setUserData] = useRecoilState(UserData);
  const [UserError, setUserError] = useRecoilState(userError);

  function handleInputChange(e) {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(e.target.name, e.target.value);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    await apiLogin({
      username: userData.username,
      password: userData.password,
    });
  }
  async function apiLogin(userData) {
    try {
      await axios.post("https://dummyjson.com/auth/login", userData);
      setIsAuth(true);
      setUserError("Success");

      localStorage.setItem("logged", JSON.stringify([userData]));
      
      go("/login/success/");
    } catch (error) {
      setIsAuth(false);
      setUserError("Invalid Username or Password");
    }
  }

  return (
    <>
      <form
        action=""
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          onChange={(e) => {
            handleInputChange(e);
          }}
          type="text"
          name="username"
          value={userData.username}
          placeholder="Username"
          required
        />
        <input
          onChange={(e) => {
            handleInputChange(e);
          }}
          value={userData.password}
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <p>{UserError}</p>
        <button type="submit">Login</button>
      </form>
    </>
  );
}
