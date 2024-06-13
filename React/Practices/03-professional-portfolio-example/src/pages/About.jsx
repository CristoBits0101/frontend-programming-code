import React from "react";
import "./About.css";
import personalImage from "../assets/images/personal.webp";
import CV from "../components/common/CV/CV";
import Networks from "../components/common/Networks/Networks";

const About = () => {
  return (
    <>
      <section className="section-about">
        <div className="personal-image">
          <img src={personalImage} alt="Cristo Suárez" />
        </div>
        <article className="content">
          <h2>Greetings and welcome to my portfolio!</h2>
          <h1>I am Cristo Suárez</h1>
          <p className="summary">
            💻 Junior Full Stack Web Developer
            <br />
            🎨 Beginner UX/UI Designer
            <br />
            🧑‍🏫 Certified Scrum Master
            <br />
            <br />
            ✉️ cristobits0101@gmail.com
          </p>
          <CV />
          <Networks />
        </article>
      </section>
    </>
  );
};

export default About;
