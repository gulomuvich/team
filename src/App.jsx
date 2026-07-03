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
import EventGrid from "./page/EventsGrid/EventGrid";

function App() {
  const events = [
    {
      id: 1,
      date: "05 Aug",
      time: "11:00 - 14:00",
      title:
        "Formation of the organizational structure of the company in the face of uncertainty.",
      category: "Online master-class",
    },
    {
      id: 2,
      date: "24 Jul",
      time: "11:00 - 12:30",
      title: "Building a customer service department. Best Practices.",
      category: "Online lecture",
    },
    {
      id: 3,
      date: "16 Jul",
      time: "10:00 - 13:00",
      title:
        "How to apply methods of speculative design in practice. Worldbuilding prototyping.",
      category: "Online workshop",
    },
    {
      id: 4,
      date: "10 Jul",
      time: "09:00 - 14:00",
      title: "Find and evaluate: search and assessment tools for candidates.",
      category: "Online workshop",
    },
    {
      id: 5,
      date: "27 Jun",
      time: "15:00 - 19:00",
      title:
        "Connection to Microsoft Excel and Google Sheets, Data Visualization in Power BI.",
      category: "Online master-class",
    },
    {
      id: 6,
      date: "15 Jun",
      time: "11:00 - 12:00",
      title:
        "Marketing or growth hacking: main differences and what business needs.",
      category: "Online lecture",
    },
    {
      id: 7,
      date: "02 Jul",
      time: "11:00 - 13:00",
      title:
        "How to brief a client and present your design to approve it from the first show.",
      category: "Online lecture",
    },
    {
      id: 8,
      date: "29 May",
      time: "11:00 - 12:00",
      title: "Who is a project manager and do I want to be PM?",
      category: "Online lecture",
    },
    {
      id: 9,
      date: "18 May",
      time: "10:00 - 12:00",
      title:
        "The company's business page as an additional tool to support the announcement of vacancies.",
      category: "Online lecture",
    },
  ];

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/eventsTwo" element={<EventsTwo/>}/>
        <Route path="/courses" element={<Courses />} />
<<<<<<< HEAD
=======
        <Route path="/events" element={<EventGrid events={events} />} />
        <Route path="/event" element={<Events />} />
>>>>>>> c79076214d09cfd36463d5053c1d06d4d11456e6
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
