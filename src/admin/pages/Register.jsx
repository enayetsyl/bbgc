import DashboardBgImage from '../../assets/dashboard-bg.jpg';
import { useState } from 'react';
import axios from 'axios';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Register = () => {
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setShowConPassword] = useState(false);

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!name || !userId || !password || !conPassword) {
      toast.warning('Please fill all the fields!');
      setLoading(false);
      return;
    } else {
      if (password !== conPassword) {
        toast.warning("Password Doesn't match!");
        setLoading(false);
        return;
      } else {
        try {
          const config = {
            headers: {
              'Content-type': 'application/json',
            },
          };

          const { data } = await axios.post(
            'http://localhost:1111/api/user',
            {
              name,
              userId,
              password,
            },
            config
          );

          console.log(data);

          toast.success('User Created successfully!');
          setLoading(false);
        } catch (error) {
          toast.warning('Failed To Create User!');
          setLoading(false);
        }
      }
    }
  };
  return (
    <div
      className="bg-center bg-no-repeat bg-cover min-h-[100vh] flex justify-center items-center"
      style={{ backgroundImage: `url(${DashboardBgImage})` }}
    >
      <div className="p-4 md:p-12 lg:p-16 bg-white bg-opacity-40 backdrop-blur-lg rounded-md">
        <form
          className="w-full flex flex-col gap-y-4"
          onSubmit={handleRegisterSubmit}
        >
          <h3 className="accent-color text-3xl text-center font-bold capitalize my-4">
            Register with your details
          </h3>
          {/* name */}
          <input
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full min-h-[55px] shadow-light py-2 px-3 leading-6 rounded-md focus:outline-cyan-500"
          />
          {/* userId */}
          <input
            type="text"
            placeholder="Student ID/ Admin ID"
            required
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="w-full min-h-[55px] shadow-light py-2 px-3 leading-6 rounded-md focus:outline-cyan-500"
          />
          {/* password */}
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full min-h-[55px] shadow-light py-2 px-3 leading-6 rounded-md focus:outline-cyan-500"
            />
            <div
              className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer hover:text-cyan-500"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <FaRegEye size={20} />
              ) : (
                <FaRegEyeSlash size={20} />
              )}
            </div>
          </div>
          {/* confirm password */}
          <div className="relative">
            <input
              type={showConPassword ? 'text' : 'password'}
              placeholder="Confirm Password"
              required
              value={conPassword}
              onChange={(e) => setConPassword(e.target.value)}
              className="w-full min-h-[55px] shadow-light py-2 px-3 leading-6 rounded-md focus:outline-cyan-500"
            />
            <div
              className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer hover:text-cyan-500"
              onClick={() => setShowConPassword((prev) => !prev)}
            >
              {showConPassword ? (
                <FaRegEye size={20} />
              ) : (
                <FaRegEyeSlash size={20} />
              )}
            </div>
          </div>

          <button
            type="submit"
            className={`bg-cyan-500 hover:bg-cyan-600 text-white py-4 px-6 w-full rounded-md uppercase duration-300 leading-none font-bold text-lg ${
              loading && 'cursor-not-allowed opacity-50'
            }`}
            disabled={loading}
          >
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
