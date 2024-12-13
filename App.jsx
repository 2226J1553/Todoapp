import React from 'react';
import Todoapp from './Components/Todoapp/Todoapp';
import LifecycleDemo from './Components/LifecycleDemo';
// import { BrowserRouter , Routes, Route } from 'react-router-dom';
// import Header from './Components/Header';
// import Home from './Components/Home';
// import Gallery from './Components/Gallery';
// import Menus from './Components/Menus';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import Certificates from './Components/Certificates';

function App() {
  const course=["html","css"];
  return(
    <>
   {/* <ul>
   {course.map((data,index) => (
   <li key={index}>{data}</li>
   ))}
   </ul>
  */}
  <Todoapp/>
  <LifecycleDemo/>
</>
  );
   }
export default App;