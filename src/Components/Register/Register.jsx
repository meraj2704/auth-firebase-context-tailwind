import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(firstName,lastName,email,password);
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register Now</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">First Name</span>
                                    </label>
                                    <input type="text" name="firstName" placeholder="First Name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Last Name</span>
                                    </label>
                                    <input type="text" name="lastName" placeholder="Last Name" className="input input-bordered" />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-4">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <p className='mx-auto mt-4'>Already have an account? <Link to='/login'><button className="btn btn-link">Login</button></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;