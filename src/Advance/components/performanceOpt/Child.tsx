import React from "react";

/**
 * jika pakai react memo walaupun parent re-render child tidak akan ikut re-render
 * karena react memo akan membandingkan props yang masuk
 * jika props sama maka tidak akan re-render
 */
const Child = React.memo(({name}: {name: string}) => {
    console.log('child render');
    return (
        <div>
            <p>my name is {name}</p>
        </div>
    );
});

export default Child;
