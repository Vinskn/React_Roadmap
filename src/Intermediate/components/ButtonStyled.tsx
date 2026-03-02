import { css } from "@emotion/css";
import React from "react";

// contoh menggunakan emotion
const ButtonStyled = () => {
    return (
        <button
            className={css`
                padding: 32px;
                background-color: hotpink;
                font-size: 24px;
                border-radius: 4px;
                &:hover {
                    color: white;
                }
            `}
        >
            Click Me
        </button>
    );
};

export default ButtonStyled;
