import { Link } from "react-router-dom";
import "./EventGrid.css";

function EventGrid({ events }) {
  return (
    <section className="event-grid">
      <h6>OUR EVENTS</h6>
      <br />
      <h1>Lectures, workshops & master-classes</h1>

      <ul className="event-card">
        {events.map((item) => (
          <li className="event-card_list">
            <h3>{item.date}</h3>
            <span>{item.time}</span>
            <p>{item.title}</p>
            <span>{item.category}</span>
            <br />
            <Link to={"/event"} className="link">View more</Link>
          </li>
        ))}
      </ul>
      <div className="event-subscribe">
        <h6>Don’t miss anything</h6>
        <h1>Subscribe to the Createx School announcements</h1>
        <form className="event-form">
          <input type="text" placeholder="Your working email"/>
          <button>Subscribe</button>
        </form>
      </div>
    </section>
  );
}
export default EventGrid;
