import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .min(10, 'Must be 10 characters or more')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          terms: Yup.boolean().oneOf([true], 'You must accept the conditions'),
          jobType: Yup.string()
            .notOneOf(['it-jr'], 'This option is not allowed')
            .required('Required'),
        })}
      >
        {() => (
          <Form>
            <label htmlFor='firstName'>First Name</label>
            <Field name='firstName' type='text'></Field>
            <ErrorMessage name='firstName' component='span'></ErrorMessage>
            <label htmlFor='lastName'>Last Name</label>
            <Field name='lastName' type='text'></Field>
            <ErrorMessage name='lastName' component='span'></ErrorMessage>
            <label htmlFor='email'>Email</label>
            <Field name='email' type='text'></Field>
            <ErrorMessage name='email' component='span'></ErrorMessage>
            <label htmlFor='email'>Job Type</label>
            <Field name='jobType' as='select'>
              <option value=''> Pick something</option>
              <option value='developer'> Developer</option>
              <option value='designer'>Designer</option>
              <option value='it-senior'> IT Senior</option>
              <option value='it-jr'>IT Junior</option>
            </Field>
            <ErrorMessage name='jobType' component='span'></ErrorMessage>
            <label>
              <Field name='terms' type='checkbox' />
              Terms and conditions
            </label>
            <ErrorMessage name='terms' component='span'></ErrorMessage>
            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
