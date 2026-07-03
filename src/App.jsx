import { Routes, Route } from "react-router-dom";
import "./App.css";

import Homepage from "./page/Homepage/Home";
import Courses from "./page/Courses/Courses";
import EventsTwo from "./page/Event/EventTwo";
import Blog from "./page/Blog/Blog";
import Contacts from "./page/Contacts/Contacts";
import Login from "./page/Login/Login";

import Header from "./components/Header/Header";
import Footer from "./components/footer/Foter";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/event" element={<EventsTwo />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;