import "./aboutTestimonials.css";
import eleniorImg from "../../assets/img/eleanior pena.png";
import braces from "../../assets/img/braces.png";

export default function AboutTestimonials() {
  return (
    <section className="testimonials-section container">
      <div className="testimonials-header">
        <span className="subtitle">TESTIMONIALS</span>
        <h2 className="section-title">What our students say</h2>
      </div>

      <div className="testimonial-card-wrapper testimonialWrapper">
        <div className="testimonial-card">

          <p className="testimonial-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet
            lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed
            purus facilisi. Vitae id turpis tempus ornare turpis quis non.
            Congue tortor in euismod vulputate etiam eros. Pulvinar neque
            pharetra arcu diam maecenas diam integer in.
          </p>

          <div className="author-info">
            <img src={eleniorImg} alt="Eleanor Pena" className="author-img" />

            <div className="author-details">
              <h4 className="author-name">Eleanor Pena</h4>
              <p className="author-role">Position, Course</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
