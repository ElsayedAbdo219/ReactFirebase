import { useEffect, useState } from 'react'
import { BrowserRouter as Router , Routes , Route  } from 'react-router-dom' 
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import SignUp from './Auth/SignUp.tsx';
import SignIn from './Auth/SignIn.tsx';
import ForgotPassword from './Auth/ForgotPassword.tsx';
import UpdateProfile from './Auth/UpdateProfile.tsx';
import Dashboard from './Auth/Dashboard.tsx';
import './App.css';
import Chat from './Chat/chat.tsx';

function App() {
  return (
    <>
    <Container>
      <div className='d-flex justify-content-center align-items-center vh-100'>
        <Router>
          <Routes>
            <Route path='/sign-up' element={<SignUp/>}/>
            <Route path='/sign-in' element={<SignIn/>}/>
            <Route path='/forgot-password' element={<ForgotPassword/>}/>
            <Route path='/update-profile' element={<UpdateProfile/>}/>
            <Route path='/' element={<Dashboard/>}/>
             <Route path="/chat" element={<Chat />} />
          </Routes>
        </Router>
      </div>
    </Container>
    </>
  )
}

export default App
