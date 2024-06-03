import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../redux/userSlice';
import { useDispatch } from 'react-redux';
import SimpleSnackbar from './SimpleSnackbar'; // Import the SimpleSnackbar component
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

const Login = () => {
  const [open, setOpen] = React.useState(false);
 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [useremail, setuseremail] = useState('');
  const [password, setpassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false); // Add snackbarOpen state

  const handleLogin = async (e) => {
    e.preventDefault();
    if (useremail !== '' && password !== '') {
      try {
        setLoading(true);
        setOpen(true);
        const res = await axios.post('http://localhost:3000/api/user/login', {
          email: useremail,
          password: password
        });
        setOpen(false);
        dispatch(getUser(res?.data?.user));
        if (res.data) {

          navigate(-1);
        }
      } catch (error) {
        console.error('Error logging in:', error);
        setSnackbarOpen(true); // Open snackbar on login error
      } finally {
        setLoading(false);
      }
    } else {
      console.log('Fill in the required fields');
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false); // Close snackbar
  };

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">User Sign Page</h2>
            <p className="mt-2 text-sm text-gray-600">
              <a
                href="#"
                title=""
                className="font-semibold text-black transition-all duration-200 hover:underline"
              ></a>
            </p>
            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                    {' '}
                    Email{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      value={useremail}
                      onChange={(e) => { setuseremail(e.target.value) }}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="" className="text-base font-medium text-gray-900">
                      {' '}
                      Password{' '}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      value={password}
                      onChange={(e) => { setpassword(e.target.value) }}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                    ></input>
                  </div>
                </div>
                <div>
                  <button
                    onClick={(e) => handleLogin(e)}
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    {loading ? 'Logging in...' : 'Login'} <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="h-screen w-full">
          <img
            className="mx-auto h-full w-full rounded-md object-cover"
            src="https://images.unsplash.com/photo-1630673245362-f69d2b93880e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt=""
          />
        </div>
      </div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <SimpleSnackbar open={snackbarOpen} handleClose={handleCloseSnackbar} /> {/* Render the SimpleSnackbar component */}
    </section>
  );
}

export default Login;
