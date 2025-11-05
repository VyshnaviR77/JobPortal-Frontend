import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header({ insideHome }) {
    return (
        <>
            <div>
                <Navbar expand="lg" className="bg-primary">
                    <Container>
                        <Navbar.Brand className="font-bold fs-2 text-white">
                            <i className="fa-solid fa-briefcase fs-2"></i>
                            Jobs
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mx-auto fs-5 gap-4  " >
                                <Nav.Link as={Link} className='text-white' to="/">Home</Nav.Link>
                               
                                

                            </Nav>
                            <Nav className="ms-auto justify-content-end">

                                {
                                    insideHome &&
                                    (
                                        <> <Link to={"/login"}>
                                            <button className='btn text-white'>Login</button>

                                        </Link>
                                            <Link to={"/register"}>
                                                <button className='btn text-white'><i class="fa-regular fa-registered"></i>Sign Up</button>

                                            </Link>
                                        </>
                                    )
                                }

                                <Nav.Link className='text-white fs-5' as={Link} to="/View">Jobs</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>
        </>
    )
}
export default Header
