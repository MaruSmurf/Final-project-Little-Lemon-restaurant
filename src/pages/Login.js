import React from 'react'
import Navbar from "../components/Navbar";
import { Formik } from 'formik';
import Heading from "../components/Heading";
import Footer from "../components/Footer"
export default function LoginPage(){
    return(
        <>
            <Navbar/>
            <Heading/>
        <div  className="login-section">
            <h1 className="section-typefaces">Log in</h1>
            <p className="section-lead-text">Become a member-don't miss out on events, special offers and bonus coupons</p>
            <div className="formik-section">
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                  }) => (

                    <form className="submit-label" onSubmit={handleSubmit}>
                       <span className="enter-input">E-mail</span>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {errors.email && touched.email && errors.email}
                        <span className="enter-input">Password</span>
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        {errors.password && touched.password && errors.password}

                        <div className="login-button">
                        <button className="btn-login" type="submit" disabled={isSubmitting}>
                            Log in
                        </button>
                        <button className="btn-member" type="submit" disabled={isSubmitting}>
                            Become a member
                        </button>
                        </div>

                    </form>
                )}
            </Formik>
            </div>
        </div>

<Footer/>

        </>
    )
}