import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "./UseAuth";
import { useEffect } from "react";
// import { AuthContext } from "./FirebaseProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { users,spinner, setSpinner } = UseAuth()
  useEffect(() => {
    if (users) {
      setSpinner(false);
    }
  }, [users]);
  console.log(users);
  const location = useLocation();
if (spinner) {
  return (
    <div>
      {" "}
      <h1 className=" mt-16 text-center">
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
      </h1>
    </div>
  );
}

  if (!users ) {
    // console.log('if');
    return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>;
  }
  // console.log('out');
  return <div>{children}</div>;
  

};

export default PrivateRoute;
