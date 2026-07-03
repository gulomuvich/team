import "./courseTestimonial.css";
import { FaQuoteLeft } from "react-icons/fa";
import eleanorPena from "../../assets/img/eleanior pena.png";
import dotsimg from "../../assets/img/dots.png";
import illustration from "../../assets/img/illustration (2).png";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
export default function CourseTestimonial() {
  return (
    <section className="CourTestimonialSec container">
      <h1>TESTIMONIALS</h1>
      <h2>What our students say</h2>

      <div className="testimonialCont">
        <FaQuoteLeft className="quoteIcon" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet
          lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed
          purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue
          tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu
          diam maecenas diam integer in.
        </p>
        <ul className="userInfs">
          <li>
            <img src={eleanorPena} alt="userPhoto" />
          </li>
          <li>
            <h4>Eleanor Pena</h4>
            <p>Position, Course</p>
          </li>
          <button className="leftButton">
            <FaArrowLeftLong />
          </button>
          <button className="rightButton">
            <FaArrowRightLong />
          </button>
        </ul>
      </div>
      <img className="fourDot" src={dotsimg} alt="error" />

      <ul className="registerCourse">
        <li>
          <img src={illustration} alt="error" />
        </li>
        <li>
          <h1>Leave a request now and get 20% off!</h1>
          <p>Register for the course</p>

          <div className="RegisterList">
            <label htmlFor="FullName">
              Full Name <input id="FullName" placeholder="Your Full Name" type="text" />
            </label>
            <label htmlFor="Email">
              Email <input id="Email" placeholder="Your working Email" type="text" /> 
            </label>
            <label htmlFor="phoneNum">
              Phone <input id="phoneNum" placeholder="Your phone number" type="text" />
            </label>
            <button>Join the course</button>
          </div>
        </li>
      </ul>
    </section>
  );
}
