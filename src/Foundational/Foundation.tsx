import React, { useState } from 'react'
import FunctionalComp from './Components/functionalComp'
import ClassComp from './Components/ClassComp'
import PropsTest from './Components/PropsTest';

const Foundation = () => {

    const [ counter, setCounter ] = useState<number>(0);
    const [ test, setTest ] = useState<boolean>(false);
  return (
    <>
        <h1>Foundational React</h1>
        <hr />

        {/* 
            Contoh memanggil komponen fungsional --> memanggil sebuah paragraf dari folder /Components
            Komponen harus memiliki nama dengan awal huruf kapital agar react tidak salah mengartikan sebagai tah HTML
        */}
        <h2>React Component</h2>
        <FunctionalComp />

        {/*contoh memanggil komponen class --> memanggil sebuah button dari folder /components*/}
        <ClassComp />

        <hr />
            <h2>React State & Props</h2>
        {/* 
            Menggunakan state dengan trigger sebuah tombol untuk menambahkan / mengurangi sebuah counter,
            di trigger menggunakan event handler onClick yang merupakan callback function (dibahas di materi setelah ini)
            () => setCounter(c => c-=1) memiliki arti value state saat ini (c) diambil dan dikurang 1 (untuk + berarti sebaliknya)

            info:
                - state bisa diberi default value dengan menambahkan valuenya di dalam ()
        */}
        <div>
            <button onClick={() => setCounter(c => c-1)}> - </button>
            <span>{counter}</span>
            <button onClick={() => setCounter(c => c+1)}> + </button>
        </div>

        {/* 
            Mengirimkan props ke sebuah componen untuk diolah datanya
            Karena menggunakan tsx, tipe data lebih baik dipisah agar lebih mudah dikelola kedepannya
            tipe disimpan ke folder types -> buat sebuah interface
        */}
        <PropsTest 
            number={100}
            text='Hello World'
            obj={{hi: "Aku", no: 10}}
            arr={[1,2,3,4,5,6,7,8,9,10]}
            func={() => alert("Alert dari props")}
        />


        <hr />
        <h2>React Event Handling</h2>

        {/* onClick: event yang berjalan ketika element ditekan */}
        {/* contoh: ketika tombol ditekan maka akan menampilkan alert */}
        <button onClick={() => alert("Event trigger with onClick")}>onClick Event</button>

        {/* bisa dimanfaatkan bersamaan dengan state */}
        {/* contoh ketika mouse ada di elemen atau saat keluar maka isi elemen akan berubah -> perubahan terjadi dengan check kondisi state */}
        <p onMouseEnter={() => setTest(false)} onMouseLeave={() => setTest(true)}>{test ? "Halo" : "Hi"}</p> 
    </>
  )
}

export default Foundation