import { FiMinus, FiPlus } from "react-icons/fi";
import "./courseprogram.css";
import illustrationImg from "../../assets/img/illustration (1).png";

export default function CourseProgram() {
  return (
    <section className="CourseProgram container">
      <ul className="CourseProgramList">
        <li>
          <h1>Course program</h1>
          <h2>What will you learn</h2>
          <b>
            <span style={{ color: "#FF3F3A" }}>
              <FiMinus />
              Lesson 1.
            </span>{" "}
            Aliquet lectus urna viverra in odio.
          </b>
          <p style={{marginBottom: "55px"}}>
            Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar
            aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius
            mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus
            porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci
            vitae accumsan id.
          </p>
          <b>
            <span style={{ color: "#FF3F3A" }}>
              <FiPlus />
              Lesson 2.
            </span>{" "}
            Sagittis vitae facilisi rutrum amet mauris quisque vel.
          </b>
          <br />
          <b>
            <span style={{ color: "#FF3F3A" }}>
              <FiPlus />
              Lesson 3.
            </span>{" "}
            Sagittis vitae facilisi rutrum amet mauris quisque vel.
          </b>
          <br />
          <b>
            <span style={{ color: "#FF3F3A" }}>
              <FiPlus />
              Lesson 4.
            </span>{" "}
            In id dolor quis nunc, urna hendrerit pharetra.
          </b>
          <br />
          <b>
            <span style={{ color: "#FF3F3A" }}>
              <FiPlus />
              Lesson 5.
            </span>{" "}
            Est, ut tempus id rutrum facilisi.
          </b>
          <br />
          <b>
            <span style={{ color: "#FF3F3A" }}>
              <FiPlus />
              Lesson 6.
            </span>{" "}
            Amet nec in pellentesque.
          </b>
          <br />
          <b>
            <span style={{ color: "#FF3F3A" }}>
              <FiPlus />
              Lesson 7.
            </span>{" "}
            Massa vel arcu mauris, id vel rhoncus mattis quis.
          </b>
          <br />
          <b>
            <span style={{ color: "#FF3F3A" }}>
              <FiPlus />
              Lesson 8.
            </span>{" "}
            Neque, cursus sapien nullam id.
          </b>
        </li>
        <li>
          <img src={illustrationImg} alt="error" />
        </li>
      </ul>
    </section>
  );
}
