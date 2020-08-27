import React from 'react';
import fakeData from '../../FakeData/data';
import './ClassRoom.css';
const ClassRoom = () => {
  console.log(fakeData);
  const data = fakeData;
  // const [courses, setCourses] = useState(data);
    return (
    <div className="class-container">
    <div className="course-container">
    <ul>
       {
         data.map(d => 
          <li>{d.Title}</li>
          )
       }
     </ul>
    </div>
    <div className="cart-container">
      <h3>this is cart</h3>
    </div>
    </div>
  );
};

export default ClassRoom;