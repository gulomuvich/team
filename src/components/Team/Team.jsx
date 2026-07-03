import React, { useState } from "react";
import "./Team.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaQuoteLeft } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import dianneImg from "../../assets/img/team-dianne.png";
import jeromeImg from "../../assets/img/team-jerome.png";
import kristinImg from "../../assets/img/team-kristin.png";
import marvinImg from "../../assets/img/team-marvin.png";
import eleanorImg from "../../assets/img/eleanior pena.png";

const teamMembers = [
  {
    id: 1,
    name: "Dianne Russell",
    role: "Founder and CEO",
    image: dianneImg,
    socials: { facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    id: 2,
    name: "Jerome Bell",
    role: "Founder and Program Director",
    image: jeromeImg,
    socials: { facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    id: 3,
    name: "Kristin Watson",
    role: "Marketer, Curator of Marketing Course",
    image: kristinImg,
    socials: { facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    id: 4,
    name: "Marvin McKinney",
    role: "PM, Curator of Management Course",
    image: marvinImg,
    socials: { facebook: "#", instagram: "#", linkedin: "#" },
  },
];

const testimonials = [
  {
    id: 1,
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.",
    author: "Eleanor Pena",
    role: "Position, Course",
    image: eleanorImg,
  },
  {
    id: 2,
    quote: "Quisque at magna ac diam varius elementum. Vivamus tincidunt leo sit amet lorem efficitur, sed tristique diam lobortis. Morbi efficitur risus et nisl pretium, ac molestie est consequat. Curabitur sed lorem non magna imperdiet dignissim.",
    author: "Cody Fisher",
    role: "UX Designer, Design Course",
    image: jeromeImg,
  },
  {
    id: 3,
    quote: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    author: "Jane Cooper",
    role: "Product Manager, PM Course",
    image: kristinImg,
  }
];

export default function Team() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="team-testimonials-section">
      {/* --- MEET OUR TEAM --- */}
      <section className="team-section container">
        <div className="section-header">
          <div className="title-group">
            <span className="subtitle">BEST TUTORS ARE ALL HERE</span>
            <h2 className="section-title">Meet our team</h2>
          </div>
          <div className="slider-controls">
            <button className="ctrl-btn prev"><FiArrowLeft /></button>
            <button className="ctrl-btn next active"><FiArrowRight /></button>
          </div>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="image-wrapper">
                <img src={member.image} alt={member.name} className="member-img" />
                <div className="social-overlay">
                  <a href={member.socials.facebook} className="social-icon" target="_blank" rel="noreferrer">
                    <FaFacebookF />
                  </a>
                  <a href={member.socials.instagram} className="social-icon" target="_blank" rel="noreferrer">
                    <FaInstagram />
                  </a>
                  <a href={member.socials.linkedin} className="social-icon" target="_blank" rel="noreferrer">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- TESTIMONIALS --- */}
      <section className="testimonials-section container">
        <div className="testimonials-header">
          <span className="subtitle text-center">TESTIMONIALS</span>
          <h2 className="section-title text-center">What our students say</h2>
        </div>

        <div className="testimonial-slider-container">
          <button className="slide-arrow prev" onClick={prevTestimonial}>
            <FiArrowLeft />
          </button>

          <div className="testimonial-card-wrapper">
            <div className="testimonial-card">
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-text">
                {testimonials[currentTestimonial].quote}
              </p>
              <div className="author-info">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].author} 
                  className="author-img"
                />
                <div className="author-details">
                  <h4 className="author-name">{testimonials[currentTestimonial].author}</h4>
                  <p className="author-role">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </div>
          </div>

          <button className="slide-arrow next" onClick={nextTestimonial}>
            <FiArrowRight />
          </button>
        </div>

        <div className="pagination-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${currentTestimonial === index ? "active" : ""}`}
              onClick={() => setCurrentTestimonial(index)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
