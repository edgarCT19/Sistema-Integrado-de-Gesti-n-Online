import React from "react";

const Profile = () => {
  return (
    <div className="right-content w-100">
      <div className="row dashboardBoxWrapperRow">
        <div className="col-md-8">
          <div className="dashboardBoxWrapper d-flex">
            <div className="dashboardBox"></div>

            <div className="dashboardBox"></div>

            <div className="dashboardBox"></div>

            <div className="dashboardBox"></div>
          </div>
        </div>
        <div className="col-md-4 pl-0">
          <div className="box"></div>
        </div>
        <div className="mt-3">
           <div className="card">
            <h1>Hola soy otra parte del perfil</h1>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
