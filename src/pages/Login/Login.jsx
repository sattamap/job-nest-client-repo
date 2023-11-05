import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";



const Login = () => {
    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');


    signIn(email, password)
    .then((result) => {
      console.log(result.user);
      // Show a success message using SweetAlert
      Swal.fire({
        title: 'Success!',
        text: 'Login successfully',
        icon: 'success',
        confirmButtonText: 'ok'
      });
      // Navigate to the desired location
      navigate(location?.state ? location.state : '/');
    })
    .catch((error) => {
      console.error(error);
      // Show an error message using SweetAlert
      Swal.fire({
        title: 'Error!',
        text: 'Email or password doesn\'t match. Please try again.',
        icon: 'error',
        confirmButtonText: 'ok'
      });
    });
};
      

   

    return (
        <div>
             <div className="mt-5">
            <h2 className="text-xl text-center">Login Yourself</h2>


<form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
    <div className="form-control">
        <label className="label">
            <span className="label-text">Email</span>
        </label>
        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
        <label className="label">
            <span className="label-text">Password</span>
        </label>
        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
        </label>
    </div>
    <div className="form-control mt-6">
        <button className="btn btn-primary">Login</button>
    </div>
   
</form>



            </div>
        </div>
    );
};

export default Login;