import img from "./img.png";
import vid from "./video.mp4";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="register-container">
        <div className="col-25 animate__animated animate__fadeInLeft animate__slow">
          <img src={img} alt="noimg" className="img-left" />
        </div>
        <div className="col-75 animate__animated animate__fadeInRight animate__slow">
          <div className="right-div">
            <div>
              <div className="label">Email</div>
              <div>
                <input
                  type="email"
                  placeholder="your email"
                  className="res-inp"
                />
              </div>
            </div>
            <div>
              <div className="label">Password</div>
              <div>
                <input
                  type="password"
                  placeholder="your password"
                  className="res-inp"
                />
              </div>
            </div>
            <div>
              <input type="button" value="Submit" className="res-btn" />
            </div>
            <div className="video-div">
              {/* <video
                src={vid}
                width="300px"
                height="210px"
                autoplay
                controls
              ></video> */}
              <video width="320" height="240" autoplay>
                <source src={vid} type="video/mp4" />
                {/* <source src="movie.ogg" type="video/ogg"> */}
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
