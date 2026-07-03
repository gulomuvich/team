import "./Home.css";
import Play from "../../assets/icon/play-video.png";
import Logo from "../../assets/img/illustration.png";
import Image from "../../assets/img/image.png";
import Check from "../../assets/icon/check.png";
import img from "../../assets/img/img.png";
import He from "../../assets/img/he.png";
import Prod from "../../assets/img/praduk.png";
import Brand from "../../assets/img/Brand.png";
import Marketing from "../../assets/img/marketing.png";
import Gropus from "../../assets/img/Grspis.png";
import Only from "../../assets/img/illustration (1).png";
import Team from "../../components/Team/Team";
function Home() {
  const events = [
    {
      day: "05",
      month: "August",
      time: "11:00 – 14:00",
      title:
        "Formation of the organizational structure of the company in the face of uncertainty.",
      type: "Online master-class",
    },
    {
      day: "24",
      month: "July",
      time: "11:00 – 12:30",
      title: "Building a customer service department. Best Practices.",
      type: "Online lecture",
      active: true,
    },
    {
      day: "16",
      month: "July",
      time: "10:00 – 13:00",
      title:
        "How to apply methods of speculative design in practice. Worldbuilding prototyping.",
      type: "Online workshop",
    },
  ];
  return (
    <section className="section-left">
      <div className="container">
        <div className="Enjoy-left">
          <div>
            <img src={Play} alt="" />
            <h1 className="home-text">
              Enjoy studying with Createx Online Courses
            </h1>
            <div>
              <button className="home-btn">About us</button>

              <button className="explore-btn">Explore courses</button>
            </div>
          </div>
          <div>
            <img src={Logo} alt="" />
          </div>
        </div>
      </div>
      <div className="container">
        <ul className="list-item">
          <li className="stund-tile">
            <h2 className="title">1200</h2>
            <p className="stund-text">Students graduated</p>
          </li>
          <div className="div-not"></div>
          <li className="stund-tile">
            <h2 className="title">84</h2>
            <p className="stund-text">Completed courses</p>
          </li>
          <div className="div-not"></div>
          <li className="stund-tile">
            <h2 className="title">16</h2>
            <p className="stund-text">Qualified tutors</p>
          </li>
          <div className="div-not"></div>
          <li className="stund-tile">
            <h2 className="title">5</h2>
            <p className="stund-text">Years of experience</p>
          </li>
        </ul>
      </div>

      <div className="container">
        <ul className="who-left">
          <li>
            <img src={Image} alt="" />
          </li>
          <li>
            <h6 className="whp-text">Who we are</h6>
            <h2 className="who-title">Why Createx?</h2>
            <div className="check-dev">
              <img src={Check} alt="" />
              <p className="check-text">
                A fermentum in morbi pretium aliquam adipiscing donec tempus.
              </p>
            </div>
            <div className="check-dev">
              <img src={Check} alt="" />
              <p className="check-text">
                Vulputate placerat amet pulvinar lorem nisl.
              </p>
            </div>
            <div className="check-dev">
              <img src={Check} alt="" />
              <p className="check-text">
                Consequat feugiat habitant gravida quisque elit bibendum id
                adipiscing sed.
              </p>
            </div>
            <div className="check-dev">
              <img src={Check} alt="" />
              <p className="check-text">
                Etiam duis lobortis in fames ultrices commodo nibh.
              </p>
            </div>
            <div className="check-dev">
              <img src={Check} alt="" />
              <p className="check-text">
                Tincidunt sagittis neque sem ac eget.
              </p>
            </div>
            <div className="check-dev">
              <img src={Check} alt="" />
              <p className="check-text">
                Ultricies amet justo et eget quisque purus vulputate dapibus
                tortor.
              </p>
            </div>
            <div className="check-dev">
              <button className="explore-btn">More about us</button>
            </div>
          </li>
        </ul>
      </div>
      <div className="container">
        <div>
          <h6 className="ready-text">Ready to learn?</h6>
          <h2>Featured Courses</h2>
        </div>
      </div>
      <div className="container">
        <ul className="market-left">
          <li className="market-list">
            <img src={img} alt="" />
            <div>
              {" "}
              <mark className="mark-text">Marketing</mark>
              <h3 className="the-title">
                The Ultimate Google Ads Training Course
              </h3>
              <div className="by-text">
                <span>$100</span> | <p>by Jerome Bell</p>
              </div>
            </div>
          </li>

          <li className="market-list">
            <img src={Prod} alt="" />
            <div>
              {" "}
              <mark className="mark-text">Management</mark>
              <h3 className="the-title">Product Management Fundamentals</h3>
              <div className="by-text">
                <span>$480</span> | <p>by Marvin McKinney</p>
              </div>
            </div>
          </li>
          <li className="market-list">
            <img src={He} alt="" />
            <div>
              {" "}
              <mark className="mark-text">HR & Recruting</mark>
              <h3 className="the-title">HR Management and Analytics</h3>
              <div className="by-text">
                <span>$200</span> | <p>by Leslie Alexander Li</p>
              </div>
            </div>
          </li>
          <li className="market-list">
            <img src={Brand} alt="" />
            <div>
              {" "}
              <mark className="mark-text">Marketing</mark>
              <h3 className="the-title">
                Brand Management & PR Communications
              </h3>
              <div className="by-text">
                <span>$530</span> | <p>by Kristin Watson</p>
              </div>
            </div>
          </li>
          <li className="market-list">
            <img src={Marketing} alt="" />
            <div>
              {" "}
              <mark className="mark-text">Management</mark>
              <h3 className="the-title">Business Development Management</h3>
              <div className="by-text">
                <span>$400</span> | <p>by Dianne Russell</p>
              </div>
            </div>
          </li>
          <li className="market-list">
            <img src={Gropus} alt="" />
            <div>
              {" "}
              <mark className="mark-text">Design</mark>
              <h3 className="the-title">Graphic Design Basic</h3>
              <div className="by-text">
                <span>$500</span> | <p>by Guy Hawkins</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="our-div">
        <h6>Our benefits</h6>
        <h2>That’s how we do it</h2>
      </div>
      <div className="container">
        <ul className="comanety-left">
          <li className="comenty-list">Experienced Tutors </li>
          <li className="comenty-list">Feedback & Support</li>
          <li className="comenty-list">24/7 Online Library</li>
          <li className="comenty-list">Community</li>
        </ul>
      </div>
      <div className="container">
        <div className="Only-left">
          <div>
            <h2>Only practicing tutors</h2>
            <p className="urna-text">
              Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames
              dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis
              mollis augue. Nunc, sodales tortor sit diam mi amet massa.
              Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id
              dignissim massa ut amet. Amet enim, nisi tempus vehicula.
            </p>
          </div>
          <div>
            <img src={Only} alt="" />
          </div>
        </div>
      </div>
      <div className="eventsm">
        <div className="events-container">
          <span className="events-subtitle">OUR EVENTS</span>

          <h2 className="events-title">Lectures & Workshops</h2>

          <div className="events-list">
            {events.map((item, index) => (
              <div className="event-card" key={index}>
                <div className="event-date">
                  <h2>{item.day}</h2>

                  <div>
                    <h4>{item.month}</h4>
                    <p>{item.time}</p>
                  </div>
                </div>

                <div className="event-info">
                  <h3>{item.title}</h3>
                  <span>{item.type}</span>
                </div>

                <button
                  className={item.active ? "event-btn active" : "event-btn"}
                >
                  View more
                </button>
              </div>
            ))}
          </div>

          <div className="events-bottom">
            <h3>Do you want more?</h3>

            <button className="events-all-btn">Explore all events</button>
          </div>
        </div>
      </div>
      <Team />
    </section>
  );
}

export default Home;
