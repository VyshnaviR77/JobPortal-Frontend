import React, { useState } from 'react'
import { fetchJobById } from '../redux/slice/jobSlice'
import Card from 'react-bootstrap/Card';
import { useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import Header from '../components/Header';

function JobDetails() {
  const { id } = useParams()
  console.log(id);
  const { loading, alljobs,selectedJob,error } = useSelector(state => state.jobs)
  console.log(loading, alljobs, selectedJob, error);

  
  
  useEffect(()=>{
    dispatch(fetchJobById(id))
  },[])
  const dispatch=useDispatch()
  return (
    <div>
      <Header />
      <h1 className='text-center font-bold'> JobDetails</h1>
      {
        loading ?
          <div className='text-center my-5'>
            <Spinner animation="border" variant="success" />
          </div>
          :
     
          
          <div className="row m-4 d-flex align-items-center justify-content-center ">

           
                  <div className="col-lg-3 d-flex justify-content-center align-items-center   mt-3">
                    <Card className='border rounded shadow' style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={selectedJob?.image} width={300} />
                      <Card.Body className='text-center'>
                        <Card.Title>{selectedJob?.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                {selectedJob?.company}  {selectedJob?.location}
                        </Card.Subtitle>
                        <Card.Text>
                          <strong>Salary:</strong> {selectedJob?.salary} <br />
                          <strong>Type:</strong> {selectedJob?.jobType} <br />
                          <small>Posted on: {selectedJob?.postedDate}</small>
                        </Card.Text>
                        <Link to='/apply'>  <button className=" btn btn-primary fw-bold">Apply now</button></Link>

                      </Card.Body>
                    </Card>
                  </div>
              
          </div>
}
      


      <Footer />


      </div>
  )
}

export default JobDetails
