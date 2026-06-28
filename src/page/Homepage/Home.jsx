import "./Home.css"
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Foter";
import Play from "../../assets/icon/play-video.png"
import Illust from "../../assets/img/illustration.png"
import Image from "../../assets/img/image.png"
import Check from "../../assets/icon/check.png"
import img from "../../assets/img/img.png"

function Home() {
  return (
    <div className="homepage-left">
     <Header/>
     <div className="home-list">
      <div>
        <img src={Play} alt="play vidyo" />
        <h1 className="home-text">Enjoy studying with Createx Online Courses</h1>
        <div><button className="home-btn">About us</button> <button className="explore-btn">Explore courses</button></div>
      </div>
      <div><img src={Illust} alt="" /></div>
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
          <p className="check-text">A fermentum in morbi pretium aliquam adipiscing donec tempus.</p>
        </div>
        <div className="check-dev">
          <img src={Check} alt="" />
          <p className="check-text">Vulputate placerat amet pulvinar lorem nisl.</p>
        </div>
        <div className="check-dev">
          <img src={Check} alt="" />
          <p className="check-text">Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</p>
        </div>
        <div className="check-dev">
          <img src={Check} alt="" />
          <p className="check-text">Etiam duis lobortis in fames ultrices commodo nibh.</p>
        </div>
        <div className="check-dev">
          <img src={Check} alt="" />
          <p className="check-text">Tincidunt sagittis neque sem ac eget.</p>
        </div>
        <div className="check-dev">
          <img src={Check} alt="" />
          <p className="check-text">Ultricies amet justo et eget quisque purus vulputate dapibus tortor.</p>
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
     
     <div className="Ready-title"><h2 className="Ready-title">Ready to learn?</h2> <button className="view-btn">View all courses</button></div>  
     </div>
   </div>
      <ul>
      <li className="market-list">
        <img src={img} alt="" />
     <div>   <mark>Marketing</mark>
     <h3>The Ultimate Google Ads Training Course</h3>
     <div><span>$100</span> <p>by Jerome Bell</p></div>
     </div>
      </li>
     </ul>
     <Footer/>
    </div>
    
  )
}

export default Home
