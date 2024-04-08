import { useRecoilState } from "recoil";
import { UserData, isAuth } from "../state/state.js";
import { useNavigate } from "react-router-dom";

export default function UserSuccess() {
    const go = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const [userData,setUserData] = useRecoilState(UserData);
    // eslint-disable-next-line no-unused-vars
    const [_,setIsAuth] = useRecoilState(isAuth);

    function signOutBtn (){
        localStorage.removeItem("logged");
        setUserData(
            {
                username: "",
                password: "",
            }
        )
        setIsAuth(false);
        go("/")

    }


  return (
    <div>
      <h1>User Success</h1>
      <h2>
        welcome {JSON.parse(localStorage.getItem("logged"))[0].username}
      </h2>

      <button onClick={signOutBtn} type="button">Sign out</button>
    </div>
  )
}
