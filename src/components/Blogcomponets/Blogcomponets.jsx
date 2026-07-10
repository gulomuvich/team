import "./Blogcomponets.css";
import mouse from "../../assets/img/mouse.jpg"
import Matimatika from "../../assets/img/matimatika.png"
import Finish from "../../assets/img/Finish.png"
 import Gull from "../../assets/img/gul.png"
 import Choping from "../../assets/img/Choping.jpg"
import { Link } from "react-router-dom";
import SinglePage from "../../page/SinglePage/SinglePage";
const blogs = [
  {
    id: 1,
    type: "Article",
    image: mouse,
    category: "HR & Recruiting",
    date: "August 3, 2020",
    title: "HR statistics: job search, interviews, hiring and recruiting",
    text: "Massa, lectus nibh consectetur aliquet nunc risus aenean...",
    action: "Read",
    large: true,
  },
  {
    id: 2,
    type: "Video",
    image: Matimatika ,
    category: "Management",
    date: "August 2, 2020",
    title: "What to do and who to talk to if you want to get feedback",
    text: "Neque a, senectus consectetur odio in aliquet nec eu...",
    action: "Watch",
    large: true,
  },
  {
    id: 3,
    type: "Podcast",
    image: Finish,
    category: "Design",
    date: "July 26, 2020",
    title: "What are color profiles and how they work in graphic design",
    text: "Aliquam vulputate hendrerit quam sollicitudin urna...",
    action: "Listen",
  },
  {
    id: 4,
    type: "Video",
    image: Gull,
    category: "Management",
    date: "July 15, 2020",
    title: "Startup: how to build a team that will live longer",
    text: "Nisl, massa ut sit faucibus et diam...",
    action: "Watch",
  },
  {
    id: 5,
    type: "Article",
    image: Choping,
    category: "Marketing",
    date: "July 9, 2020",
    title: "How to get customers to love your business",
    text: "Malesuada in augue mi feugiat morbi...",
    action: "Read",
  },
];

function Blogcomponets() {
  return (
    <section className="blog">
      <div className="blog-grid">
        {blogs.map((item) => (
          <div
            key={item.id}
            className={`blog-card ${item.large ? "large" : ""}`}
          >
            <div className="blog-image">
              <img src={item.image} alt="" />
              <span>{item.type}</span>
            </div>

            <div className="blog-content">
              <div className="blog-meta">
                {item.category} | {item.date}
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

              <Link to={"/SinglePage"}>
                {item.action} <span>→</span>
              </Link>
            </div>
          </div>
          
        ))}
      </div>
    </section>
  );
}

export default Blogcomponets;