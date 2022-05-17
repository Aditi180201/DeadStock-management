import React from "react";
import "./topbar.css";
//import { useEffect, useState } from 'react';


const Topbar = ({updateUser}) => {

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">DeadStock Management</span>
        </div>
        <div className="topRight">
        <div className="button" onClick={() => updateUser({})} >Logout</div>
        </div>
      </div>
    </div>
    
  );
}

export default Topbar;
