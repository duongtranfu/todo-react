import React, { Component } from 'react';
import { Formik, FormikProps, Form, Field } from 'formik';

class FormikForm extends Component {

    handleSubmit = (values, { props = this.props, setSubmitting }) => {
        //process form submission here
        //done submitting, set submitting to false
        setSubmitting(false);
        return;
    }

    render() {
        return (
            <Formik
                initialValues={{
                    name: 'u',
                    email: 'x',
                    gender: 'z'
                }}
                validate={
                    values => {
                        console.log('validate');
                        let err = [];

                        if (!values.email) err.email = 'Email Address Required';
                        console.log(err);
                        return err;
                    }
                }
                onSubmit={
                    this.handleSubmit
                }
                render={
                    
                    ({ isSubmitting, errors, touched, values, handleChange }) => {
                        console.log('errors=', errors)
                        console.log('values=', values)
                        return (
                            <Form>
                                <input placeholder='email' type='text' name='email' className='email-txt' value={values.email} onChange={handleChange} />
                                <input type='text' name='name' className='name-txt' />
                                {touched.email && errors.email && 'error'}
                                <button type='submit' disabled={isSubmitting}>
                                    submit
                                </button>
                            </Form>
                        );
                    }
                }
            />
        );
    };
}

export default FormikForm;