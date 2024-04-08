import { RecoilRoot } from "recoil";
import Login from "./components/login/Login.jsx";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import UserSuccess from "./components/UserSuccess/UserSuccess.jsx";
import FbLogin from "./components/facebookLogin/FbLogin.jsx";
import Home from "./components/Home/Home.jsx";

function ProtectedRoute({ children } ) {
  if (localStorage.getItem("logged") == null) {
    return <Navigate to="/" />;
  } else {
    return <>{children}</>;
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },{
    path: "/loginWithEmail",
    element: (
      // <ProtectedRoute>
        <Login />
      // </ProtectedRoute>
    ),
  },
  {
    path: "/loginWithFacebook",
    element:( 
    //<ProtectedRoute>
      <FbLogin/>
      //</ProtectedRoute>
      ),
  },
  {
    path: "login/success/",
    element: (
      <ProtectedRoute>
        <UserSuccess />
      </ProtectedRoute>
    ),
  },
]);

function App() {
  return (
    <>
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </>
  );
}

export default App;


