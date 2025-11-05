import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux';
import { fetchJob } from './../redux/slice/jobSlice'
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';


function ViewJob() {
  const dispatch = useDispatch()
  const { loading, alljobs, error } = useSelector(state => state.jobs)
  console.log(loading, alljobs, error);

  useEffect(() => {
    dispatch(fetchJob())
  }, [])

  return (
    <div>
      <Header />

      {
        loading ?
          <div className='text-center my-5'>
            <Spinner animation="border" variant="success" />
          </div>
          :
          <div className="row m-4 ">

            {
              alljobs.length > 0 ?
                alljobs.map((job) =>
                (
                  <div className="col-lg-3 d-flex justify-content-center align-items-center   mt-3">
                    <Card className='border rounded shadow' style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={job?.image} width={300} />
                      <Card.Body className='text-center'>
                        <Card.Title>{job?.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          {job.company} • {job.location}
                        </Card.Subtitle>
                        <Card.Text>
                          <strong>Salary:</strong> {job.salary} <br />
                          <strong>Type:</strong> {job.jobType} <br />
                          <small>Posted on: {job.postedDate}</small>
                        </Card.Text>
                        <Link to={`/Jobdetails/${job.id}`}> <button className=" btn  fw-bold">View Details</button></Link>
                        <Link to='/apply'>  <button className=" btn btn-primary fw-bold">Apply now</button></Link>

                      </Card.Body>
                    </Card>
                  </div>
                ))


                :
                <div className='text-danger my-4'>
                  No products Found
                </div>

            }
          </div>
      }


      <Footer />
    </div>
  )
}

export default ViewJob
