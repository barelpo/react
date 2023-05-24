import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";


const SearchBox = ({searchFunc}) => {

  const [searchVal, setSearchVal] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    searchFunc(searchVal)
    setSearchVal('')
  }

  return(
    <Form onSubmit={(event) => handleSubmit(event)}>
      <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Label>Search an animal</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Search here..." 
          value={searchVal}
          onChange={(event) => setSearchVal(event.target.value)}
          />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default SearchBox;