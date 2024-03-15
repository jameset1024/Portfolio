import * as React from "react";
import "./styles.sass";
import { ButtonExternal } from "@app/components/elements/button";

const AboutPage = () => {
  return (
    <section className={"about-section"} id={"about"}>
      <div className={"section-header-wrap"}>
        <div className={"section-header-text"}>About</div>
      </div>

      <div className={"about-info"}>
        <div className={"about-inner"}>
          <div>
            <h2>Charlotte Resident, Pittsburgh Made</h2>
            <p>
              Hello! My name is Erik and I'm a full-stack software engineer
              currently residing in Charlotte, NC. I've been doing this internet
              thing since 2013 and I've been passionate about it ever
              since. It's been a long and interesting journey to this point,
              learning and experiencing new and interesting things to help me
              grow as a developer.
            </p>
            <p>
              I love learning new things, trying different programming
              languages, techniques, libraries, etc... It's just a never ending
              journey of information gathering and I think that's what I love
              most about this industry.
            </p>
            <p>
              When I'm not working on projects either for work or myself, I
              unwind with some time at the gym, anime, video games, and
              basketball.
            </p>

            <ButtonExternal
              to={
                "https://erik-portfolio.s3.amazonaws.com/ErikThomasResume.pdf"
              }
              width={"250px"}
              target={"_black"}
            >
              Download My Resume
            </ButtonExternal>
          </div>
          <div>
            <div className={"headshot-wrapper"}>
              <img
                src={"https://erik-portfolio.s3.amazonaws.com/B11A9094.jpg"}
                alt={"Erik Thomas"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
