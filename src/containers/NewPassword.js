import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';
import { toast } from 'react-toastify';
const NewPassword = () => {
  const { resetToken } = useParams();
  const [alert, setalert] = useState(false);
  const [respassword, setPespassword] = useState();

  const [formData, setFormData] = useState({
    password: '',
  });
  const { password } = formData;
  const Verifytoken = async () => {
    const res = await api('get', `/auth/verify-token/${resetToken}`);
    if (res) {
      toast.success(res.data.message);
    }
  };
  useEffect(() => {
    Verifytoken();
  }, []);
  const onChangePassword = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const HandlePassword = async (e) => {
    e.preventDefault();
    if (password) {
      const res = await api('put', `/auth/resetpassword/${resetToken}`, { password: '1122233344' });
      console.log(res, 'res');
      if (res) {
        setPespassword(res.data);
        setalert(true);
      }
    }
  };
  console.log(respassword);
  return (
    <div>
      <section class="container mt-5">
        <div class="row">
          <div class="col-md-8 m-auto">
            <div class="card bg-white py-2 px-4">
              <div class="card-body">
                <a href="login.html">Back to login</a>
                {alert ? '' : <h1 class="mb-2">Create a new password</h1>}

                {/* <p>
                  To reset your password, enter your email below and submit. An email will be sent to you with instructions about
                  how to complete the process.
                </p> */}

                <>
                  {' '}
                  {alert ? (
                    <>
                      {' '}
                      <div class="alert alert-success" role="alert">
                        {respassword.message}
                      </div>
                    </>
                  ) : (
                    <>
                      {' '}
                      <form onSubmit={HandlePassword}>
                        <div class="form-group">
                          <label>New password</label>
                          <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={onChangePassword}
                            class="form-control"
                            placeholder="enter new password"
                          />
                        </div>
                        <div class="form-group">
                          <input type="submit" value="Save Password" class="btn btn-dark btn-block" />
                        </div>
                      </form>
                    </>
                  )}
                </>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewPassword;
