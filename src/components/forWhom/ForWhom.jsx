import "./ForWhom.css"
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function ForWhom() {
  return (
    <section className="ForWhom container">
      <ul className="forWhomList">
        <li>
          <h1>For Whom?</h1>
          <h2>Who will benefit from the course:</h2>
        </li>
        <li>
            <p><IoMdCheckmarkCircleOutline style={{color: "#FF3F3A"}} /> Specialists with more than 1 year of active work experience</p>
            <p><IoMdCheckmarkCircleOutline style={{color: "#FF3F3A"}} /> Mobile app designers who want to improve their skills in solving business problems, creating and testing human-centered interfaces</p>
            <p><IoMdCheckmarkCircleOutline style={{color: "#FF3F3A"}} /> Professional designers who want to feel more confident in UX</p>
            <p><IoMdCheckmarkCircleOutline style={{color: "#FF3F3A"}} /> Specialists who would like to structure their knowledge, fill in the gaps</p>
        </li>
      </ul>
    </section>
  );
}
