import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../provider/ContextProvider';

const Login = () => {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const { signIn } = useContext(authContext)
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then(user => {
        console.log(user.user)
        setSuccess('success fully log in')
        setError('')
        form.reset()
      })
      .catch(error => {
        setError(error.message)
      })

  }
  return (
    <div className="hero min-h-screen bg-base-200">
      {success}
      <div className="hero-content flex-col ">
        <div className="text-center mb-5">
          <h1 className="text-5xl font-bold">Login here!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input name='email' type="text" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input name='password' type="text" placeholder="password" className="input input-bordered" />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn text-2xl text-red-400 "> Login</button>
            </div>
            <label className="label">
              <Link to="/signup" className="label-text-alt text-red-400 link link-hover">Not registered? please sign up</Link>
            </label>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;