import "./aboutHero.css";
import illistrution from "../../assets/img/illustration (4).png";
import watchVideo from "../../assets/img/watchVideo.png";
import AboutImg from "../../assets/img/About.png";

export default function AboutHero() {
  return (
    <section className="heroAbout container">
      <ul className="heroAboutList">
        <li className="herAbout__item">
          <h1>About us</h1>
          <h2>Createx Online School</h2>
          <h3>
            Createx Online School is a leader in online studying. We have lots
            of courses and programs from the main market experts.
          </h3>
          <h4>
            We provide relevant approaches to online learning, internships and
            employment in the largest companies in the country. Our educational
            programs help you get a new specialty from scratch. During your
            studies, we will help you find a job. Check the courses and online
            events that we organise.
          </h4>
          <div className="heroAboutAction">
            <button>Explore events</button>
            <button>Browse courses</button>
          </div>
        </li>
        <li>
          <img width={"1025px"} src={illistrution} alt="error" />
        </li>
      </ul>
      <h5 className="watchVideoText">
        <img src={watchVideo} alt="error" /> Watch Video
      </h5>
      <ul className="heroAboutTwo">
        <li>
          <img src={AboutImg} alt="error" />
        </li>
        <li>
          <h6>
            1200<span> students graduated</span>
          </h6>
          <h6>
            84<span> completed courses</span>
          </h6>
          <h6>
            16<span> qualified tutors</span>
          </h6>
          <h6>
            5 <span>years of experience</span>
          </h6>
        </li>
      </ul>
    </section>
  );
}
