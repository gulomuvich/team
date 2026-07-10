import structureImg from "../../assets/img/ic-structure.png"
import icChat from "../../assets/img/ic-chat.png"
import "./standAlways.css"
import icTarget from "../../assets/img/ic-target.png"
import icCalendar from "../../assets/img/ic-calendar.png"

export default function StandAlways() {
  return (
    <section className='standAlways container'>
        <h1>We always stand for</h1>
        <h2>Our core values</h2>

        <ul className="standAlwaysList">
            <li>
                <img src={structureImg} alt="error" />
                <h3>Structured Approach</h3>
                <p>Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris. </p>
            </li>
            <li>
                <img src={icChat} alt="error" />
                <h3>Professional Feedbacks</h3>
                <p>Culpa nostrud commodo ea consequat reprehenderit aliquip. </p>
            </li>
            <li>
                <img src={icTarget} alt="error" />
                <h3>Efficiency</h3>
                <p>Viverra scelerisque consequat net. Adipisicing esse consequat. </p>
            </li>
            <li>
                <img src={icCalendar} alt="error" />
                <h3>Flexible Shedule</h3>
                <p>Aute eiusmod dolore dolore deserunt veniam ad deserunt.</p>
            </li>
            
        </ul>
    </section>
  )
}
