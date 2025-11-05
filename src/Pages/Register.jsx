import React, { useState } from 'react'
import Header from '../components/Header'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { registerUser } from '../redux/slice/authSlice';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';

function Register() {
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: ""

    })
    console.log(form);
    const [passwordError, setPasswordError] = useState(""); // To show error
    const handleRegister = () => {
        if (form.password !== form.confirmPassword) {
            setPasswordError("password does'nt match")
            return
        } else {
            console.log("Dispatching registerUser:", form);
            dispatch(registerUser(form)); // sending data to backend (authSlice)

            // alert(" Registration submitted to backend!");
            swal("Success", "Registion  Successfully", "success");
        }
    }

    return (
        <div>
            <Header />
            <h1 className='text-center fw-bold mt-3'>Create Your Account</h1>

            <div className='d-flex align-items-center justify-content-center flex-column  '>

                <div className='box p-5 border rounded shadow w-25 '>
                    <h3 className="text-center mb-4 text-primary">Register</h3>
                    <Form >
                        <Form.Group className="mb-3" controlId="formGroupname">

                            <Form.Control type="name"
                                value={form.name}
                                placeholder=" Enter name"
                                onChange={(e) => setForm({ ...form, name: e.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">

                            <Form.Control type="email"
                                placeholder="Enter email"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })} />


                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">

                            <Form.Control type="password" placeholder="Password"
                                value={form.password}
                                onChange={(e) => setForm({ ...form, password: e.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupConfirmPassword">

                            <Form.Control type="password" placeholder=" Confirm Password"
                                value={form.confirmPassword}
                                onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })} />
                            {
                                passwordError && (
                                    <p className="text-danger text-center">{passwordError}</p>

                                )
                            }
 
                        </Form.Group>
                        <Form.Select value={form.role}
                            onChange={(e) => setForm({ ...form, role: e.target.value })} >
                            <option value="">Select Role</option>
                            <option value="jobseeker">Job Seeker</option>
                            <option value="employer">Employer</option>
                         
                        </Form.Select>
                        <button type='button'
                            onClick={() => handleRegister()}
                            className='btn btn-primary mt-4 w-100 text-center'>Register</button>
                    </Form>
                  
                    <p className="text-center mt-3">
                        Already have an account?{" "}
                        <Link to="/login" className="text-primary fw-bold">Login</Link>
                    </p>
                </div>
            </div>

        </div>

    )
}

export default Register
