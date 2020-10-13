import React from "react";

const About = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row"></div>
        <h1 className="text-center about-page-title">Who am I?</h1>
        <div className="row">
          <div className="col-md-6">
            <img
              style={{
                width: "100%",
                padding: "20px",
              }}
              src="assets/GautamProfilePic.jpg"
              alt="Portrait of Gautam"
            />
          </div>
          <div className="col-md-6 about-page-text">
            <p>
              I am a gorgeous mammal. Many refer to me as the manimal because of
              my impeccable taste in things. <br />
              There are many interesting things about me. I am one of the most
              interesting men in the world, and when I drink beer, it is Dos.
              Equis
              <br />
              <br />
              All jokes aside I am a gamer at heart. It all started with my
              great friend Sean, and the Swadian Knights. We joined forces and
              pummled anybody in our path. Then his computer died and the epic
              saga ended.
            </p>
          </div>
      <div> cool</div>
        </div>
      </div>
    </>
  );
};

export default About;
