import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./App.css"

function App() {
  return (
    <div className='Form_class'>
      <h1 className='Title'>Contact Us</h1>
    <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control className='Input_class' type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control className='Input_class' type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <div className='Btn-div'>
        <Button className='Btn-submit' variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
    </div>
  );
}

export default App;
