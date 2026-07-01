import "./courseDiscount.css";

export default function CourseDiscount() {
  return (
    <section className="CourseDisCount container">
      <div className="DiscountTop">
        <h1>20% discount for early birds!</h1>
        <div className="TimerContainer">
          <div><h2>06</h2><span>Days</span></div>
          <div><h2>18</h2><span>Hours</span></div>
          <div><h2>24</h2><span>Mins</span></div>
          <div><h2>12</h2><span>Sec</span></div>
        </div>
      </div>

      <div className="CourseDisInputs">
        <label>
          Full name
          <input placeholder="Your Full Name" type="text" />
        </label>
        <label>
          Email
          <input placeholder="Your working email" type="email" />
        </label>
        <label>
          Phone
          <input placeholder="Your phone number" type="number" />
        </label>
        <button className="JointheButton">Join the course</button>
      </div>
    </section>
  );
}