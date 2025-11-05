import React,{useEffect,useState} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useDispatch,useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { editApplication,fetchApplications } from '../redux/slice/applySlice'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'

function EditJob() {
    const {id}=useParams()
const dispatch=useDispatch()
    const { loading, applications, error } = useSelector(state => state.applys)
    console.log(loading, applications, error);
    


    const [EditData, setEditData] = useState({
        username: '',
        email: '',
        contact: '',
        address: '',
        experience: '',
        backlog: '',
        linkedin: '',
        resume: ''
    });
    console.log(EditData);
    const navigate = useNavigate()
     

    useEffect(() => {
        if (!applications.length) {
            dispatch(fetchApplications());
        } else {
            const app = applications.find((a) => a.id === id || a._id === id);
            if (app) setEditData(app);
        }
    }, [applications, id, dispatch]);
    
    const handleSubmit = () => {
       
        dispatch(editApplication({ id, updatedData: EditData }));
        swal("Success!", "Updated Successful!", "success")
        navigate('/applications')
    };
    
  return (
    <div>
          <Header />
          <h2 className="text-center mt-3">All Applications</h2>

          <div className='d-flex align-items-center justify-content-center'>
              <div className='mt-3 p-4  border rounded shadow' style={{ width: '550px' }}>
                  <input type="text"
                      value={EditData.username}
                      onChange={(e) => setEditData({ ...EditData, username: e.target.value })}
                      placeholder='Userename' className='form-control '
                  />
                  <br />
                  <input type="text"
                      value={EditData.email}
                      onChange={(e) => setEditData({ ...EditData, email: e.target.value })}
                      placeholder='Email' className='form-control '
                  />
                  <br />
                  <input type="text" placeholder='Contact Number'
                      value={EditData.contact}
                      onChange={(e) => setEditData({ ...EditData, contact: e.target.value })}
                      className='form-control '
                  />
                  <br />
                  <input type="text" placeholder='resume Link'
                      value={EditData.resume}
                      onChange={(e) => setEditData({ ...EditData, resume: e.target.value })}
                      className='form-control '
                  />
                  <br />
                  <input type="text" placeholder='Address'
                      value={EditData.address}
                      onChange={(e) => setEditData({ ...EditData, address: e.target.value })}
                      className='form-control '
                  />
                  <br />
                  <input type="text" placeholder='Linkedlin Link' className='form-control '
                      value={EditData.linkedin}
                      onChange={(e) => setEditData({ ...EditData, linkedin: e.target.value })}
                  />
                  <br />
                  <select
                      value={EditData.experience}
                      onChange={(e) => setEditData({ ...EditData, experience: e.target.value })}
                      className="form-control ">
                      <option value="">Experience</option>
                      <option value="fresher">fresher</option>
                      <option value="1 year">1 year</option>
                      <option value="2 More year">more than 2 years</option>
                     

                  </select>
                  <br />
                  <select
                      value={EditData.backlog}
                      onChange={(e) => setEditData({ ...EditData, backlog: e.target.value })}
                      className="form-control ">
                      <option value="">Any BackLogs</option>
                      <option value="yes">yes</option>
                      <option value="no">No</option>
                  </select>
                  <br />
                  <button
                      onClick={() => handleSubmit()}
                      className='btn btn-success text-center w-50 p-2'>  Updated</button>


              </div>
          </div>


          <Footer />
    </div>
  )
}

export default EditJob
