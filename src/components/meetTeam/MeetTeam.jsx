import "./meetTeam.css";
import DianneMeet from "../../assets/img/team-dianne2.png";
import jromeBell from "../../assets/img/JromeBell.png";
import kristinWatson from "../../assets/img/kristin Watson.png";
import marvinMcKinney from "../../assets/img/Marvin McKinney.png";
import alexsanderLi from "../../assets/img/Leslie Alexander Li.png";
import Murphy from "../../assets/img/Kathryn Murphy.png";
import brokliyn from "../../assets/img/Brooklyn Simmons.png";
import codyFisher from "../../assets/img/Cody Fisher.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function MeetTeam() {
  const meetPersons = [
    {
      rasmi: DianneMeet,
      ismi: "Dianne Russell",
      izohi: "Founder and CEO",
    },
    {
      rasmi: jromeBell,
      ismi: "Jerome Bell",
      izohi: "Founder and Program Director",
    },
    {
      rasmi: kristinWatson,
      ismi: "Kristin Watson",
      izohi: "Marketer, Curator of Marketing Course",
    },
    {
      rasmi: marvinMcKinney,
      ismi: "Marvin McKinney",
      izohi: "PM, Curator of Management Course",
    },
    {
      rasmi: alexsanderLi,
      ismi: "Leslie Alexander Li",
      izohi: "Curator of HR & Recruting Course",
    },
    {
      rasmi: Murphy,
      ismi: "Kathryn Murphy",
      izohi: "Analyst and Marketing specialist",
    },
    {
      rasmi: brokliyn,
      ismi: "Brooklyn Simmons",
      izohi: "Curator of Development Course",
    },
    {
      rasmi: codyFisher,
      ismi: "Cody Fisher",
      izohi: "UX Designer, Curator of Design Course",
    },
  ];

  return (
    <section className="meetTeamSec container">
      <h1>Best tutors are all here</h1>
      <h2>Meet our team</h2>
      <ul className="meetPersonsList">
        {meetPersons.map((inf) => (
          <li>
            <div className="meetPerImg">
              <img src={inf.rasmi} alt={inf.ismi} />
              <div className="boxGradient"></div>
              <div className="meetActions">
                <button>
                  <FaFacebookF />
                </button>
                <button>
                  <FaInstagram />
                </button>
                <button>
                  <FaLinkedinIn />
                </button>
              </div>
            </div>
            <h2>{inf.ismi}</h2>
            <p>{inf.izohi}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
