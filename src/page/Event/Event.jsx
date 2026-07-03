import "./Event.css";

import { Link } from "react-router-dom";

import SpeakerImg from "../../assets/img/speaker-image.png";
import SpeakweLogo1 from "../../assets/img/speaker-logo1.png";
import SpeakweLogo2 from "../../assets/img/speaker-logo2.png";
import SpeakweLogo3 from "../../assets/img/speaker-logo3.png";
import NewsLetterImg from "../../assets/img/newsletter.png"
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Event() {
  return (
    <section className="events">
      <div className="event-title">
        <h6>Online lecture</h6>
        <br />
        <h1>
          Formation of the organizational structure of the company in the face
          of uncertainty
        </h1>
      </div>
      <div className="event-sidebar">
        <div className="event-sidebar_text">
          <h2>We will talk about:</h2>

          <ul className="topics">
            <li>
              <span>— Theme 1.</span>
              Aliquet lectus urna viverra in odio.
            </li>

            <p>
              Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar
              aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius
              mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur
              faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo
              nunc orci vitae accumsan id.
            </p>

            <li>
              <span>＋ Theme 2.</span>
              Orci commodo, viverra orci mollis ut euismod.
            </li>

            <li>
              <span>＋ Theme 3.</span>
              Sagittis vitae facilisi rutrum amet mauris quisque vel.
            </li>

            <li>
              <span>＋ Theme 4.</span>
              In id dolor quis nunc, urna hendrerit pharetra.
            </li>
          </ul>
        </div>

        <div className="event-sidebar_card">
          <h6>TIME</h6>
          <h4>August 5, 11:00 – 14:00</h4>
          <p>Metus turpis sit lorem lacus, in elit tellus lacus.</p>

          <h6>PRICE</h6>
          <h3>Free</h3>
          <p>
            Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris
            quam ac elit tristique dis.
          </p>

          <Link to={"https://facebook.com"} className="facebook-link">
            EVENT ON FACEBOOK
          </Link>

          <button>Join the event</button>
        </div>
      </div>
      <div className="event-speaker">
        <div className="event-speaker_img">
          <img src={SpeakerImg} alt="" />
        </div>
        <div className="event-speaker_about">
          <h6>SPEAKER</h6>
          <br />
          <h1>Kathryn Murphy</h1>
          <br />
          <span>Analyst and Marketing specialist in IT company</span>
          <br />
          <p>
            Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus
            curabitur venenatis, vulputate venenatis fermentum ante. Nisl, amet
            id semper semper quis commodo, consequat. Massa rhoncus sit morbi
            odio. Sit maecenas nibh consectetur vel diam. Sem vulputate molestie
            laoreet at massa sed pharetra. Ac commodo platea id habitasse proin.
            Nullam sit nec ipsum posuere non. Nam vel aliquam tristique
            sollicitudin interdum quam.
          </p>
          <br />
          <div className="event-speaker_logos">
            <img src={SpeakweLogo1} alt="" />
            <img src={SpeakweLogo2} alt="" />
            <img src={SpeakweLogo3} alt="" />
          </div>
          <br />
          <div className="event-speaker_websites">
            <Link to={"https://facebook.com"} className="event-speaker_link">
              <FaFacebook className="event-speaker_website" />
            </Link>
            <Link to={"https://instagram.com"} className="event-speaker_link">
              <FaInstagram className="event-speaker_website" />
            </Link>
            <Link to={"https://twitter.com"} className="event-speaker_link">
              <FaTwitter className="event-speaker_website" />
            </Link>
            <Link to={"https://linkedin.com"} className="event-speaker_link">
              <FaLinkedin className="event-speaker_website" />
            </Link>
          </div>
        </div>
      </div>
      <div className="event-subscribe_newsletter">
        <div className="newsletter-left">
          <img src={NewsLetterImg} alt="newsletter" />
        </div>

        <div className="newsletter-right">
          <h2>
            Don’t want to miss the best events?
            <br />
            Subscribe to our newsletter!
          </h2>

          <div className="newsletter-form">
            <input type="email" placeholder="Your working email" />
            <button>Subscribe</button>
          </div>

          <label className="newsletter-check">
            <input type="checkbox" />
            <span>
              I agree to receive communications from Createx Online School
            </span>
          </label>
        </div>
      </div>
    </section>
  );
}
export default Event;
