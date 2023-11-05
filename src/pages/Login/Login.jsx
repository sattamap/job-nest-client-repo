import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div>
            <h2>Login</h2>
            <p className="text-center">Do not have any Account <Link className="text-lime-700 font-bold" to="/register">Register</Link></p>
        </div>
    );
};

export default Login;