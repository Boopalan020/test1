// 12. Forms using Formik
import React from 'react'
import { useFormik } from 'formik'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';

const initialValues = {
    name: "",
    password: ""
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    password: Yup.string().matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/, "Invalid").required("Required")
})

const onSubmit = (values) => {
    console.log(values);
}

export function Forms() {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
        // do it first
        // validate : values => {
        //     // values.name  values.password
        //     // errors.name  errors.password
        //     let errors = {}

        //     if(!values.name) {
        //         errors.name = "Required"
        //     }

        //     if(!values.password) {
        //         errors.password = "Required"
        //     } else if(!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(values.password)) {
        //         errors.password = "Invalid Password"
        //     }

        //     return errors
        // }
    })

    // console.log(formik.values)

    return (
        <div>
            <Formik
                initialValues = {initialValues}
                onSubmit = {onSubmit}
                validationSchema = {validationSchema}
            >
                <Form>
                    <div className="form-group">
                        <label>Name</label>
                        <Field type="text" name="name" className="form-control" placeholder="Enter email"/>
                        <ErrorMessage name="name" className="text-danger"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <Field type="password" name="password" className="form-control" placeholder="Password"/>
                        <ErrorMessage name="password" className="text-danger"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </Form>
            </Formik>

            {/* <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" className="form-control" placeholder="Enter email" 
                        onChange={formik.handleChange} 
                        value={formik.values.name}
                    />
                    <small id="emailHelp" className="form-text text-danger">
                    {
                        formik.errors.name
                    }
                    </small>
                </div>
                <div className="form-group">
                    <label>
                        Password
                    </label>
                    <input type="password" name="password" className="form-control" placeholder="Password" 
                        onChange={formik.handleChange} 
                        value={formik.values.password}
                    />
                    <small id="emailHelp" className="form-text text-danger">
                    {
                        formik.errors.password
                    }
                    </small>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form> */}

        </div>
    )
}

