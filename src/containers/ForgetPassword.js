import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../api';
const ForgetPassword = () => {
  // const [email, setEmail] = useState();
  const [formData, setFormData] = useState({
    email: '',
  });
  const [alert, setAlert] = useState(false);
  const [resForget, setResForget] = useState();

  console.log(resForget);
  const { email } = formData;

  const onChangeforgetPassword = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  console.log(formData.email);
  const HandleforgetPassword = async (e) => {
    e.preventDefault();
    if (email) {
      const res = await api('post', '/auth/forgotpassword', { email: email });
      if (res) {
        setAlert(true);
        setResForget(res);
      }
    } else {
      console.log('enter the email');
    }
  };
  return (
    <div>
      <section className="container mt-5">
        <div className="row">
          <div className="col-md-8 m-auto">
            <div className="card bg-white py-2 px-4">
              <div className="card-body">
                <Link to="/">Back to login</Link>
                <h1 className="mb-2">Reset Password</h1>
                <p>
                  To reset your password, enter your email below and submit. An email will be sent to you with instructions about
                  how to complete the process.
                </p>
                {alert ? (
                  <>
                    {' '}
                    <div className="alert alert-success" role="alert">
                      {resForget?.data?.data}
                    </div>
                  </>
                ) : (
                  <>
                    {' '}
                    <form onSubmit={HandleforgetPassword}>
                      <div className="form-group">
                        <label>Enter Email</label>
                        <input
                          type="text"
                          name="email"
                          value={email}
                          onChange={onChangeforgetPassword}
                          className="form-control"
                          placeholder="Email address"
                        />
                      </div>
                      <div className="form-group">
                        <input type="submit" value="Reset Password" className="btn btn-dark btn-block" />
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgetPassword;
