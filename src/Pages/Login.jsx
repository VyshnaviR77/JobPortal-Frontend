import React, { useState,useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { loginUser } from '../redux/slice/authSlice'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
function Login() {
  const[login,setLogin]=useState({
    email:"",
    password:""
  })
  console.log(login);
  const { loading, user, error, isAuthenticated } = useSelector(state => state.authsation)
  console.log(loading, user, error, isAuthenticated);
  const dispatch=useDispatch()
  const navigate =useNavigate()
  const handlesubmit=()=>{
    if(!login.email||!login.password){
      alert("Plsease fill the form")
      return
    }
    dispatch(loginUser(login))


  }
  useEffect(() => {
    if (isAuthenticated && user) {
      swal("Success!", "Login Successful!", "success").then(() => {
        navigate("/View");
      });
    }
  }, [isAuthenticated, user, navigate]);

  

  return (
    <div>
      <Header />
     

      <h2 className="text-center mt-4 fw-bold" style={{ color: "#333" }}>
        Login to Your Account
      </h2>

      {/* Row Section */}
      <div className="row d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>

        {/* Left - Login Card */}
        <div className="col-lg-6 p-5 shadow rounded" style={{ backgroundColor: "#ffffff" }}>
          <h3 className="text-center mb-4 text-primary">Login</h3>

          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              onChange={(e)=>setLogin({...login,email:e.target.value})}
              value={login.email}
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
              value={login.password}
            />
          </div>

          <button 
           className="btn btn-primary w-100 mt-2"
            onClick={() => handlesubmit()}
           >Login</button>

          <p className="text-center mt-3">
            Don't have an account?{" "}
            <Link to="/register" className="text-primary fw-bold">Register</Link>
          </p>
        </div>

        {/* Right - Image */}
        <div className="col-lg-5 d-none d-lg-block">
          <img
            src="https://img.freepik.com/free-vector/man-search-hiring-job-online-from-laptop_1150-52728.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Login Illustration"
            className="img-fluid"
          />
        </div>

      </div>
     </div>

  )
}

export default Login
