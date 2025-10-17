import { Outlet } from "react-router-dom";
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
//https://github.com/ProgrammingHero1/zap-shift-client-parcel-management-part3
//https://github.com/ProgrammingHero1/zap-shift-server-parcel-management-part3
//https://github.com/ProgrammingHero1/zap-shift-resources/blob/main/requirements.md


//https://github.com/ProgrammingHero1/zap-shift-server-payment-part4
//http://github.com/ProgrammingHero1/zap-shift-client-payment-part4

//https://github.com/ProgrammingHero1/zap-shift-server-role-and-jwt-part5
//https://github.com/ProgrammingHero1/zap-shift-client-role-and-jwt-part5

// https://github.com/ProgrammingHero1/zap-shift-server-admin-role-part6
// https://github.com/ProgrammingHero1/zap-shift-client-admin-role-part6

// https://github.com/ProgrammingHero1/zap-shift-client-rider-track-part7
// https://github.com/ProgrammingHero1/zap-shift-server-rider-track-part7

// https://github.com/ProgrammingHero1/zap-shift-client-dashboard-home-part8
// https://github.com/ProgrammingHero1/zap-shift-server-dashboard-home-part8