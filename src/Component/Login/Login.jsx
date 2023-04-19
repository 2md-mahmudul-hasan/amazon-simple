import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center mb-5">
          <h1 className="text-5xl font-bold">Login here!</h1>
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
                <span className="label-text">Password</span>
              </label>
              <input type="text" placeholder="password" className="input input-bordered" />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn text-2xl text-red-400 "> Login</button>
            </div>
            <hr></hr>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Continue With Google</button>
            </div>

            <label className="label">
              <Link to="/signup" className="label-text-alt text-red-400 link link-hover">Not registered? please sign up</Link>
            </label>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;