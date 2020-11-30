import React, { Component } from "react";
import logo1 from "./../../img/milan1.png";
import logo2 from "./../../img/milan2.png";
import "./../../css/footer.css";
import playStore from "./../../img/google play 1.png";
import appStore from "./../../img/apple store 1.png";
import facebook from "./../../img/face 1.png";
import pinterest from "./../../img/pinterest 1.png";
import instagram from "./../../img/instagram 1.png";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="logoFooter">
                <img src={logo1} alt="logo1" className="logo1" />
                <img src={logo2} alt="logo2" className="logo2" />
                <h1>MilanTV</h1>
              </div>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
                minus veniam quas, libero animi, accusantium voluptatem illum
                adipisci a culpa harum ullam. Doloribus molestiae iure tempore
                deserunt excepturi aperiam ea.
              </p>
            </div>
            <div className="col-2">
              <h5>Tentang Kami</h5>
              <h5>Blog</h5>
              <h5>Layanan</h5>
              <h5>Karir</h5>
              <h5>Pusat Media</h5>
            </div>
            <div className="col-4">
              <h4>Download</h4>
              <div className="stores d-flex align-items-center">
                <img src={playStore} alt="playstore" className="googlePlay" />
                <img src={appStore} alt="Appstore" className="appstore" />
              </div>
              <h4>Social Media</h4>
              <div className="socmed d-flex">
                <img src={facebook} alt="facebook" className="fb" />
                <img src={pinterest} alt="pinterest" className="pin" />
                <img src={instagram} alt="insta" className="insta" />
                <hr />
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12 col-md-12 footer-child copyright d-flex justify-content-center">
              Copyright &#169; 2020 MilanTV. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
