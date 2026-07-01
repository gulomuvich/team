import "./courseCurator.css";
import CircleImg from "../../assets/img/CIRCLES.png";
import curatorImg from "../../assets/img/curator-image.png";
import { CiStar } from "react-icons/ci";
import { MdOutlinePlayCircle } from "react-icons/md";
import { FaBehance, FaFacebookF, FaLinkedinIn, FaRegUser, FaTwitter } from "react-icons/fa";

export default function CourseCurator() {
  return (
    <section style={{marginBottom: "122px"}} className="CourseCuratorSec container">
      <img className="CircleImg" src={CircleImg} alt="error" />
      <ul className="CuratorList">
        <li>
          <img src={curatorImg} alt="error" />
        </li>
        <li>
          <div className="curatorNames">
            <h1>Course curator</h1>
            <h2>Cody Fisher</h2>
            <h3>Senior UX designer in IT Product Company</h3>
          </div>
          <div className="curatorInf">
            <p><CiStar style={{color: "#FF3F3A"}} /> 4.9 rate</p>
            <p><MdOutlinePlayCircle style={{color: "#FF3F3A"}} /> courses</p>
            <p><FaRegUser style={{color: "#FF3F3A"}} /> 350 students</p>
          </div>

          <p>
            Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus curabitur venenatis, vulputate venenatis fermentum ante. Nisl, amet id semper semper quis commodo, consequat. Massa rhoncus sit morbi odio. Sit maecenas nibh consectetur vel diam. Sem vulputate molestie laoreet at massa sed pharetra. Ac commodo platea id habitasse proin. Nullam sit nec ipsum posuere non. Nam vel aliquam tristique sollicitudin interdum quam.
          </p>

          <div className="serviceActives">
            <FaFacebookF className="serviceIcon" />
            <FaBehance className="serviceIcon" />
            <FaTwitter className="serviceIcon" />
            <FaLinkedinIn className="serviceIcon" />
          </div>
        </li>
      </ul>
    </section>
  );
}
