import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../helpers/auth';

const Login = () => {
  const initialState = { email: '', password: '' };
  const [credentials, setCredentials] = useState(initialState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const getLogin = async () => {
      try {
        await loginUser(credentials);
        navigate('/games');
      } catch (err) {
        console.log(err);
      }
    };
    getLogin();
    console.log('credentials', credentials);
  };

  return (
    <>
      <section className='hero is-warning is-fullheight'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns is-centered'>
              <div className='column is-5-tablet is-4-desktop is-3-widescreen'>
                <form className='box' onSubmit={handleSubmit}>
                  <div className='field has-text-centered'>
                    <div className='field'>
                      <label htmlFor='email' className='label'>
                        Email
                      </label>
                      <div className='control has-icons-left'>
                        <input
                          type='email'
                          id='email'
                          name='email'
                          className='input'
                          placeholder='e.g. johndoe@gmail.com'
                          value={credentials.email}
                          onChange={handleChange}
                        />
                        <span className='icon is-small is-left'>
                          <i className='fa fa-envelope'></i>
                        </span>
                      </div>
                    </div>
                    <div className='field'>
                      <label htmlFor='password' className='label'>
                        Password
                      </label>
                      <div className='control has-icons-left'>
                        <input
                          type='password'
                          id='password'
                          name='password'
                          className='input'
                          placeholder='**********'
                          value={credentials.password}
                          onChange={handleChange}
                        />

                        <span className='icon is-small is left'>
                          <i className='fa fa-lock'></i>
                        </span>
                      </div>
                    </div>
                    <div className='field'>
                      <button
                        onSubmit={handleSubmit}
                        className='button is-success'
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
