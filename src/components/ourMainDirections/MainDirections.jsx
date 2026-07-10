import { FaLongArrowAltRight } from "react-icons/fa";
import "./mainDirections.css"
import marketingDirections from "../../assets/img/marketingDirection.png";
import menegmentDirections from "../../assets/img/menegmentDirection.png";
import recrutingDirections from "../../assets/img/RecrutingDirections.png";
import designDirectons from "../../assets/img/designDirections.png"
import developmentDirections from "../../assets/img/development.png"


export default function MainDirections() {
  return (
    <section className="mainDirections container">
      <h1>our main directions</h1>
      <h2 className="mainDireccAbout">What do we teach</h2>

      <ul className="directionsList">
        <li>
          <div>
            <img src={marketingDirections} alt="error" />
          </div>
          <h3>Marketing</h3>
          <p>
            Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum
            eu viverra faucibus. Viverra scelerisque consequat.
          </p>
          <button>
            Check courses <FaLongArrowAltRight style={{color: "#FF3F3A", fontSize: "20px"}} />
          </button>
        </li>
        <li>
          <div>
            <img src={menegmentDirections} alt="error" />
          </div>
          <h3>Management</h3>
          <p>
            Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum
            eu viverra faucibus. Viverra scelerisque consequat.
          </p>
          <button>
            Check courses <FaLongArrowAltRight style={{color: "#FF3F3A", fontSize: "20px"}} />
          </button>
        </li>
        <li>
          <div>
            <img src={recrutingDirections} alt="error" />
          </div>
          <h3>HR & Recruting</h3>
          <p>
            Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum
            eu viverra faucibus. Viverra scelerisque consequat.
          </p>
          <button>
            Check courses <FaLongArrowAltRight style={{color: "#FF3F3A", fontSize: "20px"}} />
          </button>
        </li>
        <li>
          <div>
            <img src={designDirectons} alt="error" />
          </div>
          <h3>Design</h3>
          <p>
            Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum
            eu viverra faucibus. Viverra scelerisque consequat.
          </p>
          <button>
            Check courses <FaLongArrowAltRight style={{color: "#FF3F3A", fontSize: "20px"}} />
          </button>
        </li>
        <li>
          <div>
            <img src={developmentDirections} alt="error" />
          </div>
          <h3>Development</h3>
          <p>
            Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum
            eu viverra faucibus. Viverra scelerisque consequat.
          </p>
          <button>
            Check courses <FaLongArrowAltRight style={{color: "#FF3F3A", fontSize: "20px"}} />
          </button>
        </li>
        <li>
          <h5>New studying program coming soon...</h5>
        </li>
      </ul>
    </section>
  );
}
