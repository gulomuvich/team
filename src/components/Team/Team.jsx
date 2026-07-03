import "./Team.css";
import { FaQuoteLeft } from "react-icons/fa";

import dianneImg from "../../assets/img/marketing.png";
import jeromeImg from "../../assets/img/img.png";
import kristinImg from "../../assets/img/Brand.png";
import marvinImg from "../../assets/img/praduk.png";
import eleanorImg from "../../assets/img/eleanior pena.png";

const teamMembers = [
  {
    id: 1,
    name: "Dianne Russell",
    role: "Founder and CEO",
    image: dianneImg,
  },
  {
    id: 2,
    name: "Jerome Bell",
    role: "Founder and Program Director",
    image: jeromeImg,
  },
  {
    id: 3,
    name: "Kristin Watson",
    role: "Marketer, Curator of Marketing Course",
    image: kristinImg,
  },
  {
    id: 4,
    name: "Marvin McKinney",
    role: "PM, Curator of Management Course",
    image: marvinImg,
  },
];

export default function Team() {
  return (
    <div className="team-testimonials-section">
      {/* Team */}
      <section className="team-section container">
        <div className="section-header">
          <div className="title-group">
            <span className="subtitle">BEST TUTORS ARE ALL HERE</span>
            <h2 className="section-title">Meet our team</h2>
          </div>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div className="team-card" key={member.id}>
              <div className="image-wrapper">
                <img
                  src={member.image}
                  alt={member.name}
                  className="member-img"
                />
              </div>

              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section container">
        <div className="testimonials-header">
          <span className="subtitle">TESTIMONIALS</span>
          <h2 className="section-title">What our students say</h2>
        </div>

        <div className="testimonial-card-wrapper">
          <div className="testimonial-card">
            <FaQuoteLeft className="quote-icon" />

            <p className="testimonial-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo,
              amet lectus quam viverra mus lobortis fermentum amet, eu.
              Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare
              turpis quis non. Congue tortor in euismod vulputate etiam eros.
              Pulvinar neque pharetra arcu diam maecenas diam integer in.
            </p>

            <div className="author-info">
              <img
                src={eleanorImg}
                alt="Eleanor Pena"
                className="author-img"
              />

              <div className="author-details">
                <h4 className="author-name">Eleanor Pena</h4>
                <p className="author-role">Position, Course</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}