import React, { Component } from 'react'

class ClassComp extends Component {
    render() {
        return <button>Ini Tombol Class Component</button>
    }
}

export default ClassComp;

/* 
    Class tidak direkomendasikan karena ada hooks yang menawarkan kode yang lebih simpel, konsisten untuk manajemen
    state yang berjalan dari fungsional components

    Components merupakan base class dari react component sehingga dalam membuat class harus extend dari class Components
    sebagai tanda bahwa class yang dibuat adalah turunan dari class Components

    Kalau buat component dari class dan pakai props (properties) maka pakai keyword this untuk menjadi rujukan ke object ini
*/

