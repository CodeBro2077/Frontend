import React from "react";

import SidebarVacancies from "./Vacancies/SidebarVacancies";
import SidebarTelega from "./SidebarTelega/SidebarTelega";

import './Sidebar.scss'



function Sidebar() {
    return (
        <div className="main__sidebar sidebar-main">
            <SidebarTelega />
            <SidebarVacancies />
        </div>
    );
}

export default Sidebar;
