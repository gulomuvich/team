import "./courseTestimonial.css"
import { FaQuoteLeft } from 'react-icons/fa'
import eleanorPena from "../../assets/img/eleanior pena.png"

export default function CourseTestimonial() {
  return (
    <section className='CourTestimonialSec container'>
        <h1>TESTIMONIALS</h1>
        <h2>What our students say</h2>

        <div className='testimonialCont'>
            <FaQuoteLeft className="quoteIcon" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.</p>
            <ul className="userInfs">
                <li>
                    <img src={eleanorPena} alt="userPhoto" />
                </li>
                <li>
                    <h4>Eleanor Pena</h4>
                    <p>Position, Course</p>
                </li>
            </ul>
        </div>
    </section>
  )
}
