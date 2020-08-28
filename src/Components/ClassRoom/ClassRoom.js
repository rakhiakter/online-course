import React from "react";
import fakeData from "../../FakeData/data";
import "./ClassRoom.css";
import Course from "../Course/Course";
import Cart from "../Cart/Cart";
import  {useState}  from "react";
const ClassRoom = () => {
  console.log(fakeData);
  const data = fakeData;
  const [cart, setCart] = useState([]);
  
  const handleAddCourse = (course) => {
    const newCart = [...cart, course];
    setCart(newCart);
  };

  return (
    <div className="class-container">
      <div className="course-container">
        <ul>
          { 
          data.map(dt =>
            <Course course={dt} handleAddCourse={handleAddCourse}></Course>
            )

          }
          </ul>
      </div>
      <div className="cart-container">
        
         <Cart cart={cart}></Cart> 
      </div>
    </div>
  );
};

export default ClassRoom;
