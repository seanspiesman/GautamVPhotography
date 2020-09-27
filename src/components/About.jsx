import React from "react";

const About = () => {
  return (
    <>
      <div className="about-background"></div>
      <div className="container-fluid">
        <h1 className="text-center">Who I am?</h1>
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
          <div className="col-md-6">
            {" "}
            I am a gorgeous mammal. Many refer to me as the manimal because of
            my impeclable taste in things. <br />
            There are many interesting things about me. I am one of the most
            interesting men in the world, and when I drink beer, it is Dos Equis
            <br />
            My favorite color is you, and I can't wait draw with it.
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
