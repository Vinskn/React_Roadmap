import React, { useContext } from 'react'
import { ColorContext } from './ColorContext'


const Context2 = () => {
    // theColor akan mengambil value dari ColorContext jadi tidak ada kirim props
    const theColor = useContext(ColorContext);
    return (
        <p className={theColor ? 'text-purple-500' : 'text-blue-500'}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur eum quaerat beatae ratione dolorem veniam omnis numquam magni ducimus sit?
        </p>
    )
}

export default Context2