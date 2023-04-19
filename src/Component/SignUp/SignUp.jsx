import React from 'react';
import './signUp.css'
import { Link } from 'react-router-dom';
const SignUp = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center mb-5">
          <h1 className="text-5xl font-bold">sign up now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="text" placeholder="password" className="input input-bordered" />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn text-2xl text-red-400 "> Gmail</button>
            </div>
            <hr></hr>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign up</button>
            </div>

            <label className="label">
              <Link to="/login" className="label-text-alt link link-hover">already registered? please login</Link>
            </label>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SignUp;