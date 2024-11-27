import { IoLogoGoogle } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

import UseAuth from "./UseAuth";
const SocalLink = () => {
      const { goggleLogin, githubLogin } = UseAuth();
      const navigate = useNavigate();
      const location = useLocation();
      const from = location?.state || "/";
  return (
    <div>
      <div className="flex justify-between items-center p-2">
        <button
          onClick={() =>
            goggleLogin()
              .then((result) => {
                if (result.user) {
                  navigate(from);
                }
              })
              .catch((error) => {
                console.log(error);
              })
          }
          className="flex items-center gap-1"
        >
          <IoLogoGoogle />
          <p>Goggle</p>
        </button>
        <div className="divider divider-horizontal  divider-neutral ">OR</div>
        <button
          onClick={() =>
            githubLogin()
              .then((result) => {
                if (result.user) {
                  navigate(from);
                }
              })
              .catch((error) => {
                console.log(error);
              })
          }
          className="flex items-center gap-1"
        >
          <IoLogoGithub />
          <p>Github</p>
        </button>
      </div>
    </div>
  );
};

export default SocalLink;
