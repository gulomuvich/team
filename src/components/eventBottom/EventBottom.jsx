import "./eventbottom.css";
import illistration from "../../assets/img/illustration (3).png";

export default function EventBottom() {
  return (
    <section className="eventBottom">
      <h1>Don’t miss anything</h1>
      <h2>Subscribe to the Createx School announcements</h2>

      <div className="EmailSend">
        <input placeholder="Your working email" type="text" />
        <button>Subscribe</button>
      </div>
      <img className="forPositionImg" src={illistration} alt="" />
      <img className="forPositionImgTwo" src={illistration} alt="" />
    </section>
  );
}
