import "./LatestPosts.css";

import img1 from "../../assets/img/login.png";
import img2 from "../../assets/img/gul.png";
import img3 from "../../assets/img/chiroq.png";

const posts = [
  {
    id: 1,
    tag: "Podcast",
    category: "Marketing",
    date: "September 4, 2020",
    time: "36 min",
    title: "What is traffic arbitrage and does it really make money?",
    desc: "Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...",
    btn: "Listen",
    img: img1,
  },
  {
    id: 2,
    tag: "Video",
    category: "Management",
    date: "August 25, 2020",
    time: "45 min",
    title: "What to do and who to talk to if you want to get feedback on the product",
    desc: "Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus...",
    btn: "Watch",
    img: img2,
  },
  {
    id: 3,
    tag: "Article",
    category: "Design",
    date: "August 8, 2020",
    time: "Read",
    title: "Should you choose a creative profession if you are attracted to creativity?",
    desc: "Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices.",
    btn: "Read",
    img: img3,
  },
];

function LatestPosts() {
  return (
    <section className="blog">
      <div className="blog-top">
        <div>
          <p className="blog-subtitle">OUR BLOG</p>
          <h2>Latest posts</h2>
        </div>

        <button className="blog-btn">Go to blog</button>
      </div>

      <div className="blog-cards">
        {posts.map((item) => (
          <div className="blog-card" key={item.id}>
            <div className="blog-image">
              <img src={item.img} alt="" />
              <span>{item.tag}</span>
            </div>

            <div className="blog-info">
              <div className="blog-meta">
                <span>{item.category}</span>
                <span>|</span>
                <span>{item.date}</span>
                <span>|</span>
                <span>{item.time}</span>
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

              <a href="#">
                {item.btn}
                <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LatestPosts;