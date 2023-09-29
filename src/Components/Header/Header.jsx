import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthContextProviders';

const Header = () => {
    const {user,logOut} = useContext(AuthContext)
    const handleLogOut = ()=>{
        logOut()
        .then(()=>{
            console.log('Sign Out successfully')
        })
        .catch(error =>{
            console.log(error.message)
        })
    }
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>
                {user && <Link className="btn btn-ghost normal-case text-xl" to='/profile'>Profile</Link>}
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
            {
                user && 
                <div>
                    <p>{user.email}</p>
                    <button onClick={handleLogOut} className="btn btn-active btn-neutral">Sign Out</button>
                </div>
            }
            </div>
        </div>
    );
};

export default Header;