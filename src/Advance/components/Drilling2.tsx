import React from "react";
import { drillingType } from "../types";

const Drilling2 = ({color}: drillingType) => {
    return (
        <p className={`${color ? "text-red-600" : "text-green-600"}`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur eum quaerat beatae ratione dolorem veniam omnis numquam magni ducimus sit?
        </p>
    );
};

export default Drilling2;
