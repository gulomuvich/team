import "./bestJobs.css"
import inDepthLogo from "../../assets/img/InDepth Consulting Logo - Untitled Page.png"
import hihgerFitLogo from "../../assets/img/Higher Fit Logo - Untitled Page.png"
import sentinalLogo from "../../assets/img/Sentinal Consulting Logo.png"
import happyHomeLogo from "../../assets/img/Happy Home Logo.png"
import forSaleLogo from "../../assets/img/For Sale Logo.png"
import sunsetRealyLogo from "../../assets/img/Sunset Realty Logo.png"
import atlantsHealthLogo from "../../assets/img/Atlantis Health Logo.png"
import delMarLogo from "../../assets/img/Del Mar Strategy Logo.png"
import completeHealthLogo from "../../assets/img/Complete Health Logo - Untitled Page.png"
import NatinonalLogo from "../../assets/img/National Health Logo.png"
import ultimateGymLogo from "../../assets/img/Ultimate Gym Logo.png"
import UnitedStrategyLog from "../../assets/img/United Strategy Logo.png"

export default function BestJobs() {
  return (
    <section className='bestJobs container'>
        <h1>best jobs for you</h1>
        <h2>Our students work here</h2>

        <ul className="bJobsList">
            <li>
                <img src={inDepthLogo} alt="" />
            </li>
            <li>
                <img src={hihgerFitLogo} alt="" />
            </li>
            <li>
                <img src={sentinalLogo} alt="" />
            </li>
            <li>
                <img src={happyHomeLogo} alt="" />
            </li>
            <li>
                <img src={forSaleLogo} alt="" />
            </li>
            <li>
                <img src={sunsetRealyLogo} alt="" />
            </li>
            <li>
                <img src={atlantsHealthLogo} alt="" />
            </li>
            <li>
                <img src={delMarLogo} alt="" />
            </li>
            <li>
                <img src={completeHealthLogo} alt="" />
            </li>
            <li>
                <img src={NatinonalLogo} alt="" />
            </li>
            <li>
                <img src={ultimateGymLogo} alt="" />
            </li>
            <li>
                <img src={UnitedStrategyLog} alt="" />
            </li>
        </ul>
    </section>
  )
}
