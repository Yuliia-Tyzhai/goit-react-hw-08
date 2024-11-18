import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import styles from './loginForm.module.css';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { apiLoginUser } from '../../redux/auth/operations';

const INITIAL_VALUES = {
  email: '',
  password: '',
};

const RegisterUserSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password length must be at least 8 characters')
    .required('Password is required'),
});

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(apiLoginUser(values));
    actions.resetForm();
  };
  return (
    <div className={styles.container}>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={RegisterUserSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <label className={styles.label}>
            <span>Email:</span>
            <Field
              type="text"
              name="email"
              className={styles.input}
              placeholder="example.email@example.com"
            />
            <ErrorMessage
              className={styles.errorMessage}
              name="email"
              component="span"
            />
          </label>
          <label className={styles.label}>
            <span>Password:</span>
            <Field
              type="password"
              name="password"
              className={styles.input}
              placeholder="Enter your password"
            />
            <ErrorMessage
              className={styles.errorMessage}
              name="password"
              component="span"
            />
          </label>

          <button type="submit">🤷‍♂️ Sign In</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
