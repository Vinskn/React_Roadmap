import React from "react";
import myHoc from "./MyHoc";

const Settings = () => {
    //kalau tidak pakai HOC untuk ambil user harus dibuat berkali-kali di setiap komponen yang membutuhkan
    // const user: string = getUser();
    // if (!user) return <p>Must Login First</p>;

    return (
        <div>
            <h2>Settings Page</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        </div>
    );
};

// dengan hoc tidak perlu untuk mengecek user di setiap komponen
const SettingsWithAuth = myHoc(Settings);
export default SettingsWithAuth;
