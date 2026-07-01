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

function Home() {
  return (
    <section className="section">
   <div className="container">
       <div className="Enjoy-left">
        <div>
          <img src={Play} alt="" />
          <h1 className="home-text">Enjoy studying with Createx Online Courses</h1>
          <div>
            <button className="home-btn">About us</button>
             
            <button className="explore-btn">
              Explore courses
            </button>
          </div>
        </div>
        <div><img src={Logo} alt="" /></div>
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
                  <button></button>
                </div></div>      
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
            <h3 className="the-title">Prduct Management Fundamentals</h3>
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
            <h3 className="the-title">Brand Management & PR Communications</h3>
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
    </section>
  )
}

export default Home;
