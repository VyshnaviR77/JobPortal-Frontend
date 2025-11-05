import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { fetchApplications } from '../redux/slice/applySlice'
import { useDispatch,useSelector } from 'react-redux'
import { useEffect } from 'react'
import { deleteApplication } from '../redux/slice/applySlice'
import { Link } from 'react-router-dom'

function Applications() {
    const dispatch=useDispatch()
    const { loading, applications, error } = useSelector(state => state.applys)
    useEffect(()=>{
        dispatch(fetchApplications())
    },[])
    
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this application?")) {
            dispatch(deleteApplication(id));
        }
    };
    

  return (
    <div>
        <Header/>
          <h2 className="text-center mt-3">All Applications</h2>


          <div className="container mt-4">
              <div className="row">
                  {applications.length === 0 ? (
                      <p className="text-center">No applications submitted yet.</p>
                  ) : (
                      applications.map((app, index) => (
                          <div className="col-md-6 col-lg-4 mb-4" key={index}>
                              <div className="card shadow p-3 h-100">
                                  <h5 className="card-title text-primary">{app.username}</h5>
                                  <p className="card-text"><strong>Email:</strong> {app.email}</p>
                                  <p className="card-text"><strong>Contact:</strong> {app.contact}</p>
                                  <p className="card-text"><strong>Address:</strong> {app.address}</p>
                                  <p className="card-text">
                                      <strong>Resume:</strong>{" "}
                                      <a href={app.resume} target="_blank" rel="noreferrer">
                                          View Resume
                                      </a>
                                  </p>
                                  <p className="card-text">
                                      <strong>LinkedIn:</strong>{" "}
                                      <a href={app.linkedin} target="_blank" rel="noreferrer">
                                          {app.linkedin}
                                      </a>
                                  </p>
                                  <p className="card-text"><strong>Experience:</strong> {app.experience}</p>
                                  <p className="card-text"><strong>Backlogs:</strong> {app.backlog}</p>
                                 <div className='d-flex align-items-center justify-items-center'>
                                      <Link to={`/edit/${app.id}`}>
                                          <button className='btn btn-primary '>
                                            <i class="fa-solid fa-pen-to-square"></i></button>
                                      </Link>
                                      <button
                                          onClick={() => handleDelete(app.id)}
                                          className='btn btn-danger w-25 ms-5 p-2'>
                                            <i class="fa-solid fa-trash"></i></button>
                                 </div>
                              </div>
                          </div>
                      ))
                  )}
              </div>
          </div>


      <Footer/>
    </div>
  )
}

export default Applications
