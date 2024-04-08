

import FacebookLogin from "react-facebook-login";


export default function FbLogin() {

  const responseFacebook = (response) => {
    // localStorage.setItem("logged", JSON.stringify([response]));
    console.log(response);
  };

  return (
        <FacebookLogin
          appId="1091940795348618"
          autoLoad={true}
          fields="name,email,picture"
          callback={responseFacebook}
          
        />);
}
