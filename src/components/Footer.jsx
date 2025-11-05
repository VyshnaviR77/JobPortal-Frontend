import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div>
      <div className='row bg-primary p-5  text-light'>
        <div className='col-lg-4  text-light '>
          <h3> <i className="fa-solid fa-briefcase "></i>Job Portal </h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia ipsam debitis recusandae nam hic illo quidem unde officiis pariatur veritatis vero non inventore perferendis blanditiis tenetur, architecto obcaecati consequatur quibusdam Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quam eius assumenda reprehenderit omnis voluptatum accusamus ie error nostrum ipsam cumque, tempora eveniet..</p>
          <p>Code is licenced by luminar</p>
          <p>currenctly v5.3.2</p>
        </div>


        <div className='col-lg-2  '>
          <h3>Links</h3>
          <div className='mt-4'>
            <Link to='/' className='text-light text-decoration-none'>Home</Link> <br />
            <Link to='/' className='text-light text-decoration-none'>Apply</Link> <br />
            <Link to='/' className='text-light text-decoration-none'>ViewJob</Link>
          </div>
        </div>

        <div className='col-lg-2 text-light'>
          <h3>Guides</h3>
          <div className='mt-4'>
            <Link to='/' className='text-light text-decoration-none'>React</Link> <br />
            <Link to='/' className='text-light text-decoration-none'>React Bootstrap</Link> <br />
            <Link to='/' className='text-light text-decoration-none'>React Router Dom</Link>
          </div>
        </div>


        <div className='col-lg-4 text-light'>
          <h3>Contact us</h3>
          <p>Email: support@jobportal.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Kochi, Kerala, India</p>
          <div className="d-flex align-items-center justify-items-between mt-4 ">
            <a className='p-2' href=""><i className="fa-brands fa-whatsapp text-warning fa-xl"></i></a>
            <a className='p-3' href=""><i className="fa-brands fa-instagram text-warning fa-xl"></i></a>
            <a className='p-3' href=""><i className="fa-brands fa-facebook text-warning fa-xl"></i></a>
            <a className='p-3' href=""><i className="fa-brands fa-twitter text-warning fa-xl"></i></a>
            <a className='p-3' href=""><i className="fa-brands fa-linkedin text-warning fa-xl"></i></a>
            <a className='p-3' href=""><i className="fa-solid fa-phone text-warning fa-xl"></i></a>
          </div>
        </div>
      </div >
      </div>
  )
}

export default Footer
