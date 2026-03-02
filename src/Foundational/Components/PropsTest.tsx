import React from 'react'
import { PropsTestType } from '../types'

/* 
 terdapat 5 props yang diambil dengan tipe data number, string, object, array of number dan function
 tipenya di definisikan di types, isi props akan ditampilkan di komponen, array akan di map
 (pembahasan map ada di materi intermediate react)

**/

const PropsTest = ({number, text, obj, arr, func}: PropsTestType) => {
  return (
    <div>
        <p>number from props: {number}</p>
        <p>text from props: <strong>{text}</strong></p>
        <div>
            <p>This from object</p>
            <span>{obj.hi} from number {obj.no}</span>
        </div>

        <div>
            <p>This from array</p>
            <ul>
                {arr.map(elm => (
                    <li>array ke-{elm}</li>
                ))}
            </ul>
        </div>

        {/* dari parent mengirim sebuah fungsi untuk menampilkan alert, di komponen akan di panggil di sebuah tombol*/}
        <button onClick={() => func()}>Click Me</button>
    </div>
  )
}

export default PropsTest