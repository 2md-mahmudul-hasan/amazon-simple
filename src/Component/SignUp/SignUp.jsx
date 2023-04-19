import React, { useState } from 'react';
import './signUp.css'
import { Link } from 'react-router-dom';
const SignUp = () => {
  const [error, setError] = useState('')
  const handleFormSubmit = (e) => {

    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const conPassword = form.ConfirmPassword.value;

    //password validation 
    if (password !== conPassword) {
      setError("your password not match")
      return;
    } else if (password.length < 6) {
      setError('password must be six or more character')
    }

    console.log(name, email, password, conPassword)
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center mb-5">
          <h1 className="text-5xl font-bold">sign up now!</h1>
        </div>
        <div className="bg-secondary-focus  text-red-400 p-2">
          {error}
        </div>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleFormSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" name='email' placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name='name' placeholder="name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input type="password" name='ConfirmPassword' placeholder="con-password" className="input input-bordered" />
            </div>


            <button className="btn btn-primary">Sign up</button>

          </form>
          <div>
            <div className="form-control mt-6">
              <button className="btn text-2xl text-red-400 "> Gmail</button>
            </div>
          </div>
          <div>

            <label className="label">
              <Link to="/login" className="label-text-alt link text-red-400 link-hover">already registered? please login</Link>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;