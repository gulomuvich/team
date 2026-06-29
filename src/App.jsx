import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./page/Homepage/Home";
import Courses from "./page/Courses/Courses";
import Events from "./page/Event/Event";
import Blog from "./page/Blog/Blog";
import Contacts from "./page/Contacts/Contacts";
import Login from "./page/Login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;