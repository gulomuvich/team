import illistration5 from "../../assets/img/illustration (5).png";
import struckingImg from "../../assets/img/line.png";
import "./studyProcces.css";

export default function StudyProcces() {
  return (
    <section className="studyProcces container">
      <h1>Studying process</h1>
      <h2>That’s how we do it</h2>
      <ul className="StudyProccesList">
        <div>
          <img src={struckingImg} alt="" />
        </div>
        <li>
          <li>
            <h3>STEP 1</h3>
            <h4>Watching online video lectures</h4>
            <p>
              Aliquam turpis viverra quam sit interdum blandit posuere
              pellentesque. Nisl, imperdiet gravida massa neque.
            </p>
          </li>
          <li>
            <h3>STEP 2</h3>
            <h4>Passing test</h4>
            <p>
              Facilisis pellentesque quis accumsan ultricies. Eu egestas eget
              feugiat lacus, amet, sollicitudin egestas laoreet etiam.{" "}
            </p>
          </li>
          <li>
            <h3>STEP 3</h3>
            <h4>Curator’s feedback</h4>
            <p>
              Eget amet, enim pharetra leo egestas nisi, odio imperdiet
              facilisis. Aliquet orci varius volutpat egestas facilisi lobortis.
            </p>
          </li>
          <li>
            <h3>STEP 4</h3>
            <h4>Corrections if needed</h4>
            <p>
              Non tempor pulvinar tincidunt aliquam. Placerat ultricies
              malesuada dui auctor.
            </p>
          </li>
        </li>
        <li>
            <img src={illistration5} alt="error" />
        </li>
      </ul>
    </section>
  );
}
