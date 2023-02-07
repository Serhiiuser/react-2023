import React from 'react';
import './SideBar.style.css';
import {NavLink} from "react-router-dom";

export const SideBar = () => {
    return (
        <div className={'side-bar'}>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'todos'}>todos</NavLink>
            <NavLink to={'albums'}>albums</NavLink>
            <NavLink to={'comments'}>comments</NavLink>
        </div>
    );
};

