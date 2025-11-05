import './App.css'
import Footer from './components/Footer'
import ApplyJob from './Pages/ApplyJob'
import ViewJob from './Pages/ViewJob'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Register from './Pages/Register'
import { Route, Routes } from 'react-router-dom'
import JobDetails from './Pages/JobDetails'
import Applications from './Pages/Applications'
import EditJob from './Pages/EditJob'
function App() {

  return (
    <>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/View' element={<ViewJob />} />
        <Route path='/Jobdetails/:id' element={<JobDetails />} />
        <Route path='/apply' element={<ApplyJob />} />
        <Route path='/applications' element={<Applications />} />
        <Route path='/edit/:id' element={<EditJob />} />




      </Routes>
      <Footer />
    </>
  )
}

export default App
