import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password1: '',
          password2: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string().min(2).max(15).required(),
          email: Yup.string().email().required(),
          password1: Yup.string().min(6).required(),
          password2: Yup.string()
            .test(
              'password-should-match',
              'Passwords must match',
              function (value) {
                return this.parent.password1 === value;
              }
            )
            .required(),
        })}
      >
        {({ handleReset }) => (
          <>
            <Form>
              <MyTextInput
                label={'Name'}
                name='name'
                placeholder='Camilo'
              ></MyTextInput>
              <MyTextInput
                label={'Email'}
                name='email'
                placeholder='camilo.bolanos@hotmail.com'
              ></MyTextInput>
              <MyTextInput
                label={'Password'}
                name='password1'
                type='password'
                placeholder='********'
              ></MyTextInput>
              <MyTextInput
                label={'Reset Password'}
                name='password2'
                type='password'
                placeholder='*********'
              ></MyTextInput>

              <button type='submit'>Create</button>
              <button type='button' onClick={handleReset}>
                Reset Form
              </button>
            </Form>
          </>
        )}
      </Formik>
    </div>
    /*  <div>
      <h1>Register Formik Page</h1>
      <form action='' onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          onChange={onChange}
          className={`${name.trim().length <= 0 && 'has-error'}`}
        />
        {name.trim().length <= 0 && <span>This field is required</span>}
        <input
          type='email'
          placeholder='Email'
          name='email'
          value={email}
          onChange={onChange}
          className={`${!isValidEmail(email) && 'has-error'}`}
        />
        {!isValidEmail(email) && <span>Email is not valid</span>}
        <input
          type='password'
          placeholder='Password'
          name='password1'
          value={password1}
          onChange={onChange}
        />
        {password1.trim().length <= 0 && <span>This field is required</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && (
          <span>The password must be longer than 6 characters</span>
        )}

        <input
          type='password'
          placeholder='Repeat Password'
          name='password2'
          value={password2}
          onChange={onChange}
        />
        {password2.trim().length <= 0 && <span>This field is required</span>}
        {password2.trim().length > 0 &&
          password2.trim() !== password1.trim() && (
            <span>Password must be the same</span>
          )}

        <button type='submit'>Create</button>
        <button onClick={resetForm} type='button'>
          Reset Form
        </button>
      </form>
    </div> */
  );
};
