import React, { useCallback } from 'react'

const TryCallback = () => {
    // tanpa useContext setiap elemen parent berubah (tombol change color) maka ini terus dipanggil setiap render
    return (
        <div>TryCallback</div>
    )
}

export default TryCallback