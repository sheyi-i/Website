import React from "react";

function About() {
  return (
    <div>
      <div className="jumbotron aboutpg">
        <h1 style={{ marginBottom: "30px" }}>Who am I?</h1>

        <p className="abouttxt">
          My name is Lois Aleghe and I am a fourth year Software Engineering
          Student at Carleton University. My hobbies include writing, listening
          to music, hanging out with friends and sometimes cooking. <br />
          <br />I love coding in my free time and I do hope one day I would be
          able to create something that the world would benefit from, in other
          words, I hope to make a difference in the world through technology.
          Feel free to contact me and let us create something beautiful together
          :)
          <br/><br/>
         <p style={{fontWeight:"bold"}}>Email: Loisaleghe@cmail.carleton.ca</p>
        </p>

        <h1 style={{ marginBottom: "50px;", marginTop: "70px" }}>
          What can I do?
        </h1>

        <div className="btn-group-toggle" data-toggle="buttons" style={{ marginTop: "70px" }}>
          <label className="btn btn-secondary active mr-4 mb-3">
            <input type="checkbox" checked /> HTML
          </label>

          <label className="btn btn-secondary active mr-4 mb-3">
            <input type="checkbox" checked /> CSS
          </label>

          <label className="btn btn-secondary active mr-4 mb-3">
            <input type="checkbox" checked /> Node.js
          </label>

          <label className="btn btn-secondary active mr-4 mb-3">
            <input type="checkbox" checked /> MySQL
          </label>

          <label className="btn btn-secondary active mr-4 mb-3">
            <input type="checkbox" checked /> React
          </label>

          <label className="btn btn-secondary active mr-4 mb-3">
            <input type="checkbox" checked /> jQuery
          </label>

          <label class="btn btn-secondary active mr-4 mb-3">
            <input type="checkbox" checked /> Express
          </label>

          <label className="btn btn-secondary active mr-4 mb-3">
            <input type="checkbox" checked /> Heroku
          </label>

          <label className="btn btn-secondary active mr-4 mb-3">
            <input type="checkbox" checked /> Github
          </label>

          <label className="btn btn-secondary active mr-4 mb-3">
            <input type="checkbox" checked /> MongoDB
          </label>

          <label className="btn btn-secondary active mr-4 mb-3">
            <input type="checkbox" checked /> Sequelize
          </label>

          <label className="btn btn-secondary active mr-4 mb-3">
            <input type="checkbox" checked /> Bulma
          </label>


        </div>
      </div>
    </div>
  );
}

export default About;
