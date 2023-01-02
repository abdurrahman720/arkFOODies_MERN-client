import React, { useContext } from "react";
import { Link,useLocation, useNavigate  } from "react-router-dom";
import login from "../../assets/png/join.png";
import { UserContext } from "../../Context/UserContext/Context";

const Register = () => {

  const { emailSignUp, updateName } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleSignUp = (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
        const email = form.email.value;
      const password = form.password.value;
      emailSignUp(email, password)
          .then(userCredentials => {
            const user = userCredentials.user;
              updateName(name)
                  .then(() => {
                  console.log('updated name');
                  })
                  .catch(err => {
                  console.log(err)
                  })
           
            navigate(from, { replace: true });

      })
      
    
  };
    
    
    
  return (
    <div className="hero w-full ">
      <div className="hero-content grid md:grid-cols-2 gap-20 my-10 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={login} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-10 ">
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
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <p className="mx-5">
            Already Have an Account?{" "}
            <Link className="text-orange-600 font-semibold" to="/login">
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;