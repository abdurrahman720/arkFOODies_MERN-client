import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/png/join.png";
import { UserContext } from "../../Context/UserContext/Context";
import { ToastContainer, toast } from "react-toastify";
import useTitle from "../../hooks/useTitle";

const Register = () => {
  useTitle('Register');
  const { emailSignUp, updateUser, googleSign } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const [error, setError] = useState("");

  const handleSignUp = (e) => {
    
    e.preventDefault();
    setError("");
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    emailSignUp(email, password).then((userCredentials) => {
      const user = userCredentials.user;

      const currentUser = {
        email: user?.email,
      };
      //jwt token
      fetch("http://localhost:5001/jwt", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          //set on localstorage
          localStorage.setItem("arkFOODies-token", data.token);
          toast.success('Registration successfull!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
          navigate(from, { replace: true });
        });
      updateUser(name, photo)
        .then(() => {
          console.log("updated name");
        })
        .catch((err) => {
          console.log(err);
          setError(err.message);
        });

      navigate(from, { replace: true });
    });
  };

  const handleGoogleSign = () => {
    googleSign().then((userCredentials) => {

      const user = userCredentials.user;

      const currentUser = {
        email: user?.email,
      };

      fetch("http://localhost:5001/jwt", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          //set on localstorage
          localStorage.setItem("arkFOODies-token", data.token);
          console.log(data);
          toast.success('Registration successfull!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
          navigate(from, { replace: true });
        })

        .catch((err) => {
          console.log(err);
          setError(err.message);
        });
    });
  };

  return (
    <div className="hero w-full bg-mybg">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="hero-content grid md:grid-cols-2 gap-20 my-10 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={login} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl my-10 font-custom1 text-myprimary bg-mybg ">
          <h1 className="text-5xl font-bold text-center">Register</h1>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            {error && <p className="text-warning">{error}</p>}
            <div className="form-control mt-6">
              <input
                className="btn btn-myprimary"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <p className="mx-5 text-sm">
            Already Have an Account?{" "}
            <Link className="text-orange-600 font-semibold" to="/login">
              Login
            </Link>{" "}
          </p>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="px-3 text-xl dark:text-gray-400">
              Continue with Google account...
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleGoogleSign}
              aria-label="Log in with Google"
              className="p-3 rounded-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-8 h-8 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
