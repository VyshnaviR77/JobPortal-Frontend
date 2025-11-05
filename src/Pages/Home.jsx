import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
      <Header insideHome={true} />

      <div >
        <section style={{
          backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkDPTp5HhYkD9FjAlS_dRnq8Fu1RCkxEiWxA&s')",
          backgroundAttachment: "fixed",
          backgroundPosition: "top",
          backgroundSize: "cover",
          height: "680px"

        }} className='container-fluid'>
          <div className="row">
            
            <div className="col-md-4">

            </div>
            <div className="col-md-4 d-flex flex-column justify-content-center align-items-center ms-5 py-5 mt-5 text-center"
              style={{ minHeight: "300px" }}>

              {/* Background Box for Text */}
              <div
                className="text-center p-4 rounded shadow"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  width: "200%"
                }}
              >
                <h1 className="text-light">Find Your Dream Job, Start Your Career Today!</h1>
                <br />
                <p className="text-light">
                  Discover thousands of job opportunities across tech, finance, healthcare,
                  design, and more. Apply with a single click and take your career to the next level.
                </p>
                <Link to={"/register"}> <button className="btn btn-primary mt-3">
                  Get Started
                </button></Link>
              </div>
            </div>
            
            <div className="col-md-4">

            </div>

            </div>

          
        </section>
      </div>
    </div>
  )
}

export default Home
