import { CiGrid2H } from "react-icons/ci";
import "./ourevents.css";
import { IoGridOutline, IoSearch } from "react-icons/io5";
import { TbLayoutList } from "react-icons/tb";

export default function OurEvents() {
  return (
    <section className="ourEvents container">
      <h1>Our Events</h1>
      <h2>Lectures, workshops & master-classes</h2>
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
          <input placeholder="Search event..." className="searchInput" type="text" />
          <IoSearch className="iSearchIcon" />
        </label>
        <label style={{ fontSize: "20px" }}>
          <CiGrid2H style={{ color: "#FF3F3A" }} />
          <IoGridOutline />
        </label>
      </div>

      <ul className="OurEventList">
        <li>
          <li className="ourEventChild">
            <h3>05</h3>
            <div>
              <h4>August</h4>
              <p>11:00 – 14:00</p>
            </div>
          </li>
          <div>
            <h5>
              Formation of the organizational structure of the company in the
              face of uncertainty.
            </h5>
            <p>Onine master-class</p>
          </div>
          <button>View more</button>
        </li>
        <li>
          <li className="ourEventChild">
            <h3>24</h3>
            <div>
              <h4>July</h4>
              <p>11:00 – 12:30</p>
            </div>
          </li>
          <div>
            <h5>
              Building a customer service department. Best Practices.
            </h5>
            <p>Onine lecture</p>
          </div>
          <button>View more</button>
        </li>
        <li>
          <li className="ourEventChild">
            <h3>16</h3>
            <div>
              <h4>July</h4>
              <p>11:00 – 13:00</p>
            </div>
          </li>
          <div>
            <h5>
              How to apply methods of speculative design in practice. Worldbuilding prototyping.
            </h5>
            <p>Onine workshop</p>
          </div>
          <button>View more</button>
        </li>

        <li>
          <li className="ourEventChild">
            <h3>10</h3>
            <div>
              <h4>July</h4>
              <p>9:00 – 14:00</p>
            </div>
          </li>
          <div>
            <h5>
              Find and evaluate: search and assessment tools for candidates.
            </h5>
            <p>Onine workshop</p>
          </div>
          <button>View more</button>
        </li>
        <li>
          <li className="ourEventChild">
            <h3>27</h3>
            <div>
              <h4>June</h4>
              <p>15:00 – 19:00</p>
            </div>
          </li>
          <div>
            <h5>
              Connection to Microsoft Excel and Google Sheets, Data Visualization in Power BI.
            </h5>
            <p>Onine master-class</p>
          </div>
          <button>View more</button>
        </li>
        <li>
          <li className="ourEventChild">
            <h3>15</h3>
            <div>
              <h4>June</h4>
              <p>10:00 – 12:00</p>
            </div>
          </li>
          <div>
            <h5>
              Marketing or growth hacking: main differences and what business needs.
            </h5>
            <p>Onine lecture</p>
          </div>
          <button>View more</button>
        </li>

        <li>
          <li className="ourEventChild">
            <h3>02</h3>
            <div>
              <h4>June</h4>
              <p>11:00 – 13:00</p>
            </div>
          </li>
          <div>
            <h5>
              How to brief a client and present your design to approve it from the first show.
            </h5>
            <p>Onine lecture</p>
          </div>
          <button>View more</button>
        </li>
        <li>
          <li className="ourEventChild">
            <h3>29</h3>
            <div>
              <h4>May</h4>
              <p>11:00 – 12:00</p>
            </div>
          </li>
          <div>
            <h5>
              Who is a project manager and do I want to be PM?
            </h5>
            <p>Onine lecture</p>
          </div>
          <button>View more</button>
        </li>
        <li>
          <li className="ourEventChild">
            <h3>18</h3>
            <div>
              <h4>May</h4>
              <p>10:00 – 12:00</p>
            </div>
          </li>
          <div>
            <h5>
              The company's business page as an additional tool to support the announcement of vacancies.
            </h5>
            <p>Onine lecture</p>
          </div>
          <button>View more</button>
        </li>
      </ul>
    </section>
  );
}
