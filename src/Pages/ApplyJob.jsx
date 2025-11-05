import React ,{useEffect, useState}from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { userapply } from '../redux/slice/applySlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'


function ApplyJob() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
 
  const { user } = useSelector((state) => state.authsation || {});
  
  const [formData, setFormData] = useState({
    username: "",
    email:  "",
    contact: "",
    resume: "",
    address: "",
    linkedin: "",
    experience: "",
    backlog: ""
  });
console.log(formData);

  // Submit form data
  const handleSubmit = () => {
    if (!formData.username || !formData.email || !formData.contact) {
      alert("Please fill all required fields.");
      return;
    }

    // Dispatch to Redux (send to backend)
    dispatch(userapply(formData));

    swal("Success!", "Applied Successfully!", "success")
    setFormData({
      username: user?.name || "",
      email: user?.email || "",
      contact: "",
      resume: "",
      address: "",
      linkedin: "",
      experience: "",
      backlog: ""
    });
    navigate('/applications');
  };

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        username: user.name || user.username || '', // ensure correct field
        email: user.email || ''
      }));
    }
  }, [user]); // ✅ Runs only when user changes
  

  return (
    <div>
      <Header />
      <h2 className='text-center'>Apply </h2>
      <div className='d-flex align-items-center justify-content-center'>
        <div className='mt-3 p-4  border rounded shadow' style={{ width: '550px' }}>
          <input type="text"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
           placeholder='Userename' className='form-control '
          />
          <br />
          <input type="text"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
             placeholder='Email' className='form-control '
          />
          <br />
          <input type="text" placeholder='Contact Number'
            value={formData.contact}
            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
             className='form-control '
          />
          <br />
          <input type="text" placeholder='resume Link'
            value={formData.resume}
            onChange={(e) => setFormData({ ...formData, resume: e.target.value })}
           className='form-control '
          />
          <br />
          <input type="text" placeholder='Address'
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
             className='form-control '
          />
          <br />
          <input type="text" placeholder='Linkedlin Link' className='form-control '
            value={formData.linkedin}
            onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
          />
          <br />
          <select

            className="form-control ">
            <option value="">Experience</option>
            <option value="fresher">fresher</option>
            <option value="1 year">1 year</option>
            <option value="2 More year">more than 2 years</option>
            value={formData.experience}
            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}

          </select>
          <br />
          <select
            value={formData.backlog}
            onChange={(e) => setFormData({ ...formData, backlog: e.target.value })}
            className="form-control ">
            <option value="">Any BackLogs</option>
            <option value="yes">yes</option>
            <option value="no">No</option>
          </select>
          <br />
          <button
            onClick={() => handleSubmit()}
           className='btn btn-success text-center w-50 p-2'>  Apply Now</button>
        

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ApplyJob
