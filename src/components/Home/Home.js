import img1 from "./img1.jpeg";
import img2 from "./img2.jpeg";
import img3 from "./img3.png";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";

import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home-img-container">
        <div>
          <img
            className="main-img animate__animated animate__fadeInLeft animate__slow"
            src={img1}
            alt="noimg"
          />
        </div>
        <div className="info-div">
          <img
            src={img2}
            alt="noimg"
            className="animate__animated animate__fadeInRight animate__slow"
          />
        </div>
      </div>
      <div className="home-container">
        <center>
          <p className="home-container-heading">
            WITH OUR THOUGHTS WE MAKE THE WORLD
          </p>
          <p className="home-container-data">
            To see the World in a Grain of Sand,
            <br />
            And a Heaven in a Wild Flower,
            <br />
            Hold Infinity in the palm of your hand,
            <br />
            And Eternity in an hour.
          </p>
          <button className="home-container-btn">Learn More</button>
        </center>
      </div>
      <div className="flex-box-container">
        <div className="flex-item">
          <div className="image-box">
            <img src={img3} alt="noimg" />
          </div>
          <div className="inner-div">
            <center>
              Be a Warrior,
              <br />
              not a Worrier..
            </center>
          </div>
        </div>
        <div className="flex-item ">
          <div className="image-box">
            <img src={img4} alt="noimg" width="540" height="548" />
          </div>
          <div className="inner-div">
            <center>
              Eventually,
              <br />
              Everything connects..
            </center>
          </div>
        </div>
        <div className="flex-item ">
          <div className="image-box">
            <img src={img5} alt="noimg" width="540" height="548" />
          </div>
          <div className="inner-div">
            <center>
              Everything that you are
              <br />
              is enough..
            </center>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
