import React from 'react';
import {Card, Button} from 'react-bootstrap';
import './Course.css';
const Course = (props) => {
  let {Title, Price,Image} = props.course;
    console.log(Image);
  return (
      <Card style={{ width: '18rem' }}>
      
      <Card.Img variant="top" src={Image} />
      <Card.Body>
    <Card.Title><h1>{Title}</h1></Card.Title>
        <Card.Text>
       <p><h3>{Price}</h3></p>
        </Card.Text>
        <Button className="course" variant="primary" onClick={() => props.handleAddCourse(props.course)}>Enroll Now</Button>
      </Card.Body>
    </Card>
    );
};

export default Course;