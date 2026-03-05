import React, { useEffect, useState } from 'react'
import { formType, objTypes } from './types';
import { Field, Form, Formik } from 'formik';
import FormikForm from './components/FormikForm';
import "./style.css"
import ButtonStyled from './components/ButtonStyled';

const Intermediate = () => {
    // contoh penggunaan useeffect
    const [ count, setCount ] = useState<number>(0);
    
    /**
     * document.title = `Count ${count}`
     * ini kode untuk mengubah nama dokumen, dan bisa jalan normal namun tidak direkomendasikan react
     * mengubah nama dokumen itu merupakan side effect -> mengubah / re-render diluar UI
     * sehingga lebih disarankan untuk menggunakan useEffect 
     * tanpa useeffect tahapannya: render -> title berubah -> tombol di klik -> state ganti -> re-render -> title ganti lagi
     * dengan menggunakan useEffect tahapannya menjadi: render -> commit DOM -> run useEffect -> ganti title
     * 
     * render itu bisa terjadi lebih dari 1x (2x ketika strict di dev mode) sehingga tanpa use effect proses pergantian title bisa terjadi lebih dari 1x
     * ini akan sangat terasa ketika menggunakan API dan melakukan fetch -> tanpa useEffect fetch akan berjalan setiap kali re-render, server akan menerima traffic tinggi
     * 
     * Pada intinya -> kode yang berhubungan dengan dunia luar (API, local storage, timer, dll) itu harus pakai useEffect
     */

    // solusi dengan useEffect
    useEffect(() => {
        document.title = `Count ${count}`
    }, [count])
    /**
     * dengan begini pergantian title hanya akan terjadi ketika dependensi (count) berubah bukan setiap render
     */

    //------------------------------------------------------------------------------------------------------------
    /**
     * Contoh memanfaatkan conditional rendering dan Lists
     * Akan terdapat sebuah array of object yang berisi nama, jurusan dan isScience yang bernilai boolean
     * kalau isScience true maka disebelah kiri nama akan ada emoji 🌲 kalau false 🧑
     */
    const obj: objTypes[]  = [
        {
            nama: "Udin",
            jurusan: "Pendidikan Guru SD",
            isScience: false
        },
        {
            nama: "Jono",
            jurusan: "Teknik Informatika",
            isScience: true
        },
        {
            nama: "Udin",
            jurusan: "Astronomi",
            isScience: true
        }
    ]

    //------------------------------------------------------------------------------------------------------------
    const[ name, setName ] = useState<string>('');
    const[ telp, setTelp ] = useState<string>('')

    const[ formikValue, setFormikValue ] = useState<formType>();

    useEffect(() => console.log(formikValue), [formikValue])
    

    return (
        <div>
            <h1>Intermediate React</h1>
            <hr />

            <h2>Lifecycle</h2>
            {/* useEffect saat ini hanya digunakan ketika sistem butuh berinteraksi dengan dunia luar bukan re-render */}
            <button onClick={() => setCount(c => c+=1)}>Add +</button>

            <hr />
            <h2>Conditional Rendering & Lists</h2>
            <ul>
                {/* map bisa menerima 1 atau 2 parameter, parameter default adalah elemen array, parameter kedua akan menjadi indeks */}
                {obj.map((elm, idx) => (
                    <li key={idx}>
                        {elm.isScience ? '🌲' : '🧑'} {elm.nama} - {elm.jurusan}
                    </li>
                ))}
            </ul>
        
            <hr />
            <h2>Controlled Form</h2>
            {/* jika menggunakan state bisa dibuat state satu per satu untuk setiap field atau pakai object */}
            {/* jika pakai object maka perubahan harus pakai setState() dan pakai spread operator (...) agar value sebelumnya tidak hilang */}
            {/* contoh akan menggunakan state agar terlihat perbedaanya saat menggunakan formik */}
            <div>
                <h3>Form using State</h3>
                <p>Data from the form</p>
                <p>Nama: {name}</p>
                <p>No HP: {telp}</p>
                {/* kunci pengambilan data ada di onChange yang membuat setiap data berubah maka state akan di update */}
                {/* value diambil dengan mengambil event saat ini (e) lalu diambil valuenya dari currentTarget */}
                <input type="text" placeholder='Your Name' onChange={(e) => setName(e.currentTarget.value)} />
                <input type="number" placeholder='Your Phone Number' onChange={(e) => setTelp(e.currentTarget.value)} />
            </div>

            <div>
                <h3>Form using Formik</h3>
                {/* Formik akan menghasilkan sebuah object dengan key yang ada di name */}
                {/* initial value bisa kosong atau berisi sebuah value yang akan ditampilakan di form field */}
                {/* Kesederhanaan formik dapat terlihat dimana pembuatan state cukup satu */}
                {/* formik juga punya kelebihan lain seperti dapat menyimpan errors, touched dan isSubmiting */}
                {/* formik juga punya hook useFormik -> contohnya ada dibawah, kode ada di component */}

                <Formik 
                    initialValues={{
                        name: "asd",
                        noTelp: ""
                    }}
                    onSubmit={values => setFormikValue(values)}
                >
                    <Form>
                        <Field name="name" type="text" placeholder="Your Name"/>
                        <Field name="noTelp" type="number" placeholder="Your Phone Number"/>
                        <button type='submit'>Submit</button>
                    </Form>
                </Formik>
            </div>

            {/* Contoh pakai hook formik */}
            <h3>Use Formik Hook</h3>
            <FormikForm />

            <hr />
            <h2>Styling</h2>
            <div className='container'>
                <p className='text'>Ini di styling dengan CSS tradisional</p>
            </div>

            <p>Button di style dengan emotion/css</p>
            <ButtonStyled />
        </div>
    )
}

export default Intermediate