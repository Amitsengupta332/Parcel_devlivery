import { Link, Outlet } from "react-router-dom";
import authImage from "../assets/authImage.png";
import ProFastLogo from "../pages/shared/ProFastLogo/ProFastLogo";

const AuthLayout = () => {
  return (
    <div className="p-12 bg-base-200">
      <div>
        <ProFastLogo></ProFastLogo>
      </div>

      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <img src={authImage} className="max-w-sm rounded-lg shadow-2xl" />
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

//https://github.com/ProgrammingHero1/zap-shift-client-with-auth-part2/blob/main/src/layouts/AuthLayout.jsx
