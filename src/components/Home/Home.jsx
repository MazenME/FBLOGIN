import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="container">
        <Link className="btn" to={"/loginWithEmail"}>Login with email</Link>
        <Link className="btn" to={"/loginWithFacebook"}>Login with Facebook</Link>
      </div>
    </>
  );
}
