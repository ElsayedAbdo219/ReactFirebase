import React from 'react'
import { Card , Form , Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SignUp = () => {
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
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password Confirmation</Form.Label>
        <Form.Control type="password" name='passwordConfirmation' placeholder="Password Confirmation"  />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </Card.Body>
    </Card>
    <br />
    <div className="">
     Already have an account? Log In <Link to="/sign-in">here</Link>.
    </div>

    </>
  )
}

export default SignUp