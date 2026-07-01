import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import "./aboutcourse.css"

export default function AboutCourse() {
  return (
    <section style={{marginTop: "102px", marginBottom: "152px"}} className=" container">
      <ul className="AboutCourseList">
        <li className="AboutCourseTitle">
          <h1>About the course</h1>

          <p>
            Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo
            aenean congue in sagittis, felis maecenas amet varius at.
            Pellentesque euismod in faucibus at elementum. Tellus maecenas
            libero est tempus sit cras at malesuada diam. Consequat senectus
            dictumst non hac dignissim montes, pretium, egestas molestie. Sed
            magna aliquet ornare nibh vel lectus diam eget pretium. Lorem risus
            nunc tincidunt tortor, mi nulla pellentesque
          </p>
          <h1>You will learn:</h1>
          <div>
            <p>
            <IoMdCheckmarkCircleOutline style={{color: "#FF3F3A"}} /> A fermentum in morbi pretium aliquam
            adipiscing donec tempus.
          </p>
          <p>
            <IoMdCheckmarkCircleOutline style={{color: "#FF3F3A"}} /> Vulputate placerat amet pulvinar
            lorem nisl.
          </p>
          <p>
            <IoMdCheckmarkCircleOutline style={{color: "#FF3F3A"}} /> Consequat feugiat habitant gravida
            quisque elit bibendum id adipiscing sed.
          </p>
          <p>
            <IoMdCheckmarkCircleOutline style={{color: "#FF3F3A"}} /> Etiam duis lobortis in fames ultrices
            commodo nibh.
          </p>
          <p>
            <IoMdCheckmarkCircleOutline style={{color: "#FF3F3A"}} /> Fringilla in nec risus congue
            venenatis pretium posuere nec.
          </p>
          <p>
            <IoMdCheckmarkCircleOutline style={{color: "#FF3F3A"}} /> Cursus eu pretium, vulputate tempus
            quam massa sed at.
          </p>
          </div>
        </li>
        <li className="DatesAboutCour">
          <h3>
            Dates 
            <h2>Sept 7 – Nov 2 </h2>
             <p>Metus turpis sit lorem lacus, in elit tellus lacus.</p>
          </h3>
          <h3>
            Duration 
            <h2>2 months – 8 lessons</h2>
             <p>Rhoncus pellentesque auctor auctor orci vulputate faucibus quis ut.</p>
          </h3>
          <h3>
            Price 
            <h2>$120 per month</h2><p>Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.</p>
          </h3>
          <button>Join the course</button>
        </li>
      </ul>
    </section>
  );
}
