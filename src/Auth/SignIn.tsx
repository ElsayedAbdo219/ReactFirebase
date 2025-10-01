import React from 'react'
import { Card , Form , Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SignIn = () => {
  return (
    <> 
    <Card className='bg-dark text-white w-900'>
      <Card.Body>
       <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </Card.Body>
    </Card>
    <br />
    <div className="">
     <h3> Already have No an account? Sign Up <Link to="/sign-up">here</Link>.</h3>
     <h3> forgot Password? <Link to="/forgot-password">Click Here</Link>.</h3>
    </div>

    </>
  )
}

export default SignIn