import { Link } from "react-router-dom";
import "./EventGrid.css";
import { IoGridOutline, IoSearch } from "react-icons/io5";
import { CiGrid2H } from "react-icons/ci";

function EventGrid({ events }) {
  return (
    <section className="event-grid">
      <h6>OUR EVENTS</h6>
      <br />
      <h1>Lectures, workshops & master-classes</h1>
      <div className="eventActions">
        <label htmlFor="eventECategory">
          Event category
          <select id="eventECategory">
            <option>all themes</option>
          </select>
        </label>
        <label htmlFor="eventSortBy">
          Sort by
          <select id="eventSortBy">
            <option>newset</option>
          </select>
        </label>
        <label htmlFor="eventShow">
          Show
          <input id="eventShow" type="number" />
          events per page
        </label>
        <label style={{ position: "relative" }}>
          <input
            placeholder="Search event..."
            className="searchInput"
            type="text"
          />
          <IoSearch className="iSearchIcon" />
        </label>
        <label style={{ fontSize: "20px" }}>
          <CiGrid2H style={{ color: "#FF3F3A" }} />
          <IoGridOutline />
        </label>
      </div>

      <ul className="event-cards">
        {events.map((item) => (
          <li key={item.id} className="event-card_list">
            <h3>{item.date}</h3>
            <span>{item.time}</span>
            <p>{item.description}</p>
            <span>{item.category}</span>
            <br />
            <Link to={"/event"} className="link">
              View more
            </Link>
          </li>
        ))}
      </ul>
      <div className="event-subscribe">
        <h6>Don’t miss anything</h6>
        <h1>Subscribe to the Createx School announcements</h1>
        <form className="event-form">
          <input type="text" placeholder="Your working email" />
          <button>Subscribe</button>
        </form>
      </div>
    </section>
  );
}
export default EventGrid;
