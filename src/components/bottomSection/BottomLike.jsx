import "./bottomlike.css";
import speaker2 from "../../assets/img/speaker-2.png";
import speaker5 from "../../assets/img/speaker-5.png";

export default function BottomLike() {
  return (
    <section className="bottomLike container">
      <h1>Check other courses</h1>
      <h2>You may also like</h2>

      <ul className="bottomLikeList">
        <li>
          <img src={speaker5} alt="error" />
          <div className="bottomTitle">
            <p>Marketing</p>

            <h3>The Ultimate Google Ads Training Course</h3>
            <span>
              100$ | <span style={{ color: "grey" }}>by Jerome Bell</span>
            </span>
          </div>
        </li>
        <li>
          <img src={speaker2} alt="error" />
          <div className="bottomTitle">
            <p>Management</p>

            <h3>Prduct Management Fundamentals</h3>
            <span>
              480$ | <span style={{ color: "grey" }}>by Marvin McKinney</span>
            </span>
          </div>
        </li>
      </ul>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%", marginBottom: "150px",
        marginTop: "50px", gap: "20px"}}>
        <h4>Do you want more courses?</h4>
        <button style={{background: "linear-gradient(#FF3F3A, #F75E05)", color: "white", fontSize: "15px", border: "none", padding: "10px 15px", borderRadius: "4px"}}>View all courses</button>
      </div>
    </section>
  );
}
