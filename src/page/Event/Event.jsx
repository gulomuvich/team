import "./Event.css";

import { Link } from "react-router-dom";

import SpeakerImg from "../../assets/img/speaker-image.png";
import SpeakweLogo1 from "../../assets/img/speaker-logo1.png";
import SpeakweLogo2 from "../../assets/img/speaker-logo2.png";
import SpeakweLogo3 from "../../assets/img/speaker-logo3.png";
import NewsLetterImg from "../../assets/img/newsletter.png";
import IllusionImg from "../../assets/img/illusion.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Event() {
  return (
    <section className="events">
      <div className="event-title">
        <h6>Online lecture</h6>
        <br />
        <h1>
          Formation of the organizational structure of the company in the face
          of uncertainty
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
          <p>
            Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar
            aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius
            mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur
            faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo
            nunc orci vitae accumsan id.
          </p>
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
      <div className="event-registration-wrapper">
        <div className="event-registration-content">
          <form className="event-registration-form">
            <span className="event-registration-subtitle">
              DON'T MISS THE EVENT
            </span>

            <h2 className="event-registration-title">Leave a request</h2>

            <div className="event-registration-field">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" placeholder="Your full name" />
            </div>

            <div className="event-registration-field">
              <label htmlFor="emailAddress">Email</label>
              <input
                type="email"
                id="emailAddress"
                placeholder="Your working email"
              />
            </div>

            <div className="event-registration-field">
              <label htmlFor="phoneNumber">Phone</label>
              <input
                type="tel"
                id="phoneNumber"
                placeholder="Your phone number"
              />
            </div>

            <button className="event-registration-btn">Join the event</button>

            <p className="event-registration-note">
              * You will receive a link to the online lecture in an email after
              registration.
            </p>
          </form>

          <div className="event-registration-illustration">
            <img src={IllusionImg} alt="Leave Request" />
          </div>
        </div>
      </div>
      <div className="event-related">
        <div className="event-related_container">
          <h6 className="event-related_subtitle">CHECK OTHER ONLINE EVENTS</h6>

          <div className="event-related_header">
            <h1>You may be interested in</h1>

            <div className="event-related_arrows">
              <button>&larr;</button>
              <button>&rarr;</button>
            </div>
          </div>
        </div>
        <ul className="event-cards">
          <li className="event-card_list">
            <h3>05 Aug </h3>
            <span>11:00 – 14:00</span>
            <p>
              Formation of the organizational structure of the company in the
              face of uncertainty.
            </p>
            <span>Online master-class</span>
            <br />
            <Link to={"/event"} className="link">
              View more
            </Link>
          </li>
          <li className="event-card_list">
            <h3>24 Jul</h3>
            <span>11:00 – 12:30</span>
            <p>Building a customer service department. Best Practices.</p>
            <span>Online lecture</span>
            <br />
            <Link to={"/event"} className="link">
              View more
            </Link>
          </li>
          <li className="event-card_list">
            <h3>10 Jul</h3>
            <span>9:00 – 14:00</span>
            <p>
              Find and evaluate: search and assessment tools for candidates.
            </p>
            <span>Online workshop</span>
            <br />
            <Link to={"/event"} className="link">
              View more
            </Link>
          </li>
        </ul>
        <div className="explore-all_events">
          <h3>Do you want more?</h3>
          <Link to={"/events"} className="explore-link">Explore all events</Link>
        </div>
      </div>
    </section>
  );
}
export default Event;
