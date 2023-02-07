import React from 'react';
import {Outlet} from "react-router-dom";

import {SideBar} from "../components/sidebar/SideBar";
import './MainLayout.styles.css';


export const MainLayout = () => {
    return (
        <div className={'main-container'}>
    <SideBar/>
            <Outlet/>
        </div>
    );
};

