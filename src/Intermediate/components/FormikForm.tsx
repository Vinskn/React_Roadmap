import { Form, useFormik } from "formik";
import React, { useEffect } from "react";

const FormikForm = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            noTelp: "",
        },
        onSubmit: (values) => {
            console.log(values);
        },
    });

    console.log(formik.touched);
    
    return (
        <form onSubmit={formik.handleSubmit}>
            <input
                name="name"
                type="text"
                placeholder="Your Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} // ini untuk melihat apakah field sudah ditekam atau belum -> akses dari formik.touched
            />

            <input
                name="noTelp"
                type="number"
                placeholder="Your Phone Number"
                value={formik.values.noTelp}
                onChange={formik.handleChange}
            />

            <button type="submit">Submit</button>
        </form>
    );
};

export default FormikForm;
