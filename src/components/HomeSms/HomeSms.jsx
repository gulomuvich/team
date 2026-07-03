import "./HomeSms.css"
import Cretife from "../../assets/img/image (3).png"
import logos from "../../assets/icon/logos (1).png"
function HomeSms() {
  return (
    <div>
      <div className="container">
        <div className="Homesms-left">
          <div>
            <h6 className="createx-text">Createx Certificate</h6>
        <h2 className="your-title">Your expertise will be confirmed</h2>
        <p className="we-text">We are accredited by international professional organizations and institutes:</p>
        <img src={logos} alt="" />
          </div>
          <div><img src={Cretife} alt="" className="Creati-imgs" /></div>
        
        </div>
      </div>
    </div>
  )
}

export default HomeSms;