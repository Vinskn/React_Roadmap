import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardHoc = () => {
    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className=" flex gap-5 my-5">
                <Link to={'profile'}>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Profile</button>
                </Link>
                <Link to={'settings'}>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Settings</button>
                </Link>
            </div>
            <Outlet />
        </div>
    );
};

export default DashboardHoc;
