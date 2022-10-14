import "./About.css";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="cont-inner-div">
          <center className="animate__animated animate__fadeInUp animate__slow">
            About Us
          </center>
        </div>
      </div>
      <div className="about-second-container">
        <div className="about-innerdiv">
          <img
            src={img1}
            className="img1 animate__animated animate__fadeInLeft animate__slow"
            alt="noimg"
          />
          <p className="about-info-div animate__animated animate__fadeInLeft animate__slow">
            <h5 className="about-div-title">BEGINNINGS</h5>
            Credibly innovate granular internal or organic sources whereas high
            standards in web-readiness. Energistically scale future-proof core
            competencies vis-a-vis impactful experiences. Dramatically
            synthesize integrated schemas. with optimal networks.
          </p>
        </div>
        <hr />
        <div className="about-innerdiv">
          <p className="about-info-div1 animate__animated animate__fadeInRight animate__slower">
            <h5 className="about-div-title">CAREER</h5>
            Credibly innovate granular internal or organic sources whereas high
            standards in web-readiness. Energistically scale future-proof core
            competencies vis-a-vis impactful experiences. Dramatically
            synthesize integrated schemas. with optimal networks.
          </p>
          <img
            src={img2}
            className="img2 animate__animated animate__fadeInRight animate__slower"
            alt="noimg"
          />
        </div>
        <hr />
        <div className="about-innerdiv">
          <img
            src={img3}
            className="img1 animate__animated animate__fadeInLeft animate__slower"
            alt="noimg"
          />
          <p className="about-info-div animate__animated animate__fadeInLeft animate__slower">
            <h5 className="about-div-title">PRODUCTS</h5>
            Credibly innovate granular internal or organic sources whereas high
            standards in web-readiness. Energistically scale future-proof core
            competencies vis-a-vis impactful experiences. Dramatically
            synthesize integrated schemas. with optimal networks.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
