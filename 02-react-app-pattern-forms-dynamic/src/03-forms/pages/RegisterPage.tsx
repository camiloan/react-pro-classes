import { useForm } from '../hooks/useForm';

import '../styles/styles.css';

export const RegisterPage = () => {
  const {
    formData,
    name,
    email,
    password1,
    password2,
    onChange,
    resetForm,
    isValidEmail,
  } = useForm({
    name: '',
    email: '',
    password1: '',
    password2: '',
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Register Page</h1>
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
    </div>
  );
};
